import { useState } from 'react';

function App() {
  const techStack = ['React', 'Node.js', 'Express.js'];
  const [content, setContent] = useState("I am learning react");
  const [buttonText, setButtonText] = useState("Update Me");


  const [pageMessage, setPageMessage] = useState("This is Home page");

  const handleClick = () => {
    setContent("I am learning react and hooks as well");
    setButtonText("Updated!");
  };

  return (
    <div>
      <nav style={{ marginBottom: '20px' }}>
        <button onClick={() => setPageMessage("This is Home page")}>Home</button>
        <button onClick={() => setPageMessage("This is Blog page")}>Blog</button>
        <button onClick={() => setPageMessage("This is contact us page")}>Contact us</button>
      </nav>

      <h1>{pageMessage}</h1>

      {/* Show your existing tech stack and button only if Home is selected */}
      {pageMessage === "This is Home page" && (
        <>
          <h2>My Tech Stack</h2>
          <ul>
            {techStack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>

          <p>{content}</p>
          <button onClick={handleClick}>{buttonText}</button>
        </>
      )}
    </div>
  );
}

export default App;
