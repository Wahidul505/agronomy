import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(`https://agronomy-warehouse.herokuapp.com/myItem?email=${email}`)
            .then(res => res.json())
            .then(data => setItems(data));
    }, [email])
    return (
        <div>
            {items.length}
        </div>
    );
};

export default MyItems;