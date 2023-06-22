import React, { useState } from "react";
import "./input.css";

const Input = ({ error, disabled, helperText, startIcon, endIcon }) => {
  const [inputValue, setInputValue] = useState("");
  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const getInputClasses = () => {
    let inputClasses = "inp";
    inputClasses += error ? " error" : "";
    inputClasses += hover ? " hover" : "";
    inputClasses += focus ? " focus" : "";
    if (error && hover) {
      inputClasses = "inp hover";
    }
    inputClasses += startIcon ? " input-startIcon" : "";
    inputClasses += endIcon ? " input-endIcon" : "";

    return inputClasses;
  };

  const getLabelClasses = () => {
    let labelClasses = "lbl";
    labelClasses += error ? " error" : "";
    labelClasses += hover ? " hover" : "";
    labelClasses += focus ? " focus" : "";
    if (error && hover) {
      labelClasses = "lbl hover";
    }
    return labelClasses;
  };

  const getLabelDownClasses = () => {
    let labelDownClasses = "lblDown";
    labelDownClasses += error ? " error" : "";
    labelDownClasses += hover ? " hover" : "";
    labelDownClasses += focus ? " focus" : "";
    if (error && hover) {
      labelDownClasses = "lblDown hover";
    }
    return labelDownClasses;
  };

  const startOrEndIconClassName = () => {
    let iconClassName = "material-symbols-outlined";
    iconClassName += startIcon ? " startIcon" : "";
    iconClassName += endIcon ? " endIcon" : "";

    return iconClassName;
  };

  const renderIcon = (iconName) => (
    <span className={startOrEndIconClassName()}>{iconName}</span>
  );

  return (
    <div className="container">
      <label className={getLabelClasses()} htmlFor="inputField">
        Label
      </label>
      <div className="icon-input-container">
        {startIcon && renderIcon("call")}
        <input
          className={getInputClasses()}
          type="text"
          id="inputField"
          placeholder="Placeholder"
          value={inputValue}
          onChange={handleInputChange}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          error={error}
          disabled={disabled}
          helperText={helperText}
        />
        {endIcon && renderIcon("lock")}
      </div>
      <label className={getLabelDownClasses()} htmlFor="inputField">
        {helperText}
      </label>
    </div>
  );
};

export default Input;
