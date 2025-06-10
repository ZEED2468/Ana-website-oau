import React from 'react'

const BookStand = () => {
    return (
        <div className="flex justify-between items-center rounded-[1.5rem] border border-[#B9BBC6] bg-[#C2EEF2]">
            <div className="flex flex-col gap-5 flex-start">
                <h1 className="text-3xl font-bold special-font lg:w-[22.8125rem] text-[#1E1F24]">
                    Our Sponsors & Partners
                </h1>
                <p className="text-[#62636C] lg:w-[26.75rem]">
                    8 incredible guest artists, poets, and creators will join us to speak, perform, and inspire.
                </p>
                <a
                    href="https://anaoau.org/book-festival"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="bg-[#3D63DD] text-white px-6 py-2 border-2 border-[#000000] rounded my-4 transition duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    Partner With Us
                    </button>
                </a>
            </div>
            <div>
                <img
                    src="/shop1.svg"
                    alt="Book Stand"
                    className="block w-full h-auto object-cover lg:w-[32.5625rem] h-[25.3125rem]"
                />
            </div>
        </div>
    )
}

export default BookStand
