// data/sections.ts
import type { RoadmapSection } from "../types/roadmap";

const sectionData: RoadmapSection[] = [
  {
    index: "01",
    title: "CORE CS",
    items: [
      {
        tag: "DSA",
        title: "Data Structures & Algorithms",
        desc: "Master DSA step-by-step, from arrays to dynamic programming.",
        link: "/roadmaps/dsa",
      },
      {
        tag: "D+S",
        title: "DSA + System Design",
        desc: "Combined roadmap for interview prep and system thinking.",
        link: "/roadmaps/dsa-system-design",
      },
      {
        tag: "SYS",
        title: "System Design",
        desc: "Complete path to designing scalable distributed systems.",
        badge: "POPULAR",
        link: "/roadmaps/system-design",
      },
    ],
  },
  {
    index: "02",
    title: "BACKEND DEV",
    items: [
      {
        tag: "Py",
        title: "Python + FastAPI",
        desc: "Modern async Python backend roadmap.",
        badge: "6 MONTH PLAN",
        link: "/roadmaps/python-fastapi",
      },
      {
        tag: "JS",
        title: "Node.js + TypeScript",
        desc: "Full-stack friendly backend with strong typing.",
        link: "/roadmaps/node-typescript",
      },
      {
        tag: "Jv",
        title: "Java + Spring Boot",
        desc: "Enterprise-grade backend engineering path.",
        link: "/roadmaps/java-spring",
      },
      {
        tag: "C#",
        title: "C# + .NET",
        desc: "Microsoft-ecosystem backend roadmap.",
        link: "/roadmaps/csharp-dotnet",
      },
      {
        tag: "SQL",
        title: "SQL Mastery",
        desc: "Relational databases, from basics to advanced query tuning.",
        link: "/roadmaps/sql",
      },
      {
        tag: "NSQ",
        title: "NoSQL Specialization",
        desc: "MongoDB, Redis, Cassandra and document databases.",
        link: "/roadmaps/nosql",
      },
    ],
  },
  {
    index: "03",
    title: "FULL STACK",
    items: [
      {
        tag: "FS",
        title: "Java Full Stack",
        desc: "Java backend + Angular frontend — 4-month intensive plan.",
        link: "/roadmaps/java-fullstack",
      },
    ],
  },
  {
    index: "04",
    title: "CLOUD & DEVOPS",
    items: [
      {
        tag: "AWS",
        title: "AWS Cloud",
        desc: "Services, certifications, and cloud-native architecture patterns.",
        link: "/roadmaps/aws",
      },
    ],
  },
  {
    index: "05",
    title: "LANGUAGES",
    items: [
      {
        tag: "Go",
        title: "Learn Go",
        desc: "Deep dive into Go — concurrency, performance, and idiomatic patterns.",
        badge: "NEW",
        link: "/roadmaps/go",
      },
    ],
  },
];

export default sectionData;
