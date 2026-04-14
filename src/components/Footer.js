function Footer() {
  return (
    <footer className="border-t border-brand-100 bg-gradient-to-b from-white/90 to-brand-50/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <a href="#home" className="flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-sm font-bold text-stone-100">
              G
            </span>
            <span className="font-heading text-2xl font-bold">Ghibli AI</span>
          </a>
          <p className="mt-4 text-lg text-slate-600">Inspired by magical storytelling and cinematic illustration aesthetics.</p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold">Links</h3>
          <ul className="mt-3 space-y-2 text-lg text-slate-600">
            <li><a href="#home" className="hover:text-brand-600">Home</a></li>
            <li><a href="#create" className="hover:text-brand-600">Create</a></li>
            <li><a href="#features" className="hover:text-brand-600">Features</a></li>
            <li><a href="#gallery" className="hover:text-brand-600">Gallery</a></li>
            <li><a href="#faq" className="hover:text-brand-600">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold">Features</h3>
          <ul className="mt-3 space-y-2 text-lg text-slate-600">
            <li>Photo to Ghibli Art</li>
            <li>Text to Ghibli Art</li>
            <li>Character Generator</li>
            <li>Background Generator</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold">Legal</h3>
          <ul className="mt-3 space-y-2 text-lg text-slate-600">
            <li><a href="#home" className="hover:text-brand-600">Terms of Service</a></li>
            <li><a href="#home" className="hover:text-brand-600">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-stone-300 py-6 text-center text-base text-slate-500">
        <p>2026 Ghibli AI. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;