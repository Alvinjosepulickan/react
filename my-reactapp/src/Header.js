import React from 'react'; 
import Home from './Home';
import About from './About';
import ContactUs from './Contact';
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
class Header extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Link to="/home">Home</Link> |
                <Link to="/about"> About Us </Link> |
                <Link to="/contact"> Contact Us </Link>
                <Routes>
                    <Route path="home" element={<Home />}/>
                    <Route path="about" element={<About />}/>
                    <Route path="contact" element={<ContactUs />}/>
                </Routes>
            </BrowserRouter>
        )
    }
}
export default Header;
