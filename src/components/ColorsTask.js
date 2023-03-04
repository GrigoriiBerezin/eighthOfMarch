import {Button, Container, Form, Image, InputGroup, Row} from 'react-bootstrap';
import Banner from './Banner';
import {useState} from 'react';

const ColorsTask = () => {
  const [show, setShow] = useState(false);
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const style = {
    width: 40,
    backgroundColor: `rgb(${red},${green},${blue})`,
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (8 <= red &&
      red <= 20 &&
      25 <= green &&
      green <= 40 &&
      0 <= blue &&
      blue <= 10) {
      setShow(true);
    }
  };

  /* eslint-disable react/react-in-jsx-scope */
  return (
    <>
      <Banner show={show} text='Ура ура, следующий код: 22' setShow={setShow}/>
      <Row>
        <Container className="p-3">
          <p>У цвета есть три составляющие - красный, зеленый и синий</p>
          <p>необходимо найти самый темный цвет листвы пальмы и ввести его</p>
          <Image className="img-thumbnail" src='pines.jpg'/>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Button variant="outline-primary" id="button-addon" type="submit">
              Проверить
              </Button>
              <InputGroup.Text>Red</InputGroup.Text>
              <Form.Control
                value={red}
                onChange={({target}) => setRed(Number(target.value))}
              />
              <InputGroup.Text>Green</InputGroup.Text>
              <Form.Control
                value={green}
                onChange={({target}) => setGreen(Number(target.value))}
              />
              <InputGroup.Text>Blue</InputGroup.Text>
              <Form.Control
                value={blue}
                onChange={({target}) => setBlue(Number(target.value))}
              />
              <Button style={style}/>
            </InputGroup>
          </Form>
        </Container>
      </Row>
    </>
  );
};

export default ColorsTask;
