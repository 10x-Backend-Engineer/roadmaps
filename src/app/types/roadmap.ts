export type BadgeType =
  | "POPULAR"
  | "NEW"
  | "6 MONTH PLAN"
  | "12 MONTH PLAN"
  | "BEGINNER"
  | "ADVANCED";

export type RoadmapItem = {
  tag: string;
  title: string;
  desc: string;
  link: string;
  badge?: BadgeType;
};

export type RoadmapSection = {
  index: string;
  title: string;
  items: RoadmapItem[];
};
