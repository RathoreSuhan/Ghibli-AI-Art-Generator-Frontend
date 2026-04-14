import { Link } from 'react-router-dom';
import { navItems } from '../data/homeData';

function Header() {
  return (
    <header className="glass-panel sticky top-0 z-50 border-b border-brand-100/80">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/home" className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-sm font-bold text-white shadow-glow">
            G
          </span>
          <span className="font-heading text-2xl font-bold tracking-tight">Ghibli AI</span>
        </Link>

        <nav className="hidden items-center gap-10 text-lg font-medium md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="transition-colors duration-200 hover:text-brand-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link to="/create" className="btn-brand px-6 py-3 text-lg">
          Create
        </Link>
      </div>
    </header>
  );
}

export default Header;