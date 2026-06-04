export interface Patient {
  id: string;
  doctorId: string;
  name: string;
  age: number;
  gender: string;
  diagnosis: string;
  contact: string;
  appointmentDate: string;
  visitType: string;
  status: string;
  notes: string;
}

const names = [
  "Ramesh",
  "Sita",
  "Lakshmi",
  "Krishna",
  "Arjun",
  "Swathi",
  "Bhavani",
  "Rajesh",
  "Mounika",
  "Prasad",
];

export const patients: Patient[] = [];

for (let d = 1; d <= 15; d++) {
  for (let p = 1; p <= 10; p++) {
    patients.push({
      id: `PAT-${d}-${p}`,
      doctorId: `DOC-${String(d).padStart(3, "0")}`,
      name: names[(p - 1) % names.length],
      age: 20 + p,
      gender: p % 2 === 0 ? "Female" : "Male",
      diagnosis: [
        "ACL Rehab",
        "Ankle Sprain",
        "Knee Osteoarthritis",
      ][p % 3],
      contact: `98765${d}${p}000`,
      appointmentDate: "2026-06-15",
      visitType: "Rehab Session",
      status: "SCHEDULED",
      notes: "Follow up after 2 weeks",
    });
  }
}