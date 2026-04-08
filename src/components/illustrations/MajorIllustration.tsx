/**
 * SVG Illustrations for Major Categories
 * Custom-designed icons for each vocational field
 */

interface IllustrationProps {
  category: string;
  className?: string;
}

export function MajorIllustration({ category, className = "w-full h-full" }: IllustrationProps) {
  const getIllustration = (cat: string) => {
    switch (cat) {
      case "TI":
        return (
          <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="40" y="50" width="120" height="80" rx="8" fill="#0D9488" opacity="0.1"/>
            <rect x="50" y="60" width="100" height="60" rx="4" fill="#0D9488" opacity="0.2"/>
            <circle cx="100" cy="90" r="15" fill="#0D9488"/>
            <path d="M85 90L95 100L115 80" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="60" y="140" width="30" height="4" rx="2" fill="#0D9488" opacity="0.3"/>
            <rect x="95" y="140" width="45" height="4" rx="2" fill="#0D9488" opacity="0.3"/>
            <circle cx="170" cy="40" r="8" fill="#F59E0B" opacity="0.5"/>
            <circle cx="30" cy="160" r="6" fill="#F59E0B" opacity="0.5"/>
          </svg>
        );
      
      case "TE":
        return (
          <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="50" fill="#0D9488" opacity="0.1"/>
            <path d="M100 60L120 80L100 100L80 80L100 60Z" fill="#0D9488" opacity="0.3"/>
            <rect x="85" y="95" width="30" height="40" rx="4" fill="#0D9488"/>
            <circle cx="100" cy="115" r="8" fill="white"/>
            <path d="M70 140L130 140" stroke="#0D9488" strokeWidth="4" strokeLinecap="round"/>
            <rect x="60" y="50" width="8" height="8" rx="2" fill="#F59E0B" opacity="0.6"/>
            <rect x="132" y="130" width="8" height="8" rx="2" fill="#F59E0B" opacity="0.6"/>
            <path d="M150 60L160 70M160 60L150 70" stroke="#0D9488" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      
      case "BI":
        return (
          <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="80" width="100" height="70" rx="8" fill="#0D9488" opacity="0.1"/>
            <path d="M70 120L90 100L110 110L130 90" stroke="#0D9488" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="70" cy="120" r="6" fill="#0D9488"/>
            <circle cx="90" cy="100" r="6" fill="#0D9488"/>
            <circle cx="110" cy="110" r="6" fill="#0D9488"/>
            <circle cx="130" cy="90" r="6" fill="#F59E0B"/>
            <rect x="60" y="60" width="20" height="4" rx="2" fill="#0D9488" opacity="0.3"/>
            <rect x="85" y="60" width="30" height="4" rx="2" fill="#0D9488" opacity="0.3"/>
            <circle cx="165" cy="50" r="10" fill="#F59E0B" opacity="0.3"/>
          </svg>
        );
      
      case "KE":
        return (
          <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="60" fill="#0D9488" opacity="0.1"/>
            <path d="M100 70V130M70 100H130" stroke="#0D9488" strokeWidth="12" strokeLinecap="round"/>
            <circle cx="100" cy="100" r="45" stroke="#0D9488" strokeWidth="3" opacity="0.3"/>
            <path d="M85 85L95 95M115 85L105 95M85 115L95 105M115 115L105 105" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
            <circle cx="160" cy="60" r="8" fill="#F59E0B" opacity="0.4"/>
            <circle cx="40" cy="140" r="6" fill="#F59E0B" opacity="0.4"/>
          </svg>
        );
      
      case "SE":
        return (
          <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="50" fill="#0D9488" opacity="0.1"/>
            <path d="M80 120Q100 80 120 120" stroke="#0D9488" strokeWidth="4" fill="none"/>
            <path d="M70 100Q100 70 130 100" stroke="#F59E0B" strokeWidth="3" fill="none"/>
            <circle cx="80" cy="90" r="8" fill="#0D9488" opacity="0.5"/>
            <circle cx="120" cy="90" r="8" fill="#0D9488" opacity="0.5"/>
            <rect x="95" y="60" width="10" height="30" rx="5" fill="#0D9488" opacity="0.3"/>
            <path d="M60 140L80 130L70 150Z" fill="#F59E0B" opacity="0.4"/>
            <path d="M140 140L120 130L130 150Z" fill="#F59E0B" opacity="0.4"/>
          </svg>
        );
      
      case "PA":
        return (
          <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="60" y="80" width="80" height="60" rx="8" fill="#0D9488" opacity="0.1"/>
            <rect x="70" y="90" width="25" height="20" rx="4" fill="#0D9488" opacity="0.3"/>
            <rect x="105" y="90" width="25" height="20" rx="4" fill="#0D9488" opacity="0.3"/>
            <rect x="70" y="115" width="25" height="20" rx="4" fill="#0D9488" opacity="0.3"/>
            <rect x="105" y="115" width="25" height="20" rx="4" fill="#0D9488" opacity="0.3"/>
            <path d="M60 80L100 50L140 80" stroke="#0D9488" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="100" cy="65" r="6" fill="#F59E0B"/>
            <rect x="95" y="140" width="10" height="10" rx="2" fill="#0D9488"/>
            <circle cx="170" cy="60" r="8" fill="#F59E0B" opacity="0.3"/>
          </svg>
        );
      
      default:
        return (
          <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="40" y="50" width="120" height="80" rx="8" fill="#0D9488" opacity="0.1"/>
            <rect x="50" y="60" width="100" height="60" rx="4" fill="#0D9488" opacity="0.2"/>
            <circle cx="100" cy="90" r="15" fill="#0D9488"/>
            <path d="M85 90L95 100L115 80" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="60" y="140" width="30" height="4" rx="2" fill="#0D9488" opacity="0.3"/>
            <rect x="95" y="140" width="45" height="4" rx="2" fill="#0D9488" opacity="0.3"/>
            <circle cx="170" cy="40" r="8" fill="#F59E0B" opacity="0.5"/>
            <circle cx="30" cy="160" r="6" fill="#F59E0B" opacity="0.5"/>
          </svg>
        );
    }
  };

  return getIllustration(category);
}
