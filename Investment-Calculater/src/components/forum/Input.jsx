import { useState } from "react";

export default function Input({ label, onInputChange }) {
  const [inputValue, setInputValue] = useState('');
  function handleChange(e){
    setInputValue(e.target.value)
    onInputChange(e.target.value)
  }
  return (
    <label id={label}>
      {label}
      <input value={inputValue} type="number" onChange={handleChange}/>
    </label>
  );
}
