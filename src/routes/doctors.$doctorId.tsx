import { createFileRoute } from "@tanstack/react-router";
import DoctorDetailsPage from "@/features/doctor/DoctorDetailsPage";

export const Route = createFileRoute("/doctors/$doctorId")({
  component: DoctorDetailsPage,
});