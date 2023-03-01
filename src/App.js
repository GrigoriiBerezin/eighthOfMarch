import Bottles from './components/Bottles';
import {Container} from 'react-bootstrap';
import Graffiti from './components/Graffiti';
import NavigateBar from './components/NavigateBar';
import Togglable from './components/Togglable';
import Home from './components/Home';
import ColorsTask from './components/ColorsTask';
import {useSelector} from 'react-redux';

/* eslint-disable react/react-in-jsx-scope */
const App = () => {
  const states = useSelector((state) => state.visibilityStates);
  const [home, s1, s2, s3, s4] = states;

  return (
    <Container fluid>
      <NavigateBar/>
      <Togglable isVisible={home.isVisible}><Home/></Togglable>
      <Togglable isVisible={s1.isVisible}><Graffiti/></Togglable>
      <Togglable isVisible={s2.isVisible}><Bottles/></Togglable>
      <Togglable isVisible={s3.isVisible}><ColorsTask/></Togglable>
      <Togglable isVisible={s4.isVisible}><Bottles/></Togglable>
    </Container>
  );
};

export default App;
