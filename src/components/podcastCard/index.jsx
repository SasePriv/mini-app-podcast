import './style.css';

function PodcastCard() {
  return (
    <div className="card">
      <img
        className="card-image"
        src="https://rachelcorbett.com.au/wp-content/uploads/2018/07/How-to-design-a-great-podcast-logo.jpg"
        alt="podcast-logo"
      />
      <div className="card-content">
        <h3 className="card-title">Title</h3>
        <p className="card-author">Author: NPR</p>
      </div>
    </div>
  );
}

export default PodcastCard;
