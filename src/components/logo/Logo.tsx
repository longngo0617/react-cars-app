import React from "react";
import CarLogoImg from "../../assets/images/car-logo.png";
import CarLogoDarkImg from "../../assets/images/car-logo-dark.png";
import styled from "styled-components";
import tw from "twin.macro";

const LogoContainer = styled.div`
  ${tw`
        flex
        items-center
    `}
`;

const LogoText = styled.div`
  ${tw`
    text-xl
    md:text-2xl
    font-bold
    text-black
    m-1
`}
  ${({ color }: any) => (color === "white" ? tw`text-white` : tw`text-black`)}
` as any;

const Image = styled.div`
  width: auto;
  ${tw`
    h-6
    md:h-9
    `}
  img {
    width: auto;
    height: 100%;
  }
`;

interface LogoProps {
  color?: "white" | "dark";
  bgColor?: "white" | "dark";
}

export const Logo: React.FC<LogoProps> = ({ color,bgColor }) => {
  return (
    <LogoContainer>
      <Image>
        <img src={bgColor !== "dark" ? CarLogoImg : CarLogoDarkImg}></img>
      </Image>
      <LogoText color={color || "dark"}>CarShopping.</LogoText>
    </LogoContainer>
  );
};
