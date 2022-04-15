import React from "react";
import { InputContainer } from "./styles";

export default function Input({ name, type, ...rest }) {
    return(
        <InputContainer 
          placeholder={name}
          type={type}
          {...rest}
        />
    )
}