import { notFound } from "next/navigation";

// With two root layouts there is no app-wide 404; catching unknown URLs here renders
// (site)/not-found.tsx inside the site layout.
export default function CatchAll() {
  notFound();
}
