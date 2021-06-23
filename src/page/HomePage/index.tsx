import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { BookCard } from "../../components/bookCard";
import { Marginer } from "../../components/marginer";
import { NavBar } from "../../components/navbar/NavBar";
import { TopSection } from "./topSection";

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

export const HomePage: React.FC<HomePageProps> = () => {
  return <PageContainer>
      <NavBar/>
      <TopSection/>
      <Marginer direction="vertical" margin="4em"/>
      <BookCard/>
  </PageContainer>;
};
