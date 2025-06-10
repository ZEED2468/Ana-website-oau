// import React from "react";

// const Expectations = () => {
//   const expectations = [
//     { img: "/book-store.svg", title: "Bookstore of the Day" },
//     { img: "/face-paint.svg", title: "Face Painting" },
//     { img: "/poetry-slam.svg", title: "Poetry Slam" },
//     { img: "/artists.svg", title: "Artists Panel Sessions" },
//     { img: "/refreshments.svg", title: "Refreshments and fun" },
//     { img: "/music-collabs.svg", title: "Music Collabs" },
//     { img: "/drama.svg", title: "Drama Performances" },
//     { img: "/giveaway.svg", title: "Giveaways and Audience prizes" },
//   ];

//   return (
//     <div className="bg-[#F9F9FB] px-6 py-20 lg:px-32">
//       {/* Header */}
//       <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-center lg:text-left">
//         <h1 className="special-font font-bold text-[1.5rem] lg:text-[2.75rem]">
//           What to Expect at #ANAOAU25
//         </h1>
//         <img
//           src="/stars.svg"
//           alt="Stars"
//           className="w-[12rem] lg:w-[14rem] h-auto"
//         />
//         <p className="text-[#62636C] text-sm lg:text-base max-w-xl">
//           This year's theme, “New Tongues”, explores how today's artists are
//           fusing native languages and global genres—from Hausapiano to Yoruba
//           rap. Come for the books. Stay for the beats.
//         </p>
//       </div>

//       {/* Expectations Grid */}
//       <div className="mt-12 bg-white border border-[#B9BBC6] shadow-[24px_24px_0_0_rgba(0,0,0,0.08)] rounded-md grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
//         {expectations.map((item, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center text-center px-4"
//           >
//             <img
//               src={item.img}
//               alt={item.title}
//               className="w-10 h-12 w-auto object-contain mb-3"
//             />
//             <p className="text-sm font-medium">{item.title}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Expectations;


import React from "react";

const Expectations = () => {
  return (
    <div className="bg-[#F9F9FB] px-6 py-20 lg:px-32">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-center lg:text-left">
        <h1 className="special-font font-bold text-[1.5rem] lg:text-[2.75rem]">
          What to Expect at #ANAOAU25
        </h1>
        <img
          src="/stars.svg"
          alt="Stars"
          className="w-[12rem] lg:w-[14rem] h-auto"
        />
        <p className="text-[#62636C] text-sm lg:text-base max-w-xl">
          This year's theme, “New Tongues”, explores how today's artists are
          fusing native languages and global genres—from Hausapiano to Yoruba
          rap. Come for the books. Stay for the beats.
        </p>
      </div>

      <div className="mt-12 bg-white border border-[#B9BBC6]  shadow-[8px_8px_0_0_rgba(0,0,0,0.08)] lg:shadow-[24px_24px_0_0_rgba(0,0,0,0.08)] rounded-md grid grid-cols-2 lg:grid-cols-8">
        <div className="border-b border-r border-[#B9BBC6] flex flex-col items-center text-center p-6">
          <img src="/book-store.svg" alt="Bookstore of the Day" className="w-10 h-12 mb-3" />
          <p className="text-[0.875rem] text-center font-medium">Bookstore of the Day</p>
        </div>
        <div className="border-b border-r border-[#B9BBC6] flex flex-col items-center text-center p-6">
          <img src="/face-paint.svg" alt="Face Painting" className="w-10 h-12 mb-3" />
          <p className="text-[0.875rem] text-center font-medium">Face Painting</p>
        </div>
        <div className="border-b border-r border-[#B9BBC6] flex flex-col items-center text-center p-6">
          <img src="/poetry-slam.svg" alt="Poetry Slam" className="w-10 h-12 mb-3" />
          <p className="text-[0.875rem] text-center font-medium">Poetry Slam</p>
        </div>
        <div className="border-b  border-r border-[#B9BBC6] flex flex-col items-center text-center p-6">
          <img src="/artists.svg" alt="Artists Panel Sessions" className="w-10 h-12 mb-3" />
          <p className="text-[0.875rem] text-center font-medium">Artists Panel Sessions</p>
        </div>
        <div className="border-b  border-r border-[#B9BBC6] flex flex-col items-center text-center p-6">
          <img src="/refreshments.svg" alt="Refreshments and fun" className="w-10 h-12 mb-3" />
          <p className="text-[0.875rem] text-center font-medium">Refreshments and fun</p>
        </div>
        <div className="border-b  border-r border-[#B9BBC6] flex flex-col items-center text-center p-6">
          <img src="/music-collabs.svg" alt="Music Collabs" className="w-10 h-12 mb-3" />
          <p className="text-[0.875rem] text-center font-medium">Music Collabs</p>
        </div>
        <div className="border-b  border-r border-[#B9BBC6] flex flex-col items-center text-center p-6">
          <img src="/drama.svg" alt="Drama Performances" className="w-10 h-12 mb-3" />
          <p className="text-[0.875rem] text-center font-medium">Drama Performances</p>
        </div>
        <div className="border-b  border-r border-[#B9BBC6] flex flex-col items-center text-center p-6">
          <img src="/giveaway.svg" alt="Giveaways and Audience prizes" className="w-10 h-12 mb-3" />
          <p className="text-[0.875rem] text-center font-medium">Giveaways and Audience prizes</p>
        </div>
      </div>
    </div>
  );
};

export default Expectations;
