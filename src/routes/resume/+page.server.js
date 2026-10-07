import { RESUME_EMAIL, RESUME_PHONE } from "$env/static/private";

export function load() {
  return { resumeEmail: RESUME_EMAIL, resumePhone: RESUME_PHONE };
}
