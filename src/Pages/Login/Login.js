import React from 'react'
import LoginForm from '../../Components/Briks/Forms/LoginForm/LoginForm'
import AppLogo from "../../Components/Common/Logos/AppLogo/AppLogo";
import { LoginRow, LoginCol } from './Login.styled';

export default function Login() {
    return (
        <LoginRow justify="center" align='middle' >
            <LoginCol span={6} default >'
                <AppLogo width='60%' style={{ margin: "50px 0px 0px 90px"}} />
                <LoginForm />
            </LoginCol>
            <LoginCol span={9} >
            </LoginCol>    
        </LoginRow>
     )
}
