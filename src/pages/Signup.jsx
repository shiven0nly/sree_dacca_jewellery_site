import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const { signup, googleSignIn } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            return setError('Passwords do not match');
        }

        if (password.length < 6) {
            return setError('Password must be at least 6 characters');
        }

        try {
            await signup(email, password);
            navigate('/');
        } catch (err) {
            setError('Failed to create an account.');
            console.error(err);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
            navigate('/');
        } catch (err) {
            setError('Failed to sign in with Google.');
            console.error(err);
        }
    };

    return (
        <div className="min-h-screen pt-28 pb-12 flex items-center justify-center bg-gradient-to-b from-[#FDF8F2] via-[#FCF9F5] to-white px-4">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] w-full max-w-md border border-[#F0EBE6]">
                <div className="text-center mb-8">
                    <span className="text-[#8B2F2F] text-xs font-semibold tracking-[0.25em] uppercase">Join Us</span>
                    <h2 className="text-3xl font-serif text-[#0F0F0F] mt-3">Create Account</h2>
                </div>

                {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-6 border border-red-100">{error}</div>}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-gray-600 text-sm font-medium mb-1.5 uppercase tracking-wider">Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-[#FAFAFA] border border-[#EAEaea] rounded-lg px-4 py-3 text-[#0F0F0F] focus:border-[#8B2F2F] focus:ring-1 focus:ring-[#8B2F2F] outline-none transition-all placeholder-gray-400"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 text-sm font-medium mb-1.5 uppercase tracking-wider">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-[#FAFAFA] border border-[#EAEaea] rounded-lg px-4 py-3 text-[#0F0F0F] focus:border-[#8B2F2F] focus:ring-1 focus:ring-[#8B2F2F] outline-none transition-all placeholder-gray-400"
                            placeholder="Create password"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 text-sm font-medium mb-1.5 uppercase tracking-wider">Confirm Password</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full bg-[#FAFAFA] border border-[#EAEaea] rounded-lg px-4 py-3 text-[#0F0F0F] focus:border-[#8B2F2F] focus:ring-1 focus:ring-[#8B2F2F] outline-none transition-all placeholder-gray-400"
                            placeholder="Confirm password"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-[#8B2F2F] text-white font-medium py-3.5 rounded-lg hover:bg-[#702222] transition-colors shadow-lg shadow-[#8B2F2F]/20 uppercase tracking-widest text-sm">
                        Sign Up
                    </button>
                </form>

                <div className="flex items-center gap-4 my-8">
                    <div className="h-px bg-gray-200 flex-1" />
                    <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Or continue with</span>
                    <div className="h-px bg-gray-200 flex-1" />
                </div>

                <button
                    onClick={handleGoogleSignIn}
                    className="w-full bg-white border border-gray-200 text-[#0F0F0F] font-medium py-3.5 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2.5 shadow-sm group"
                >
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    Continue with Google
                </button>

                <p className="mt-8 text-center text-gray-500 text-sm">
                    Already have an account?{' '}
                    <Link to="/login" className="text-[#8B2F2F] font-semibold hover:underline">Sign in</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
