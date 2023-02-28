import PropTypes from 'prop-types';

const Togglable = ({children, isVisible}) => {
  const showWhenVisible = {display: isVisible ? '' : 'none'};

  /* eslint-disable react/react-in-jsx-scope */
  return (
    <div>
      <div style={showWhenVisible}>
        {children}
      </div>
    </div>
  );
};


Togglable.propTypes = {
  children: PropTypes.element,
  isVisible: PropTypes.bool.isRequired,
};

export default Togglable;
