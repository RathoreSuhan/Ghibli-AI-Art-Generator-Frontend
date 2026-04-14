function HeroSection() {
  return (
    <section id="home" className="mx-auto max-w-7xl px-4 pb-28 pt-20 text-center sm:px-6 lg:px-8 lg:pt-28">
      <h1 className="mx-auto max-w-4xl font-heading text-5xl font-bold leading-tight text-slate-900 sm:text-6xl lg:text-7xl">
        Transform Your Photos into
        <span className="block text-brand-500">Ghibli Art with Ghibli AI</span>
      </h1>
      <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-600 sm:text-2xl">
        Experience the magic of storybook-inspired artwork with a modern AI generator designed for expressive, cinematic visuals.
      </p>
      <a
        href="#create"
        className="mt-10 inline-flex rounded-xl bg-brand-500 px-8 py-4 text-xl font-semibold text-white shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:bg-brand-600"
      >
        Try Ghibli AI
      </a>
    </section>
  );
}

export default HeroSection;