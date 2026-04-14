import { galleryItems } from '../data/homeData';

function GallerySection() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <h2 className="text-center font-heading text-4xl font-bold text-slate-900 sm:text-5xl">
        Magical Transformations Gallery
      </h2>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {galleryItems.map((src, index) => (
          <figure key={src} className="overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-stone-200">
            <img
              src={src}
              alt={`Ghibli style sample ${index + 1}`}
              className="h-56 w-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </figure>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl bg-white p-8 shadow-card ring-1 ring-stone-200">
          <h3 className="text-4xl font-semibold">Mountain Lake Transformation</h3>
          <p className="mt-4 text-lg text-slate-600">
            A calm, warm color grade with soft brush textures and atmospheric depth for a classic adventure vibe.
          </p>
        </article>
        <article className="rounded-2xl bg-white p-8 shadow-card ring-1 ring-stone-200">
          <h3 className="text-4xl font-semibold">Urban Scene Transformation</h3>
          <p className="mt-4 text-lg text-slate-600">
            City portraits gain painterly highlights and nostalgic cinematic lighting while keeping facial identity.
          </p>
        </article>
      </div>
    </section>
  );
}

export default GallerySection;