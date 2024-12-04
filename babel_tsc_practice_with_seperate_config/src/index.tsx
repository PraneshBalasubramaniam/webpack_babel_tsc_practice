import React from 'react';
import App from './App';

// empty comment
const Main:React.FC = () => {
  return (
    <div>
      <h1>Hello, Babel!</h1>
      <p>This is JSX being converted to JavaScript.</p>
      <App />
    </div>
  );
};

export default Main;
