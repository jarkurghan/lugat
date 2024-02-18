import React from "react";

function Header() {
    return (
        <div className="header">
            <div className="flex justify-between items-center px-6 h-full text-[#444]">
                <div></div>
                <div className="flex items-center gap-6">
                    <div>lang</div>
                    {/* <div className="text-2xl font-bold rounded-[50%] cursor-pointer w-8 text-center">&#9776;</div> */}
                </div>
            </div>
        </div>
    );
}

export default Header;
