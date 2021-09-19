import React from "react";
import HeaderWithTextProps from "./HeaderWithText.props";
import { Styled } from "./styled";

export const HeaderWithText = ({children, tag}: HeaderWithTextProps): JSX.Element => {
    switch(tag) {
        case 1: 
            return (
                <Styled.HeaderStyled>
                    <h1>{children}</h1>
                </Styled.HeaderStyled>
            )
        case 2: 
            return (
                <Styled.HeaderStyled>
                    <h2>{children}</h2>
                </Styled.HeaderStyled>
            )
        case 3:
            return (
                <Styled.HeaderStyled>
                    <h3>{children}</h3>
                </Styled.HeaderStyled>
            )
        case 4: 
            return (
                <Styled.HeaderStyled>
                    <h4>{children}</h4>
                </Styled.HeaderStyled>
            )
        case 5:
            return (
                <Styled.HeaderStyled>
                    <h5>{children}</h5>
                </Styled.HeaderStyled>
            )
        case 6:
            return (
                <Styled.HeaderStyled>
                    <h6>{children}</h6>
                </Styled.HeaderStyled>
            )
        default:
            return <div>{children}</div>
    }
}

export default HeaderWithText;