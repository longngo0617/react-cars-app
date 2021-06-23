import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import menuStyles from "./menuStyles";
import { SCREENS } from "../responsive";

interface NavItemsProps {}

const ListContainer = styled.ul`
  ${tw`
        flex
        list-none
    `}
`;

const NavItemLi = styled.li<{ menu?: any }>`
  ${tw`
        text-sm
        md:text-base
        text-black
        font-medium
        mr-1
        md:mr-5
        cursor-pointer
        transition
        duration-300
        ease-in-out
        hover:text-gray-700
   `}

  ${({ menu }) =>
    menu &&
    css`
      ${tw`
    text-white
    text-xl
    mb-3
    focus:text-white
   `}
    `}
`;

export const NavItems: React.FC<NavItemsProps> = () => {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  if (isMobile) {
    return (
      <Menu right styles={menuStyles}>
        <ListContainer>
          <NavItemLi menu>
            <a href="#">Home</a>
          </NavItemLi>
          <NavItemLi menu>
            <a href="#">Cars</a>
          </NavItemLi>
          <NavItemLi menu>
            <a href="#">Services</a>
          </NavItemLi>
          <NavItemLi menu>
            <a href="#">Contact Us</a>
          </NavItemLi>
        </ListContainer>
      </Menu>
    );
  }

  return (
    <ListContainer>
      <NavItemLi>
        <a href="#">Home</a>
      </NavItemLi>
      <NavItemLi>
        <a href="#">Cars</a>
      </NavItemLi>
      <NavItemLi>
        <a href="#">Services</a>
      </NavItemLi>
      <NavItemLi>
        <a href="#">Contact Us</a>
      </NavItemLi>
    </ListContainer>
  );
};
