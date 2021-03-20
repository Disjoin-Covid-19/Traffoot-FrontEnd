import React, { useState } from 'react';
import style from './userpopup.module.css';
import { useAuth } from 'contexts/Auth/auth.hooks';
import Button from 'components/Button';

interface Props {}

const UserPopup: React.FC<Props> = (props) => {
    const { username, logout } = useAuth();
    const [triggered, setTriggered] = useState(false);

    return (
        <div className={style.container}>
            <Button onClick={() => setTriggered(t => !t)} styling="blank">
               {username}
            </Button>
            {triggered && (
                <div className={style.popup}>
                    <Button styling="blank" onClick={logout}>
                        Logout
                    </Button>
                </div>
            )}
        </div>
    )
}

export default UserPopup;