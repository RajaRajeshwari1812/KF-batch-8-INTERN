
import { useState } from 'react';

function App() {
  const techStack = ['React', 'Node.js', 'Express.js'];
  const [content, setContent] = useState("I am learning react");
  const [buttonText, setButtonText] = useState("Update Me");

  const handleClick = () => {
    setContent("I am learning react and hooks as well");
    setButtonText("Updated!");
  };

  return (
    <div>
      <h1>Hello World</h1>
      <h2>My Tech Stack</h2>
      <ul>
        {techStack.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>

      <p>{content}</p>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
}

export default App;


