import React from 'react';
import { Check } from 'lucide-react';
import Animated from './Animated';

const pricingPlans = [
  {
    name: 'Schwinn Tandem',
    price: '2 год/хвил - 2 000 грн',
    features: [
      'Велосипед для двох',
      'Шолом в комплекті',
      'Страхування',
      'Технічна підтримка'
    ]
  },
  {
    name: 'Schwinn S1',
    price: '1 год/хвил - 1 000 грн',
    features: [
      'Міський велосипед',
      'Шолом в комплекті',
      'Страхування',
      'GPS трекер'
    ]
  },
  {
    name: 'Merida Big.7',
    price: '1 год/хвил - 1 200 грн',
    features: [
      'Гірський велосипед',
      'Професійне обладнання',
      'Страхування',
      'Технічна підтримка'
    ]
  }
];

export default function Pricing() {
  return (
    <Animated as="section" preset="fadeUp" id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <Animated preset="fadeUp" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Прокат велосипедів</h2>
        </Animated>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Animated key={plan.name} preset="fadeUp" options={{ d: index * 0.1 }} className="pricing-card">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-2xl font-bold text-brand-green mb-6">{plan.price}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <Check className="w-5 h-5 text-brand-green mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="btn btn-primary w-full">
                Забронювати
              </button>
            </Animated>
          ))}
        </div>
      </div>
    </Animated>
  );
}