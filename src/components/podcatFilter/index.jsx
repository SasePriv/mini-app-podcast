import PropTypes from 'prop-types';
import { useState } from 'react';
import './style.css';

function PodcastFilter({ count, onChangeSearch }) {
  const [search, setSearch] = useState('');
  return (
    <div className="podcast-filter">
      <div className="podcast-filter-count">{count}</div>
      <input
        type="text"
        value={search}
        placeholder="Filter podcasts..."
        className="podcast-filter-input"
        onChange={(e) => {
          setSearch(e.target.value);
          onChangeSearch(e.target.value);
        }}
      />
    </div>
  );
}

PodcastFilter.propTypes = {
  count: PropTypes.number,
  onChangeSearch: PropTypes.func
};

export default PodcastFilter;
