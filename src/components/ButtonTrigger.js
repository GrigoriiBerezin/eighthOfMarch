import PropTypes from 'prop-types';
import {useState} from 'react';
import {Button} from 'react-bootstrap';
import React from 'react';

const ButtonTrigger = ({
  onClickCondition,
  handleSuccess,
  handleFailure = () => null,
  label}) => {
  const startState = 'outline-primary';
  const failureState = 'outline-danger';
  const successState = 'outline-success';

  const [variant, setVariant] = useState(startState);

  const handleClick = (event) => {
    event.preventDefault();

    if (onClickCondition()) {
      handleSuccess();
      setVariant(successState);
    } else {
      handleFailure();
      setVariant(failureState);
    }
    setTimeout(() => setVariant(startState), 3000);
  };

  return (
    <Button type="submit" variant={variant} onClick={handleClick}>
      {label}
    </Button>
  );
};

ButtonTrigger.propTypes = {
  onClickCondition: PropTypes.func.isRequired,
  handleSuccess: PropTypes.func.isRequired,
  handleFailure: PropTypes.func,
  label: PropTypes.string.isRequired,
};

export default ButtonTrigger;
