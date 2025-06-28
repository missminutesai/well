import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { collection, query, where, onSnapshot } from "firebase/firestore";

export default function Chat() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const fetchSessions = async () => {
      const q = query(collection(db, "sessions"), where("status", "==", "available"));
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

  const startChat = (sessionId) => {
    // Logic to initiate WebRTC connection
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Available Mood Sessions</h1>
      <ul>
        {sessions.map((session) => (
          <li key={session.id} className="mb-2">
            <div className="flex justify-between items-center p-4 border rounded-lg">
              <span>{session.mood}</span>
              <button
                onClick={() => startChat(session.id)}
                className="bg-primary text-white px-4 py-2 rounded"
              >
                Chat
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}