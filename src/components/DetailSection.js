function DetailSection() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
      <div>
        <h2 className="font-heading text-4xl font-bold text-slate-900 sm:text-5xl">Photo to Ghibli Art</h2>
        <p className="mt-6 text-xl leading-relaxed text-slate-600">
          Upload a photo, describe the mood you want, and get polished visual storytelling in one simple flow.
        </p>
        <ul className="mt-8 space-y-6">
          <li className="rounded-xl bg-white p-5 shadow-card ring-1 ring-stone-200">
            <h3 className="text-2xl font-semibold">Simple Prompting</h3>
            <p className="mt-2 text-slate-600">Use everyday language to guide the scene style, color mood, and atmosphere.</p>
          </li>
          <li className="rounded-xl bg-white p-5 shadow-card ring-1 ring-stone-200">
            <h3 className="text-2xl font-semibold">Style Control</h3>
            <p className="mt-2 text-slate-600">Pick presets like fantasy village, dreamy sky, golden dusk, and soft film grain.</p>
          </li>
          <li className="rounded-xl bg-white p-5 shadow-card ring-1 ring-stone-200">
            <h3 className="text-2xl font-semibold">Character Integration</h3>
            <p className="mt-2 text-slate-600">Preserve recognizable expressions while reimagining the entire scene style.</p>
          </li>
        </ul>
      </div>

      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-200 via-orange-100 to-orange-300 p-4 shadow-card">
        <img
          src="https://picsum.photos/seed/ghbli-main/900/1100"
          alt="Main showcase"
          className="h-full w-full rounded-2xl object-cover"
        />
      </div>
    </section>
  );
}

export default DetailSection;