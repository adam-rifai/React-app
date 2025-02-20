// this a reusable Destination component-----!-->
const Destination = ({ img, name, date, location, text }) => {
  return (
    <section className="entry-section">
      <img src={img.src} alt={img.alt} className="city-img" />
      <div className="description">
        <h3 className="city-title">
          <span>{location}</span>
          {name}
        </h3>
        <span className="date">{date}</span>
        <p>{text}</p>
      </div>
    </section>
  );
};

export default Destination;
