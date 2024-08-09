import React, { useState } from "react";
import HeaderMenu from "./Menu";
import logo from "../../../images/favicon.png";
import { useNavigate } from "react-router-dom";

function Header() {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const home = () => {
        navigate("/");
    };

    return (
        <div className="header no-copy">
            <div className="flex justify-between items-center px-6 h-full text-[#444]">
                <div className="logo" onClick={home}>
                    <div className="logo before"></div>
                    <div className="logo content">
                        <img className="h-5" src={logo} alt="Your Company" /> virtual-lugat.uz
                    </div>
                    <div className="logo after"></div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="text-2xl font-bold rounded-[50%] cursor-pointer w-8 text-center" onClick={() => setShow(!show)}>
                        &#9776;
                    </div>
                </div>
            </div>
            <HeaderMenu setShow={setShow} show={show} />
        </div>
    );
}

export default Header;
