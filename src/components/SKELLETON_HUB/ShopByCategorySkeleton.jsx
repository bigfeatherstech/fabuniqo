import React from 'react';

const ShopByCategorySkeleton = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Skeleton */}
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-2">
            {/* Title skeleton */}
            <div className="h-8 w-64 bg-gray-200 rounded-lg animate-pulse"></div>
            {/* Subtitle skeleton */}
            <div className="h-4 w-48 bg-gray-100 rounded animate-pulse"></div>
          </div>
          
          {/* Navigation buttons skeleton */}
          <div className="hidden md:flex items-center gap-2">
            <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Categories Grid Skeleton */}
        <div className="relative">
          <div className="flex gap-4 overflow-x-hidden pb-4">
            {/* Generate 8 skeleton cards (matching your actual data count) */}
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="flex-shrink-0 relative w-64 md:w-72 rounded-xl overflow-hidden"
              >
                {/* Image container skeleton */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse">
                  {/* Gradient overlay skeleton */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-300 via-gray-200/50 to-transparent"></div>
                  
                  {/* Text content skeleton */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    {/* Category name skeleton */}
                    <div className="h-6 w-32 bg-gray-100 rounded mb-2 animate-pulse"></div>
                    {/* Item count skeleton */}
                    <div className="h-4 w-20 bg-gray-100/80 rounded animate-pulse"></div>
                  </div>
                </div>
                
                {/* Shop button skeleton */}
                <div className="absolute bottom-4 right-4 w-20 h-8 bg-gray-200 rounded-full animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopByCategorySkeleton;