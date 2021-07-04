import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import Card from "../components/Card";
import data from "../data";

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  padding: 50px 0 0 20px;
`;

const Menu = styled.View`
  height: 900px;
  width: 60px;
  border: 1px solid gray;
`;

function Home() {
  return (
    <Container>
      {/* TODO: remove that menu */}
      <Menu />
      <FlatList
        data={data}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <Card {...item} />}
      />
    </Container>
  );
}

export default Home;
