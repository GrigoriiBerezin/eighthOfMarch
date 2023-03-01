import Bottles from './components/Bottles';
import {Container} from 'react-bootstrap';
import Graffiti from './components/Graffiti';
import NavigateBar from './components/NavigateBar';
import {useState} from 'react';
import Togglable from './components/Togglable';
import Home from './components/Home';
import ColorsTask from './components/ColorsTask';

/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
const App = () => {
  const [home, setHome] = useState(true);
  const [s1, setS1] = useState(false);
  const [s2, setS2] = useState(false);
  const [s3, setS3] = useState(false);
  const [s4, setS4] = useState(false);

  const states = [
    {id: 0, set: setHome, title: 'Стартовая'},
    {id: 1, set: setS1, title: 'Задача 1'},
    {id: 2, set: setS2, title: 'Задача 2'},
    {id: 3, set: setS3, title: 'Задача 3'},
    {id: 4, set: setS4, title: 'Задача 4'},
  ];

  return (
    <Container fluid>
      <NavigateBar states={states}/>
      <Togglable isVisible={home}><Home/></Togglable>
      <Togglable isVisible={s1}><Graffiti/></Togglable>
      <Togglable isVisible={s2}><Bottles/></Togglable>
      <Togglable isVisible={s3}><ColorsTask/></Togglable>
      <Togglable isVisible={s4}><Bottles/></Togglable>
    </Container>
  );
};

export default App;
