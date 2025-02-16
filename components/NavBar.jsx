
'use client'
import { useState } from "react";
import MenuModal from "./MenuModal";


const NavBar = () => {
    const [isMenuopen, setIsMenuOpen] = useState(false);
    const handleMenuClick = () => {
        console.log(isMenuopen);
        setIsMenuOpen(!isMenuopen);
    }
    return (
        <nav className="sticky top-0 left-0 right-0 z-50 bg-[#202020] bg-opacity-95">
            <div className="flex justify-between items-center px-20 py-5 ">
                {/* logo and label */}
                {/* <img src="/vercel.svg" alt="logo" width="50" height="50" crossOrigin="anonymous" /> */}
                <div className="font-bruno text-2xl">Vista Properties</div>
                {/* right side -menu */}
                <button className="font-bruno text-2xl" onClick={handleMenuClick}>
                    {!isMenuopen?'Menu':'Close'}
                </button>
            </div>
            {isMenuopen && <MenuModal />}

        </nav>
    );
}
export default NavBar;
