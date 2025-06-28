import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Line } from "react-chartjs-2";

export default function Timeline() {
    const [moodData, setMoodData] = useState([]);
    const [journalEntries, setJournalEntries] = useState([]);

    useEffect(() => {
        const fetchMoodData = async () => {
            const moodCollection = collection(db, "sessions");
            const moodSnapshot = await getDocs(moodCollection);
            const moodList = moodSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setMoodData(moodList);
        };

        const fetchJournalEntries = async () => {
            const journalCollection = collection(db, "journals");
            const journalSnapshot = await getDocs(journalCollection);
            const journalList = journalSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setJournalEntries(journalList);
        };

        fetchMoodData();
        fetchJournalEntries();
    }, []);

    const chartData = {
        labels: moodData.map(entry => entry.timestamp), // Assuming timestamp is in a suitable format
        datasets: [
            {
                label: "Mood Check-Ins",
                data: moodData.map(entry => entry.mood), // Assuming mood is a numeric value
                fill: false,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
            },
        ],
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Mood Timeline</h1>
            <Line data={chartData} />
            <h2 className="mt-4 text-xl">Journal Entries</h2>
            <ul>
                {journalEntries.map(entry => (
                    <li key={entry.id} className="border-b py-2">
                        {entry.content} {/* Assuming content is a field in the journal entry */}
                    </li>
                ))}
            </ul>
        </div>
    );
}