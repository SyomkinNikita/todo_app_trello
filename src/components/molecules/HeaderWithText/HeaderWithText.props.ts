import { ReactNode } from "react";

interface HeaderWithTextProps {
    children: ReactNode;
    tag?: TagH | undefined;
}


enum TagH {
    h1 = 1,
    h2,
    h3,
    h4,
    h5,
    h6
}

export default HeaderWithTextProps;