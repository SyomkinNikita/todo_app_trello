import { ReactNode } from "react";

interface HeaderProps {
    children: ReactNode;
    tag?: TagH;
    imgDesktop?: string | undefined;
    imgMobile?: string | undefined;
}

enum TagH {
    h1 = 1,
    h2,
    h3,
    h4,
    h5,
    h6
}

export default HeaderProps;