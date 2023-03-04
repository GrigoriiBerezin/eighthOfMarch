import {Button, Container, Form, Image, InputGroup, Row} from 'react-bootstrap';
import Banner from './Banner';
import {useState} from 'react';
import ButtonTrigger from './ButtonTrigger';

const ColorsTask = () => {
  const [show, setShow] = useState(false);
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const style = {
    width: 40,
    backgroundColor: `rgb(${red},${green},${blue})`,
  };

  const onClickCondition = () => {
    return 8 <= red &&
      red <= 20 &&
      25 <= green &&
      green <= 40 &&
      0 <= blue &&
      blue <= 10;
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
          <Row className="justify-content-center">
            <Form className="w-75">
              <InputGroup>
                <InputGroup.Text>Red</InputGroup.Text>
                <Form.Control
                  value={red}
                  onChange={({target}) => setRed(Number(target.value))}
                />
              </InputGroup>
              <InputGroup>
                <InputGroup.Text>Green</InputGroup.Text>
                <Form.Control
                  value={green}
                  onChange={({target}) => setGreen(Number(target.value))}
                />
              </InputGroup>
              <InputGroup>
                <InputGroup.Text>Blue</InputGroup.Text>
                <Form.Control
                  value={blue}
                  onChange={({target}) => setBlue(Number(target.value))}
                />
              </InputGroup>
              <InputGroup className="justify-content-center p-3">
                <ButtonTrigger
                  onClickCondition={onClickCondition}
                  handleSuccess={() => setShow(true)}
                  label="Проверить"
                />
                <Button style={style}></Button>
              </InputGroup>
            </Form>
          </Row>
        </Container>
      </Row>
    </>
  );
};

export default ColorsTask;
