import React from "react";

interface ProgressBarProps {
  color: string;
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ color, progress }) => {
  progress = Math.min(progress, 100);
  const fillerStyle = { width: `${progress}%`, backgroundColor: color };
  console.log("Progress: ", progress);
  return (
    <div className="progress-container">
      <div
        className="progress-filler"
        style={fillerStyle}
        data-cy={"progress-filler"}
        data-backgroundColor={fillerStyle.backgroundColor}
        data-width={fillerStyle.width}
      >
        <span className="progress-label">
          {progress > 1 ? `${progress}%` : ""}
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
