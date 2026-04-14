import { featureCards } from '../data/homeData';

function FeaturesSection() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <h2 className="text-center font-heading text-4xl font-bold text-slate-900 sm:text-5xl">Ghibli AI Features</h2>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {featureCards.map((card) => (
          <article
            key={card.title}
            className="rounded-2xl bg-white p-8 shadow-card ring-1 ring-stone-200 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-xl text-brand-600">
              *
            </div>
            <h3 className="text-3xl font-semibold leading-snug text-slate-900">{card.title}</h3>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;