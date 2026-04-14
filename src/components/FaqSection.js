import { faqItems } from '../data/homeData';

function FaqSection() {
  return (
    <section id="faq" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <h2 className="text-center font-heading text-4xl font-bold text-slate-900 sm:text-5xl">
        Frequently Asked Questions about Ghibli AI
      </h2>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {faqItems.map((faq) => (
          <article key={faq.question} className="rounded-2xl bg-white p-8 shadow-card ring-1 ring-stone-200">
            <h3 className="text-3xl font-semibold text-slate-900">{faq.question}</h3>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">{faq.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FaqSection;