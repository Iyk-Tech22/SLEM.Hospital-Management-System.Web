
import { useState } from "react";

import BasicForm from "@/components/addDoctor/BasicForm";
import AccountForm from "@/components/addDoctor/AccountForm";
import SocialForm from "@/components/addDoctor/SocialForm";


export default function AddDoctor() {
  const [selectedForm, setSelectedForm] = useState<string>("basicForm");
  

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-base md:text-lg font-semibold">Add New Doctor</h2>

      {/* DOCTOR BASIC INFORMATION FORM */}
      <BasicForm selectedForm={selectedForm} onSelectForm={setSelectedForm} />

      {/* DOCTOR ACCOUNT INFORMATION FORM */}
      <AccountForm selectedForm={selectedForm} onSelectForm={setSelectedForm} />

      {/* DOCTOR SOCIAL MEDIAL INFO */}
      <SocialForm selectedForm={selectedForm} onSelectForm={setSelectedForm} />
    </div>
  );
}
