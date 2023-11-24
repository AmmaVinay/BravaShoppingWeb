import React from 'react';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import MarqueFlow from './Components/MarqueFlow';
import Announcement from './Components/Announcement';

const Home = () => {
return (
<div>
    <Announcement />
    <Navbar />    
    <Body />
    <MarqueFlow />
</div>
);
};

export default Home;