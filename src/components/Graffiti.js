import {Container, Form, InputGroup, Row} from 'react-bootstrap';
import {useState} from 'react';
import Banner from './Banner';
import ButtonTrigger from './ButtonTrigger';

/* eslint-disable react/react-in-jsx-scope */
const Graffiti = () => {
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  return (
    <>
      <Banner show={show} setShow={setShow} text="Очередной код: 12"/>
      <Row>
        <Container className="p-3">
          <p>
            По улице Тринидат есть закрытое навсегда заведение
            Adela Dominguez
          </p>
          <p>Пароль будет слово на графити на этом здании</p>
        </Container>
      </Row>
      <Row>
        <Container className="p-3">
          <Form>
            <InputGroup>
              <ButtonTrigger
                onClickCondition={() => password.toLowerCase() === 'rako'}
                handleSuccess={() => setShow(true)}
                label="Проверить"
              />
              <Form.Control
                aria-label="Введи ответ тут"
                value={password}
                onChange={({target}) => setPassword(target.value)}
              />
            </InputGroup>
          </Form>
        </Container>
      </Row>
    </>
  );
};

export default Graffiti;
