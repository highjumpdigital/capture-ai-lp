import React from 'react';
import { PlanCard } from './PlanCard';
import { StaticImageData } from 'next/image';

interface PlanCardsContainerProps {
  plans: {
    title: string;
    price: string;
    className: string;
    headerText: string;
    textClass: string;
    image: StaticImageData | string;
    planData: { title: string; flag: boolean }[];
    buttonTitle?: string;
    onClick?: () => void;
  }[];
  hoveredIndex?: number | null;
  onHoverIndex?: (index: number | null) => void;
}

export const PlanCardsContainer: React.FC<PlanCardsContainerProps> = ({ 
  plans,
  hoveredIndex,
  onHoverIndex
}) => {
  return (
    <div className="flex flex-wrap gap-6 justify-center items-stretch">
      {plans.map((plan, idx) => (
        <PlanCard
          key={idx}
          {...plan}
          hoveredIndex={hoveredIndex}
          onHoverIndex={onHoverIndex}
        />
      ))}
    </div>
  );
}; 