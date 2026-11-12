import type { Config } from "@react-router/dev/config";

export default {
  appDirectory: "src",
  ssr: false,
  prerender: [
    "/",
    "/about-us",
    "/academics",
    "/admissions",
    "/our-staff",
    "/contact-us",
  ],
} satisfies Config;
