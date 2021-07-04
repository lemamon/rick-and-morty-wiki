import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  letter-spacing: 1px;
  margin: 0 10px 40px;
`;

const Image = styled.Image`
  border-radius: 15px;
  margin: 20px 0 20px 0;
  width: 100%;
  height: 100%;
`;

const Title = styled.Text`
  font-size: 22px;
  font-weight: 600;
`;

const SubTitle = styled.Text`
  font-size: 14px;
  line-height: 20px;
`;

const ImageContainer = styled.View`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 300px;
  height: ${(props) => (props.isDetail ? "280px" : "180px")};
`;

const Content = styled.View`
  width: 100%;
  height: auto;
  margin-top: 40px;
`;

function Card({ uri, name, resume, location, isDetail }) {
  return (
    <Container>
      <ImageContainer isDetail={isDetail}>
        <Image source={{ uri }} />
      </ImageContainer>
      <Content>
        <Title>{name}</Title>
        <SubTitle>{resume}</SubTitle>
        <SubTitle>{location}</SubTitle>
      </Content>
    </Container>
  );
}

export default Card;
