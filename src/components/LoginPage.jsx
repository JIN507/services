import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { LogIn, User, Lock, AlertCircle } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

// API endpoint for authentication
const AUTH_API = import.meta.env.PROD ? '/api/auth' : '/.netlify/functions/auth';

// Authenticate via secure server-side API
async function authenticateUser(username, password) {
    try {
        const response = await fetch(AUTH_API, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'login', username, password })
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Auth error:', error);
        return { success: false, error: 'Network error' };
    }
}

const MAX_ATTEMPTS = 5;
const LOCKOUT_DURATION = 5 * 60 * 1000; // 5 minutes
const LOCKOUT_KEY = 'auth_lockout';

function getLockoutState() {
    try {
        const data = sessionStorage.getItem(LOCKOUT_KEY);
        if (!data) return { attempts: 0, lockedUntil: null };
        return JSON.parse(data);
    } catch {
        return { attempts: 0, lockedUntil: null };
    }
}

function setLockoutState(state) {
    sessionStorage.setItem(LOCKOUT_KEY, JSON.stringify(state));
}

export default function LoginPage({ onLoginSuccess }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    const lockoutState = useRef(getLockoutState());

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Check if locked out
        const now = Date.now();
        if (lockoutState.current.lockedUntil && now < lockoutState.current.lockedUntil) {
            const remaining = Math.ceil((lockoutState.current.lockedUntil - now) / 1000 / 60);
            setError(`تم قفل الحساب. يرجى المحاولة بعد ${remaining} دقيقة`);
            return;
        } else if (lockoutState.current.lockedUntil) {
            // Reset if lockout expired
            lockoutState.current = { attempts: 0, lockedUntil: null };
            setLockoutState(lockoutState.current);
        }

        setError('');
        setIsLoading(true);

        const result = await authenticateUser(username, password);
        
        if (result.success && result.token) {
            // Reset lockout on success
            lockoutState.current = { attempts: 0, lockedUntil: null };
            setLockoutState(lockoutState.current);
            onLoginSuccess(result.token);
        } else {
            lockoutState.current.attempts++;
            
            if (lockoutState.current.attempts >= MAX_ATTEMPTS) {
                lockoutState.current.lockedUntil = Date.now() + LOCKOUT_DURATION;
                setError(`تم قفل الحساب لمدة 5 دقائق بسبب المحاولات الفاشلة المتعددة`);
            } else {
                const remaining = MAX_ATTEMPTS - lockoutState.current.attempts;
                setError(`اسم المستخدم أو كلمة المرور غير صحيحة (${remaining} محاولات متبقية)`);
            }
            setLockoutState(lockoutState.current);
        }
        setIsLoading(false);
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-navy-950 text-slate-900 dark:text-white transition-colors duration-300 selection:bg-primary selection:text-white">
            <ThemeToggle />

            <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-[url('/bg-tech.png')] bg-cover bg-center opacity-60 dark:opacity-40 mix-blend-overlay"
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-50/20 via-slate-50/60 to-slate-50 dark:from-navy-950/20 dark:via-navy-950/60 dark:to-navy-950"></div>
                </div>

                {/* Login Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 w-full max-w-md mx-4"
                >
                    <div className="bg-white dark:bg-navy-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-navy-700 shadow-card hover:shadow-card-hover transition-all duration-300 p-8">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <div className="w-16 h-16 bg-slate-900 dark:bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <LogIn className="w-8 h-8 text-white" />
                            </div>
                            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                                تسجيل الدخول
                            </h1>
                            <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">
                                أدخل بيانات الدخول للمتابعة
                            </p>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 rounded-xl mb-6 border border-red-200 dark:border-red-800"
                            >
                                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                <span className="text-sm font-medium">{error}</span>
                            </motion.div>
                        )}

                        {/* Login Form */}
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Username Field */}
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                                    اسم المستخدم
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <User className="w-5 h-5 text-slate-400" />
                                    </div>
                                    <input
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="w-full pr-10 pl-4 py-3 bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-navy-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                                        placeholder="أدخل اسم المستخدم"
                                        required
                                        dir="ltr"
                                    />
                                </div>
                            </div>

                            {/* Password Field */}
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                                    كلمة المرور
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <Lock className="w-5 h-5 text-slate-400" />
                                    </div>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full pr-10 pl-4 py-3 bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-navy-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                                        placeholder="أدخل كلمة المرور"
                                        required
                                        dir="ltr"
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-primary dark:hover:bg-primary-dark text-white text-sm font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                            >
                                {isLoading ? (
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                ) : (
                                    <>
                                        <span>تسجيل الدخول</span>
                                        <LogIn className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Footer */}
                    <p className="text-center text-slate-500 dark:text-slate-400 text-sm mt-6">
                        &copy; {new Date().getFullYear()} الحلول التقنية
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
