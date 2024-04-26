import { Container, Form } from "./styles";
 import { Input } from "../Input"
import {FiMail, FiLock} from "react-icons/fi"
import logo from '../../assets/logo.svg'
import React from "react";
import { Button } from "../Button";
import { Logo } from "../Logo";





export default function SignIn(){

  return(
    <Container>
    
    <Logo logo={logo} />
      
      <Form onSubmit={(e) => e.preventDefault()}>
        <h2>Faça login</h2>


        <input
        placeholder={"Exemplo: exemplo@exemplo.com.br"}
        type={"email"} 
        icon={FiMail}
        onChange={(e) => setEmail(e.target.value.toLowerCase())}
        required
        />
         <input
        placeholder={"No mínimo 6 caracteres"}
        type={"password"} 
        icon={FiLock}
        onChange={(e) => setPassword(e.target.value)}
        />

        
        <Button title="Entrar" />
        
        <a href="*">
          Criar uma conta
        </a>
       
      </Form>
  </Container>
)
}