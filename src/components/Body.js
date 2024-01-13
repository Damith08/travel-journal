import LOCATION from "../assets/images/Fill 219.svg";

export default function Body() {
  return (
    <div className="card">
      <section className="card--section">
        <div>
          <img
            src="https://source.unsplash.com/WLxQvbMyfas"
            alt="mount-fuji"
            className="card--image"
          ></img>
        </div>
        <div>
          <div className="location">
            <img
              src={LOCATION}
              alt="location-img"
              className="location-img"
            ></img>
            <p className="location--text">JAPAN</p>
            <p className="google-map--link">View on Google Maps</p>
          </div>
          <h1 className="card--heading">Mount Fuji</h1>
          <h5 className="card--date">12 Jan, 2021 - 24 Jan, 2021</h5>
          <p className="card--description">
            Mount Fuji is the tallest mountain in Japan, standing at 3,776
            meters (12,380 feet). Mount Fuji is the single most popular tourist
            site in Japan, for both Japanese and foreign tourists.
          </p>
        </div>
      </section>
      <hr />
    </div>
  );
}
