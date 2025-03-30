
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface CaseStudyCardProps {
  title: string;
  company: string;
  description: string;
  image: string;
  tags: string[];
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  company,
  description,
  image,
  tags
}) => {
  return (
    <Card className="border-0 shadow-sm overflow-hidden">
      <div className="grid md:grid-cols-2 gap-0">
        <div className="h-full">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover aspect-square md:aspect-auto"
          />
        </div>
        <CardContent className="p-6 md:p-8 flex flex-col h-full">
          <div className="mb-2">
            <p className="text-sm text-gray-500">{company}</p>
            <h3 className="text-xl font-display font-semibold mt-1">{title}</h3>
          </div>
          
          <p className="text-gray-600 text-sm mt-4 flex-grow">{description}</p>
          
          <div className="flex flex-wrap gap-2 mt-6 mb-6">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="text-xs px-2 py-1 bg-gray-100 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <button className="flex items-center text-sm font-medium mt-auto">
            View Case Study
            <ArrowRight className="ml-1 h-4 w-4" />
          </button>
        </CardContent>
      </div>
    </Card>
  );
};

export default CaseStudyCard;
