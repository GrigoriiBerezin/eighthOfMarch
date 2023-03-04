import {Container, Form, InputGroup, Row} from 'react-bootstrap';
import Banner from './Banner';
import {useState} from 'react';
import ButtonTrigger from './ButtonTrigger';

const Barcode = () => {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState('');

  /* eslint-disable react/react-in-jsx-scope */
  return (
    <>
      <Banner show={show} text='Очередной код: 20' setShow={setShow}/>
      <Row>
        <Container className="p-3">
          <p>В задании придется немного походить</p>
          <p>В дешевом карефуре найди товар
            <b className="text-info"> Patata Lavada Malla 5kg</b>
          </p>
          <p>Его баркод является шифром задания</p>
          <Form>
            <InputGroup>
              <ButtonTrigger
                onClickCondition={() => password === '8437007877823'}
                handleSuccess={() => setShow(true)}
                label="Проверить"
              />
              <Form.Control value={password}
                onChange={({target}) => setPassword(target.value)}
              />
            </InputGroup>
          </Form>
        </Container>
      </Row>
    </>
  );
};

export default Barcode;
