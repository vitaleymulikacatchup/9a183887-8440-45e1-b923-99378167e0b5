import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Animated from './Animated';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Animated as="header" preset="fadeIn" className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-brand-green rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <span className="text-xl font-bold text-gray-900">ВЕЛО ЦЕНТР</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#reviews" className="text-gray-600 hover:text-gray-900 transition-colors">Відгуки</a>
            <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">Послуги</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Ціни</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Контакти</a>
          </nav>
          
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#reviews" className="text-gray-600 hover:text-gray-900 transition-colors">Відгуки</a>
              <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">Послуги</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Ціни</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Контакти</a>
            </nav>
          </div>
        )}
      </div>
    </Animated>
  );
}