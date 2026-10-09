// statbar takes a label (like hunger) and a value (such as 80) passed as props and renders them 
type StatBarProps = {
  label: string;
  value: number;
}

export default function StatBar({label, value}: StatBarProps) {
return (
  <div className="statbar-row">
    <span className='statbar-label'>{label}</span>
    <div className='bar'>
      <div className='bar-fill' style={{width: `${value}%`}}></div>
    </div>
  </div>
)
}