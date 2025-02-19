const France = () => {
  const date = new Date().toLocaleString();
  return (
    <section className="entry-section">
      <img src="/paris.webp" alt="china img" className="city-img" />
      <div className="description">
        <h3 className="city-title">
          <span>📍</span>
          Paris, France
        </h3>
        <span className="date">{date}</span>
        <p>
          Paris, the **City of Light**, is famous for its rich history, iconic
          landmarks, and romantic atmosphere. From the **Eiffel Tower** to the
          **Louvre Museum**, it blends culture, art, and fashion. Strolling
          along the **Seine River**, enjoying a café in **Montmartre**, or
          exploring the **Champs-Élysées** makes every visit unforgettable.
        </p>
      </div>
    </section>
  );
};

export default France;
