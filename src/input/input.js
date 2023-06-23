import React, { useState } from "react";
import "./input.css";

const Input = ({ error, disabled, helperText, startIcon, endIcon, size, fullWidth, multiline, rows, title }) => {
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
    inputClasses += size === "sm" ? " sm" : "";
    inputClasses += size === "md" ? " md" : "";
    inputClasses += fullWidth ? " fullWidth" : ""; 
    return inputClasses;
  };

  const getTextAreaClasses = () => {
    let textAreaClasses = "textArea";
    textAreaClasses += error ? " error" : "";
    textAreaClasses += hover ? " hover" : "";
    textAreaClasses += focus ? " focus" : "";
    if (error && hover) {
      textAreaClasses = "textArea hover";
    }
    textAreaClasses += fullWidth ? " fullWidth" : ""; 
    return textAreaClasses;
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
      <p className="titleInput">{title}</p>
      <label className={getLabelClasses()} htmlFor="inputField">
        Label
      </label>
      
        {multiline ?
        <textarea
          id="inputField"
          className={getTextAreaClasses()}
          rows={rows}
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
          fullWidth={fullWidth}
          title={title}
        />
        :
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
            fullWidth={fullWidth}
            title={title}
          />
        {endIcon && renderIcon("lock")}
      </div>
      }
      <label className={getLabelDownClasses()} htmlFor="inputField">
        {helperText}
      </label>
    </div>
  );
};

export default Input;
