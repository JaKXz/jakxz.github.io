import { defineEnvVars } from "@sveltejs/kit/env";

export const variables = defineEnvVars({
  RESUME_EMAIL: { static: true },
  RESUME_PHONE: { static: true },
  UNSPLASH_ACCESS_KEY: { static: true },
});
