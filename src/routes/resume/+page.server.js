import { RESUME_EMAIL, RESUME_PHONE } from "$env/static/private";

export function load() {
  return {
    phone: RESUME_PHONE,
    email: RESUME_EMAIL,
  };
}
