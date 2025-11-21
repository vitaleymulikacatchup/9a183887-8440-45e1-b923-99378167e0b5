import React from 'react';
import { Star, MapPin } from 'lucide-react';
import Animated from './Animated';

const reviews = [
  {
    id: 1,
    image: '/images/review1.jpg',
    text: 'Дуже задоволений сервісом! Велосипед в ідеальному стані, персонал привітний та професійний. Обов\'язково повернуся знову!',
    author: 'Олександр М.',
    rating: 5,
    location: 'Запоріжжя'
  },
  {
    id: 2,
    image: '/images/review2.jpg',
    text: 'Чудовий досвід прокату! Велосипеди якісні, ціни адекватні. Рекомендую всім, хто любить активний відпочинок.',
    author: 'Марина К.',
    rating: 5,
    location: 'Запоріжжя'
  },
  {
    id: 3,
    image: '/images/review3.jpg',
    text: 'Професійний підхід до справи. Швидко підібрали велосипед під мої потреби. Дякую за якісний сервіс!',
    author: 'Дмитро П.',
    rating: 5,
    location: 'Запоріжжя'
  }
];

export default function Reviews() {
  return (
    <Animated as="section" preset="fadeUp" id="reviews" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <Animated preset="fadeUp" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Відгуки</h2>
        </Animated>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Animated key={review.id} preset="fadeUp" options={{ d: index * 0.1 }} className="card">
              <div className="mb-4">
                <img 
                  src={review.image} 
                  alt={`Відгук ${review.author}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              
              <div className="flex items-center mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {review.text}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">{review.author}</span>
                <div className="flex items-center text-gray-500 text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  {review.location}
                </div>
              </div>
            </Animated>
          ))}
        </div>
      </div>
    </Animated>
  );
}