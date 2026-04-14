import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

function CreatePage() {
  const [activeTab, setActiveTab] = useState('photo');

  return (
    <div className="min-h-screen text-slate-800">
      <Header />

      <main className="bg-gradient-to-b from-stone-100 via-brand-50/50 to-brand-100/60">
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-center border-b border-stone-200/80 text-lg font-semibold text-slate-500">
            <div className="flex gap-8">
              <button
                type="button"
                onClick={() => setActiveTab('photo')}
                className={`px-2 pb-3 transition-colors ${
                  activeTab === 'photo'
                    ? 'border-b-2 border-brand-700 text-brand-800'
                    : 'hover:text-brand-700'
                }`}
              >
                Photo to Art
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('text')}
                className={`px-2 pb-3 transition-colors ${
                  activeTab === 'text'
                    ? 'border-b-2 border-brand-700 text-brand-800'
                    : 'hover:text-brand-700'
                }`}
              >
                Text to Art
              </button>
            </div>
          </div>

          {activeTab === 'photo' ? (
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-stone-200 sm:p-8">
                <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">Photo to Ghibli Art</h1>

                <div className="mt-6 rounded-2xl border-2 border-dashed border-stone-300 bg-stone-50/80 p-6 text-center sm:p-8">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-stone-300 bg-white text-2xl text-slate-400">
                    ⌘
                  </div>
                  <p className="mt-5 text-lg font-medium text-slate-600">Drag and drop your image here</p>
                  <p className="mt-1 text-sm text-slate-400">or</p>
                  <button className="mt-4 rounded-xl bg-stone-200 px-5 py-3 text-base font-semibold text-slate-700 transition-colors hover:bg-stone-300">
                    Browse files
                  </button>
                </div>

                <div className="mt-6">
                  <label className="mb-2 block text-lg font-semibold text-slate-800">Additional Details</label>
                  <textarea
                    className="min-h-24 w-full rounded-xl border border-stone-300 bg-white px-4 py-4 text-base text-slate-700 outline-none transition-shadow placeholder:text-slate-400 focus:shadow-[0_0_0_3px_rgba(180,83,9,0.12)]"
                    placeholder="Add any specific details or enhancements..."
                  />
                </div>

                <button className="mt-8 w-full rounded-xl bg-gradient-to-r from-brand-700 to-amber-800 px-6 py-4 text-lg font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5">
                  Transform to Ghibli Art
                </button>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-stone-200 sm:p-8">
                <div className="flex min-h-[420px] items-center justify-center rounded-2xl border border-stone-200 bg-stone-50/80 p-6 text-center text-lg font-medium text-slate-500 sm:min-h-[520px]">
                  Your generated Ghibli art will appear here.
                </div>
              </div>
            </div>
          ) : (
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
          )}

          <div className="mt-6 text-center text-sm text-slate-500">
            <Link to="/#home" className="font-semibold text-brand-700 hover:text-brand-800">
              Back to Home
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default CreatePage;
