import Bottle from './Bottle';
import {connect, useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {fill, pour, reset} from '../reducers/bottlesReducer';
import {Button, Col, Row} from 'react-bootstrap';

const Bottles = ({smallBottle, bigBottle}) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.bottles);

  if (state.bigBottle.level === 4) {
    window.alert('Твоя подсказка: 24');
  }

  /* eslint-disable react/react-in-jsx-scope */
  return (
    <Row>
      <Col md={4}>
        <Bottle level={smallBottle.level} capacity={smallBottle.capacity}/>
        <Button onClick={() => dispatch(fill('smallBottle'))}>Fill</Button>
        <Button onClick={() => dispatch(reset('smallBottle'))}>Reset</Button>
      </Col>
      <Col md={4} className="d-flex">
        <div className="justify-content-center">
          <Button onClick={() => dispatch(pour({
            from: 'bigBottle',
            to: 'smallBottle',
          }))}>
            ← Pour
          </Button>
          <Button onClick={() => dispatch(pour({
            from: 'smallBottle',
            to: 'bigBottle',
          }))}>
            Pour →
          </Button>
        </div>
      </Col>
      <Col md={4}>
        <Bottle level={bigBottle.level} capacity={bigBottle.capacity}/>
        <Button onClick={() => dispatch(fill('bigBottle'))}>Fill</Button>
        <Button onClick={() => dispatch(reset('bigBottle'))}>Reset</Button>
      </Col>
    </Row>
  );
};

Bottles.propTypes = {
  smallBottle: PropTypes.shape({
    level: PropTypes.number.isRequired,
    capacity: PropTypes.number.isRequired,
  }).isRequired,
  bigBottle: PropTypes.shape({
    level: PropTypes.number.isRequired,
    capacity: PropTypes.number.isRequired,
  }).isRequired,
};

const mapStatesToProps = (state) => ({
  smallBottle: state.bottles.smallBottle,
  bigBottle: state.bottles.bigBottle,
});

export default connect(mapStatesToProps)(Bottles);
