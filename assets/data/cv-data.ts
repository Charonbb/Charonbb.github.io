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


function toDate(date: Date | string | undefined): Date {
  if (!date) return new Date();
  return date instanceof Date ? date : new Date(date);
}


function calculateYears(startDate: Date, endDate?: Date): number {
  const end = endDate || new Date();
  const diffTime = Math.abs(end.getTime() - startDate.getTime());
  const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
  return Math.round(diffYears * 10) / 10;
}

// Calculate total years of experience
function calculateTotalExperienceYears(experiences: CvExperience[]): number {
  if (experiences.length === 0) return 0;

  const sortedExperiences = [...experiences].sort(
    (a, b) => toDate(a.start).getTime() - toDate(b.start).getTime()
  );

  let totalYears = 0;
  let currentEnd = new Date(0);

  for (const exp of sortedExperiences) {
    const start = toDate(exp.start);
    const end = toDate(exp.end);

    if (start > currentEnd) {
      totalYears += calculateYears(start, end);
    } else {
      if (end > currentEnd) {
        totalYears += calculateYears(currentEnd, end);
      }
    }

    if (end > currentEnd) {
      currentEnd = end;
    }
  }

  return Math.round(totalYears * 10) / 10;
}

// ----------------------
// EXPERIENCES
// ----------------------
export const experiences: CvExperience[] = [
  {
    id: "junior-qa-ogogo",
    title: "Junior QA Specialist",
    start: "July 2025",              
    end: "Present",                 
    company: 'LLC "OGOGO"',
    location: "Bishkek, Kyrgyzstan",
    responsibilities: [
      "Conducted thorough smoke and regression testing, contributing to the identification and reporting of an average of 4-7 critical bugs per cycle.",
      "Executed end-to-end testing primarily focused on key user scenarios within AI-driven features.",
      "Maintained and updated QA documentation, ensuring clarity and accuracy across test cases and reports.",
    ],
    technicalStack: [
      {
        type: "tools",
        technologies: ["Jira", "Postman", "Swagger", "Selenium", "Python"],
      },
      {
        type: "Testing tools",
        technologies: [
          "Smoke Testing",
          "Regression Testing",
          "Functional Testing",
          "Ad-hoc Testing",
          "Acceptance Testing",
          "System Testing",
          "API Testing",
          "Manual Testing (iOS, Android, Web)",
          "Black Box Testing",
          "Gray Box Testing (API)",
        ],
      },
    ],
  },
];

experiences.sort(
  (a, b) => toDate(b.start).getTime() - toDate(a.start).getTime()
);

export const totalYears = calculateTotalExperienceYears(experiences);

// ----------------------
// SUMMARY
// ----------------------
export const professionalSummary = (() => {
  return `Junior Quality Assurance (QA) Specialist with 6 months of hands-on experience in functional, smoke, and regression testing. Proficient with modern QA tools like Jira, Postman, and Swagger. Eager to advance in test automation using Python and Selenium, focused on ensuring high-quality product delivery in Agile environments.`;
})();

// ----------------------
// EDUCATION
// ----------------------
export const education: CvEducation = {
  start: "2022-09-01",
  end: "2025-05-01",
  university: "Bishkek Universal College",
  location: "Bishkek, Kyrgyzstan",
  degree: "Diploma from ",
  major: "Computer Programmer"
};

// ----------------------
// AWARDS
// ----------------------
export const awards: CvAward[] = [];
awards.sort((a, b) => {
  return toDate(b.dates[0]).getTime() - toDate(a.dates[0]).getTime();
});

// ----------------------
// LANGUAGES
// ----------------------
export const languages: string[] = [
  "English (secondary)",
  "Russian (fluent)",
  "Kyrgyz (native)",
];

// ----------------------
// SKILLS LOGIC
// ----------------------
function getSkills(experiences: CvExperience[], languages: string[]) { // 1. ДОБАВЛЕН languages как аргумент
 const MAX_TECHNOLOGY_COUNT = 10;
 const allSkills = experiences
 .flatMap((experience) => experience.technicalStack || [])
 .filter(Boolean);

 const groupedSkills = allSkills.reduce((acc, current) => {
 if (!acc[current.type]) {
 acc[current.type] = {
 name: CvTechnicalStackTypeMap[current.type] || current.type,
 technologies: [],
 };
}
 acc[current.type].technologies.push(...current.technologies);
 return acc;
}, {} as Record<string, { name: string; technologies: string[] }>);

 // 2. ДОБАВЛЕНИЕ СЕКЦИИ ЯЗЫКОВ
 groupedSkills["languages"] = {
 name: "Languages",
 technologies: languages,
 };
// ---------------------------
 Object.keys(groupedSkills).forEach((key) => {
    // 3. ИСКЛЮЧЕНИЕ ЯЗЫКОВ из логики подсчета частоты/среза
    if (key === "languages") return; 

const frequencyMap = new Map<string, number>();
groupedSkills[key].technologies.forEach((technology) => {
 frequencyMap.set(technology, (frequencyMap.get(technology) || 0) + 1);
 });

const mostFrequentTechnology = Array.from(frequencyMap.entries());
mostFrequentTechnology.sort((a, b) => b[1] - a[1]);

groupedSkills[key].technologies = mostFrequentTechnology
.map(([technology]) => technology)
.slice(0, MAX_TECHNOLOGY_COUNT);
 });

 const _groupedSkills = Object.entries(groupedSkills);
_groupedSkills.sort((a, b) => {
return (
 CvTechnicalStackTypeOrder.indexOf(a[0] as any) -
 CvTechnicalStackTypeOrder.indexOf(b[0] as any)
 );
});

return _groupedSkills.reduce((acc, [key, value]) => {
 acc[key as keyof typeof CvTechnicalStackTypeMap] = value;
 return acc;
 }, {} as Record<string, { name: string; technologies: string[] }>);
}
export const skills = getSkills(experiences, languages); // 4. ИЗМЕНЕНО: Добавлен languages