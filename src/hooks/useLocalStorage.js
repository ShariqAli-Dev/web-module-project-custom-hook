// Enhance useState with teh ability to persist value beyond the current sessin.
// If a user is filling out a form, for examplle, and accidently closes the tab, they should be able to come back and pick up where they left off

import { useState } from "react";

// export default function useLocalStorage(key, initialValue) {
//   // when initializing, check local storage for the value. If it's there, use it to initialize. Otherwise, use initialValue
//   const [value, setValue] = useState(() => {
//     if (localStorage.getItem(key)) {
//       return JSON.parse(window.localStorage.getItem(key));
//     } else {
//       return initialValue;
//     }
//   });

//   // When updating state, also update local storage
//   // Do this by "composing" setValue into a new function that sets the value and local storage
//   const setValueAndLocalStorage = (newValue) => {
//     setValue(newValue);
//     window.localStorage.setItem(key, JSON.stringify(newValue));
//   };
//   return [value, setValueAndLocalStorage];
// }

export default function useLocalStorage(key, initialValue) {
  // To retrieve an item from localStorage, call localStorage.getItem('itemName')
  // If that tiem doens't exist, it will return undefined
  const [storedValue, setStoredValue] = useState(() => {
    // Get from local storage by key
    const item = window.localStorage.getItem(key);

    // Parse and return stored json, or, if undefined, return intitialValue
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = (value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
    setStoredValue(key);
  };

  return [storedValue, setValue];
}
