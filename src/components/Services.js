import React from 'react';
import Animated from './Animated';

const services = [
  {
    id: 1,
    icon: '🔧',
    title: 'Обслуговування ровера',
    description: 'Повне технічне обслуговування велосипедів будь-якої складності. Діагностика, налаштування, заміна деталей.'
  },
  {
    id: 2,
    icon: '🎯',
    title: 'Обслуговування мотора',
    description: 'Професійний ремонт та обслуговування електромоторів для велосипедів. Гарантія якості.'
  },
  {
    id: 3,
    icon: '🚴',
    title: 'Виїзний майстер',
    description: 'Ремонт велосипеда у вас вдома або в офісі. Зручно, швидко та професійно.'
  },
  {
    id: 4,
    icon: '⚡',
    title: 'Інструктаж та старт',
    description: 'Навчання правильної їзди, інструктаж з безпеки, підготовка до поїздки.'
  }
];

export default function Services() {
  return (
    <Animated as="section" preset="fadeUp" id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <Animated preset="fadeUp" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Послуги</h2>
        </Animated>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Animated key={service.id} preset="fadeUp" options={{ d: index * 0.1 }} className="service-card">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </Animated>
          ))}
        </div>
      </div>
    </Animated>
  );
}