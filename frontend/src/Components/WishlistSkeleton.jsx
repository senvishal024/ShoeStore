function WishlistSkeleton() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 animate-pulse">

      {/* Heading */}
      <div className="mb-10">
        <div className="h-10 w-64 bg-[#E8DCC4] rounded-lg"></div>
        <div className="h-4 w-80 bg-[#F1E7D3] rounded mt-4"></div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-[#E8DCC4]"
          >

            {/* Image */}
            <div className="relative">
              <div className="w-full h-64 bg-[#E8DCC4]"></div>

              {/* Heart */}
              <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-[#F3E8D2]"></div>
            </div>

            {/* Content */}
            <div className="p-5">

              <div className="h-4 w-20 bg-[#E8DCC4] rounded"></div>

              <div className="h-6 w-36 bg-[#D9C7A7] rounded mt-3"></div>

              <div className="h-4 w-24 bg-[#F3E8D2] rounded mt-3"></div>

              <div className="flex justify-between mt-5">

                <div className="h-7 w-20 bg-[#D9C7A7] rounded"></div>

                <div className="h-5 w-12 bg-[#F3E8D2] rounded"></div>

              </div>

              <div className="flex gap-3 mt-6">

                <div className="flex-1 h-11 rounded-xl bg-[#4E220F] opacity-30"></div>

                <div className="flex-1 h-11 rounded-xl bg-[#D9C7A7]"></div>

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default WishlistSkeleton;