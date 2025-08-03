import React, { useState } from 'react';
import axios from "axios";
import {Navigate, useNavigate} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // para que no se dispare el formulario
        setIsLoading(true);

        axios.post(
            `https://reqres.in/api/login`,
            { email, password },
            { headers: { 'x-api-key': 'reqres-free-v1' } }
        )
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            navigation('/');
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            setIsLoading(false);
        })
    };

    if (localStorage.getItem('token')) return <Navigate to="/" />

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
            {/* Container principal */}
            <div className="w-full max-w-md">
                {/* Card */}
                <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
                    {/* Header */}
                    <div className="text-center mb-8">
                        {/* Logo/Icon crypto */}
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-2xl font-bold text-white">₿</span>
                        </div>

                        <h1 className="text-2xl font-bold text-white mb-2">
                            Crypto Login
                        </h1>
                        <p className="text-slate-400 text-sm">
                            Accede a tu wallet digital
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email Input */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                                placeholder="tu@email.com"
                                required
                            />
                        </div>

                        {/* Password Input */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Contraseña
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        {/* Remember & Forgot */}
                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center text-slate-300">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 text-orange-500 bg-slate-700 border-slate-600 rounded focus:ring-orange-500 focus:ring-2"
                                />
                                <span className="ml-2">Recordarme</span>
                            </label>
                            <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors">
                                ¿Olvidaste tu contraseña?
                            </a>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3 px-4 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 disabled:from-slate-600 disabled:to-slate-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-lg"
                        >
                            {isLoading ? (
                                <div className="flex items-center justify-center">
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                    Iniciando sesión...
                                </div>
                            ) : (
                                'Iniciar Sesión'
                            )}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="my-6 flex items-center">
                        <div className="flex-1 border-t border-slate-600"></div>
                        <span className="px-4 text-slate-400 text-sm">o continúa con</span>
                        <div className="flex-1 border-t border-slate-600"></div>
                    </div>

                    {/* Social Login */}
                    <div className="grid grid-cols-2 gap-3">
                        <button className="flex items-center justify-center px-4 py-3 bg-slate-700/50 hover:bg-slate-700 border border-slate-600 rounded-xl text-slate-300 transition-all duration-200 hover:scale-105">
                            <span className="text-lg mr-2">🔗</span>
                            MetaMask
                        </button>
                        <button className="flex items-center justify-center px-4 py-3 bg-slate-700/50 hover:bg-slate-700 border border-slate-600 rounded-xl text-slate-300 transition-all duration-200 hover:scale-105">
                            <span className="text-lg mr-2">👤</span>
                            WalletConnect
                        </button>
                    </div>

                    {/* Footer */}
                    <div className="mt-8 text-center">
                        <p className="text-slate-400 text-sm">
                            ¿No tienes cuenta?{' '}
                            <a href="#" className="text-orange-400 hover:text-orange-300 font-medium transition-colors">
                                Regístrate aquí
                            </a>
                        </p>
                    </div>
                </div>

                {/* Crypto prices ticker (decorativo) */}
                <div className="mt-6 bg-slate-800/30 backdrop-blur-sm rounded-xl p-4 border border-slate-700/30">
                    <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center text-orange-400">
                            <span className="mr-1">₿</span>
                            <span className="font-medium">BTC</span>
                            <span className="ml-2 text-green-400">+2.4%</span>
                        </div>
                        <div className="flex items-center text-purple-400">
                            <span className="mr-1">Ξ</span>
                            <span className="font-medium">ETH</span>
                            <span className="ml-2 text-green-400">+1.8%</span>
                        </div>
                        <div className="flex items-center text-blue-400">
                            <span className="mr-1">◎</span>
                            <span className="font-medium">SOL</span>
                            <span className="ml-2 text-red-400">-0.5%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;