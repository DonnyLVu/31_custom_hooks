import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, photoUrl }) => (
  <figure data-testid="character">
    <figcaption>{name}</figcaption>
    <img src={photoUrl} />
  </figure>
);

Character.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string
};

export default Character;
