import PropTypes from 'prop-types';
import './style.css';

function Header({ loading }) {
  return (
    <div className="header">
      <div className="header-content">
        <h2 className="header-title">Podcaster</h2>
        <div className="loader-container">
          {loading && <span className="loader" />}
        </div>
      </div>
      <div className="separator" />
    </div>
  );
}

Header.propTypes = {
  loading: PropTypes.bool
};

export default Header;
