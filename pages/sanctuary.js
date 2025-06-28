import React from 'react';

const Sanctuary = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold mb-8">Sanctuary</h1>
            <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-blue-200 rounded-lg shadow-md">
                    <h2 className="text-2xl">Ocean</h2>
                    <p>Relaxing ambient sounds of the ocean waves.</p>
                </div>
                <div className="p-4 bg-green-200 rounded-lg shadow-md">
                    <h2 className="text-2xl">Forest</h2>
                    <p>Calming sounds of rustling leaves and birds.</p>
                </div>
                <div className="p-4 bg-purple-200 rounded-lg shadow-md">
                    <h2 className="text-2xl">Stars</h2>
                    <p>Soothing sounds of a starry night.</p>
                </div>
                <div className="p-4 bg-red-200 rounded-lg shadow-md">
                    <h2 className="text-2xl">Firelight</h2>
                    <p>Warm sounds of a crackling fire.</p>
                </div>
            </div>
            <div className="mt-8">
                <h3 className="text-xl">Journaling Tools</h3>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-4">Burn a Thought</button>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Whisper to Wind</button>
            </div>
        </div>
    );
};

export default Sanctuary;