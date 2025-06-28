import { useState } from "react";
import { auth } from "../lib/firebase";
import { useRouter } from "next/router";

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await auth.createUserWithEmailAndPassword(email, password);
            router.push("/"); // Redirect to home after successful signup
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-primary to-accent text-white">
            <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h1 className="text-2xl mb-4">Sign Up</h1>
                {error && <p className="text-red-500">{error}</p>}
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 rounded"
                        required
                    />
                </div>
                <button type="submit" className="w-full bg-primary hover:bg-accent text-white font-bold py-2 rounded">
                    Sign Up
                </button>
            </form>
        </div>
    );
}