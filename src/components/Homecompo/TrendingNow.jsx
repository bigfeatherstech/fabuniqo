import React from 'react';
import { TrendingUp, Hash } from 'lucide-react';

const TrendingNow = () => {
  const trends = [
    { tag: '#MinimalistStyle', items: 245 },
    { tag: '#SustainableFashion', items: 189 },
    { tag: '#OversizedBlazers', items: 156 },
    { tag: '#PastelPalette', items: 203 },
    { tag: '#LeatherEverything', items: 178 },
    { tag: '#EveningGlow', items: 134 },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-[rgb(209,167,67)]/10 rounded-lg">
            <TrendingUp className="w-6 h-6 text-[rgb(209,167,67)]" />
          </div>
          <div>
            <h2 className="font-playfair text-2xl font-semibold text-gray-900">
              Trending <span style={{ color: 'rgb(209,167,67)' }}>Now</span>
            </h2>
            <p className="font-poppins text-gray-600 text-sm">
              Explore what's hot in fashion right now
            </p>
          </div>
        </div>

        {/* Trends Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {trends.map((trend, index) => (
            <div
              key={index}
              className="group relative p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-[rgb(209,167,67)] hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                    <Hash className="w-4 h-4 text-[rgb(209,167,67)]" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-gray-900 group-hover:text-[rgb(209,167,67)]">
                      {trend.tag}
                    </h3>
                    <p className="font-poppins text-sm text-gray-500 mt-1">
                      {trend.items} items
                    </p>
                  </div>
                </div>
                
                <div className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full group-hover:bg-[rgb(209,167,67)] group-hover:text-white transition-colors">
                  Trending
                </div>
              </div>
              
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-2 h-2 bg-[rgb(209,167,67)] rounded-full animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingNow;