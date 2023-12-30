import React from "react";
import ReactDom from "react-dom/client"

import MainBody from "./src/MainBody";

const AppLayout = ()=>{
    return (
    <>
        <MainBody />
        {/* <Header /> */}
        {/* <Body /> */}
        {/* <Footer /> */}
    </>
    )
}

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<AppLayout />);