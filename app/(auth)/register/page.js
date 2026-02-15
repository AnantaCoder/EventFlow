"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from './register.module.css';

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("participant");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        setLoading(true);

        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password, role }),
            });

            const data = await res.json();

            if (res.ok) {
                setSuccess("Registration successful! Redirecting to login...");
                setTimeout(() => router.push("/login"), 1500);
            } else {
                setError(data.error || "Registration failed");
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.authPage}>
            <div className={styles.authBox}>
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white">Create an Account</h2>
                    <p className="mt-2 text-sm text-white/70">Join EventFlow today</p>
                </div>

                <form className={styles.authForm} onSubmit={handleSubmit}>
                    <div className="space-y-3">
                        <div>
                            <label className="block text-sm font-medium text-white/80 uppercase">Full Name</label>
                            <input
                                type="text"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                disabled={loading}
                                className={`mt-1 block w-full rounded-lg px-4 py-2.5 ${styles.authInput}`}
                                placeholder="John Doe"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-white/80 uppercase">Email</label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={loading}
                                className={`mt-1 block w-full rounded-lg px-4 py-2.5 ${styles.authInput}`}
                                placeholder="you@example.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-white/80 uppercase">Password</label>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                disabled={loading}
                                className={`mt-1 block w-full rounded-lg px-4 py-2.5 ${styles.authInput}`}
                                placeholder="••••••••"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-white/80 uppercase">I am a</label>
                            <select
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                disabled={loading}
                                className={`mt-1 block w-full rounded-lg px-4 py-2.5 ${styles.authInput}`}
                            >
                                <option value="participant" style={{ color: "#1f2937" }}>Participant</option>
                                <option value="mentor" style={{ color: "#1f2937" }}>Mentor</option>
                                <option value="judge" style={{ color: "#1f2937" }}>Judge</option>
                                <option value="admin" style={{ color: "#1f2937" }}>Admin</option>
                            </select>
                        </div>
                    </div>

                    {error && (
                        <div className="mt-4 text-red-300 text-sm text-center bg-red-500/20 p-3 rounded-lg border border-red-500/30">
                            {error}
                        </div>
                    )}

                    {success && (
                        <div className="mt-4 text-green-300 text-sm text-center bg-green-500/20 p-3 rounded-lg border border-green-500/30">
                            {success}
                        </div>
                    )}

                    <div className="mt-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className={styles.authButton}
                        >
                            {loading ? "Signing up..." : "Sign Up"}
                        </button>
                    </div>

                    <div className="mt-4 text-center text-sm text-white/70">
                        Already have an account?{" "}
                        <a href="/login" className={styles.authLink}>
                            Sign In
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}
