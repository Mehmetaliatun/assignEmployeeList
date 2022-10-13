import Card from "./components/Card";
import Employee from "./components/Employee";
import data from "./data/data";

function App() {
  return (
    <div style={{ backgroundColor: "#00d0ff" }}>
      {data.map((employee) => (
        <Employee
          name={employee.name}
          image={employee.image}
          email={employee.email}
          age={employee.age}
        />
      ))}
      <Card />
    </div>
  );
}

export default App;
