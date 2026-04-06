import Link from "next/link";
import Section from "../../components/Section";
import sectionData from "../data/sections";

export default function HomePage() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-10">
      {/* HERO */}
      <section className="max-w-6xl mx-auto">
        <span className="text-xs border border-gray-600 px-3 py-1 rounded-full">
          10X-BACKEND-ENGINEER • OPEN SOURCE
        </span>

        <h1 className="text-5xl font-bold mt-6 leading-tight">
          All our <span className="text-indigo-400">roadmaps</span>, <br />
          one place
        </h1>

        <p className="text-gray-400 mt-4 max-w-xl">
          A curated collection of high-quality learning paths to go from zero to
          world-class software engineer.
        </p>

        <div className="flex gap-4 mt-6">
          <Link
            href="/docs"
            className="border border-white px-5 py-2 rounded-lg hover:bg-white hover:text-black transition"
          >
            Browse all roadmaps →
          </Link>
          <Link
            href="https://github.com/10x-Backend-Engineer/roadmaps"
            className="border border-gray-500 px-5 py-2 rounded-lg hover:border-white transition"
          >
            Contribute
          </Link>
        </div>
      </section>

      {/* SECTIONS */}
      {sectionData.map((section, i) => (
        <Section key={i} {...section} />
      ))}

      {/* FOOTER */}
      <section className="max-w-6xl mx-auto mt-20 flex justify-between items-center">
        <p className="text-gray-500 text-sm">
          // star • share • build something amazing
        </p>

        <div className="flex gap-4">
          <Link
            href="https://github.com/10x-Backend-Engineer/roadmaps"
            className="border border-white px-5 py-2 rounded-lg hover:bg-white hover:text-black transition"
          >
            Star on GitHub
          </Link>
          <Link
            href="https://backend-engineering-curriculum.vercel.app/"
            target="_blank"
            className="border border-white px-5 py-2 rounded-lg hover:bg-white hover:text-black transition"
          >
            Start learning →
          </Link>
        </div>
      </section>
    </main>
  );
}
