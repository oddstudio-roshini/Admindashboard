import { useParams } from "@tanstack/react-router";
import { doctors } from "@/data/doctors";
import { patients } from "@/data/patients";

export default function DoctorDetailsPage() {
  const { doctorId } = useParams({
    from: "/doctors/$doctorId",
  });

  const doctor = doctors.find(
    (d) => d.id === doctorId
  );

  const assignedPatients = patients.filter(
    (p) => p.doctorId === doctorId
  );

  return (
    <div>
      <h1>{doctor?.name}</h1>

      <p>{doctor?.specialization}</p>

      <table>
        <thead>
          <tr>
            <th>Patient</th>
            <th>Age/Gender</th>
            <th>Diagnosis</th>
            <th>Contact</th>
            <th>Appointment</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {assignedPatients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.name}</td>
              <td>
                {patient.age} / {patient.gender}
              </td>
              <td>{patient.diagnosis}</td>
              <td>{patient.contact}</td>
              <td>{patient.appointmentDate}</td>
              <td>{patient.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}