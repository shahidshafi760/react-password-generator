import { useCallback, useState } from 'react';
import './App.css';

function App() {
  // State variables
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // Password generator function
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    // Include numbers and special characters based on checkbox selections
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!~@#$%^&*()_+{}|\\?<-=/>";

    // Generate password of desired length
    for (let i = 1; i <= length; i++) {
      const charIndex = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-80 p-6 bg-white rounded-lg shadow-md">
        {/* Heading */}
        <h1 className="text-xl font-bold mb-4 text-center text-pink-700">Password Generator</h1>

        {/* Generated Password Display */}
        <input
          type="text"
          value={password}
          placeholder="Generated Password"
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
          readOnly
        />
        <button className="w-full py-2 mb-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">copy</button>

        {/* Length Slider */}
        <div className="mb-4">
          <label htmlFor="length" className="block text-sm font-medium mb-1">
            Password Length: {length}
          </label>
          <input
            id="length"
            type="range"
            min="1"
            max="100"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value, 10))}
            className="w-full"
          />
        </div>

        {/* Checkboxes for options */}
        <div className="flex items-center justify-between mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={(e) => setNumberAllowed(e.target.checked)}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="ml-2 text-sm">Add Numbers</span>
          </label>

          <label className="flex items-center">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={(e) => setCharAllowed(e.target.checked)}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="ml-2 text-sm">Add Characters</span>
          </label>
        </div>

        {/* Generate Button */}
        <button
          onClick={passwordGenerator}
          className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Generate Password
        </button>   
      </div>
    </div>
  );
}

export default App;
