import React from 'react';
import Animated from './Animated';

const discounts = [
  {
    title: 'Прокат велосипеда на вихідних (ПТ/СБ)',
    discount: '-40%',
    color: 'bg-blue-50 border-blue-200'
  },
  {
    title: 'Безкоштовний ремонт студентського велосипеда',
    discount: '-40%',
    color: 'bg-green-50 border-green-200'
  },
  {
    title: 'Безкоштовний тест-драйв електровелосипеда',
    discount: '-15%',
    color: 'bg-purple-50 border-purple-200'
  },
  {
    title: 'Відвідини на УЗВ',
    discount: '-10%',
    color: 'bg-orange-50 border-orange-200'
  },
  {
    title: 'Пенсіонерам та воїнам',
    discount: '-5%',
    color: 'bg-red-50 border-red-200'
  }
];

export default function Discounts() {
  return (
    <Animated as="section" preset="fadeUp" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <Animated preset="fadeUp" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Знижки є!</h2>
        </Animated>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {discounts.map((discount, index) => (
            <Animated key={index} preset="fadeUp" options={{ d: index * 0.1 }} className={`discount-card ${discount.color}`}>
              <h3 className="font-semibold text-gray-900 mb-4 text-sm leading-relaxed">{discount.title}</h3>
              <div className="text-3xl font-bold text-red-500">{discount.discount}</div>
            </Animated>
          ))}
        </div>
        
        <Animated preset="fadeUp" options={{ d: 0.6 }} className="text-center">
          <p className="text-lg text-gray-700 mb-6">
            Знижка <span className="text-red-500 font-bold text-xl">-10%</span> всім...
          </p>
          <button className="btn btn-primary">
            Забронювати
          </button>
        </Animated>
      </div>
    </Animated>
  );
}