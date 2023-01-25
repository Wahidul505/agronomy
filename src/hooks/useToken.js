import { useState } from "react";

const useToken = (user) => {
    const [token, setToken] = useState('');
    const email = user?.user?.email;
    if (email) {
        fetch('https://agronomy.onrender.com/access', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: email })
        }).then(res => res.json()).then(data => {
            setToken(data.token);
            localStorage.setItem('token', data.token);
        });
    }
    return [token];
}
export default useToken;