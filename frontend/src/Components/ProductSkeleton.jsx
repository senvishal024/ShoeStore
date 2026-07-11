function ProductSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md border border-[#E8DCC4] overflow-hidden"
          >

            {/* Product Image */}
            <div className="relative overflow-hidden h-64 bg-[#E8DCC4]">
              <div className="absolute inset-0 shimmer"></div>
            </div>

            <div className="p-5 space-y-4">

              {/* Brand */}
              <div className="relative overflow-hidden h-3 w-20 bg-[#D7C7AE] rounded">
                <div className="absolute inset-0 shimmer"></div>
              </div>

              {/* Product Name */}
              <div className="relative overflow-hidden h-6 w-40 bg-[#D7C7AE] rounded">
                <div className="absolute inset-0 shimmer"></div>
              </div>

              {/* Category */}
              <div className="relative overflow-hidden h-4 w-28 bg-[#D7C7AE] rounded">
                <div className="absolute inset-0 shimmer"></div>
              </div>

              {/* Price & Rating */}
              <div className="flex justify-between items-center">

                <div className="relative overflow-hidden h-6 w-20 bg-[#D7C7AE] rounded">
                  <div className="absolute inset-0 shimmer"></div>
                </div>

                <div className="relative overflow-hidden h-6 w-12 bg-[#D7C7AE] rounded">
                  <div className="absolute inset-0 shimmer"></div>
                </div>

              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-5">

                <div className="relative overflow-hidden flex-1 h-10 bg-[#D7C7AE] rounded-lg">
                  <div className="absolute inset-0 shimmer"></div>
                </div>

                <div className="relative overflow-hidden flex-1 h-10 bg-[#D7C7AE] rounded-lg">
                  <div className="absolute inset-0 shimmer"></div>
                </div>

              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default ProductSkeleton;