import React from 'react';

const CategoryGridSkeleton = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Categories Grid Skeleton */}
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {/* Generate 6 skeleton cards (matching your categories array) */}
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-4"
              >
                {/* Image container skeleton */}
                <div className="w-full mb-4">
                  <div className="w-full h-28 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg animate-pulse"></div>
                </div>
                
                {/* Category name skeleton */}
                <div className="text-center">
                  <div className="h-5 w-24 mx-auto bg-gray-200 rounded animate-pulse"></div>
                </div>
                
                {/* Border overlay skeletons */}
                <div className="absolute inset-0 border-2 border-transparent rounded-xl"></div>
                <div className="absolute inset-0 border-2 border-gray-200/30 rounded-xl"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Bar Skeleton */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Stat 1 */}
          <div className="text-center">
            <div className="h-9 w-16 mx-auto bg-gray-200 rounded-lg animate-pulse mb-2"></div>
            <div className="h-4 w-20 mx-auto bg-gray-100 rounded animate-pulse"></div>
          </div>
          
          {/* Stat 2 */}
          <div className="text-center">
            <div className="h-9 w-16 mx-auto bg-gray-200 rounded-lg animate-pulse mb-2"></div>
            <div className="h-4 w-16 mx-auto bg-gray-100 rounded animate-pulse"></div>
          </div>
          
          {/* Stat 3 */}
          <div className="text-center">
            <div className="h-9 w-12 mx-auto bg-gray-200 rounded-lg animate-pulse mb-2"></div>
            <div className="h-4 w-16 mx-auto bg-gray-100 rounded animate-pulse"></div>
          </div>
          
          {/* Stat 4 */}
          <div className="text-center">
            <div className="h-9 w-16 mx-auto bg-gray-200 rounded-lg animate-pulse mb-2"></div>
            <div className="h-4 w-20 mx-auto bg-gray-100 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryGridSkeleton;