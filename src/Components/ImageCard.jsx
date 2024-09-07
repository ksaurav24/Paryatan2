// import PropTypes from "prop-types";
// import Image from "next/image";
// import TourPage from "@/TourPage";
// function ImageCard({ image, name, description }) {
//   // component code here
//   return (
//     <>
//       <div className="relative w-[292px] h-[366px] mt-[20px] ml-[20px] rounded-[20px] overflow-hidden shadow-lg group">
//         <Image className="w-full h-full image-class object-cover group-hover:blur-sm group-hover:bg-zinc-800/40 transition-all duration-300 ease-in-out"
//           src={image} alt={name}/>
//         <div className="absolute  flex flex-col justify-end p-4 transition-transform duration-300">
//           {/* main fixed content */}
//           <div className="absolute bottom-[00px] left-0 w-full p-4 text-black bg-opacity-30  ">
//             {/* <h3 className="text-2xl text-xms font-sans mb-2">{name}</h3> */}
//             <div className="font-bold text-white text-4xl justify-end items-end transition-transform duration-500 group-hover:translate-y-[-100px] ">{name}</div>
//             <div className="group-hover:translate-y-[-70px] transition-transform duration-500 w-[100%]">
//               <a href={name} className="text-white-400 text-white opacity-[0] group-hover:opacity-[1] w-full">
//                 Know More
//               </a>
//             </div>
//           {/* <div className="absolute flex items-end p-4  bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       <p className="text-white text-base">{description}</p>
//                     </div> */}
//                   </div>
//                 </div>
//         </div>
//     </>

//   );
// }

// ImageCard.propTypes = {
//   image: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
// };

// export default ImageCard;

import PropTypes from "prop-types";// Import Next.js Link component

function ImageCard({ image, name, description, slug }) {
  return (
    <>
      <div className="relative w-[292px] h-[366px] mt-[20px]  rounded-[20px] overflow-hidden shadow-lg group">
        <img
          className="w-full h-full image-class object-cover group-hover:blur-sm group-hover:bg-zinc-800/40 transition-all duration-300 ease-in-out"
          src={image}
          alt={name}
        />
        <div className="absolute top-0 w-full h-full hover:bg-zinc-800/50 bg-zinc-800/30 overflow-hidden  flex flex-col justify-end p-4 transition-all duration-300">
          {/* main fixed content */}
          <div className="absolute  bottom-[00px] left-0 w-full p-4 text-black bg-opacity-30">
            <div className="font-bold  text-white text-4xl justify-end items-end transition-all duration-500 group-hover:translate-y-[-100px] ">
              {name}
            </div>
            <div className="group-hover:translate-y-[-70px] transition-transform duration-500 w-[100%]">
              {/* Use Next.js Link to pass the tour name in the query */}
              <a
                href={`/tour/${slug}`}
                className="text-white opacity-0 group-hover:opacity-100 w-full"
              >
                Know More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

ImageCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ImageCard;
