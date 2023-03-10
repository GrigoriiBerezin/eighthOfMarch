import {Container, Nav, Navbar} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {toggleVisibility} from '../reducers/pageVisibilityReducer';

/* eslint-disable react/react-in-jsx-scope */
const NavigateBar = () => {
  const dispatch = useDispatch();
  const states = useSelector((state) => state.visibilityStates);

  const toggle = (id) => {
    dispatch(toggleVisibility(id));
  };

  return (
    <Navbar expand="sm" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>Сюрпризная</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {states.map((state) =>
              <Nav.Link key={state.id} onClick={() => toggle(state.id)}>
                {state.title}
              </Nav.Link>)
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigateBar;
