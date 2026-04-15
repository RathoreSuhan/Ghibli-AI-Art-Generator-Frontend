import { useRef, useState } from 'react';

function PhotoToArtSection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [description, setDescription] = useState('');
  const fileInputRef = useRef(null);
  const canTransform = Boolean(selectedImage) && description.trim().length > 0;

  const handleBrowseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files?.[0] ?? null;
    setSelectedImage(file);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-stone-200 sm:p-8">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">Photo to Ghibli Art</h1>

        <div className="mt-6 rounded-2xl border-2 border-dashed border-stone-300 bg-stone-50/80 p-6 text-center sm:p-8">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-stone-300 bg-white text-2xl text-slate-400">
            ⌘
          </div>
          <p className="mt-5 text-lg font-medium text-slate-600">Drag and drop your image here</p>
          <p className="mt-1 text-sm text-slate-400">or</p>
          <button
            type="button"
            onClick={handleBrowseClick}
            className="mt-4 rounded-xl bg-stone-200 px-5 py-3 text-base font-semibold text-slate-700 transition-colors hover:bg-stone-300"
          >
            Browse files
          </button>
          {selectedImage ? <p className="mt-3 text-sm text-slate-500">Selected: {selectedImage.name}</p> : null}
        </div>

        <div className="mt-6">
          <label className="mb-2 block text-lg font-semibold text-slate-800">Additional Details</label>
          <textarea
            value={description}
            onChange={handleDescriptionChange}
            className="min-h-24 w-full rounded-xl border border-stone-300 bg-white px-4 py-4 text-base text-slate-700 outline-none transition-shadow placeholder:text-slate-400 focus:shadow-[0_0_0_3px_rgba(180,83,9,0.12)]"
            placeholder="Add any specific details or enhancements..."
          />
        </div>

        <button
          type="button"
          disabled={!canTransform}
          className={`mt-8 w-full rounded-xl bg-gradient-to-r from-brand-700 to-amber-800 px-6 py-4 text-lg font-semibold text-white shadow-glow transition-transform ${
            canTransform ? 'hover:-translate-y-0.5' : 'cursor-not-allowed opacity-60'
          }`}
        >
          Transform to Ghibli Art
        </button>
      </div>

      <div className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-stone-200 sm:p-8">
        <div className="flex min-h-[420px] items-center justify-center rounded-2xl border border-stone-200 bg-stone-50/80 p-6 text-center text-lg font-medium text-slate-500 sm:min-h-[520px]">
          Your generated Ghibli art will appear here.
        </div>
      </div>
    </div>
  );
}

export default PhotoToArtSection;
