import React, { useState } from 'react';
import './App.css';

const Star = () => (
  <img
    src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/64/star-icon.png"
    alt="star"
    style={{ width: '30px', height: '30px', marginRight: '5px' }}
  />
);

const App = () => {
  const [count, setCount] = useState(0);

  const addOne = () => setCount(count + 1);
  const removeOne = () => setCount(count > 0 ? count - 1 : count);

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(<Star key={i} />);
    }
    return stars;
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://via.placeholder.com/80x30" className="App-logo" alt="logo" />
        <span className="menu-icon">≡</span>
      </header>
      <main>
        <div className="counter-container">
          <button onClick={removeOne}>Remove 1</button>
          <span className="count">{count}</span>
          <button onClick={addOne}>Add 1</button>
        </div>
        <div className="stars-container">{renderStars()}</div>
      </main>
    </div>
  );
};

export default App;

