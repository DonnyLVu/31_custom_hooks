import React from 'react';
import PropTypes from 'prop-types';
import { getDetailById } from '../hooks/characters.js';
import Detail from '../components/details/Detail';

const DetailPage = ({ match }) => {
  const { loading, character } = getDetailById(match.params._id);

  if (loading) return <h1>Loading</h1>;
  // eslint-disable-next-line max-len
  return <Detail {...character} />;
};

DetailPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      _id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default DetailPage;
