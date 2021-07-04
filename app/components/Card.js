import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  letter-spacing: 1px;
  margin: 0 10px 40px;
`;

const Image = styled.Image`
  width: 300px;
  height: 180px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 10px 20px 10px;
  margin: 20px 0 20px 0;
`;

const Title = styled.Text`
  font-size: 22px;
  font-weight: 600;
`;

const SubTitle = styled.Text`
  font-size: 12px;
  line-height: 20px;
`;

function Card({ uri, name, resume, location }) {
  return (
    <Container>
      <Image source={{ uri }} />
      <Title>{name}</Title>
      <SubTitle>{resume}</SubTitle>
      <SubTitle>{location}</SubTitle>
    </Container>
  );
}

export default Card;
