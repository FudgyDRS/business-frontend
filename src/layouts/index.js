import React from "react";
//import PropTypes from "prop-types";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";


/* const Layout = ({ children }) => {
    return <Fragment>{children}</Fragment>;
};
Layout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default Layout; */

const Layout = ({ children }) => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;