import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
function ReviewComponent() {
    const [rating, setRating] = useState(0);
    const [review,setReview]=useState("");
    const [detail,setDetail]=useState([]);
    const [averageReview,setAverageReview]=useState(0); 
    const [totalReview,setTotalReview]=useState(0)
   /*  console.log("review",review); */
    const navigate=useNavigate()
    const{id}=useParams();
   useEffect(()=>{
    fetchReview();
   },[id])
   
    const submitReview=async ()=>{
       const token=localStorage.getItem("token");
        if(token){
              const response=await fetch(`https://shoestore-4f06.onrender.com/shoeapp/add-review/${id}`,{
                  method:"POST",
                  credentials: "include",
                  headers:{
                      Authorization:localStorage.getItem("token"),
                      "Content-Type":"application/json"
                  },
                  body:JSON.stringify({rating,review})
              })
              const data =await response.json();
              setReview("");
              setRating(0);
              toast.success("Review is added");
              fetchReview();
              
              
            }
            else{
              const isconfirmed=confirm("Please Login first");
              if(isconfirmed){
                return navigate("/login");
              }
             
            }
    }
    
    
    const fetchReview=async ()=>{
        const response= await fetch(`https://shoestore-4f06.onrender.com/shoeapp/show-review/${id}`,{
          credentials: "include",
            headers:{
                Authorization:null
            }
        })
        const data=await response.json();
        console.log("review",data)
        setDetail(data)
        setTotalReview(data.length);
        const  totalRating=data.reduce((sum,item)=> sum+item.rating,0);
        console.log("Total Rating:", totalRating);
        console.log("Ratings:", data.map(item => item.rating));
        const avg=data.length>0
        ?(totalRating/data.length).toFixed(1)
        :0;
        setAverageReview(avg)   
        console.log("Average:", avg);
      

    }
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      {/* Heading */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-[#4E220F]">
          Customer Reviews
        </h2>

        <p className="text-gray-500 mt-2">
          See what our customers are saying.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">

        {/* Left Side */}
        <div className="bg-white rounded-3xl shadow-lg p-8 h-fit">

          <h3 className="text-2xl font-bold text-[#4E220F]">
            Overall Rating
          </h3>

          <div className="flex items-center gap-3 mt-6">
            <span className="text-6xl font-bold text-[#4E220F]">
              {averageReview}
            </span>

            <div>

                <div className="flex mt-2 gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar
                        key={star}
                        size={32}
                        className={
                            star <= Math.round(averageReview)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }
                        />
                    ))}
                    </div>

              <p className="text-gray-500">
                Based on {totalReview} Reviews
              </p>
            </div>
          </div>

        </div>

        {/* Right Side */}
        <div className="lg:col-span-2">

          {/* Review Form */}
           
          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h3 className="text-2xl font-bold text-[#4E220F] mb-6">
              Share Your Experience
            </h3>

            <div className="mb-6">
            <h3 className="text-lg font-semibold text-[#4E220F] mb-3">
                Your Rating
            </h3>

            <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                    key={star}
                    size={32}
                    onClick={() => setRating(star)}
                    className={`cursor-pointer transition ${
                    rating >= star
                        ? "text-yellow-400"
                        : "text-gray-300"
                    } hover:scale-125`}
                />
                ))}
            </div>
            </div>
            <textarea
              rows="5"
              placeholder="Write your review..."
              className="w-full border rounded-xl p-4 outline-none resize-none"
              onChange={(e)=>setReview(e.target.value)}
            />

            <button className="mt-5 bg-[#4E220F] text-white px-8 py-3 rounded-xl hover:bg-[#9D6638] transition" 
            onClick={()=>submitReview()}>
              Submit Review
            </button>

          </div>

          {/* Reviews */}

          <div className="mt-10 space-y-6">
                 {detail.map((item)=>(
            <div className="bg-white rounded-3xl shadow-md p-6" key={item._id}>

              <div className="flex justify-between">

                <div>

                  <h4 className="font-bold text-xl text-[#4E220F]">
                    {item.userId.name}
                  </h4>

                  <div className="flex mt-2 gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar
                        key={star}
                        className={
                            star <= item.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }
                        />
                    ))}
                    </div>

                </div>

                <span className="text-gray-400">
                    {new Date(item.createdAt).toLocaleDateString()}
                </span>

              </div>

              <p className="mt-5 text-gray-600 leading-7">
                {item.review}
              </p>

            </div>
            ))}

            <div className="bg-white rounded-3xl shadow-md p-6">

              <div className="flex justify-between">

                <div>

                  <h4 className="font-bold text-xl text-[#4E220F]">
                    Rahul Sharma
                  </h4>

                  <p className="text-yellow-500 mt-1">
                    ★★★★☆
                  </p>

                </div>

                <span className="text-gray-400">
                  1 week ago
                </span>

              </div>

              <p className="mt-5 text-gray-600 leading-7">
                Nice fitting and fast delivery. Worth the price.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ReviewComponent;