import PropTypes from 'prop-types';
import '../styles/container.css';

const Container = ({children}) => {
  return (
    <div className="container">
      <div className="boxes-show">
        { children }
      </div>
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node
};

export default Container;