import {Container, Nav, Navbar} from 'react-bootstrap';
import PropTypes from 'prop-types';

/* eslint-disable react/react-in-jsx-scope */
const NavigateBar = ({states}) => {
  const toggle = (index) => {
    states.forEach(({set}) => {
      set(false);
    });
    states[index].set(true);
  };

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>Сюрпризная</Navbar.Brand>
        <Nav className="me-auto">
          {states.map((state) =>
            <Nav.Link key={state.id} onClick={() => toggle(state.id)}>
              {state.title}
            </Nav.Link>)
          }
        </Nav>
      </Container>
    </Navbar>
  );
};

NavigateBar.propTypes = {
  states: PropTypes.array.isRequired,
};

export default NavigateBar;
