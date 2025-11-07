import './GradientText.css';

export default function GradientText({
  children,
  className = '',
  colors = ['#1B2339', '#4079ff', '#A54941', '#BBBDB6', '#1B2339'],
  animationSpeed = 8,
  showBorder = false
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    animationDuration: `${animationSpeed}s`
  };

  return (
    <div className={`animated-gradient-text ${className}`}>
      {showBorder && <div className="gradient-overlay" style={gradientStyle}></div>}
      <h1 className="text-content" style={gradientStyle}>
        {children}
      </h1>
    </div>
  );
}
