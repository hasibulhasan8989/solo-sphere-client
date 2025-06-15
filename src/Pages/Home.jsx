import React from 'react';
import TabComponent from '../Components/TabComponent';
import Banner from '../Components/Banner';


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <div className='my-20 text-center'>
            <h1 className='text-2xl font-bold'>Browse Jobs By Categories</h1>
            <p className='text-lg mt-4'>Three categories available for the time being. They are Web Development, Graphics Design and <br /> Digital Marketing. Browse them by clicking on the tabs below.</p>
           </div>
          <TabComponent></TabComponent>
            
        </div>
    );
};

export default Home;