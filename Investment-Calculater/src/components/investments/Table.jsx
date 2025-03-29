import { calculateInvestmentResults } from "../../util/investment";
const HEADERS = [
  "Year",
  "Investment Value",
  "Interest(Year)",
  "Total Interest",
  "Invested Capital",
];

export default function Table({ investment }) {
  const annualData = calculateInvestmentResults(investment);
  console.log(annualData);
  return (
    <table id="result">
      <thead>
        <tr>
          {HEADERS.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {annualData.length
          ? annualData.map((item, index) => (
              <tr key={index}>
                <td>{item.year}</td>
                <td>{item.interest}</td>
                <td>{parseInt(2025 + index, 10)}</td>
                <td>{item.valueEndOfYear}</td>
                <td>{item.annualInvestment}</td>
              </tr>
            ))
          : null}
      </tbody>
    </table>
  );
}
