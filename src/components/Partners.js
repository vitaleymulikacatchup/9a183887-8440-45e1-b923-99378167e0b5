import React from 'react';
import Animated from './Animated';

const partners = [
  { name: 'Trek', logo: '/images/trek-logo.png' },
  { name: 'Schwinn', logo: '/images/schwinn-logo.png' },
  { name: 'Merida', logo: '/images/merida-logo.png' },
  { name: 'Author', logo: '/images/author-logo.png' }
];

export default function Partners() {
  return (
    <Animated as="section" preset="fadeUp" className="py-12 bg-purple-50">
      <div className="container mx-auto px-4">
        <Animated preset="fadeUp" className="text-center mb-8">
          <p className="text-gray-600">Наші партнери та виробники велосипедів, яким ми довіряємо</p>
        </Animated>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <Animated key={partner.name} preset="fadeIn" options={{ d: index * 0.1 }} className="grayscale hover:grayscale-0 transition-all duration-300">
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="h-12 md:h-16 object-contain"
              />
            </Animated>
          ))}
        </div>
      </div>
    </Animated>
  );
}