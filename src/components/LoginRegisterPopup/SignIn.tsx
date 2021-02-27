import React, { useState, useCallback, FormEvent } from 'react';
import Input from 'components/Input';
import { useAuth } from 'contexts/Auth/auth.hooks';
import Button from 'components/Button';
import style from './loginregister.module.css';

interface Props { }

const SignIn: React.FC<Props> = (props) => {
    const [username, setUsername] = useState("abc1@gmail.com");
    const [password, setPassword] = useState("12345");

    const { login, loggingIn } = useAuth();

    const onSubmit = useCallback((e:FormEvent) => {
        e.preventDefault();
        login(username, password);
    }, [login, username, password])

    return (
        <form className={style.form} onSubmit={onSubmit}>
            <Input
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <Input
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <Button styling="primary">
                {loggingIn ? "Logging in..." : "Log In"}
            </Button>
        </form>
    )
}

export default SignIn;