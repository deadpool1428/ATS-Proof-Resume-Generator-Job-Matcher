import ResumeForm from "../components/ResumeForm";
import ResumePreview from "../components/ResumePreview";
import ATSAnalyzer from "../components/ATSAnalyzer";

export default function Builder() {
  return (
    <div className="builder-container">
      <div className="form-panel">
        <ResumeForm />

        {/* Visual separation between Form & ATS */}
        <div className="section-divider" />
        <div style={{ marginTop: "32px" }}>
          <ATSAnalyzer />
        </div>
      </div>

      <div className="preview-panel">
        <ResumePreview />
      </div>
    </div>
  );
}

