import Link from "next/link";
import type { RoadmapItem } from "../app/types/roadmap";

export default function Card({ tag, title, desc, badge, link }: RoadmapItem) {
  return (
    <Link href={link}>
      <div className="border border-gray-700 rounded-xl p-5 hover:border-white transition relative cursor-pointer">
        {/* TAG */}
        <span className="text-xs bg-gray-800 px-2 py-1 rounded-md">{tag}</span>

        {/* TITLE */}
        <h3 className="mt-4 font-semibold text-lg">{title}</h3>

        {/* DESC */}
        <p className="text-gray-400 text-sm mt-2">{desc}</p>

        {/* BADGE */}
        {badge && (
          <span className="text-[10px] bg-yellow-200 text-black px-2 py-1 rounded mt-4 inline-block">
            {badge}
          </span>
        )}

        {/* ICON */}
        <span className="absolute top-4 right-4 text-gray-500">↗</span>
      </div>
    </Link>
  );
}
