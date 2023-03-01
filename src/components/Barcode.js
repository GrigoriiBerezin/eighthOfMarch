import {Button, Container, Form, InputGroup, Row} from 'react-bootstrap';
import Banner from './Banner';
import {useState} from 'react';

const Barcode = () => {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password === '123') {
      setShow(true);
    }
  };

  /* eslint-disable react/react-in-jsx-scope */
  return (
    <>
      <Banner show={show} text='Очередной код: 20' setShow={setShow}/>
      <Row>
        <Container className="p-3">
          <p>В задании придется немного походить</p>
          <p>В дешевом карефуре найди товар
            <b className="text-info"> Patata</b>
          </p>
          <p>Его баркод является шифром задания</p>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Button type="submit">Проверить</Button>
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
