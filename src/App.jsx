import { useState } from "react";
import people from "./data";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, image, text, job } = people[index];

  const handlePrev = () => {
    if (index <= 0) {
      return setIndex(3);
    }
    setIndex(index - 1);
  };

  const handleNext = () => {
    if (index >= people.length - 1) {
      return setIndex(0);
    }
    setIndex(index + 1);
  };

  return (
    <div className="appWrapper">
      <div className="slider-wrapper">
        <div className="image">
          <img className="slider-image" src={image} alt={name} />
          <div className="slider-name">{name}</div>
        </div>
        <div className="slider-job">
          <h3 className="job">{job}</h3>
        </div>
        <div className="slider-text">
          <p className="text">{text}</p>
        </div>
        <div className="slider-button">
          <button className="style-button" onClick={handlePrev}>
            ⇍
          </button>
          <button className="style-button" onClick={handleNext}>
            ⇏
          </button>
        </div>
        <button
          className="random-button"
          onClick={() => setIndex(Math.floor(Math.random() * 4))}
        >
          random
        </button>
      </div>
    </div>
  );
};
export default App;
