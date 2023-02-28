import {Button, Container, Form, InputGroup, Row} from 'react-bootstrap';
import {useState} from 'react';
import Banner from './Banner';

/* eslint-disable react/react-in-jsx-scope */
const Graffiti = () => {
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password.toLowerCase() === 'rako') {
      setShow(true);
    }
  };

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
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Button variant="outline-primary" id="button-addon" type="submit">
                Проверить
              </Button>
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
