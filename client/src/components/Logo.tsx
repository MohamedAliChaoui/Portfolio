export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`inline-flex items-center ${className}`}>
      <svg 
        viewBox="0 0 200 100" 
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background with gradient */}
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e7cc7" />
            <stop offset="100%" stopColor="#0f5f8f" />
          </linearGradient>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e0f2ff" />
          </linearGradient>
        </defs>
        
        <rect width="200" height="100" fill="url(#bgGradient)" rx="12"/>
        
        {/* MAC Text */}
        <text 
          x="20" 
          y="50" 
          fontSize="32" 
          fontWeight="bold" 
          fill="url(#textGradient)"
          fontFamily="Arial, sans-serif"
          dominantBaseline="middle"
        >
          MAC
        </text>
        
        {/* Code Symbol */}
        <rect 
          x="140" 
          y="25" 
          width="45" 
          height="25" 
          fill="rgba(255,255,255,0.2)" 
          rx="6" 
          stroke="rgba(255,255,255,0.5)" 
          strokeWidth="1"
        />
        <text 
          x="162" 
          y="38" 
          fontSize="12" 
          fill="white" 
          fontFamily="monospace"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          &lt;/&gt;
        </text>
        
        {/* Subtitle */}
        <text 
          x="20" 
          y="70" 
          fontSize="10" 
          fill="rgba(255,255,255,0.9)" 
          fontFamily="Arial, sans-serif"
        >
          Full-Stack Developer
        </text>
      </svg>
    </div>
  );
};