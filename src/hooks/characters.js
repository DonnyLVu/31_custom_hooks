import { useState, useEffect } from 'react';
import { getCharacters, getDetail } from '../services/avatarApi';

export const useCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then((characters) => {
      setCharacters(characters);
      setLoading(false);
    });
  }, []);

  return {
    loading,
    characters,
  };
};

export const getDetailById = (_id) => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    getDetail(_id).then((character) => {
      setCharacter(character);
      setLoading(false);
    });
  }, [_id]);

  return {
    loading,
    character,
  };
};
