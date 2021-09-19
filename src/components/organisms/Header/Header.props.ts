export interface THeader {
    title: string;
    subtitle?: string;
    imgDesktop: imgProps;
    imgMobile: imgProps;
}

type imgProps = {
    imgUrl: string;
    imgAlt: string;
}