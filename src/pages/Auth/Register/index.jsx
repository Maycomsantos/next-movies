import { useEffect, useState } from "react";
import * as C from "./style";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

import Input from '../../../Components/Input';
import Button from '../../../Components/Button';

function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordShown, setPasswordShown] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const {signup} = useAuth();

    const handleSignup = () => {
        if (!email | !email | !password) {
            setError("Preencha todos os campos");
            return;
        }
        
        alert("Usuário cadatrado com sucesso!");
        navigate("/");
    };

    const toogglePassword = () => {
        setPasswordShown(!passwordShown);
    }

    return (
        <C.Container>
            <C.Label>SISTEMA DE LOGIN</C.Label>
            <C.Content>
                <Input
                    type={email}
                    placeholder="Digite seu Email"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                />

                <Input
                    type={passwordShown ? "text" : "password"}
                    placeholder="Digite sua Senha"
                    value={password}
                    onChange={(e) => [setPassword(e.target.value), setError("")]}
                />
                {/* <button onClick={toogglePassword}>Show Password</button> */}


                {/* <C.labelError>{error}</C.labelError> */}
                <Button Text="Inscrever-se" onClick={handleSignup} />
            </C.Content>

        </C.Container>
    )
}

export default Register;