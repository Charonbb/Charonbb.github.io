import type {
  CvExperience,
  CvEducation,
  CvAward,
  EmploymentType,
} from "~/utils/types";
import {
  CvTechnicalStackTypeMap,
  CvTechnicalStackTypeOrder,
} from "~/utils/types";

// Utility function to calculate years between two dates
function calculateYears(startDate: Date, endDate?: Date): number {
  const end = endDate || new Date();
  const diffTime = Math.abs(end.getTime() - startDate.getTime());
  const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
  return Math.round(diffYears * 10) / 10; // Round to 1 decimal place
}

// Calculate total years of experience from employment experiences
function calculateTotalExperienceYears(experiences: CvExperience[]): number {
  if (experiences.length === 0) return 0;

  // Sort by start date to handle overlapping periods
  const sortedExperiences = [...experiences].sort(
    (a, b) => a.start.getTime() - b.start.getTime()
  );

  let totalYears = 0;
  let currentEnd = new Date(0);

  for (const exp of sortedExperiences) {
    const start = exp.start;
    const end = exp.end || new Date();

    // If this experience starts after the previous one ended, add the gap
    if (start > currentEnd) {
      totalYears += calculateYears(start, end);
    } else {
      // If overlapping, only add the additional time beyond currentEnd
      if (end > currentEnd) {
        totalYears += calculateYears(currentEnd, end);
      }
    }

    if (end > currentEnd) {
      currentEnd = end;
    }
  }

  return Math.round(totalYears * 10) / 10; // Round to 1 decimal place
}

export const experiences: CvExperience[] = [
  {
    id: "fullstack-php-crmtech",
    title: "Full-stack PHP Developer",
    start: new Date("2020-11-01"),
    end: new Date("2021-05-01"),
    company: 'LLC "CRM Technologies"',
    location: "Bishkek, Kyrgyzstan",
    responsibilities: [
      "Engineered custom CRM solutions for enterprise clients, implementing RESTful APIs to ensure seamless, scalable data exchange by reducing time to market by couple of months.",
      "Conceptualized, developed, and deployed a dynamic mapping tool using Canvas, improving client efficiency by reducing time spent on manual data entry and mapping.",
    ],
    technicalStack: [
      {
        type: "frontend",
        technologies: ["jQuery", "Bootstrap", "PHP", "CSS", "HTML"],
      },
      {
        type: "backend",
        technologies: ["PHP", "REST", "REST"],
      },
    ],
  },
  {
    id: "fullstack-php-ask-ai",
    title: "Full Stack PHP Developer",
    start: new Date("2021-07-01"),
    end: new Date("2021-11-01"),
    company: 'LLC "Ask consulting"',
    responsibilities: [
      "Developed an innovative online learning platform leveraging AI/ML algorithms for evaluation of human-produced data and personalized learning experiences.",
      "Researched and implemented a novel method for generating synthetic English words using NLP techniques to eliminating manual work.",
    ],
    technicalStack: [
      {
        type: "frontend",
        technologies: ["Vue.js", "TailwindCSS"],
      },
      {
        type: "backend",
        technologies: ["PHP", "Laravel", "REST"],
      },
      {
        type: "devops",
        technologies: ["Linux", "Nginx", "Docker", "Gitlab CI/CD"],
      },
    ],
  },
  {
    id: "team-lead-frontend-tumarsoft",
    title: "Team Lead Frontend Engineer",
    start: new Date("2022-01-01"),
    end: new Date("2024-04-01"),
    company: 'LLC "Tumarsoft"',
    location: "Bishkek, Kyrgyzstan",
    responsibilities: [
      "Delivered robust and scalable solutions using Vue.js, integrating advanced error handling and monitoring systems to enhance stability using Sentry, while concurrently building a full-stack demo environment that accelerated time to market by several months.",
      "Established team workflow and processes, including code reviews, pair programming, and knowledge sharing, which resulted in a more efficient and collaborative development environment.",
    ],
    technicalStack: [
      {
        type: "frontend",
        technologies: [
          "Vue.js",
          "Webpack",
          "Vuetify",
          "WebRTC",
          "PWA(Service workers)",
        ],
      },
      {
        type: "backend",
        technologies: ["Node.js", "Express", "REST", "GraphQL", "gRPC"],
      },
      {
        type: "devops",
        technologies: ["Docker", "Gitlab CI/CD"],
      },
    ],
  },
  {
    id: "team-lead-frontend-ogogo",
    title: "Team Lead Frontend Engineer",
    start: new Date("2024-04-01"),
    end: new Date("2025-10-31"),
    company: 'LLC "OGOGO"',
    location: "Bishkek, Kyrgyzstan",
    responsibilities: [
      "Led end-to-end Agile development for FinTech innovations, managing the product lifecycle from ideation to launch, which resulted in the successful deployment of 3 products and improved cross-functional team alignment across all releases.",
      "Drove strategic product vision by conceiving and implementing a company-wide Design System and UI component library, which resulted in faster development, feature delivery, and standardized user experience.",
    ],
    technicalStack: [
      {
        type: "frontend",
        technologies: [
          "JavaScript(TypeScript)",
          "React.js",
          "Next.js",
          "Nuxt.js",
          "Vite",
        ],
      },
      {
        type: "devops",
        technologies: ["Docker", "Gitlab CI/CD", "Github Actions"],
      },
    ],
  },
];
experiences.sort(
  (a, b) => new Date(b.start).getTime() - new Date(a.start).getTime()
);

