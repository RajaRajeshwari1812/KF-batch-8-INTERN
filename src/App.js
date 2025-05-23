
function App() {
  const techStack = ['React', 'Node.js', 'Express.js'];

  return (
    <div>
      <h1>Hello World</h1>
      <h2>My Tech Stack</h2>
      <ul>
        {techStack.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

