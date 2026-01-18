import ResumeForm from "../components/ResumeForm";
import ResumePreview from "../components/ResumePreview";
import "../index.css";

export default function Builder() {
  return (
    <div className="builder-container">
      <div className="form-panel">
        <ResumeForm />
      </div>
      <div className="preview-panel">
        <ResumePreview />
      </div>
    </div>
  );
}
