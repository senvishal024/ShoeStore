import React from "react";
import { FaSearch } from "react-icons/fa";
import  { useState } from "react";
import { FiRefreshCcw, FiFilter, FiArrowDownLeft, FiArrowDown, FiArrowUp} from "react-icons/fi";

function ProductSearch({
  search,
  setSearch,
  sort,
  setSort,
  category,
  setCategory,
}) {
  const [showFilter, setShowFilter] = useState(false);
const [showSort, setShowSort] = useState(false);

  const resetFilters = () => {
    setSearch("");
    setSort("");
    setCategory("");
  };

  return (
    <section className="relative w-full bg-cover bg-center min-h-[420px] md:min-h-[520px]"  style={{
    backgroundImage:
      "url('https://plus.unsplash.com/premium_photo-1664202526744-516d0dd22932?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  }}>

      {/* Heading */}
      <div className="absolute inset-0 bg-black/60">
  <div className="max-w-7xl mx-auto h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col  md:flex-row md:justify-between md:items-end gap-4 ">

<div className="text-center mb-2">
  <p className="text-[#D8B98A] uppercase tracking-[4px] text-sm font-semibold">
    Our Collection
  </p>

  <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
    Find Your Perfect Pair
  </h2>

  <p className="text-gray-200 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
    Explore premium footwear crafted for comfort, style and performance.
  </p>
</div>


      </div >



      {/* Filter Bar */}
<div className="rounded-2xl shadow-2xl p-4 md:p-6">

  <div className="flex flex-col sm:flex-row flex-wrap gap-4">

    {/* Search */}
    <div className="relative flex-[2] min-w-[220px]">
      <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9D6638]" />
      <input
        type="text"
        placeholder="Search shoes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
        w-full
        h-12
        pl-11
        pr-4
        bg-white
        border
        border-[#B0BA99]
        rounded-xl
        outline-none
        focus:border-[#9D6638]
        focus:ring-2
        focus:ring-[#9D6638]/20
        "
      />
      <div className="flex md:hidden gap-3 mt-4">

  <button
    onClick={() => setShowFilter(true)}
    className="flex-1 h-12 bg-white rounded-xl shadow flex items-center justify-center gap-2"
  >
    <FiFilter />
    Filters
  </button>

  <button
    onClick={() => setShowSort(true)}
    className="flex-1 h-12 bg-white rounded-xl shadow flex items-center justify-center gap-2"
  >
    <FiArrowUp /><FiArrowDown/>
    Sort
  </button>

</div>
    </div>

    {/* Category */}
   <div className="hidden md:block flex-1 min-w-[170px]">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="
        w-full
        h-12
        px-4
        bg-white
        border
        border-[#B0BA99]
        rounded-xl
        outline-none
        "
      >
        <option value="">All Categories</option>
        <option value="Running">Running</option>
        <option value="Sneakers">Sneakers</option>
        <option value="Sports">Sports</option>
        <option value="Casual">Casual</option>
        <option value="Formal">Formal</option>
      </select>
    </div>

    {/* Sort */}
    <div className="hidden md:block flex-1 min-w-[170px]">
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="
        w-full
        h-12
        px-4
        bg-white
        border
        border-[#B0BA99]
        rounded-xl
        outline-none
        "
      >
        <option value="">Sort By</option>
        <option value="Newest">Newest</option>
        <option value="lowtohigh">Price : Low → High</option>
        <option value="hightolow">Price : High → Low</option>
        <option value="atoz">Name : A → Z</option>
        <option value="ztoa">Name : Z → A</option>
      </select>
    </div>

    {/* Reset */}
    <button
      onClick={resetFilters}
      className="
      hidden
      h-12
      w-full
      sm:w-12
      rounded-xl
      bg-[#4E220F]
      text-white
      hover:bg-[#9D6638]
      transition
      md:flex
      justify-center
      items-center
      "
    >
      <FiRefreshCcw className="text-lg" />
    </button>

  </div>

</div>
      </div>
      </div>
      {showFilter && (
  <div className="fixed inset-0 bg-black/40 flex items-end z-50"
  onClick={()=>setShowFilter(false)}>
    <div className="bg-white w-full rounded-t-3xl p-6 animate-[slideUp_.25s_ease]" onClick={(e)=>e.stopPropagation}>

      <h2 className="text-xl font-bold mb-4">Filters</h2>

      <select
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
          setShowFilter(false)
        }
        }
        className="w-full border rounded-xl p-3"
      >
        <option value="">All Categories</option>
        <option value="Running">Running</option>
        <option value="Sneakers">Sneakers</option>
        <option value="Sports">Sports</option>
        <option value="Casual">Casual</option>
        <option value="Formal">Formal</option>
      </select>

    </div>
  </div>
)}
{showSort && (
  <div className="fixed inset-0 bg-black/40 flex items-end z-50"
  onClick={()=>{
    setShowSort(false)}}>
    <div className="bg-white w-full rounded-t-3xl p-6 animate-[slideUp_.25s_ease]" onClick={(e) => e.stopPropagation()}>

      <h2 className="text-xl font-bold mb-4">Sort By</h2>

      <select
        value={sort}
        onChange={(e) =>{
           setSort(e.target.value);
           setShowSort(false)
        }}
        className="w-full border rounded-xl p-3"
      >
        <option value="">Sort By</option>
        <option value="Newest">Newest</option>
        <option value="lowtohigh">Price : Low → High</option>
        <option value="hightolow">Price : High → Low</option>
        <option value="atoz">A → Z</option>
        <option value="ztoa">Z → A</option>
      </select>

    
    </div>
  </div>
)}
    </section>
  );
}

export default ProductSearch;