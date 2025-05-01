import React from 'react';
import { ArrowRight } from 'lucide-react';

interface InfoCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  linkText: string;
  colorClass: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ 
  title, 
  description, 
  icon, 
  link, 
  linkText,
  colorClass
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg group">
      <div className={`h-2 ${colorClass}`}></div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className={`p-3 rounded-full ${colorClass.replace('bg-', 'bg-').replace('-600', '-100')} ${colorClass.replace('bg-', 'text-').replace('-100', '-600')} dark:${colorClass.replace('bg-', 'bg-').replace('-600', '-900/30')} dark:${colorClass.replace('bg-', 'text-').replace('-600', '-400')}`}>
            {icon}
          </div>
          <h3 className="ml-4 text-xl font-bold text-gray-900 dark:text-white">
            {title}
          </h3>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {description}
        </p>
        
        <a 
          href={link}
          className={`inline-flex items-center text-sm font-medium ${colorClass.replace('bg-', 'text-')} group-hover:underline`}
        >
          {linkText}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default InfoCard;