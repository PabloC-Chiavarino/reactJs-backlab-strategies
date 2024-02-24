import { Route, Routes, Navigate } from "react-router-dom";
import { Home, Services, Contact, About } from "../pages/index.js";

const Router = () => {
    return(
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            {/* <Route path="/404" element={} /> */}
            
            <Route path='/' element={<Navigate to={'/home'} />} />
            {/* <Route path='*' element={<Navigate to={'/404'} />} /> */}
        </Routes>
    )
}

export default Router