import React from "react";

const InputEmpData = ({ idInput, inputValue, nameLabel, disabled }) => {
  return (
    <div className="d-flex-inline">
      <label className="mx-0 my-1" 
      htmlFor={idInput}>
        {nameLabel + `\b`}
        </label>
      <input
        className="form-control-xs border-0"
        type="text"
        id={idInput}
        name={idInput}
        value={inputValue}
        disabled={disabled}
      />
    </div>
  );
};

export default InputEmpData;
