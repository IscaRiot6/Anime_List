// import React from 'react';

// const DarkModeButton = ({ darkMode, toggleDarkMode }) => {
//   return (
//     <button className={darkMode ? 'dark-mode' : 'light-mode'} onClick={toggleDarkMode}>
//       {darkMode ? 'Light Mode' : 'Dark Mode'}
//     </button>
//   );
// };

// export default DarkModeButton;

import React from 'react';

const DarkModeButton = ({ darkMode, toggleDarkMode, className }) => {
  return (
    <button className={`dark-mode-button ${className} ${darkMode ? 'dark-mode' : 'light-mode'}`} onClick={toggleDarkMode}>
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeButton;

