import React from 'react';

const Features = () => {
    const features = [
        {
            title: "Mood-Based Matching",
            description: "Connect with others based on your current mood."
        },
        {
            title: "Anonymous Voice & Text",
            description: "Engage in conversations without revealing your identity."
        },
        {
            title: "Digital Sanctuary",
            description: "A safe space for relaxation and mindfulness."
        }
    ];

    return (
        <div className="py-10">
            <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
            <div className="flex flex-wrap justify-center">
                {features.map((feature, index) => (
                    <div key={index} className="max-w-xs m-4 p-6 bg-white rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold">{feature.title}</h3>
                        <p className="mt-2 text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;