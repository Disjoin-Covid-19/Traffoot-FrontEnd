import React, { useState } from 'react';
import style from './loginregister.module.css';
import Button from 'components/Button';
import SignIn from './SignIn';
import { useTriggered } from './useTriggered';

interface Props { }

const LoginRegisterPopup: React.FC<Props> = (props) => {
    const [tab, setTab] = useState<"signin" | "signup">();
    
    const {
        setTriggered,
        triggered
    } = useTriggered();

    return (
        <div className={style.container}>
            <Button styling="primary" onClick={() => setTriggered(t => !t)}>
                Login or Create Account
            </Button>
            {triggered && (
                <div className={style.popup}>
                    <div className={style.buttons}>
                        <Button onClick={() => setTab("signin")}>Sign In</Button>
                        <Button onClick={() => setTab("signup")}>Sign Up</Button>
                    </div>
                    <div className={style.body}>
                        {
                            tab === "signin"
                                ? <SignIn />
                                : <SignIn />
                        }
                    </div>
                </div>
            )}
        </div>
    )
}

export default LoginRegisterPopup;