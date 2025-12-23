export type ExperienceType = "employment" | "project";

export interface CvExperience {
 id?: string;
 title: string;
 start: Date | string;  
 end?: Date | string;  
 company: string;
 location?: string;
 responsibilities: string[];
 website?: string;
 pageBreak?: boolean;
 technicalStack?: CvTechnicalStack[];
}

export interface CvTechnicalStack {
  type:
| "frontend"
| "backend"
| "database"
| "devops"
| "other"
| "api"
| "tools"
| "testing_types"
| "languages"
| "Testing tools"
| "platforms"; // <-- ИЗМЕНЕНИЕ 1: ДОБАВЛЕН ТИП "platforms"
 author?: string[];
}

export const CvTechnicalStackTypeMap: Record<CvTechnicalStack["type"], string> = {
frontend: "Frontend",
backend: "Backend",
database: "Database",
devops: "DevOps",
other: "Other",
api: "API",
tools: "Tools",
testing_types: "Testing Types",
languages: "Languages",
"Testing tools": "Testing tools", 
platforms: "Platforms", // <-- ИЗМЕНЕНИЕ 2: ДОБАВЛЕНО ОТОБРАЖАЕМОЕ ИМЯ
};

export const CvTechnicalStackTypeOrder: CvTechnicalStack["type"][] = [
"frontend",
"backend",
"database",
"devops",
"api",
"tools",
"Testing tools",
 // <-- ИЗМЕНЕНИЕ 3: ДОБАВЛЕНО В ПОРЯДОК СОРТИРОВКИ (после Testing tools)
"testing_types", 
"other",
"platforms",
"languages", 
];

export interface Project {
  name: string;
  description: string;
  author?: string[];
  finishedDate?: string; // Дата прочтения
  tags?: string[];       // Хештеги (qa, личное развитие и т.д.)
  bookUrl?: string;
}