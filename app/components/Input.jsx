import React from 'react'

const Input = ({className, Id, ariaLabel, placeHolder, inputType, inputName}) => {
  return (
    <div className={className}>
        <input
            id={Id}
            aria-label={ariaLabel}
            placeholder={placeHolder}
            type={inputType}
            name={inputName}
            />
    </div>
  )
}

export default Input