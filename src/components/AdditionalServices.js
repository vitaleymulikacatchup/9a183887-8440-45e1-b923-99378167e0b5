import React from 'react';
import Animated from './Animated';

const services = [
  'Безкоштовна консультація',
  'Безкоштовне зберігання велосипеда',
  'Безкоштовне налаштування',
  'Мийка велосипеда',
  'Безкоштовна доставка для постійних клієнтів',
  'Безкоштовна заміна камери',
  'Знижки для постійних клієнтів'
];

export default function AdditionalServices() {
  return (
    <Animated as="section" preset="fadeUp" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <Animated preset="fadeUp" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Додаткові послуги</h2>
        </Animated>
        
        <div className="max-w-2xl mx-auto">
          <div className="grid gap-4">
            {services.map((service, index) => (
              <Animated key={index} preset="slideIn" options={{ d: index * 0.05, x: -20 }} className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <p className="text-gray-700 font-medium">{service}</p>
              </Animated>
            ))}
          </div>
          
          <Animated preset="fadeUp" options={{ d: 0.4 }} className="text-center mt-8">
            <button className="btn btn-primary">
              Дізнатися більше
            </button>
          </Animated>
        </div>
      </div>
    </Animated>
  );
}