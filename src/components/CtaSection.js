function CtaSection() {
  return (
    <section id="create" className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-brand-100 px-6 py-20 text-center sm:px-10">
        <h2 className="font-heading text-4xl font-bold text-slate-900 sm:text-5xl">Create Your Magical Artwork Today</h2>
        <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-600">
          Join artists and storytellers using Ghibli AI to craft cinematic visuals from ordinary moments.
        </p>
        <a
          href="#home"
          className="mt-10 inline-flex rounded-xl bg-brand-500 px-8 py-4 text-xl font-semibold text-white shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:bg-brand-600"
        >
          Try Ghibli AI For Free
        </a>
      </div>
    </section>
  );
}

export default CtaSection;