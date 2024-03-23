import React, { useState } from "react";
import HeaderMenu from "../Header/Menu";
import logo from "../../images/favicon.png";
import Search from "./Search";

function Header() {
    const [show, setShow] = useState(false);

    return (
        <div className="header no-copy">
            <div className="flex justify-between items-center px-6 h-full text-[#444]">
                <div>
                    <Search />
                </div>
                <div className="flex items-center gap-6">
                    <div>
                        <img className="h-6 mt-1" src={logo} alt="Your Company" />
                    </div>
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
