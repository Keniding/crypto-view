import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleProfile = () => setIsProfileOpen(!isProfileOpen);

    // Función para cerrar sesión
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('refreshToken');
        navigate('/auth/login');
    };

    // Función para determinar clases activas
    const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
        `px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-slate-800/50 ${
            isActive
                ? 'text-orange-400 bg-slate-800/30'
                : 'text-slate-300 hover:text-orange-400'
        }`;

    const getMobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
        `block px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200 hover:bg-slate-700/50 ${
            isActive
                ? 'text-orange-400 bg-slate-700/30'
                : 'text-slate-300 hover:text-orange-400'
        }`;

    return (
        <nav className="bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center">
                            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center shadow-lg">
                                <span className="text-lg font-bold text-white">₿</span>
                            </div>
                            <span className="ml-3 text-xl font-bold text-white">CryptoView</span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-1">
                            <NavLink to="/" className={getNavLinkClass}>
                                Dashboard
                            </NavLink>
                            <NavLink to="/markets" className={getNavLinkClass}>
                                Mercados
                            </NavLink>
                            <NavLink to="/coins" className={getNavLinkClass}>
                                Monedas
                            </NavLink>
                            <NavLink to="/trending" className={getNavLinkClass}>
                                Tendencias
                            </NavLink>
                            <NavLink to="/news" className={getNavLinkClass}>
                                Noticias
                            </NavLink>
                            <NavLink to="/watchlist" className={getNavLinkClass}>
                                Watchlist
                            </NavLink>
                        </div>
                    </div>

                    {/* Right side - Desktop */}
                    <div className="hidden md:flex items-center space-x-4">
                        {/* Crypto Prices Ticker */}
                        <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center text-orange-400">
                                <span className="mr-1">₿</span>
                                <span className="font-medium">$43,250</span>
                                <span className="ml-1 text-green-400 text-xs">+2.4%</span>
                            </div>
                            <div className="flex items-center text-purple-400">
                                <span className="mr-1">Ξ</span>
                                <span className="font-medium">$2,680</span>
                                <span className="ml-1 text-green-400 text-xs">+1.8%</span>
                            </div>
                            <div className="flex items-center text-blue-400">
                                <span className="mr-1">◎</span>
                                <span className="font-medium">$98.45</span>
                                <span className="ml-1 text-red-400 text-xs">-0.8%</span>
                            </div>
                        </div>

                        {/* Market Status */}
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg px-3 py-2">
                            <div className="text-xs text-slate-400">Market Cap</div>
                            <div className="text-sm font-semibold text-white">$1.2T</div>
                        </div>

                        {/* Search Button */}
                        <button className="p-2 text-slate-400 hover:text-white transition-colors duration-200 hover:bg-slate-800/50 rounded-lg">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>

                        {/* Notifications */}
                        <button className="relative p-2 text-slate-400 hover:text-white transition-colors duration-200 hover:bg-slate-800/50 rounded-lg">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.868 3.303l5.657 5.657m0 0l5.657-5.657m-5.657 5.657L4.868 14.96" />
                            </svg>
                            <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
                        </button>

                        {/* Profile Dropdown */}
                        <div className="relative">
                            <button
                                onClick={toggleProfile}
                                className="flex items-center space-x-2 p-2 text-slate-300 hover:text-white transition-colors duration-200 hover:bg-slate-800/50 rounded-lg"
                            >
                                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                                    <span className="text-sm font-medium text-white">JD</span>
                                </div>
                                <span className="text-sm font-medium">John Doe</span>
                                <svg className={`w-4 h-4 transition-transform duration-200 ${isProfileOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Profile Dropdown Menu */}
                            {isProfileOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-2xl py-2">
                                    <NavLink
                                        to="/profile"
                                        className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors duration-200"
                                        onClick={() => setIsProfileOpen(false)}
                                    >
                                        Mi Perfil
                                    </NavLink>
                                    <NavLink
                                        to="/settings"
                                        className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors duration-200"
                                        onClick={() => setIsProfileOpen(false)}
                                    >
                                        Configuración
                                    </NavLink>
                                    <NavLink
                                        to="/alerts"
                                        className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors duration-200"
                                        onClick={() => setIsProfileOpen(false)}
                                    >
                                        Alertas
                                    </NavLink>
                                    <div className="border-t border-slate-700/50 my-1"></div>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full text-left block px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-slate-700/50 transition-colors duration-200"
                                    >
                                        Cerrar Sesión
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800/50 transition-colors duration-200"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-slate-800/95 backdrop-blur-xl border-t border-slate-700/50">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {/* Mobile Crypto Prices */}
                        <div className="grid grid-cols-3 gap-2 px-3 py-2 mb-2 bg-slate-700/30 rounded-lg">
                            <div className="flex flex-col items-center text-orange-400 text-sm">
                                <span className="font-medium">₿ BTC</span>
                                <span className="text-xs">$43,250</span>
                                <span className="text-green-400 text-xs">+2.4%</span>
                            </div>
                            <div className="flex flex-col items-center text-purple-400 text-sm">
                                <span className="font-medium">Ξ ETH</span>
                                <span className="text-xs">$2,680</span>
                                <span className="text-green-400 text-xs">+1.8%</span>
                            </div>
                            <div className="flex flex-col items-center text-blue-400 text-sm">
                                <span className="font-medium">◎ SOL</span>
                                <span className="text-xs">$98.45</span>
                                <span className="text-red-400 text-xs">-0.8%</span>
                            </div>
                        </div>

                        {/* Mobile Market Cap */}
                        <div className="px-3 py-2 mb-2 bg-slate-700/30 rounded-lg">
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="text-xs text-slate-400">Market Cap Total</div>
                                    <div className="text-lg font-semibold text-white">$1.2T</div>
                                </div>
                                <div>
                                    <div className="text-xs text-slate-400">24h Vol</div>
                                    <div className="text-sm font-semibold text-slate-300">$89.5B</div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Navigation Links */}
                        <NavLink to="/" className={getMobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>
                            Dashboard
                        </NavLink>
                        <NavLink to="/markets" className={getMobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>
                            Mercados
                        </NavLink>
                        <NavLink to="/coins" className={getMobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>
                            Monedas
                        </NavLink>
                        <NavLink to="/trending" className={getMobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>
                            Tendencias
                        </NavLink>
                        <NavLink to="/news" className={getMobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>
                            Noticias
                        </NavLink>
                        <NavLink to="/watchlist" className={getMobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>
                            Watchlist
                        </NavLink>

                        {/* Mobile Profile Section */}
                        <div className="border-t border-slate-700/50 pt-3 mt-3">
                            <div className="flex items-center px-3 py-2">
                                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                                    <span className="text-sm font-medium text-white">JD</span>
                                </div>
                                <div className="ml-3">
                                    <div className="text-sm font-medium text-white">John Doe</div>
                                    <div className="text-xs text-slate-400">Crypto Trader</div>
                                </div>
                            </div>
                            <NavLink
                                to="/profile"
                                className="text-slate-300 hover:text-white block px-3 py-2 rounded-lg text-sm transition-colors duration-200 hover:bg-slate-700/50"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Mi Perfil
                            </NavLink>
                            <NavLink
                                to="/settings"
                                className="text-slate-300 hover:text-white block px-3 py-2 rounded-lg text-sm transition-colors duration-200 hover:bg-slate-700/50"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Configuración
                            </NavLink>
                            <NavLink
                                to="/alerts"
                                className="text-slate-300 hover:text-white block px-3 py-2 rounded-lg text-sm transition-colors duration-200 hover:bg-slate-700/50"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Alertas
                            </NavLink>
                            <button
                                onClick={handleLogout}
                                className="w-full text-left text-red-400 hover:text-red-300 block px-3 py-2 rounded-lg text-sm transition-colors duration-200 hover:bg-slate-700/50"
                            >
                                Cerrar Sesión
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;