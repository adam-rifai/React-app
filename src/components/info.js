const France = (props) => {
  return (
    <section className="entry-section">
      <img src={props.img.src} alt={props.img.alt} className="city-img" />
      <div className="description">
        <h3 className="city-title">
          <span>{props.location}</span>
          {props.name}
        </h3>
        <span className="date">{props.date}</span>
        <p>{props.text}</p>
      </div>
    </section>
  );
};

export default France;
