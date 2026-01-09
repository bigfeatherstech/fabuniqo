import React from 'react';

const BestSellersSkeleton = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header with filter skeleton */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            {/* Badge Skeleton */}
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 rounded-full border border-gray-200 mb-4">
              <div className="w-4 h-4 bg-gray-300 rounded-full animate-pulse"></div>
              <div className="h-3 w-24 bg-gray-300 rounded animate-pulse"></div>
            </div>
            
            {/* Title Skeleton */}
            <div className="mb-3">
              <div className="h-8 w-72 md:w-80 bg-gray-200 rounded-lg animate-pulse"></div>
            </div>
            
            {/* Subtitle Skeleton */}
            <div className="h-4 w-56 bg-gray-100 rounded animate-pulse"></div>
          </div>

          {/* Filter Tabs Skeleton */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-end">
            {/* 7 filter tabs matching your filters array */}
            {[...Array(7)].map((_, index) => (
              <div
                key={index}
                className="px-3 py-1.5 rounded-full bg-gray-100 animate-pulse"
              >
                <div className="h-3 w-12 bg-gray-300 rounded"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Products Grid Skeleton - 8 items matching your data */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {[...Array(8)].map((_, index) => (
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

                {/* Sold Badge Skeleton */}
                <div className="absolute top-3 right-3">
                  <div className="w-16 h-6 bg-gray-400 rounded-full animate-pulse"></div>
                </div>

                {/* Quick Actions Skeleton */}
                <div className="absolute top-12 right-3 flex flex-col gap-2">
                  <div className="w-8 h-8 bg-white rounded-full shadow-sm animate-pulse"></div>
                  <div className="w-8 h-8 bg-white rounded-full shadow-sm animate-pulse"></div>
                </div>
              </div>

              {/* Product Info Skeleton */}
              <div className="p-4">
                {/* Category Skeleton */}
                <div className="mb-2">
                  <div className="h-3 w-16 bg-gray-100 rounded animate-pulse"></div>
                </div>
                
                {/* Product Name Skeleton */}
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
            <div className="h-4 w-32 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellersSkeleton;