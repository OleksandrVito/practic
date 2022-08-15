import "./app-info.css";

const AppInfo = (props) => {
  const { employees, increase } = props;

  return (
    <div className="app-info">
      <h1>Облік працівників в компанії</h1>
      <h2>Загальна кількість працівників: {employees}</h2>
      <h2>Премію отримають: {increase}</h2>
    </div>
  );
};

export default AppInfo;
