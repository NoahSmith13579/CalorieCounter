import React from "react";

interface ProgressBarProps {
  color: string;
  progress: number;
}

/**
 * Displays a progress bar whose width varies
 * @returns
 */
const ProgressBar: React.FC<ProgressBarProps> = ({ color, progress }) => {
  progress = Math.min(progress, 100);
  const minProgressText = 6;
  const minProgessBar = 1;
  const fillerStyle = {
    width: `${progress < minProgessBar ? 0 : progress}%`,
    backgroundColor: color,
  };
  return (
    <div className="progress-container">
      <div
        className="progress-filler"
        style={fillerStyle}
        data-cy={"progress-filler"}
        data-backgroundcolor={fillerStyle.backgroundColor}
        data-width={fillerStyle.width}
      >
        <span className="progress-label">
          {progress > minProgressText ? `${progress}%` : ""}
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
