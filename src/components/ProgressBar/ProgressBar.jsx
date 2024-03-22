import './ProgressBar.css'
export default function ProgressBar({ containerStyle, percentStyle }) {
  return (
    <div className="prog" style={containerStyle}>
      <div className="percent" style={percentStyle}></div>
    </div>
  );
}
