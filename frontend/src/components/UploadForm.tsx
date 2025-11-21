import { useState } from "react";

function UploadForm({ onResult }: any) {
  const [resume, setResume] = useState<File | null>(null);
  const [jd, setJd] = useState<File | null>(null);

  const handleUpload = async () => {
    if (!resume) return alert("Resume is required!");

    const formData = new FormData();
    formData.append("resume", resume);
    if (jd) formData.append("jd", jd);

    const response = await fetch("http://localhost:5000/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    onResult(data);
  };

  return (
    <div>
      <h2>Upload Files</h2>

      <input type="file" onChange={(e) => setResume(e.target.files![0])} />
      <br /><br />

      <input type="file" onChange={(e) => setJd(e.target.files![0])} />
      <br /><br />

      <button onClick={handleUpload}>Analyze</button>
    </div>
  );
}

export default UploadForm;
