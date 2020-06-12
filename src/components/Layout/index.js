import React from 'react';
import Toolbar from '../Navigation/Toolbar';

const Layout = (props) => (
    <React.Fragment>
        <Toolbar/>
        <main className='Layout__main'>{props.children}</main>
    </React.Fragment>
);

export default Layout;
