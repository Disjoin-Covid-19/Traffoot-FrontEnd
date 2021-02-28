import { useState, useEffect } from "react";
import { useAuth } from "contexts/Auth/auth.hooks";

export const useTriggered = () => {
    const [triggered, setTriggered] = useState(false);

    const { username, token } = useAuth();

    useEffect(() => {
        // if both are now present, we're logged in so close popup
        if (username && token) { 
            setTriggered(false)
        }
    }, [username, token])

    return {
        triggered,
        setTriggered,
    }

}