import React from 'react';
import "../styles/FilterBox.css"



function FilterBox({ value, onChange }) {
  const handleInputChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleInputChange} placeholder="Search" />
    </div>
  );
}

export default FilterBox;