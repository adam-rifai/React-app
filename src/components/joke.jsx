import jokes from "../jocksData";
const JokeComponent = () => {
  return (
    <>
      {jokes.map((joke, index) => (
        <p key={index}>
          <strong>{joke.setup}</strong> - {joke.punchline}
        </p>
      ))}
    </>
  );
};

export default JokeComponent;
