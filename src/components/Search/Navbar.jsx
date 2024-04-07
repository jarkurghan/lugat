import React, { useState } from "react";

function Navbar() {
    return (
        <div className="no-copy hide-scroll flex items-baseline gap-4 mb-10" >
            <div className="shadow-md px-4 py-1 rounded-md border">definition</div>
            <div className="shadow-md px-4 py-1 rounded-md border">history&nbsp;of&nbsp;origin</div>
            <div className="shadow-md px-4 py-1 rounded-md border">synonyms</div>
            <div className="shadow-md px-4 py-1 rounded-md border">in&nbsp;resources</div>
        </div>
    );
}

export default Navbar;
