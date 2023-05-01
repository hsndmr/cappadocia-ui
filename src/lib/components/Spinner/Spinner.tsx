import type { SVGProps } from 'react';
const Spinner = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    className={`animate-spin ${className}`}
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} className="opacity-25" />
    <path
      fill="currentColor"
      d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      className="opacity-75"
    />
  </svg>
);
export default Spinner;
