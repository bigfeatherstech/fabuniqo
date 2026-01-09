import React from 'react';

const FashionEcomGallerySkeleton = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-12 font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header Skeleton */}
        <div className="flex justify-between items-end mb-10 border-b border-zinc-100 pb-8">
          <div className="space-y-2">
            {/* Subtitle Skeleton */}
            <div className="h-3 w-32 bg-gray-200 rounded animate-pulse"></div>
            {/* Title Skeleton */}
            <div className="space-y-1">
              <div className="h-10 w-64 bg-gray-300 rounded animate-pulse"></div>
              <div className="h-10 w-40 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
          {/* View All Button Skeleton */}
          <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Video Section Skeleton (8 Cols) */}
          <div className="lg:col-span-8 relative">
            <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 rounded-sm">
              {/* Video Placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"></div>
              
              {/* Mute Toggle Skeleton */}
              <div className="absolute top-6 right-6 p-3 bg-white/30 backdrop-blur-md rounded-full">
                <div className="w-5 h-5 bg-gray-400 rounded-full animate-pulse"></div>
              </div>

              {/* Floating Card Skeleton */}
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <div className="bg-white p-4 shadow-2xl rounded-sm flex items-center gap-4 max-w-xs">
                  {/* Product Image Skeleton */}
                  <div className="w-16 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-sm animate-pulse"></div>
                  {/* Product Info Skeleton */}
                  <div className="flex-1 space-y-2">
                    <div className="h-3 w-20 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-32 bg-gray-300 rounded animate-pulse"></div>
                    <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-3 w-24 bg-gray-100 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Nav Section Skeleton (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            {/* Collection Items Skeleton */}
            <div className="space-y-4">
              {/* Generate 4 collection items */}
              {[...Array(4)].map((_, index) => (
                <div 
                  key={index}
                  className="relative p-6 border rounded-sm border-gray-200"
                >
                  <div className="flex justify-between items-center">
                    <div className="space-y-2">
                      {/* Index Number Skeleton */}
                      <div className="h-3 w-8 bg-gray-200 rounded animate-pulse"></div>
                      {/* Title Skeleton */}
                      <div className="h-4 w-32 bg-gray-300 rounded animate-pulse"></div>
                      {/* Category Skeleton */}
                      <div className="h-3 w-24 bg-gray-100 rounded animate-pulse"></div>
                    </div>
                    {/* Arrow Skeleton */}
                    <div className="w-5 h-5 bg-gray-200 rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* Progress Bar Skeleton */}
                  <div className="absolute bottom-0 left-0 h-[3px] bg-gray-200 w-full"></div>
                </div>
              ))}
            </div>

            {/* Promotional Banner Skeleton */}
            <div className="mt-8 p-8 bg-gray-800 rounded-sm">
              {/* Icon Skeleton */}
              <div className="mb-4">
                <div className="w-8 h-8 bg-gray-600 rounded animate-pulse"></div>
              </div>
              {/* Title Skeleton */}
              <div className="h-6 w-48 bg-gray-700 rounded animate-pulse mb-2"></div>
              {/* Description Skeleton */}
              <div className="space-y-1">
                <div className="h-3 w-full bg-gray-600 rounded animate-pulse"></div>
                <div className="h-3 w-3/4 bg-gray-600 rounded animate-pulse"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FashionEcomGallerySkeleton;