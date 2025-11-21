import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Animated from './Animated';

export default function Contact() {
  return (
    <Animated as="section" preset="fadeUp" id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <Animated preset="fadeUp" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Контакти</h2>
        </Animated>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Animated preset="fadeUp" options={{ d: 0.1 }} className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-brand-green mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Телефон</h3>
                  <p className="text-gray-600">+38 (061) 123-45-67</p>
                  <p className="text-gray-600">+38 (050) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-brand-green mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">info@velocentr.zp.ua</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-brand-green mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Адреса</h3>
                  <p className="text-gray-600">м. Запоріжжя, вул. Соборний проспект, 123</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-brand-green mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Режим роботи</h3>
                  <p className="text-gray-600">Пн-Пт: 9:00 - 19:00</p>
                  <p className="text-gray-600">Сб-Нд: 10:00 - 18:00</p>
                </div>
              </div>
            </Animated>
            
            <Animated preset="fadeUp" options={{ d: 0.2 }} className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Зв'яжіться з нами</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Ваше ім'я"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
                />
                <input 
                  type="email" 
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
                />
                <textarea 
                  placeholder="Повідомлення"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
                ></textarea>
                <button type="submit" className="btn btn-primary w-full">
                  Відправити
                </button>
              </form>
            </Animated>
          </div>
        </div>
      </div>
    </Animated>
  );
}