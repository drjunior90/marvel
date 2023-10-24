import {
  Card,
  CardImg,
  CardList,
  Container,
  Favoritar,
  Footer,
  SearchCamp,
  SearchCard,
  SearchImg,
  SearchInput,
} from "./styles";
import SearchLogic from "../SearchLogic/index";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";

import PropTypes from 'prop-types';

export default function Characters() {
  const { search, setSearch, filterPers, copyRight } = SearchLogic();
  console.log("filterPers:", filterPers);

  return (
    <>
      <SearchCamp>
        <SearchCard>
          <SearchImg src="/imagem/Marvel_Logo.svg" alt="Marvel Logo"/>
          <SearchInput
            type="text"
            placeholder="Pesquisa"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </SearchCard>
      </SearchCamp>

      <Container>
        <CardList>
          {filterPers.map((pers) => {
            return <CharacterCard key={pers.id} pers={pers} />;
          })}
        </CardList>
      </Container>

      <Footer>
        <p>{copyRight}</p>
      </Footer>
    </>
  );
}

function CharacterCard( {pers} ) {
  const [favoritado, setFavoritado] = useState(false);

  const toggleFavorito = () => {
    setFavoritado(!favoritado);
  };

  return (
    <Card>
      <CardImg
        id="img"
        src={`${pers.thumbnail.path}.${pers.thumbnail.extension}`}
        alt=""
      />
      <Favoritar>
        <h2>{pers.name}</h2>
        <a onClick={toggleFavorito}>
          {favoritado ? <AiFillHeart color="#fff" /> : <AiOutlineHeart color="#fff"/>}
        </a>
      </Favoritar>
      <p>{pers.description}</p>
    </Card>
  );
}

CharacterCard.propTypes = {
  pers: PropTypes.object.isRequired, 
};