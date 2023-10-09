'use client'
import { useState } from 'react';

function Card({ title, price, features }) {

  return (
    <div className="bg-gray-800 text-gray-100 p-6 rounded-lg">
      <h2 className="text-xl font-medium">{title}</h2>

      <p className="text-3xl font-bold">{price}</p>

      <ul className="space-y-2">
        {features.map(feature => (
          <li key={feature} className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
            {feature}
          </li>
        ))}
      </ul>

      <a
        href="#"
        className="bg-indigo-500 text-white px-4 py-2 rounded-lg font-medium mt-4 inline-block"
      >
        Get Started
      </a>

    </div>
  );
}

function App() {

  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-center text-white mb-8">Pricing</h1>

      <div className="relative">

        <div className="absolute inset-0 pointer-events-none z-10" style={{
          maskImage: `radial-gradient(50rem 50rem at ${activeCard?.x ?? 0}px ${activeCard?.y ?? 0}px, #000 1%, transparent 50%)`
        }}>
        </div>

        <div className="grid gap-6">

          <Card
            onMouseMove={e => setActiveCard(card => ({ ...card, x: e.pageX, y: e.pageY }))}
            title="Basic"
            price="$9.99"
            features={['Access to standard workouts', 'Email support']}
          />

          <Card
            onMouseMove={e => setActiveCard(card => ({ ...card, x: e.pageX, y: e.pageY }))}
            title="Pro"
            price="$19.99"
            features={['Access to advanced workouts', 'Email support', 'Live Q&A access']}
          />

          <Card
            onMouseMove={e => setActiveCard(card => ({ ...card, x: e.pageX, y: e.pageY }))}
            title="Ultimate"
            price="$29.99"
            features={['Access to premium workouts', '24/7 support', '1-on-1 coaching', 'Early access']}
          />

        </div>
      </div>
    </div>
  );
}