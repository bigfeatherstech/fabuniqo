import React from 'react';

const NewArrivalsSkeleton = () => {
  // Your brand colors
  const fabuniqoGold = "rgb(209,167,67)";

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Skeleton */}
        <div className="text-center mb-10">
          {/* Badge Skeleton */}
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 rounded-full border border-gray-200 mb-4">
            <div className="w-4 h-4 bg-gray-300 rounded-full animate-pulse"></div>
            <div className="h-3 w-24 bg-gray-300 rounded animate-pulse"></div>
          </div>
          
          {/* Title Skeleton */}
          <div className="mb-3">
            <div className="h-8 w-64 mx-auto bg-gray-200 rounded-lg animate-pulse"></div>
          </div>
          
          {/* Subtitle Skeleton */}
          <div className="h-4 w-48 mx-auto bg-gray-100 rounded animate-pulse"></div>
        </div>

        {/* Product Grid Skeleton - 12 items matching your data */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {[...Array(12)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
            >
              {/* Product Image Skeleton */}
              <div className="relative aspect-square overflow-hidden bg-gray-50">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"></div>
                
                {/* Discount Badge Skeleton */}
                <div className="absolute top-3 left-3">
                  <div className="w-10 h-6 bg-gray-300 rounded animate-pulse"></div>
                </div>
                
                {/* Quick Actions Skeleton */}
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  <div className="w-8 h-8 bg-white rounded-full shadow-sm animate-pulse"></div>
                  <div className="w-8 h-8 bg-white rounded-full shadow-sm animate-pulse"></div>
                </div>
              </div>
              
              {/* Product Info Skeleton */}
              <div className="p-4">
                {/* Category Skeleton */}
                <div className="mb-2">
                  <div className="h-3 w-12 bg-gray-100 rounded animate-pulse"></div>
                </div>
                
                {/* Title Skeleton */}
                <div className="mb-3">
                  <div className="h-4 w-full bg-gray-200 rounded animate-pulse mb-1"></div>
                  <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                </div>
                
                {/* Price & Rating Skeleton */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-16 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-12 bg-gray-100 rounded animate-pulse"></div>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-gray-300 rounded-full animate-pulse"></div>
                    <div className="h-3 w-6 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
                
                {/* Add to Cart Button Skeleton */}
                <div className="w-full py-2 bg-gray-100 rounded flex items-center justify-center gap-2">
                  <div className="w-3 h-3 bg-gray-300 rounded-full animate-pulse"></div>
                  <div className="h-3 w-16 bg-gray-300 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button Skeleton */}
        <div className="text-center mt-12">
          <div className="inline-block px-8 py-3 border border-gray-300 rounded-full animate-pulse">
            <div className="h-4 w-24 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivalsSkeleton;