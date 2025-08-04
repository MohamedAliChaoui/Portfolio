export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <svg 
      viewBox="0 0 400 200" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <rect width="400" height="200" fill="#f8f9fa" rx="10"/>
      
      {/* MAC Text */}
      <text 
        x="50" 
        y="120" 
        fontSize="72" 
        fontWeight="bold" 
        fill="#1e7cc7"
        fontFamily="Arial, sans-serif"
      >
        MAC
      </text>
      
      {/* Code Symbol */}
      <rect 
        x="310" 
        y="50" 
        width="80" 
        height="50" 
        fill="white" 
        rx="8" 
        stroke="#1e7cc7" 
        strokeWidth="3"
      />
      <text 
        x="325" 
        y="80" 
        fontSize="20" 
        fill="#1e7cc7" 
        fontFamily="monospace"
      >
        &lt;/&gt;
      </text>
      
      {/* Subtitle */}
      <text 
        x="50" 
        y="150" 
        fontSize="24" 
        fill="#1e7cc7" 
        fontFamily="Arial, sans-serif"
      >
        Full-Stack Developer
      </text>
    </svg>
  );
};