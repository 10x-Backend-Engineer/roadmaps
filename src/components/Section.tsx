import Card from "./Card";
import type { RoadmapSection } from "../app/types/roadmap";

export default function Section({ index, title, items }: RoadmapSection) {
  return (
    <section className="max-w-6xl mx-auto mt-16">
      <div className="flex items-center gap-4 mb-6">
        <span className="text-gray-500 text-sm">{index} //</span>

        <span className="text-xs border border-gray-600 px-2 py-1 rounded-md">
          {title}
        </span>

        <div className="flex-1 h-px bg-gray-700" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </div>
    </section>
  );
}
