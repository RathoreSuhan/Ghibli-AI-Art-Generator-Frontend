import { navItems } from '../data/homeData';

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-300/70 bg-stone-100/95 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-sm font-bold text-stone-100">
            G
          </span>
          <span className="font-heading text-2xl font-bold tracking-tight">Ghibli AI</span>
        </a>

        <nav className="hidden items-center gap-10 text-lg font-medium md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition-colors duration-200 hover:text-brand-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#create"
          className="rounded-xl bg-brand-500 px-6 py-3 text-lg font-semibold text-white shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:bg-brand-600"
        >
          Create
        </a>
      </div>
    </header>
  );
}

export default Header;