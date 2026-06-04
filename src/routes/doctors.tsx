import { createFileRoute } from "@tanstack/react-router";
import DoctorsPage from "@/features/doctor/DoctorsPage";

export const Route = createFileRoute("/doctors")({
  component: DoctorsPage,
});