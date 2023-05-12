import React from "react";

interface ProgressBarProps {
  color: string;
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ color, progress }) => {
  return (
    <div className="progress-container">
      <div
        className="progress-filler"
        style={{ width: `${progress}%`, backgroundColor: color }}
      >
        <span className="progress-label">{progress}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
