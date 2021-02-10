import React from 'react';
import CharacterList from '../components/characters/CharacterList';
import { useCharacters } from '../hooks/characters.js';

const AllCharacter = () => {
  const { loading, characters } = useCharacters();

  if (loading) return <h1>Loading</h1>;
  return <CharacterList characters={characters} />;
};

export default AllCharacter;