export const totalYears = calculateTotalExperienceYears(experiences);

export const professionalSummary = (() => {
  return `Senior Frontend Engineer with ~${Math.ceil(
    totalYears
  )} years delivering scalable web and fintech applications. Core focus on frameworks(Vue.js, React.js) with SSR, SPA approaches, CI/CD, microservices architecture, and design systems. Proven leader in Agile environments.`;
})();

export const education: CvEducation = {
  start: new Date("2016-09-01"),
  end: new Date("2022-12-01"),
  university: "UNIST",
  location: "Ulsan, South Korea",
  degree: "Bachelor of Science",
  major: "Electrical Engineering",
  minor: "Computer Science and Engineering",
  // TODO: add GPA
  academicLeaves: [
    {
      start: new Date("2019-09-01"),
      end: new Date("2020-02-01"),
      reasons: [
        {
          title: "Internship",
          employmentType: "full-time" as EmploymentType, // Cast to EmploymentType
          company: 'LLC "Mega Soft"',
          experienceId: "csharp-developer-megasoft", // Link to the C# Developer experience
        },
      ],
    },
    {
      start: new Date("2020-09-01"),
      end: new Date("2021-06-01"),
      reasons: [
        {
          title: "Employment",
          employmentType: "full-time" as EmploymentType, // Cast to EmploymentType
          company: 'LLC "CRM Technologies"',
          experienceId: "fullstack-php-crmtech", // Link to the Full Stack PHP Developer experience
        },
      ],
    },
  ],
};

export const awards: CvAward[] = [
  {
    dates: [new Date("2015-03-01"), new Date("2016-03-01")],
    award: "Two-time winner (1st place) of National Olympiad in Physics",
    location: "Bishkek, Kyrgyzstan",
  },
  {
    dates: [new Date("2015-02-01")],
    award: '2nd place in Online Physics Olympiad "Phystech"',
    location: "Moscow, Russian Federation",
  },
  {
    award: "Honorable Mention in IPhO",
    location: "Zurich, Switzerland",
    dates: [new Date("2016-07-01")],
  },
  {
    award: "3rd place in Inter-University Rowing Competition (8x)",
    location: "Ulsan, South Korea",
    dates: [new Date("2019-10-01")],
  },
  {
    award: '"Академия Яндекса - школа разработки интерфейсов" Graduate',
    location: "Moscow, Russian Federation",
    dates: [new Date("2022-09-01"), new Date("2022-11-01")],
  },
];
awards.sort((a, b) => {
  return new Date(b.dates[0]).getTime() - new Date(a.dates[0]).getTime();
});

export const languages: string[] = [
  "English(Fluent)",
  "Russian(Fluent)",
  "Kyrgyz(Native)",
];

function getSkills(experiences: CvExperience[]) {
  const MAX_TECHNOLOGY_COUNT = 10;
  const allSkills = experiences
    .flatMap((experience) => experience.technicalStack || [])
    .filter(Boolean);

  const groupedSkills = allSkills.reduce((acc, current) => {
    if (!acc[current.type]) {
      acc[current.type] = {
        name: CvTechnicalStackTypeMap[current.type],
        technologies: [],
      };
    }
    acc[current.type].technologies.push(...current.technologies);
    return acc;
  }, {} as Record<CvTechnicalStack["type"], { name: string; technologies: string[] }>);

  Object.keys(groupedSkills).forEach((key) => {
    const frequencyMap = new Map<string, number>();
    groupedSkills[key as CvTechnicalStack["type"]].technologies.forEach(
      (technology) => {
        frequencyMap.set(technology, (frequencyMap.get(technology) || 0) + 1);
      }
    );
    const mostFrequentTechnology = Array.from(frequencyMap.entries());
    mostFrequentTechnology.sort((a, b) => b[1] - a[1]);
    groupedSkills[key as CvTechnicalStack["type"]].technologies =
      mostFrequentTechnology
        .map(([technology]) => technology)
        .slice(0, MAX_TECHNOLOGY_COUNT);
  });

  const _groupedSkills = Object.entries(groupedSkills);
  _groupedSkills.sort((a, b) => {
    return (
      CvTechnicalStackTypeOrder.indexOf(a[0] as CvTechnicalStack["type"]) -
      CvTechnicalStackTypeOrder.indexOf(b[0] as CvTechnicalStack["type"])
    );
  });

  return _groupedSkills.reduce((acc, [key, value]) => {
    acc[key as CvTechnicalStack["type"]] = value;
    return acc;
  }, {} as Record<CvTechnicalStack["type"], { name: string; technologies: string[] }>);
}

export const skills: Record<
  CvTechnicalStack["type"],
  { name: string; technologies: string[] }
> = getSkills(experiences);
