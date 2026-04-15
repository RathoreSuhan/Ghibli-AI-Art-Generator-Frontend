function TextToArtSection() {
  return (
    <div className="mx-auto max-w-4xl rounded-3xl bg-white p-6 shadow-card ring-1 ring-stone-200 sm:p-8">
      <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">Text to Ghibli Art</h1>

      <div className="mt-6 flex min-h-[280px] items-center justify-center rounded-2xl border border-stone-200 bg-stone-50/80 p-6 text-center text-lg font-medium text-slate-500 sm:min-h-[300px]">
        <div>
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-stone-300 bg-white text-3xl text-slate-400">
            ≡
          </div>
          <p>Generate Ghibli art from your text description</p>
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="ghibli-style" className="mb-2 block text-lg font-semibold text-slate-800">
          Ghibli Style
        </label>
        <select
          id="ghibli-style"
          className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-base text-slate-700 outline-none transition-shadow focus:shadow-[0_0_0_3px_rgba(180,83,9,0.12)]"
          defaultValue="Analog Film"
        >
          <option>Analog Film</option>
          <option>Spirited Away</option>
          <option>Howl's Moving Castle</option>
          <option>My Neighbor Totoro</option>
          <option>Princess Mononoke</option>
        </select>
      </div>

      <div className="mt-4">
        <label htmlFor="text-description" className="mb-2 block text-lg font-semibold text-slate-800">
          Your Description
        </label>
        <textarea
          id="text-description"
          className="min-h-24 w-full rounded-xl border border-stone-300 bg-white px-4 py-4 text-base text-slate-700 outline-none transition-shadow placeholder:text-slate-400 focus:shadow-[0_0_0_3px_rgba(180,83,9,0.12)]"
          placeholder="Describe the Ghibli scene you want to create in detail..."
        />
      </div>

      <button className="mt-8 w-full rounded-xl bg-gradient-to-r from-brand-700 to-amber-800 px-6 py-4 text-lg font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5">
        Generate Ghibli Art
      </button>
    </div>
  );
}

export default TextToArtSection;
