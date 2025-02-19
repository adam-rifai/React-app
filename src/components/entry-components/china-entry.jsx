const China = () => {
  const date = new Date().toLocaleString();
  return (
    <section className="entry-section">
      <img src="/china.webp" alt="china img" className="city-img" />
      <div className="description">
        <h3 className="city-title">
          <span>📍</span>
          Shanghai, China
        </h3>
        <span className="date">{date}</span>
        <p>
          Shanghai, a city of contrasts, mixes ancient traditions with
          cutting-edge modernity. From the historic Bund to the soaring skyline,
          it's a place where culture and innovation meet.
        </p>
      </div>
    </section>
  );
};

export default China;
