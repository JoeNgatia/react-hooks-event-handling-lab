import React from 'react';

function Keypad() {
  // Event handler for input change event
  const handleChange = () => {
    console.log('Entering password...');
  };

  return (
    <div>
      {/* Input field with type password and onChange event handler */}
      <input
        type="password"
        onChange={handleChange} // Attach change event handler
      />
    </div>
  );
}

export default Keypad;
