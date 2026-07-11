function CartSkeleton() {
  return (
    <div className="min-h-screen bg-[#F7F1DE] py-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="mb-10 text-center">
          <div className="relative overflow-hidden mx-auto h-10 w-72 bg-[#D7C7AE] rounded-lg">
            <div className="absolute inset-0 shimmer"></div>
          </div>

          <div className="relative overflow-hidden mx-auto mt-4 h-5 w-52 bg-[#E8DCC4] rounded-lg">
            <div className="absolute inset-0 shimmer"></div>
          </div>
        </div>

        {/* Cart Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-[#E8DCC4] shadow-md overflow-hidden"
            >

              {/* Image */}
              <div className="relative overflow-hidden h-64 bg-[#E8DCC4]">
                <div className="absolute inset-0 shimmer"></div>
              </div>

              <div className="p-5 space-y-4">

                {/* Product Name */}
                <div className="relative overflow-hidden h-6 w-40 bg-[#D7C7AE] rounded">
                  <div className="absolute inset-0 shimmer"></div>
                </div>

                {/* Category */}
                <div className="relative overflow-hidden h-4 w-28 bg-[#E8DCC4] rounded">
                  <div className="absolute inset-0 shimmer"></div>
                </div>

                {/* Price */}
                <div className="relative overflow-hidden h-6 w-20 bg-[#D7C7AE] rounded">
                  <div className="absolute inset-0 shimmer"></div>
                </div>

                {/* Quantity */}
                <div className="flex justify-between items-center">

                  <div className="relative overflow-hidden h-10 w-32 bg-[#E8DCC4] rounded-full">
                    <div className="absolute inset-0 shimmer"></div>
                  </div>

                  <div className="relative overflow-hidden h-6 w-20 bg-[#D7C7AE] rounded">
                    <div className="absolute inset-0 shimmer"></div>
                  </div>

                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-2">

                  <div className="relative overflow-hidden flex-1 h-11 bg-[#D7C7AE] rounded-lg">
                    <div className="absolute inset-0 shimmer"></div>
                  </div>

                  <div className="relative overflow-hidden flex-1 h-11 bg-[#E8DCC4] rounded-lg">
                    <div className="absolute inset-0 shimmer"></div>
                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Price Details */}
        <div className="mt-10 bg-white rounded-2xl border border-[#E8DCC4] shadow-md p-8">

          <div className="relative overflow-hidden h-7 w-40 bg-[#D7C7AE] rounded">
            <div className="absolute inset-0 shimmer"></div>
          </div>

          <div className="space-y-4 mt-6">

            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="flex justify-between"
              >
                <div className="relative overflow-hidden h-5 w-32 bg-[#E8DCC4] rounded">
                  <div className="absolute inset-0 shimmer"></div>
                </div>

                <div className="relative overflow-hidden h-5 w-16 bg-[#D7C7AE] rounded">
                  <div className="absolute inset-0 shimmer"></div>
                </div>
              </div>
            ))}

          </div>

          <hr className="my-6 border-[#E8DCC4]" />

          <div className="flex justify-between">

            <div className="relative overflow-hidden h-7 w-24 bg-[#D7C7AE] rounded">
              <div className="absolute inset-0 shimmer"></div>
            </div>

            <div className="relative overflow-hidden h-7 w-24 bg-[#D7C7AE] rounded">
              <div className="absolute inset-0 shimmer"></div>
            </div>

          </div>

          {/* Checkout Button */}
          <div className="relative overflow-hidden mt-8 h-12 w-full bg-[#D7C7AE] rounded-xl">
            <div className="absolute inset-0 shimmer"></div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default CartSkeleton;