import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { collection, query, where, onSnapshot } from "firebase/firestore";

export default function Chat() {
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        const fetchSessions = async () => {
            const q = query(collection(db, "sessions"), where("mood", "==", "oppositeMood")); // Adjust the query as needed
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                const sessionsData = [];
                querySnapshot.forEach((doc) => {
                    sessionsData.push({ id: doc.id, ...doc.data() });
                });
                setSessions(sessionsData);
            });
            return () => unsubscribe();
        };

        fetchSessions();
    }, []);

    const handleChatStart = (sessionId) => {
        // Logic to initiate WebRTC communication
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Available Sessions</h1>
            <ul>
                {sessions.map((session) => (
                    <li key={session.id} className="my-2">
                        <button
                            onClick={() => handleChatStart(session.id)}
                            className="bg-primary text-white px-4 py-2 rounded"
                        >
                            Chat with {session.userId}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}