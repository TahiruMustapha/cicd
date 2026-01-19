import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* Hero Section */}
      <main className="flex flex-col items-center justify-between w-full max-w-6xl px-6 py-32 sm:flex-row sm:justify-between">
        <div className="flex flex-col items-center text-center gap-6 sm:items-start sm:text-left">
          <h1 className="text-5xl font-bold leading-tight text-black dark:text-zinc-50">
            Premium Wood & Furniture Solutions
          </h1>
          <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
            Crafting bespoke wooden furniture and home decor for your spaces. Quality, elegance, and durability in every piece.
          </p>
          <div className="flex flex-col gap-4 mt-6 sm:flex-row">
            <a
              href="#products"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#8B4513] px-6 text-white transition-colors hover:bg-[#623214] md:w-auto"
            >
              Explore Products
            </a>
            <a
              href="#contact"
              className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-6 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-auto"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-12 sm:mt-0 sm:ml-12 flex-shrink-0">
          <Image
            src="/hero.jpg"
            alt="Luxury wooden furniture"
            width={500}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </main>

      {/* Featured Products Section */}
      <section id="products" className="w-full px-6 py-24 bg-white dark:bg-zinc-900">
        <h2 className="text-3xl font-semibold text-center text-black dark:text-zinc-50 mb-12">
          Our Featured Products
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {["Wooden Chair", "Dining Table", "Coffee Table"].map((item) => (
            <div key={item} className="rounded-xl overflow-hidden shadow-lg bg-zinc-50 dark:bg-zinc-800">
              <Image
                src={`/${item}.jpg`}
                alt={item}
                width={400}
                height={250}
                className="object-cover w-full h-48"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-black dark:text-zinc-50">{item}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mt-2">
                  Handmade, durable, and elegant. Perfect for your home or office.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full px-6 py-24 bg-zinc-50 dark:bg-black">
        <h2 className="text-3xl font-semibold text-center text-black dark:text-zinc-50 mb-8">
          Get in Touch
        </h2>
        <p className="text-center text-zinc-600 dark:text-zinc-400 mb-8">
          Have a custom furniture idea? Contact us and we will bring it to life.
        </p>
        <div className="flex justify-center">
          <a
            href="mailto:info@woodenterprise.com"
            className="px-8 py-4 rounded-full bg-[#8B4513] text-white font-semibold hover:bg-[#623214] transition-colors"
          >
            Email Us
          </a>
        </div>
      </section>
    </div>
  );
}
