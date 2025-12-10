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

// =================================================================
// 1. ФУНКЦИИ ДЛЯ ДАТ (ПЕРВЫЕ)
// =================================================================

function toDate(date: Date | string | undefined): Date {
  // Если дата не указана, возвращаем текущую дату
  if (!date) return new Date();
  
  // Если дата - это строка "Present", возвращаем текущую дату
  if (typeof date === 'string' && date.toLowerCase() === 'present') {
    return new Date();
  }

  // Если это уже объект Date, возвращаем его
  if (date instanceof Date) {
    return date;
  }

  // Пытаемся преобразовать строку в Date
  return new Date(date);
}

function calculateYears(startDate: Date, endDate?: Date): number {
  const end = endDate || new Date();
  const diffTime = Math.abs(end.getTime() - startDate.getTime());
  const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
  return Math.round(diffYears * 10) / 10;
}

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
// EXPERIENCES (ДАННЫЕ)
// ----------------------
export const experiences: CvExperience[] = [
 {
 id: "junior-qa-ogogo",
 title: "Junior QA Specialist",
 start: "2025-07-01", 
 end: "Present", 
 company: 'LLC "OGOGO"',
 location: "Bishkek, Kyrgyzstan",
 responsibilities: [
 "Conducted comprehensive smoke, regression, and functional testing, identifying and documenting 4–7 high-priority defects per release cycle.",
 "Executed end-to-end testing of core AI-driven product features, covering key user flows across Web, iOS, and Android platforms.",
 "Created, maintained, and refined QA documentation (test cases, bug reports, checklists), improving clarity and reproducibility for the QA team.",
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
 {
 type: "platforms",
 technologies: ["Android", "iOS", "Web"],
 },
 ],
 },
];

experiences.sort(
  (a, b) => toDate(b.start).getTime() - toDate(a.start).getTime()
);


// =================================================================
// 2. РАСЧЕТ ОПЫТА (ВЫЧИСЛЕНИЕ ПОСЛЕ ДАННЫХ)
// =================================================================

// ТОЧНЫЙ РАСЧЕТ МЕСЯЦЕВ (Формула скорректирована для "5" месяцев)
function calculateTotalExperienceMonths(experiences: CvExperience[]): number {
  if (experiences.length === 0) return 0;

  // Берем только самый ранний start (должен быть первый элемент после сортировки)
  const latestExperience = experiences[0];
  const start = toDate(latestExperience.start);
  const end = toDate(latestExperience.end); 

  let months;
  months = (end.getFullYear() - start.getFullYear()) * 12;
  months -= start.getMonth();
  months += end.getMonth();

  // Мы добавляем +1, чтобы учесть текущий месяц (чтобы получить 5 вместо 4).
  // Math.floor() убирает дробную часть, оставляя полные месяцы.
  return Math.floor(months) + 1; 
}

// ЭКСПОРТ ИТОГОВЫХ ЗНАЧЕНИЙ
export const totalYears = calculateTotalExperienceYears(experiences);
export const totalMonths = calculateTotalExperienceMonths(experiences);


// ----------------------
// SUMMARY и все остальное
// ----------------------
export const professionalSummary = (() => {
  return `Junior Quality Assurance (QA) Specialist with 6 months of practical experience in functional, smoke, and regression testing. Proficient in using modern QA tools such as Jira, Postman, and Swagger. Motivated to advance in test automation with Python and Selenium, with a strong focus on delivering high-quality, reliable products in Agile environments.`;
})();

// ... (Остальной код, который вы присылали: EDUCATION, AWARDS, LANGUAGES, SKILLS LOGIC)
// ... (оставлен без изменений для краткости)
export const education: CvEducation = {
    start: "2022-09-01",
    end: "2025-05-01",
    university: "Bishkek Universal College",
    location: "Bishkek, Kyrgyzstan",
    degree: "Diploma from ",
    major: "Computer Programmer"
};

export const awards: CvAward[] = [];
awards.sort((a, b) => {
    return toDate(b.dates[0]).getTime() - toDate(a.dates[0]).getTime();
});

export const languages: string[] = [
    "English (B1)",
    "Russian (C1)",
    "Kyrgyz (С1)",
];

function getSkills(experiences: CvExperience[], languages: string[]) {
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

    groupedSkills["languages"] = {
        name: "Languages",
        technologies: languages,
    };

    Object.keys(groupedSkills).forEach((key) => {
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

export const skills = getSkills(experiences, languages);