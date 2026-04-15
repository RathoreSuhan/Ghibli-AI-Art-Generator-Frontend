function HeroSection() {
  return (
    <section id="home" className="mx-auto max-w-7xl px-4 pb-28 pt-20 text-center sm:px-6 lg:px-8 lg:pt-28">
      <h1 className="mx-auto max-w-5xl font-heading text-5xl font-bold leading-tight text-slate-900 sm:text-6xl lg:text-7xl">
        Transform Your Photos into
        <span className="block bg-gradient-to-r from-brand-700 via-brand-500 to-accent-500 bg-clip-text text-transparent">
          Ghibli Art with Ghibli AI
        </span>
      </h1>
      <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-600 sm:text-2xl">
        Experience the magic of storybook-inspired artwork with a modern AI generator designed for expressive, cinematic visuals.
      </p>
      <a
        href="#create"
        className="btn-brand mt-10"
      >
        Try Ghibli AI
      </a>
    </section>
  );
}

export default HeroSection;