import React from 'react';
import Banner from './Banner';
import ItemCount from './ItemCount';
import Items from './Items';
import SortedItems from './SortedItems';
import Survey from '../Survey/Survey';

const Home = () => {
    return (
        <div className='flex flex-col gap-32'>
            <Banner />
            <Items/>
            <ItemCount/>
            <SortedItems/>
            <Survey/>
        </div>
    );
};

export default Home;


// Farming looks mighty easy when your plow is a pencil, and you're a thousand miles from the corn field.