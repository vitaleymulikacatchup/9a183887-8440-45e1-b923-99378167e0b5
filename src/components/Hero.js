import React from 'react';
import Animated from './Animated';

export default function Hero() {
  return (
    <Animated as="section" preset="fadeIn" className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/hero-bg.jpg)',
          filter: 'brightness(0.4)'
        }}
      />
      
      <div className="relative z-10 text-center text-white px-4">
        <Animated preset="scaleIn" options={{ d: 0.2 }} className="mb-8">
          <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="w-8 h-8 bg-white rounded-full"></div>
          </div>
        </Animated>
        
        <Animated preset="fadeUp" options={{ d: 0.3 }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            ВЕЛО ЦЕНТР
          </h1>
        </Animated>
        
        <Animated preset="fadeUp" options={{ d: 0.4 }}>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            ЗАПОРІЖЖЯ
          </p>
        </Animated>
        
        <Animated preset="fadeUp" options={{ d: 0.5 }}>
          <button className="btn btn-primary text-lg px-8 py-4">
            ЗАБРОНЮВАТИ
          </button>
        </Animated>
      </div>
    </Animated>
  );
}