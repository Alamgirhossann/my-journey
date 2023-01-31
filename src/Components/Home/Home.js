import React from 'react';
import Awards from './Awards';
import Convenience from './Convenience';
import Deliiver from './Deliiver';
import Growing from './Growing';
import Header from './Header';
import RoutesOperators from './RoutesOperators';
import Sefty from './Sefty';

const Home = () => {
    
    return (
        <div>
            <Header/>
            <Sefty/>
            <Convenience/>
            <Deliiver/>
            {/* <Awards/> */}
            <Growing/>
            <RoutesOperators/>
            
        </div>
    );
};

export default Home;