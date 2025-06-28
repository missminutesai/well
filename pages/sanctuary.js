import React, { useState } from 'react';

const Sanctuary = () => {
  const [message, setMessage] = useState("");

  const handleBurnThought = () => {
    const thought = prompt("What thought would you like to let go?");
    if (thought) {
      setMessage("Your thought has been burned. You are free.");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  const handleWhisperWind = () => {
    const whisper = prompt("What would you like to whisper to the wind?");
    if (whisper) {
      setMessage("Your whisper floats away, light as air.");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-teal-100 to-purple-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-8 text-blue-700">Sanctuary</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-blue-200/70 rounded-lg shadow-md">
          <h2 className="text-2xl text-blue-800">Ocean</h2>
          <p className="text-blue-700">Relax to the sound of waves.</p>
        </div>
        <div className="p-4 bg-green-200/70 rounded-lg shadow-md">
          <h2 className="text-2xl text-green-800">Forest</h2>
          <p className="text-green-700">Immerse yourself in nature sounds.</p>
        </div>
        <div className="p-4 bg-purple-200/70 rounded-lg shadow-md">
          <h2 className="text-2xl text-purple-800">Stars</h2>
          <p className="text-purple-700">Gaze at the night sky and unwind.</p>
        </div>
        <div className="p-4 bg-pink-200/70 rounded-lg shadow-md">
          <h2 className="text-2xl text-pink-800">Firelight</h2>
          <p className="text-pink-700">Feel the warmth of a cozy fire.</p>
        </div>
      </div>
      <div className="mt-8 flex flex-col items-center">
        <h3 className="text-xl mb-2 text-teal-700">Tools</h3>
        <div>
          <button
            className="m-2 p-2 bg-blue-300 hover:bg-blue-400 text-blue-900 rounded transition"
            onClick={handleBurnThought}
          >
            Burn a Thought
          </button>
          <button
            className="m-2 p-2 bg-green-300 hover:bg-green-400 text-green-900 rounded transition"
            onClick={handleWhisperWind}
          >
            Whisper to Wind
          </button>
        </div>
        {message && (
          <div className="mt-4 text-teal-800 bg-white/60 px-4 py-2 rounded shadow">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sanctuary;