import {
  type RouteConfig,
  index,
  route,
} from "@react-router/dev/routes";

export default [
  index("./pages/Home.tsx"),
  route("about-us", "./pages/About.tsx"),
  route("academics", "./pages/Academics.tsx"),
  route("admissions", "./pages/Admissions.tsx"),
  route("our-staff", "./pages/Staff.tsx"),
  route("contact-us", "./pages/Contact.tsx"),
] satisfies RouteConfig;
