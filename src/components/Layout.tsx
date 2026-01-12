import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Phone,
  Mail,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
} from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import type { NavLink } from '../types';

const Layout = ({ children }: { children?: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks: NavLink[] = [
    { name: 'トップ', enName: 'TOP', path: '/' },
    { name: '会社概要', enName: 'COMPANY', path: '/company' },
    { name: '事業内容', enName: 'BUSINESS', path: '/business' },
    { name: 'お問い合わせ', enName: 'CONTACT', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  // Using the new provided logo URL with proper encoding for ' and space
  const logoUrl =
    'https://tasteless-rose-82z1rh93ad.edgeone.app/I%27s%20link.jpg';

  return (
    <div className="min-h-screen flex flex-col font-serif bg-[#fcfaf5] text-stone-800">
      <header className="fixed w-full top-0 z-50 bg-[#fcfaf5]/95 backdrop-blur-md border-b border-stone-200 shadow-sm">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center h-24">
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-4 group">
              <div className="relative min-w-[120px] h-16 flex items-center justify-center overflow-visible">
                {!logoError ? (
                  <img
                    src={logoUrl}
                    alt="株式会社アイズリンク ロゴ"
                    className="max-w-full max-h-full object-contain"
                    style={{
                      display: 'block',
                      height: 'auto',
                      maxHeight: '56px',
                    }}
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <div className="flex flex-col items-start">
                    <span className="text-2xl font-zen font-black text-stone-900 tracking-tighter leading-none">
                      I's Link
                    </span>
                    <div className="h-[2px] w-full bg-[#b93a32] mt-1"></div>
                  </div>
                )}
              </div>
              <div className="flex flex-col border-l border-stone-200 pl-4">
                <span className="text-xl font-zen font-bold text-stone-900 tracking-widest group-hover:text-[#1e3a5f] transition-colors leading-tight">
                  アイズリンク
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-sans">
                  Is Link Corp.
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-10 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`group relative py-2 flex flex-col items-center justify-center transition-colors duration-500 ${
                    isActive(link.path)
                      ? 'text-[#1e3a5f]'
                      : 'text-stone-500 hover:text-stone-800'
                  }`}
                >
                  <span className="font-medium text-sm tracking-widest font-zen">
                    {link.name}
                  </span>
                  <span
                    className={`text-[9px] uppercase tracking-wider font-sans mt-0.5 opacity-60 ${
                      isActive(link.path) ? 'text-[#b93a32]' : ''
                    }`}
                  >
                    {link.enName}
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 h-[1px] bg-[#b93a32] transition-all duration-300 ${
                      isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-stone-800 hover:text-[#1e3a5f] focus:outline-none transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={24} strokeWidth={1} />
              ) : (
                <Menu size={24} strokeWidth={1} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#fcfaf5] border-t border-stone-200 absolute w-full h-screen shadow-lg z-40 overflow-hidden">
            <div className="flex flex-col px-8 py-10 space-y-6">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between border-b border-stone-200 pb-4 group"
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${idx * 0.1}s forwards`,
                    opacity: 0,
                    transform: 'translateY(10px)',
                  }}
                >
                  <div className="flex flex-col">
                    <span className="text-xl font-zen font-bold text-stone-800 group-hover:text-[#1e3a5f] transition-colors">
                      {link.name}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-stone-400 font-sans">
                      {link.enName}
                    </span>
                  </div>
                  <ChevronRight
                    size={16}
                    className="text-stone-300 group-hover:text-[#b93a32]"
                  />
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow pt-24">{children}</main>

      <footer className="bg-[#1a1a1a] text-stone-400 py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23fff'/%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            <div className="md:col-span-2">
              <div className="mb-8 flex items-center gap-4">
                <div className="min-w-[140px] h-20 flex items-center justify-center bg-white rounded-sm p-2 shadow-md overflow-hidden">
                  <img
                    src={logoUrl}
                    alt="株式会社アイズリンク フッターロゴ"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (
                        e.target as HTMLImageElement
                      ).parentElement!.style.backgroundColor = 'transparent';
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-zen font-bold text-white mb-0 tracking-wider">
                    株式会社アイズリンク
                  </h3>
                  <p className="text-[10px] text-stone-600 uppercase tracking-[0.3em] font-sans">
                    Is Link Co., Ltd.
                  </p>
                </div>
              </div>

              <div className="space-y-4 font-light text-sm">
                <p className="leading-relaxed">{COMPANY_INFO.address}</p>
                <div className="flex flex-wrap items-center gap-y-2 gap-x-6">
                  <div className="flex items-center gap-2">
                    <Phone size={14} className="text-[#b93a32]" />
                    <span className="tracking-wider font-sans">
                      {COMPANY_INFO.phone}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={14} className="text-[#b93a32]" />
                    <span className="tracking-wider font-sans">
                      {COMPANY_INFO.email}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-white mb-6 border-l-2 border-[#b93a32] pl-3 tracking-widest font-zen">
                サイトマップ
              </h3>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm hover:text-white flex items-center gap-2 transition-all duration-300 hover:translate-x-1 group"
                    >
                      <span className="w-1 h-1 bg-stone-600 rounded-full group-hover:bg-[#b93a32] transition-colors"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-white mb-6 border-l-2 border-[#b93a32] pl-3 tracking-widest font-zen">
                ソーシャル
              </h3>
              <div className="flex gap-4 mb-8">
                <a
                  href="#"
                  className="w-10 h-10 border border-stone-700 hover:border-white hover:bg-white hover:text-black flex items-center justify-center transition-all duration-300 rounded-sm"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 border border-stone-700 hover:border-white hover:bg-white hover:text-black flex items-center justify-center transition-all duration-300 rounded-sm"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 border border-stone-700 hover:border-white hover:bg-white hover:text-black flex items-center justify-center transition-all duration-300 rounded-sm"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-800 mt-16 pt-8 text-center text-xs text-stone-600 tracking-wider font-sans">
            &copy; {new Date().getFullYear()} Is Link Co., Ltd. All Rights
            Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
