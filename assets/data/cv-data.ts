import type {
  CvExperience,
  CvEducation,
  CvAward,
  EmploymentType,
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
    id: "research-assistant-bmipl",
    title: "Research Assistant Intern",
    start: new Date("2018-09-01"),
    end: new Date("2018-12-01"),
    company: "BMIPL (UNIST)",
    location: "Ulsan, South Korea",
    responsibilities: [
      "Conducted research on deep learning models and machine learning algorithms for cancer detection using computer vision techniques.",
      "Implemented data preprocessing pipelines and feature engineering for medical imaging datasets.",
    ],
  },
  {
    id: "csharp-developer-megasoft",
    title: "C# Developer",
    start: new Date("2019-11-01"),
    end: new Date("2020-02-01"),
    company: 'LLC "Mega Soft"',
    location: "Bishkek, Kyrgyzstan",
    responsibilities: [
      "Engineered and deployed machine learning models for token prediction (NLP) and an OCR system with advanced image processing to handle skewed and distorted text.",
      "Architected and deployed the end-to-end web-based issue recognition system, including RESTful APIs, database integration, and model serving.",
    ],
  },
  {
    id: "fullstack-php-crmtech",
    title: "Full-stack PHP Developer",
    start: new Date("2020-11-01"),
    end: new Date("2021-05-01"),
    company: 'LLC "CRM Technologies"',
    location: "Bishkek, Kyrgyzstan",
    responsibilities: [
      "Architected and deployed custom CRM solutions, leveraging microservices and RESTful APIs to facilitate scalable enterprise data exchange.",
      "Engineered custom CRM solutions for enterprise clients, implementing RESTful APIs and a microservices architecture to ensure seamless, scalable data exchange.",
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
      "Led Agile development of complex FinTech solutions, driving timely delivery and system stability through technical oversight (code reviews) and mentorship/hiring.",
      "Defined strategic roadmap and technical architecture, while simultaneously designing and implementing the company-wide Design System and UI kit",
      "Delivered robust, scalable solutions featuring advanced error handling/monitoring, while concurrently creating a full-stack demo for rapid innovation and prototyping.",
    ],
    pageBreak: true,
  },
  {
    id: "team-lead-frontend-ogogo",
    title: "Team Lead Frontend Engineer",
    start: new Date("2024-04-01"),
    end: new Date("2025-10-31"),
    company: 'LLC "OGOGO"',
    location: "Bishkek, Kyrgyzstan",
    responsibilities: [
      "Led end-to-end Agile development for FinTech innovations, managing the product lifecycle from ideation to launch with cross-functional team alignment.",
      "Drove strategic product vision by conceiving and implementing the company-wide Design System and UI component library.",
      "Engineered high-quality frontend solutions using modern frameworks, with built-in comprehensive testing and monitoring to sustain performance and stability.",
    ],
  },
];
experiences.sort(
  (a, b) => new Date(b.start).getTime() - new Date(a.start).getTime()
);

export const professionalSummary = (() => {
  const totalYears = calculateTotalExperienceYears(experiences);
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

export const skills: string[] = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "CSS Grid",
  "SASS(LESS)",
  "React",
  "Vue.js",
  "Next.js",
  "Nuxt.js",
  "SPA(SSR)",
  "Redux(RTK, RTK Query)",
  "Redux Toolkit",
  "Webpack",
  "Vite",
  "RESTful APIs",
  "GraphQL",
  "Microservices",
  "Jest",
  "Vitest",
  "Cypress",
  "Playwright",
  "Unit Testing",
  "E2E Testing",
  "Lighthouse",
  "Web Vitals",
  "Performance Optimization",
  "CI/CD",
  "Agile",
  "Scrum",
];
