import Bottles from './components/Bottles';
import {Container} from 'react-bootstrap';
import Graffiti from './components/Graffiti';

/* eslint-disable react/react-in-jsx-scope */
const App = () => (
  <Container className="p-3">
    <Graffiti/>
    <Bottles/>
  </Container>
);

export default App;
