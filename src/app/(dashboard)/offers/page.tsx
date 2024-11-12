"use client";

import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const Offers = () => {
  // Carousel state for Featured Promotions
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Static data for demonstration
  const featuredPromotions = [
    { title: 'Gold Exchange Bonus', description: '10% bonus on exchanges over 5000 BDT', image: '/images/gold-bonus.jpg' },
    { title: 'Low Fee Day', description: 'Reduced transaction fees for today only!', image: '/images/low-fee.jpg' },
    { title: 'VIP Discount', description: 'Exclusive discounts on high-value trades', image: '/images/vip-discount.jpg' }
  ];

  const personalizedOffers = [
    { title: 'Frequent Trader Bonus', description: 'Get a 2% discount on transaction fees' },
    { title: 'Loyalty Reward', description: 'Exclusive rates for returning customers' },
    { title: 'Referral Bonus', description: 'Earn rewards for referring friends' }
  ];

  const externalPartnerOffers = [
    { title: 'Retail Partner', discount: '15%', terms: 'On purchases over 2000 BDT', image: '/images/retail-offer.jpg' },
    { title: 'Dining Special', discount: '20%', terms: 'At select restaurants', image: '/images/dining-offer.jpg' },
    { title: 'Travel Deals', discount: '10%', terms: 'On flight bookings', image: '/images/travel-offer.jpg' }
  ];

  // Carousel controls
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % featuredPromotions.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + featuredPromotions.length) % featuredPromotions.length);

  return (
    <div className="container mx-auto p-6 dark:bg-neutral-900 dark:text-neutral-100">
      {/* Featured Promotions Carousel */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Featured Promotions</h2>
        <div className="relative overflow-hidden bg-neutral-100 dark:bg-neutral-800 rounded-lg shadow-md h-48">
          <img
            src={featuredPromotions[currentSlide].image}
            alt={featuredPromotions[currentSlide].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white">{featuredPromotions[currentSlide].title}</h3>
              <p className="text-sm text-white mt-2">{featuredPromotions[currentSlide].description}</p>
            </div>
          </div>
          <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-black bg-opacity-30 text-white">◀</button>
          <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-black bg-opacity-30 text-white">▶</button>
        </div>
      </section>

      {/* Personalized Offers */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Personalized Offers</h2>
        <div className="space-y-4">
          {personalizedOffers.map((offer, index) => (
            <div key={index} className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">{offer.title}</h3>
              <p className="text-sm">{offer.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* External Partner Offers */}
      <section>
        <h2 className="text-2xl font-bold mb-4">External Partner Offers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {externalPartnerOffers.map((offer, index) => (
            <div key={index} className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg shadow-md">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold">{offer.title}</h3>
              <p className="text-sm font-bold text-green-700">{offer.discount} off</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">{offer.terms}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Offers;
