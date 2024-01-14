import LOCATION from "../assets/images/Fill 219.svg";

export default function Body(props) {
  return (
    <div className="card">
      <section className="card--section">
        <div>
          <img
            src={props.item.imageUrl}
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
            <p className="location--text">{props.item.location}</p>
            <p className="google-map--link">View on Google Maps</p>
          </div>
          <h1 className="card--heading">{props.item.title}</h1>
          <h5 className="card--date">{props.item.data}</h5>
          <p className="card--description">{props.item.description}</p>
        </div>
      </section>
      <hr />
    </div>
  );
}
