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
        link: "/docs/core-cs/dsa-roadmap",
      },
      {
        tag: "D+S",
        title: "DSA + System Design",
        desc: "Combined roadmap for interview prep and system thinking.",
        link: "/docs/core-cs/dsa-system-design-roadmap",
      },
      {
        tag: "SYS",
        title: "System Design",
        desc: "Complete path to designing scalable distributed systems.",
        badge: "POPULAR",
        link: "/docs/core-cs/system-design-roadmap",
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
        link: "/docs/backend/languages/python/6-months-python-fastapi",
      },
      {
        tag: "JS",
        title: "Node.js + TypeScript",
        desc: "Full-stack friendly backend with strong typing.",
        link: "/docs/backend/languages/typescript/typescript-nodejs",
      },
      {
        tag: "Jv",
        title: "Java + Spring Boot",
        desc: "Enterprise-grade backend engineering path.",
        link: "/docs/backend/languages/java/java-spring-boot",
      },
      {
        tag: "C#",
        title: "C# + .NET",
        desc: "Microsoft-ecosystem backend roadmap.",
        link: "/docs/backend/languages/csharp/csharp-dotnet",
      },
      {
        tag: "SQL",
        title: "SQL Mastery",
        desc: "Relational databases, from basics to advanced query tuning.",
        link: "/docs/backend/databases/sql-roadmap",
      },
      {
        tag: "NSQ",
        title: "NoSQL Specialization",
        desc: "MongoDB, Redis, Cassandra and document databases.",
        link: "/docs/backend/databases/nosql-roadmap",
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
        link: "/docs/fullstack/java-full-stack-04-mois",
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
        link: "/docs/cloud-devops/AWS-Roadmap",
      },
    ],
  },
  {
    index: "05",
    title: "LANGUAGES",
    items: [
      {
        tag: "Python",
        title: "Learn Python",
        desc: "Master Python — from basics to advanced concepts.",
        badge: "NEW",
        link: "/docs/languages/learn-python",
      },
      {
        tag: "Go",
        title: "Learn Go",
        desc: "Deep dive into Go — concurrency, performance, and idiomatic patterns.",
        link: "/docs/languages/learn-go",
      },
      {
        tag: "Javascript",
        title: "Learn Javascript",
        desc: "Master Javascript — from basics to advanced concepts.",
        badge: "POPULAR",
        link: "/docs/languages/learn-javascript",
      },
      {
        tag: "Java",
        title: "Learn Java",
        desc: "Master Java — from basics to advanced concepts.",
        link: "/docs/languages/learn-java",
      },
      {
        tag: "C#",
        title: "Learn C#",
        desc: "Master C# — from basics to advanced concepts.",
        link: "/docs/languages/learn-csharp",
      },
    ],
  },
  {
    index: "06",
    title: "Databases & ORMS",
    items: [
      {
        tag: "MySQL",
        title: "MySQL Mastery",
        desc: "MySQL database management and optimization.",
        link: "/docs/languages/learn-mysql",
      },
      {
        tag: "PostgreSQL",
        title: "PostgreSQL Mastery",
        desc: "PostgreSQL database management and optimization.",
        link: "/docs/languages/learn-postgresql",
      },
      {
        tag: "Prisma",
        title: "Prisma Mastery",
        desc: "Prisma database management and optimization.",
        badge: "NEW",
        link: "/docs/backend/databases/orms/prisma",
      },
      {
        tag: "SQLAlchemy",
        title: "Learn SQLAlchemy",
        desc: "SQLAlchemy database management and optimization.",
        badge: "NEW",
        link: "/docs/backend/databases/orms/sqlalchemy",
      },
      {
        tag: "Django ORM",
        title: "Learn Django ORM",
        desc: "Django ORM database management and optimization.",
        badge: "NEW",
        link: "/docs/backend/databases/orms/django-orm",
      },
      {
        tag: "Entity Framework Core",
        title: "Learn Entity Framework Core",
        desc: "Entity Framework Core database management and optimization.",
        badge: "NEW",
        link: "/docs/backend/databases/orms/entity-framework-core",
      },
      {
        tag: "Hibernate and JPA",
        title: "Learn Hibernate and JPA",
        desc: "Hibernate and JPA database management and optimization.",
        badge: "NEW",
        link: "/docs/backend/databases/orms/hibernate-jpa",
      },
    ],
  },
];

export default sectionData;
