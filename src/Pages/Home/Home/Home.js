import React from 'react';
import Banner from '../Banner/Banner';
import ItemCount from '../ItemCount/ItemCount';
import Items from '../Items/Items';

const Home = () => {
    return (
        <div>
            <Banner />
            <Items/>
            <ItemCount/>
        </div>
    );
};

export default Home;


// Farming looks mighty easy when your plow is a pencil, and you're a thousand miles from the corn field.