import React from 'react';
import Character from './Character';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CharacterList = ({ characters }) => {
  const renderedCharacters = characters.map(character => (
    <li key={character._id}>
      <Link to={`/characters/${character._id}`} >
        <Character {...character} />
      </Link>
    </li>
  ));

  return (
    <ul data-testid="renderCharacter">
      {renderedCharacters}
    </ul>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    photoUrl: PropTypes.string
  })).isRequired
};

export default CharacterList;
