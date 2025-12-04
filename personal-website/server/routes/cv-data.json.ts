import {
  professionalSummary,
  experiences,
  education,
  awards,
  skills,
} from "~/assets/data/cv-data";
import type { CvData } from "~/utils/types";
import { defineEventHandler } from "h3";

export default defineEventHandler(async (event): Promise<CvData> => {
  event.headers.set("Content-Type", "application/json");
  event.headers.set("Accept-Language", "en-US");

  const { academicLeaves, ...rest } = education;
  return {
    professionalSummary,
    experiences,
    education: rest,
    awards,
    skills,
  };
});
