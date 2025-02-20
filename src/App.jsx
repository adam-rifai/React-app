import Header from "./components/header";
import Destination from "./components/destination";

/* if you'd like to use relative path to access an image you need 
to import it this way: import china from "./components/entry-components/Paris.webp"; then you can use the word china as a variable.*/

import places from "./places"; // Import the array

const App = () => {
  return (
    <>
      <Header />
      {places.map((place) => (
        <Destination key={place.index} {...place} />
      ))}
    </>
  );
};

export default App;
