export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  email: string;
  phone: string;
  hospitalId: string;
  clinicId: string;
  status: "ACTIVE" | "INACTIVE";
  patients: number;
}

export const doctors: Doctor[] = [
  {
    id: "DOC-001",
    name: "Ravi Kumar",
    specialization: "Orthopedics",
    email: "ravi@arthomove.com",
    phone: "9876543210",
    hospitalId: "HOSP-100",
    clinicId: "CLN-1001",
    status: "ACTIVE",
    patients: 10,
  },
  {
    id: "DOC-002",
    name: "Suresh Reddy",
    specialization: "Neurology",
    email: "suresh@arthomove.com",
    phone: "9876543211",
    hospitalId: "HOSP-100",
    clinicId: "CLN-1002",
    status: "ACTIVE",
        patients: 10,

  },
  {
    id: "DOC-003",
    name: "Lakshmi Devi",
    specialization: "Cardiology",
    email: "lakshmi@arthomove.com",
    phone: "9876543212",
    hospitalId: "HOSP-100",
    clinicId: "CLN-1003",
    status: "ACTIVE",
        patients: 10,

  },
  {
    id: "DOC-004",
    name: "Anil Kumar",
    specialization: "Pediatrics",
    email: "anil@arthomove.com",
    phone: "9876543213",
    hospitalId: "HOSP-100",
    clinicId: "CLN-1004",
    status: "ACTIVE",
        patients: 10,

  },
  {
    id: "DOC-005",
    name: "Venkatesh Rao",
    specialization: "Orthopedics",
    email: "venkatesh@arthomove.com",
    phone: "9876543214",
    hospitalId: "HOSP-100",
    clinicId: "CLN-1005",
    status: "ACTIVE",
    patients: 10,

  },
  {
    id: "DOC-006",
    name: "Srinivas Reddy",
    specialization: "Neurology",
    email: "srinivas@arthomove.com",
    phone: "9876543215",
    hospitalId: "HOSP-100",
    clinicId: "CLN-1006",
    status: "ACTIVE",
    patients: 10,

  },
  {
    id: "DOC-007",
    name: "Bhanu Prakash",
    specialization: "Cardiology",
    email: "bhanu@arthomove.com",
    phone: "9876543216",
    hospitalId: "HOSP-100",
    clinicId: "CLN-1007",
    status: "ACTIVE",
    patients: 10,

  },
  {
    id: "DOC-008",
    name: "Mahesh Babu",
    specialization: "Orthopedics",
    email: "mahesh@arthomove.com",
    phone: "9876543217",
    hospitalId: "HOSP-100",
    clinicId: "CLN-1008",
    status: "ACTIVE",
    patients: 10,
  },
  {
    id: "DOC-009",
    name: "Nagarjuna Rao",
    specialization: "Pediatrics",
    email: "nagarjuna@arthomove.com",
    phone: "9876543218",
    hospitalId: "HOSP-100",
    clinicId: "CLN-1009",
    status: "ACTIVE",
    patients: 10,
  },
  {
    id: "DOC-010",
    name: "Harika Devi",
    specialization: "Cardiology",
    email: "harika@arthomove.com",
    phone: "9876543219",
    hospitalId: "HOSP-100",
    clinicId: "CLN-1010",
    status: "ACTIVE",
        patients: 10,

  },
  {
    id: "DOC-011",
    name: "Keerthi Reddy",
    specialization: "Orthopedics",
    email: "keerthi@arthomove.com",
    phone: "9876543220",
    hospitalId: "HOSP-100",
    clinicId: "CLN-1011",
    status: "ACTIVE",
        patients: 10,

  },
  {
    id: "DOC-012",
    name: "Anusha Rao",
    specialization: "Neurology",
    email: "anusha@arthomove.com",
    phone: "9876543221",
    hospitalId: "HOSP-100",
    clinicId: "CLN-1012",
    status: "ACTIVE",
        patients: 10,

  },
  {
    id: "DOC-013",
    name: "Praveen Kumar",
    specialization: "Cardiology",
    email: "praveen@arthomove.com",
    phone: "9876543222",
    hospitalId: "HOSP-100",
    clinicId: "CLN-1013",
    status: "ACTIVE",
        patients: 10,

  },
  {
    id: "DOC-014",
    name: "Tejaswini",
    specialization: "Pediatrics",
    email: "tejaswini@arthomove.com",
    phone: "9876543223",
    hospitalId: "HOSP-100",
    clinicId: "CLN-1014",
    status: "ACTIVE",
        patients: 10,

  },
  {
    id: "DOC-015",
    name: "Madhavi Devi",
    specialization: "Orthopedics",
    email: "madhavi@arthomove.com",
    phone: "9876543224",
    hospitalId: "HOSP-100",
    clinicId: "CLN-1015",
    status: "INACTIVE",
            patients: 10,

    
  },
];