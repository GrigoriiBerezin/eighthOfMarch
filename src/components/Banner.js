import {Button, Modal} from 'react-bootstrap';
import PropTypes from 'prop-types';

const Banner = ({show, setShow, text}) => {
  /* eslint-disable react/react-in-jsx-scope */
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Ура, пазл решен!</Modal.Title>
      </Modal.Header>
      <Modal.Body>{text}</Modal.Body>
      <Modal.Footer>
        <Button variant='primary' onClick={() => setShow(false)}>
        Закрыть
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

Banner.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Banner;
