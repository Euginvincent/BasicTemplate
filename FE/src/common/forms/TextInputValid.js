import React from 'react'

const TextInputValid = props => {
  const {
    name,
    type,
    label,
    className = "form-control form-control-lg control-style",
    value = '',
    onChange,
    onKeyDown,
    placeholder = label,
    error,
    onBlur,
    maxLength,
    disabled
  } = props

  const errorText = error?.message || null
  const classes = errorText ? `${className} is-invalid` : className

  return (
    <div label={label}>
      <input
        name={name}
        onChange={onChange}
        value={value}
        onKeyDown={onKeyDown}
        className={classes}
        type={type}
        placeholder={placeholder}
        onBlur={onBlur}
        maxLength={maxLength}
        disabled={disabled}
      />
      {errorText ? <div className="error-text-mo">{errorText}</div> : null}
    </div>
  )
}

export default TextInputValid
