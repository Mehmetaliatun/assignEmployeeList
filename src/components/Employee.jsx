import "./Employee.css";

const Employee = (props) => {
  const { name, image, age, email } = props;
  return (
    <div className="container">
      <img src={image} alt="img1" />
      <div className="text">
        <h2>{name}</h2>
        <p>{email} </p>
        <p>{age}</p>
      </div>
    </div>
  );
};

export default Employee;
