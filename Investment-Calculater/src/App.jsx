import { useState } from "react";
import Form from "./components/forum/form";
import Table from "./components/investments/Table";
function App() {
  const [investment, setInvestment] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });
  function onChangedInvestmentStateValue(key, value) {
    setInvestment((prevState) => {
      const newObj = { ...prevState };
      newObj[key] = value;
      return newObj;
    });
  }
  return (
    <>
      <Form
        onChangeParams={(key, value) =>
          onChangedInvestmentStateValue(key, value)
        }
      />
      <Table investment={investment} />
    </>
  );
}

export default App;
