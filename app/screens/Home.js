import React from "react";
import { FlatList, View } from "react-native";
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

const Title = styled.Text`
  font-weight: 600;
  font-size: 32px;
  text-align: right;
  margin-right: 10px;
`;

const Menu = styled.View`
  height: 900px;
  width: 60px;
  border: 1px solid gray;
`;

function Home() {
  const renderItem = ({ item, index }) => {
    return index == 0 ? <Title>Biography in detail</Title> : <Card {...item} />;
  };

  return (
    <Container>
      {/* TODO: remove that menu */}
      <Menu />
      <View>
        <FlatList
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={renderItem}
        />
      </View>
    </Container>
  );
}

export default Home;
