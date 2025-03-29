import Input from "./Input";

export default function Form({ onChangeParams }) {
  function handleInvestmentValue(key, value) {
    onChangeParams(key, value);
  }
  return (
    <div id="user-input">
      <div className="input-group">
        <Input
          label={"INITIAL INVESTMENT"}
          onInputChange={(value) =>
            handleInvestmentValue("initialInvestment", value)
          }
        />
        <Input
          label={"ANNUAL INVESTMENT"}
          onInputChange={(value) =>
            handleInvestmentValue("annualInvestment", value)
          }
        />
      </div>
      <div className="input-group">
        <Input
          label={"EXPECTED RETURN"}
          onInputChange={(value) =>
            handleInvestmentValue("expectedReturn", value)
          }
        />
        <Input
          label={"DURATION"}
          onInputChange={(value) => handleInvestmentValue("duration", value)}
        />
      </div>
    </div>
  );
}
