import React from 'react';
import Banner from '../part-component/Banner';
import BonusSection from '../part-component/BonusSection';
import Feature from '../part-component/Feature';
import HomeInventory from '../part-component/HomeInventory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Feature></Feature>
            <HomeInventory></HomeInventory>
            <BonusSection></BonusSection>
        </div>
    );
};

export default Home;