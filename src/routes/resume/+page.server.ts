import { RESUME_EMAIL, RESUME_PHONE } from "$app/env/private";

export function load() {
  return {
    phone: RESUME_PHONE,
    email: RESUME_EMAIL,
  };
}
