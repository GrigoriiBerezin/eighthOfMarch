import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import PropTypes from 'prop-types';

const Bottle = ({level, capacity}) => {
  const percentage = (level / capacity) * 100;

  return (
    <ProgressBar
      now={percentage}
      variant='info'
      label={`${level} of ${capacity}`}
    />
  );
};


Bottle.propTypes = {
  level: PropTypes.number.isRequired,
  capacity: PropTypes.number.isRequired,
};

export default Bottle;
