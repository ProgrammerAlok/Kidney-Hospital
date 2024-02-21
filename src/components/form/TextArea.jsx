import React from 'react'

const TextArea = ({name, placeholder, value, handleOnChange}) => {
  return (
    <div className="bg-[#f5f6f7] rounded-[10px] overflow-hidden">
      <textarea 
        className='w-full !bg-transparent border-0 px-6 pt-3' 
        placeholder={placeholder} 
        rows={5} 
        style={{resize: 'none'}} 
        name={name}
        value={value}
        onChange={handleOnChange}
      />
    </div>
  )
}

export default TextArea
