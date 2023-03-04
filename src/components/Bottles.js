import Bottle from './Bottle';
import {connect, useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {fill, pour, reset} from '../reducers/bottlesReducer';
import {Button, ButtonGroup, Col, Container, Row} from 'react-bootstrap';
import {useState} from 'react';
import Banner from './Banner';
import ButtonTrigger from './ButtonTrigger';

const Bottles = ({smallBottle, bigBottle}) => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.bottles);

  /* eslint-disable react/react-in-jsx-scope */
  return (
    <>
      <Banner show={show} setShow={setShow} text="Твоя подсказка: 24"/>
      <Row>
        <Container className="p-3">
          <p>
            Есть 2 емкости с объёмом 3 и 5 литра
            соответственно и бесконечное количество воды
          </p>
          <p>Отмерь ровно 4 литра воды</p>
        </Container>
      </Row>
      <Row>
        <Col sm={12} md={4} style={{textAlign: 'center'}}>
          <Bottle level={smallBottle.level} capacity={smallBottle.capacity}/>
          <Container className="p-3">
            <ButtonGroup>
              <Button variant='outline-primary'
                onClick={() => dispatch(fill('smallBottle'))}>
          Fill
              </Button>
              <Button variant='outline-danger'
                onClick={() => dispatch(reset('smallBottle'))}>
          Reset
              </Button>
            </ButtonGroup>
          </Container>
        </Col>
        <Col sm={12} md={4} style={{textAlign: 'center'}}>
          <Container className="p-3">
            <ButtonGroup>
              <Button
                variant="outline-primary"
                onClick={() => dispatch(pour({
                  from: 'bigBottle',
                  to: 'smallBottle',
                }))}>
            ← Pour
              </Button>
              <ButtonTrigger
                label="Проверить"
                handleSuccess={() => setShow(true)}
                onClickCondition={() => state.bigBottle.level === 4}
              />
              <Button
                variant="outline-primary"
                onClick={() => dispatch(pour({
                  from: 'smallBottle',
                  to: 'bigBottle',
                }))}>
            Pour →
              </Button>
            </ButtonGroup>
          </Container>
        </Col>
        <Col sm={12} md={4} style={{textAlign: 'center'}}>
          <Bottle level={bigBottle.level} capacity={bigBottle.capacity}/>
          <Container className="p-3">
            <ButtonGroup>
              <Button variant='outline-primary'
                onClick={() => dispatch(fill('bigBottle'))}>
            Fill
              </Button>
              <Button variant='outline-danger'
                onClick={() => dispatch(reset('bigBottle'))}>
            Reset
              </Button>
            </ButtonGroup>
          </Container>
        </Col>
      </Row>
    </>
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
