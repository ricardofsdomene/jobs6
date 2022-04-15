import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../services/api";
import * as AppleAuthentication from "expo-apple-authentication";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import axios from "axios";

WebBrowser.maybeCompleteAuthSession();

const IOS_CLIENT_ID = "";
const ANDROID_CLIENT_ID = "";

type User = {
  _id?: string;
  name: string;
  email: string;
  avatar?: string;
  description?: string;
  apple?: {
    authorizationCode: String;
    email: String;
    fullName: {
      familyName: String;
      givenName: String;
      middleName: String;
      namePrefix: String;
      nameSuffix: String;
      nickname: String;
    };
    identityToken: String;
    realUserStatus: String;
    state: String;
    user: String;
  };
  google?: {
    email: String;
    family_name: String;
    given_name: String;
    id: String;
    locale: String;
    name: String;
    picture: String;
    verified_email: Boolean;
  };
};

type Error = {
  error: string;
  status: string;
};

type SignInCredentials = {
  email: string;
  password: string;
};

type SignUpCredentials = {
  name: string;
  email: string;
  password: string;
};

type AuthContextData = {
  user: User;
  error: Error;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signInApple: () => Promise<void>;
  signInGoogle: () => Promise<void>;
  signUp: (credentials: SignUpCredentials) => Promise<void>;
  signOut: () => Promise<void>;
  isLogging: boolean;
  token: string;
};

type AuthProviderProps = {
  children: ReactNode;
};

const USER = "@Auth:user";
const TOKEN = "@Auth:token";

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const [token, setToken] = useState<string>("");
  const [googleAccessToken, setGoogleAccessToken] = useState("");

  const [error, setError] = useState<Error | null>(null);

  const [isLogging, setIsLogging] = useState(false);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: ANDROID_CLIENT_ID,
    iosClientId: IOS_CLIENT_ID,
    expoClientId: "",
    webClientId: "",
  });

  useEffect(() => {
    async function loadStoragedData() {
      const storagedUser = await AsyncStorage.getItem(USER);
      const storagedToken = await AsyncStorage.getItem(TOKEN);

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        setToken(JSON.stringify(TOKEN));
      }
    }

    async function handleSignInGoogle() {
      if (response?.type === "success") {
        const { authentication } = await response;
        const userInfo = await axios.get(
          "https://www.googleapis.com/userinfo/v2/me",
          {
            headers: {
              Authorization: `Bearer ${authentication.accessToken}`,
            },
          }
        );
        if (userInfo) {
          const res = await axios.post(
            "http://192.168.1.60:5556/api/v0/auth/google",
            {
              name: userInfo.data.name,
              email: userInfo.data.email,
              avatar: userInfo.data.picture,
              google: {
                email: userInfo.data.email,
                family_name: userInfo.data.family_name,
                given_name: userInfo.data.given_name,
                id: userInfo.data.id,
                locale: userInfo.data.locale,
                name: userInfo.data.name,
                picture: userInfo.data.picture,
                verified_email: userInfo.data.verified_email,
              },
            }
          );
          setTimeout(() => {
            setUser({
              name: userInfo.data.name,
              email: userInfo.data.email,
              avatar: userInfo.data.picture,
              google: userInfo.data,
            });
            AsyncStorage.setItem(TOKEN, res.data.data.token);
            AsyncStorage.setItem(USER, JSON.stringify(res.data.data.user));
          }, 1250);
        }
      }
    }

    handleSignInGoogle();
    loadStoragedData();
  }, [response]);

  useEffect(() => {
    if (error !== null) {
      setTimeout(() => {
        setError(null);
      }, 1250);
    }
  }, [error]);

  async function signInApple() {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });

      const res = await axios.post(
        "http://192.168.1.60:5556/api/v0/auth/apple",
        {
          name:
            credential.fullName.givenName +
            " " +
            credential.fullName.familyName,
          email: credential.email,
          apple: {
            user: credential.user,
          },
        }
      );

      // const res = await axios.post(
      //   "http://192.168.1.60:5556/api/v0/auth/apple",
      //   {
      //     name:
      //       credential.fullName.givenName +
      //       " " +
      //       credential.fullName.familyName,
      //     email: credential.email,
      //     apple: {
      //       authorizationCode: credential.authorizationCode,
      //       email: credential.email,
      //       fullName: {
      //         familyName: credential.fullName.familyName,
      //         givenName: credential.fullName.givenName,
      //         middleName: credential.fullName.middleName,
      //         namePrefix: credential.fullName.namePrefix,
      //         nameSuffix: credential.fullName.nameSuffix,
      //         nickname: credential.fullName.nickname,
      //       },
      //       identityToken: credential.identityToken,
      //       realUserStatus: credential.realUserStatus,
      //       state: credential.state,
      //       user: credential.user,
      //     },
      //   }
      // );
      setTimeout(() => {
        setUser({
          name: res.data.data.user.name,
          email: res.data.data.user.email,
          apple: res.data.data.user.apple,
        });
        AsyncStorage.setItem(TOKEN, res.data.data.token);
        AsyncStorage.setItem(USER, JSON.stringify(res.data.data.user));
      }, 1250);
    } catch (e) {
      if (e.code === "ERR_CANCELED") {
        alert("Erro ao autenticar com apple, tente outro provedor.");
      } else {
        alert("Erro ao autenticar com apple, tente outro provedor.");
      }
    }
  }

  async function signInGoogle() {
    promptAsync({ useProxy: true, showInRecents: true });
  }

  async function signIn({ email, password }: SignInCredentials) {
    try {
      setIsLogging(true);

      await api
        .post("/auth/login", {
          email: email,
          password,
        })
        .then((response) => {
          if (response.data.error) {
            setError(response.data.error);
          } else {
            setTimeout(async () => {
              // await AsyncStorage.setItem(TOKEN, response.data.data.token);
              // await AsyncStorage.setItem(USER, response.data.data.user);
              await AsyncStorage.setItem(TOKEN, response.data.data.token);
              await AsyncStorage.setItem(
                USER,
                JSON.stringify(response.data.data.user)
              );
              setUser({
                _id: response.data.data.user.id,
                email: response.data.data.user.email,
                name: response.data.data.user.name,
              });
            }, 1250);
          }
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setIsLogging(false);
        });
    } catch (error) {
      console.log(error.message);
    }
  }

  async function signUp({ name, email, password }: SignUpCredentials) {
    try {
      setIsLogging(true);

      api
        .post("/auth/signup", {
          name,
          email,
          password,
        })
        .then((response) => {
          if (response.data.error) {
            setError(response.data.error);
          } else {
            console.log(response.data);
            setTimeout(() => {
              AsyncStorage.setItem(TOKEN, response.data.data.token);
              setUser({
                _id: response.data.data.user.id,
                name: response.data.data.user.name,
                email: response.data.data.user.email,
              });
            }, 1000);
          }
          // setUser(response.data.user)
          // AsyncStorage.setItem(TOKEN, response.data.token)
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => setIsLogging(false));
    } catch (error) {
      console.log(error.message);
    }
  }

  async function signOut() {
    AsyncStorage.removeItem(USER).then(() => {
      setUser(null);
    });
    AsyncStorage.removeItem(TOKEN).then(() => {
      setUser(null);
    });
    // AsyncStorage.clear().then(() => {});
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        error,
        signIn,
        signInApple,
        signInGoogle,
        signUp,
        signOut,
        isLogging,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
