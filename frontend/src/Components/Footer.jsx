import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="
      bg-gradient-to-r 
      from-[#4E220F] 
      to-[#6B3A20]
      text-white
      pt-14
      pb-8
      "
    >

      <div className="max-w-7xl mx-auto px-5 sm:px-8">


        {/* Main Footer */}
        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-10
          "
        >


          {/* Brand */}
          <div>

            <h2
              className="
              text-3xl
              font-bold
              "
            >
              Shoe
              <span className="text-[#9D6638]">
                Store
              </span>
            </h2>


            <p
              className="
              text-[#B0BA99]
              mt-4
              leading-7
              text-sm
              sm:text-base
              "
            >
              Discover premium footwear crafted for style,
              comfort, and performance. Step into confidence
              with every pair.
            </p>

          </div>





          {/* Links */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>


            <ul className="space-y-3">

              {
                [
                  ["Home","/"],
                  ["Products","/products"],
                  ["About","/about"],
                  ["Contact","/contact"],
                  ["Admin","/admin"]
                ].map((item,index)=>(

                  <li key={index}>

                    <a
                      href={item[1]}
                      className="
                      text-[#B0BA99]
                      hover:text-white
                      hover:translate-x-1
                      inline-block
                      transition-all
                      duration-300
                      "
                    >
                      {item[0]}
                    </a>

                  </li>

                ))
              }


            </ul>

          </div>






          {/* Categories */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Categories
            </h3>


            <ul className="space-y-3">

              {
                [
                  "Men",
                  "Women",
                  "Running",
                  "Casual"
                ].map((cat,index)=>(

                  <li
                    key={index}
                    className="
                    text-[#B0BA99]
                    cursor-pointer
                    hover:text-white
                    hover:translate-x-1
                    transition-all
                    duration-300
                    "
                  >
                    {cat}
                  </li>

                ))
              }

            </ul>

          </div>






          {/* Newsletter */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Newsletter
            </h3>


            <p
              className="
              text-[#B0BA99]
              mb-4
              text-sm
              "
            >
              Subscribe to get updates on new arrivals
              and exclusive offers.
            </p>



            <div
              className="
              flex
              w-full
              "
            >

              <input
                type="email"
                placeholder="Your email"
                className="
                w-full
                px-4
                py-3
                rounded-l-lg
                outline-none
                bg-[#6B3A20]
                text-white
                placeholder:text-gray-300
                focus:ring-2
                focus:ring-[#9D6638]
                "
              />


              <button
                className="
                bg-[#9D6638]
                hover:bg-[#B07A4A]
                px-5
                rounded-r-lg
                transition
                font-semibold
                "
              >
                Join
              </button>


            </div>


          </div>


        </div>






        {/* Divider */}

        <hr
          className="
          border-[#9D6638]/30
          my-10
          "
        />






        {/* Bottom Footer */}

        <div
          className="
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-5
          "
        >


          <p
            className="
            text-[#B0BA99]
            text-sm
            text-center
            "
          >
            © {new Date().getFullYear()} ShoeStore.
            All rights reserved.
          </p>





          {/* Social Icons */}

          <div
            className="
            flex
            gap-5
            "
          >

            <a href="#">
              <FaInstagram
                className="
                text-2xl
                text-[#B0BA99]
                hover:text-[#9D6638]
                hover:scale-110
                transition
                "
              />
            </a>


            <a href="#">
              <FaFacebook
                className="
                text-2xl
                text-[#B0BA99]
                hover:text-[#9D6638]
                hover:scale-110
                transition
                "
              />
            </a>


            <a href="#">
              <FaTwitter
                className="
                text-2xl
                text-[#B0BA99]
                hover:text-[#9D6638]
                hover:scale-110
                transition
                "
              />
            </a>


            <a href="#">
              <FaLinkedin
                className="
                text-2xl
                text-[#B0BA99]
                hover:text-[#9D6638]
                hover:scale-110
                transition
                "
              />
            </a>


          </div>


        </div>


      </div>

    </footer>
  );
}


export default Footer;