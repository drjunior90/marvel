import { styled } from "styled-components";

export const SearchCamp = styled.div`
  background-color: #8d0000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  min-width: 100%;
`;
export const SearchCard = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const SearchImg = styled.img`
  width: 150px;
  height: 100px;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;
export const SearchInput = styled.input`
  width: 250px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  @media (max-width: 768px) {
    width: 100%; 
  }
`;

export const Container = styled.main`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.div`
  background: #8d0000;
  height: 450px;
  width: 300px;
  margin: 10px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.3);

  h2,
  p {
    display: flex;
    text-align: center;
    color: #fff;
    font-size: 20px;
  }

  &hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Favoritar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 370px;
  transition: all 1s;
  &:hover {
    height: 150px;
  }
`;

export const Footer = styled.footer`
  background: #8d0000;
  padding: 10px;
  height: 75px;
  align-items: center;
  bottom: 0;

  p {
    color: #fff;
    display: flex;
    justify-content: center;
  }
`;
