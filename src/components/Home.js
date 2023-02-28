import {Button, Container, Form, InputGroup, Row} from 'react-bootstrap';
import Banner from './Banner';
import {useState} from 'react';

const Home = () => {
  const [show, setShow] = useState(false);
  const [s1, setS1] = useState('');
  const [s2, setS2] = useState('');
  const [s3, setS3] = useState('');
  const [s4, setS4] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (s1 === '24' && s2 === '12' && s3 === '20' && s4 === '22') {
      setShow(true);
    }
  };

  /* eslint-disable react/react-in-jsx-scope */
  return (
    <>
      <Banner
        show={show}
        setShow={setShow}
        text='Молодец, ты разгадала все задания и получаешь свой подарок :)'
      />
      <Row>
        <Container className="p-3">
          <p>Приветствую вас, заяц!</p>
          <p>
            Эта страница содержит итоговый код,
            но чтобы его разгадать, тебе необходимо
            выполнить все 4 задания на странице
          </p>
          <p className="text-info">Удачи!</p>
        </Container>
      </Row>
      <Row style={{textAlign: 'center'}}>
        <Container className="p-3">
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Button variant="outline-primary" id="button-addon" type="submit">
                Проверить
              </Button>
              <Form.Control value={s1}
                onChange={({target}) => setS1(target.value)}/>
              <Form.Control value={s2}
                onChange={({target}) => setS2(target.value)}/>
              <Form.Control value={s3}
                onChange={({target}) => setS3(target.value)}/>
              <Form.Control value={s4}
                onChange={({target}) => setS4(target.value)}/>
            </InputGroup>
          </Form>
        </Container>
      </Row>
    </>
  );
};

export default Home;
