import React, { useCallback, FormEvent, useState } from 'react';
import style from './loginregister.module.css';
import { useAuth } from 'contexts/Auth/auth.hooks';
import Input from 'components/Input';
import Button from 'components/Button';

interface Props { }

const SignUp: React.FC<Props> = (props) => {

    const { authLoading, register } = useAuth();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const onSubmit = useCallback((e: FormEvent) => {
        e.preventDefault();
        register(username, password);
    }, []);

    return (
        <form className={style.form} onSubmit={onSubmit}>
            <Input
                value={username}
                placeholder="email"
                onChange={e => setUsername(e.target.value)}
            />
            <Input
                value={password}
                placeholder="password"
                onChange={e => setPassword(e.target.value)}
            />
            <Input
                value={passwordConfirm}
                placeholder="confirm password"
                onChange={e => setPasswordConfirm(e.target.value)}
            />
            <Button styling="primary">
                {authLoading ? 'Registering...' : 'Register'}
            </Button>
        </form>
    )
}

export default SignUp;