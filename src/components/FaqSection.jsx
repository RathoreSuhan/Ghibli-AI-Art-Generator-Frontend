import { faqItems } from '../data/homeData';

function FaqSection() {
  return (
    <section id="faq" className="mx-auto max-w-7xl scroll-mt-20 px-4 pb-14 pt-8 sm:px-6 lg:px-8">
      <h2 className="text-center font-heading text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
        Frequently Asked Questions about Ghibli AI
      </h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {faqItems.map((faq) => (
          <article key={faq.question} className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-stone-200">
            <h3 className="text-xl font-semibold leading-snug text-slate-900 sm:text-2xl">{faq.question}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{faq.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FaqSection;