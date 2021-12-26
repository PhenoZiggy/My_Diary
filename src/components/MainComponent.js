import React from "react";
import NavBar from "./pagecontents/NavBar"
import Header from "./pagecontents/Header"
import Footer from "./pagecontents/Footer"
class MainComponent extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div>
                <NavBar/>
            </div>
        )
    }
    
}
export default MainComponent;