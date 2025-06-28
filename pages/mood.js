import { useState } from "react";
import { db } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function MoodCheckIn() {
    const [anxiety, setAnxiety] = useState(5);
    const [sadness, setSadness] = useState(5);
    const [openness, setOpenness] = useState(5);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userId = "user-id"; // Replace with actual user ID from auth context

        try {
            await addDoc(collection(db, "sessions"), {
                userId,
                mood: {
                    anxiety,
                    sadness,
                    openness,
                },
                timestamp: new Date(),
            });
            // Reset sliders or provide feedback
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Mood Check-In</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label>Anxious → Calm</label>
                    <input
                        type="range"
                        min="0"
                        max="10"
                        value={anxiety}
                        onChange={(e) => setAnxiety(e.target.value)}
                    />
                </div>
                <div>
                    <label>Sad → Joyful</label>
                    <input
                        type="range"
                        min="0"
                        max="10"
                        value={sadness}
                        onChange={(e) => setSadness(e.target.value)}
                    />
                </div>
                <div>
                    <label>Closed → Open</label>
                    <input
                        type="range"
                        min="0"
                        max="10"
                        value={openness}
                        onChange={(e) => setOpenness(e.target.value)}
                    />
                </div>
                <div className="flex space-x-4">
                    <button type="submit" className="btn">Talk to someone</button>
                    <button type="button" className="btn">Enter sanctuary</button>
                </div>
            </form>
        </div>
    );
}