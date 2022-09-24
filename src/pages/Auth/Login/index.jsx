import { useEffect, useState } from "react";
import * as C from "./style";
import Input from '../../../Components/Input';
import Button from '../../../Components/Button';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <C.Container>
            <C.Label>SISTEMA DE LOGIN</C.Label>

            <Input
                type="email"
                placeholder="Digite seu email"
            />

        </C.Container>
    );
}

export default Login;