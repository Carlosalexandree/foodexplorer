import { Container, Form } from "./styles";
 import { Input } from "../Input"
import {FiLogIn, FiMail, FiLock} from "react-icons/fi"
import logo from '../../assets/logo.svg'
import React from "react";
import { Button } from "../Button";
import { Logo } from "../Logo";





export default function SignUp(){

  return(
    <Container>
    
    <Logo logo={logo} />
      
      <Form onSubmit={(e) => e.preventDefault()}>
        <h5>Criar sua conta</h5>

        <input
        placeholder={'Exemplo: Carlos Alexandre'}
        type={'Seu nome'} 
        onChange={(e) => setName(e.target.value)}
        icon={FiLogIn}
        required
        />

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

        
        <Button title="Criar Conta" />
        
        <a href="*">
          Já tenho uma conta
        </a>
       
      </Form>
  </Container>
)
}