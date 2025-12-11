"use client";
import { useState } from "react";

export default function FileUpload() {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
      alert(`Файл "${e.target.files[0].name}" выбран!`);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {fileName && <p>Выбран файл: {fileName}</p>}
    </div>
  );
}
