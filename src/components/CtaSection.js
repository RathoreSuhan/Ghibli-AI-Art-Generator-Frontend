function CtaSection() {
  return (
    <section id="create" className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-100 via-white to-accent-100 px-6 py-20 text-center shadow-card ring-1 ring-brand-100 sm:px-10">
        <div className="pointer-events-none absolute -left-24 -top-20 h-56 w-56 rounded-full bg-brand-100/70 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-accent-300/50 blur-3xl" />
        <h2 className="font-heading text-4xl font-bold text-slate-900 sm:text-5xl">Create Your Magical Artwork Today</h2>
        <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-600">
          Join artists and storytellers using Ghibli AI to craft cinematic visuals from ordinary moments.
        </p>
        <a
          href="#home"
          className="btn-brand mt-10"
        >
          Try Ghibli AI For Free
        </a>
      </div>
    </section>
  );
}

export default CtaSection;