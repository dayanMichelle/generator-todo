import styles from "./ProgressBar.module.css";

type ProgressBarProps = {
  quantity: number;
  total: number;
  indicatorColor: string;
  trackColor: string;
};

export const ProgressBar = ({
  quantity,
  total,
  indicatorColor,
  trackColor,
}: ProgressBarProps) => {
  const center = 50 / 2,
    radius = center - 15,
    dashArray = 2 * Math.PI * radius,
    dashOffset = dashArray * ((total - quantity) / total);

  return (
    <div className={styles.svgPiWrapper} style={{ width: 50, height: 50 }}>
      <svg className={styles.svgPi} style={{ width: 50, height: 50 }}>
        <circle
          className="svg-pi-track"
          cx={center}
          cy={center}
          fill="transparent"
          r={radius}
          stroke={trackColor}
          strokeWidth={3}
        />
        <circle
          className={`svg-pi-indicator`}
          cx={center}
          cy={center}
          fill="transparent"
          r={radius}
          stroke={indicatorColor}
          strokeWidth={4}
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
