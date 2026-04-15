import photoToGhibliImage from '../assets/P1.png';

function DetailSection() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
      <div>
        <h2 className="font-heading text-3xl font-bold text-slate-900 sm:text-4xl">Photo to Ghibli Art</h2>
        <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
          Transform any photo into beautiful Studio Ghibli-style artwork with our Ghibli AI. Simply upload your image and
          describe elements you want to enhance - mood, scene setting, character details - and our advanced Ghibli image
          generator will craft a complete transformation that captures the iconic Ghibli art aesthetic that Studio Ghibli
          fans love.
        </p>
        <ul className="mt-8 space-y-6">
          <li className="rounded-xl bg-white p-5 shadow-card ring-1 ring-stone-200">
            <h3 className="text-xl font-semibold sm:text-2xl">Simple Ghibli AI Prompting</h3>
            <p className="mt-2 text-base leading-relaxed text-slate-600 sm:text-lg">
              Use everyday language to guide the Studio Ghibli transformation with our Ghibli generator. No artistic
              background required. Our Ghibli AI translates your vision into perfect Ghibli art imagery with authentic Studio
              Ghibli qualities.
            </p>
          </li>
          <li className="rounded-xl bg-white p-5 shadow-card ring-1 ring-stone-200">
            <h3 className="text-xl font-semibold sm:text-2xl">Ghibli Art Style Control</h3>
            <p className="mt-2 text-base leading-relaxed text-slate-600 sm:text-lg">
              Select specific Studio Ghibli film influences like 'Spirited Away,' 'Howl's Moving Castle,' or 'My Neighbor
              Totoro' with our Ghibli image generator to customize your Ghibli artwork's aesthetic to your exact preferences.
            </p>
          </li>
          <li className="rounded-xl bg-white p-5 shadow-card ring-1 ring-stone-200">
            <h3 className="text-xl font-semibold sm:text-2xl">Ghibli Character Integration</h3>
            <p className="mt-2 text-base leading-relaxed text-slate-600 sm:text-lg">
              Our Ghibli AI can seamlessly integrate your pets or family members into the Studio Ghibli universe, maintaining
              their recognizable features while giving them distinctive Ghibli art charm in every Ghibli image we generate.
            </p>
          </li>
        </ul>
      </div>

      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-200 via-orange-100 to-orange-300 p-4 shadow-card">
        <img
          src={photoToGhibliImage}
          alt="Main showcase"
          className="h-full w-full rounded-2xl object-cover"
        />
      </div>
    </section>
  );
}

export default DetailSection;