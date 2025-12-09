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
| "Testing tools"; // <-- ИЗМЕНЕНИЕ 1: Добавлен новый тип
 technologies: string[];
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
 Testing_tools: "Testing tools", // <-- ИЗМЕНЕНИЕ 2: Добавлено отображаемое имя
};

export const CvTechnicalStackTypeOrder: CvTechnicalStack["type"][] = [
"frontend",
"backend",
"database",
"devops",
"api",
"tools",
"Testing tools", // <-- ИЗМЕНЕНИЕ 3: Добавлено сюда, чтобы оно шло после "tools"
"testing_types", 
"other",
"languages", 
];

export interface CvEducation {
 start: Date | string;   
  end?: Date | string;   
  university: string;
  location: string;
  degree: string;
  major: string;
  minor?: string;
  gpa?: string;
  courses?: string[];
  academicLeaves?: Array<{
    start: Date | string;
    end: Date | string;
    reasons: Array<{
      title: string;
      employmentType?: EmploymentType;
      company?: string;
      experienceId?: string;
    }>;
  }>;
}

export type EmploymentType =
  | "full-time"
  | "part-time"
  | "contract"
  | "internship";

export interface CvAward {
  dates: (Date | string)[];
  award: string;
  location: string;
}

export interface CvData {
  professionalSummary: string;
  experiences: CvExperience[];
  education: CvEducation;
  awards: CvAward[];
  skills: Record<
    CvTechnicalStack["type"],
    { name: string; technologies: string[] }
  >;
}

export type Project = {
  github?: string;
  npm?: string;
  name?: string;
  description?: string;
  technologies?: string[];
};
