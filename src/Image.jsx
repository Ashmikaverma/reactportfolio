import React from 'react';

import './Image.css';

 

function Header() {
  // Import result is the URL of your image
  return( 
  <img class="image1" src="data:image/jpeg;base64,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" 
  alt="Logo" 
  />
  )

}

export default Header;
