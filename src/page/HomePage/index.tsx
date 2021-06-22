import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { NavBar } from "../../components/NavBar";

const PageContainer = styled.div`
  ${tw`
flex
flex-col
w-full
h-full
items-center
overflow-x-hidden
  `}
`;

interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = ({}) => {
  return <PageContainer>
      <NavBar/>
  </PageContainer>;
};
