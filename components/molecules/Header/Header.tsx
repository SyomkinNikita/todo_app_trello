import React from "react";
import HeaderProps from "./Header.props";

export const Header = ({children, tag, imgDesktop, imgMobile}: HeaderProps): JSX.Element => {
    return (
        <header>
            {children}
        </header>
    )
}

export default Header;