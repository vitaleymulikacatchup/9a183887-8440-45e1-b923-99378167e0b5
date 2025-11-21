import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import Animated from './Animated';

export default function Footer() {
  return (
    <Animated as="footer" preset="fadeUp" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <Animated preset="fadeUp" options={{ d: 0.1 }} className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-brand-green rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <span className="text-xl font-bold">ВЕЛО ЦЕНТР</span>
          </Animated>
          
          <Animated preset="fadeUp" options={{ d: 0.2 }} className="mb-6">
            <p className="text-gray-400 max-w-md mx-auto">
              Ваш надійний партнер у світі велосипедів. Прокат, ремонт, обслуговування в Запоріжжі.
            </p>
          </Animated>
          
          <Animated preset="fadeUp" options={{ d: 0.3 }} className="flex justify-center space-x-4 mb-8">
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-green transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-green transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </Animated>
          
          <Animated preset="fadeUp" options={{ d: 0.4 }} className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">
              © 2024 Вело Центр Запоріжжя. Всі права захищені.
            </p>
          </Animated>
        </div>
      </div>
    </Animated>
  );
}