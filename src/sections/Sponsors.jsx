import React from "react";

const Sponsors = () => {
  // Define your sponsor links (simplified Instagram URLs)
  const sponsorLinks = {
    sponsor1: "https://bookbuzzfoundation.org/",
    sponsor2: "https://www.instagram.com/ujesastudios/",
    sponsor3: "https://thespurhub.com/", 
    sponsor4: "https://www.instagram.com/paradigm_brc/"
  };

  // Function to handle clicks with Instagram-specific workarounds
  const handleSponsorClick = (url, sponsorName) => {
    console.log(`Clicking on ${sponsorName}: ${url}`);
    
    if (url.includes('instagram.com')) {
      // Multiple approaches for Instagram links
      const username = url.split('/').pop().replace('/', '');
      
      // Method 1: Try direct navigation first
      try {
        window.location.href = url;
        return;
      } catch (error) {
        console.log('Direct navigation failed, trying alternatives...');
      }
      
      // Method 2: Try opening Instagram app on mobile
      if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        const appUrl = `instagram://user?username=${username}`;
        const timeout = setTimeout(() => {
          // Fallback to web if app doesn't open
          window.open(`https://instagram.com/${username}`, '_blank');
        }, 1000);
        
        try {
          window.location.href = appUrl;
          clearTimeout(timeout);
        } catch (error) {
          clearTimeout(timeout);
          // Final fallback: copy link to clipboard and show message
          navigator.clipboard.writeText(url).then(() => {
            alert(`Instagram link copied to clipboard: @${username}\nPlease paste it in your browser or Instagram app.`);
          }).catch(() => {
            alert(`Please visit: @${username} on Instagram`);
          });
        }
      } else {
        // Desktop: Try multiple methods
        try {
          const newWindow = window.open('', '_blank', 'noopener,noreferrer');
          if (newWindow) {
            newWindow.location.href = url;
          } else {
            throw new Error('Popup blocked');
          }
        } catch (error) {
          // Fallback: Copy to clipboard
          navigator.clipboard.writeText(url).then(() => {
            alert(`Instagram link copied to clipboard: @${username}\nPlease paste it in your browser.`);
          }).catch(() => {
            prompt(`Please copy this Instagram link:`, url);
          });
        }
      }
    } else {
      // Non-Instagram links use standard method
      const link = document.createElement('a');
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start p-[4.5rem_1.5rem] lg:p-[6.5rem_7.5rem_6.5rem_7.5rem] gap-5 lg:gap-[11.70363rem] w-full">
      <div className="flex flex-col gap-5 flex-start items-start">
        <h1 className="text-3xl font-bold special-font lg:w-[22.8125rem]">
          Our Sponsors & Partners
        </h1>
        <p className="text-[#62636C] lg:w-[26.75rem]">
          8 incredible guest artists, poets, and creators will join us to speak, perform, and inspire.
        </p>
        {/* Button only visible on large screens */}
        <a
          href="https://wa.me/2348152760532?text=I%20want%20to%20partner%20with%20ANA-OAU%20for%20their%202025%20festival"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:block"
        >
          <button className="bg-[#008300] text-white px-6 py-2 border-2 border-[#000000] rounded my-4 transition duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            Partner With Us
          </button>
        </a>
      </div>

      {/* Small Screen SVG - With clickable areas */}
      <div className="flex lg:hidden flex-col justify-between gap-5 w-full mt-6">
        <div className="flex justify-center items-center relative">
          <div className="relative">
            <img
              src="/sm high.svg"
              alt="sponsors"
              className="w-auto h-auto"
            />
            {/* BookBuzz takes about 60% of left side, Ujesa is smaller circle on right */}
            <div 
              className="absolute top-0 left-0 w-[65%] h-full cursor-pointer z-10"
              onClick={(e) => {
                e.stopPropagation();
                handleSponsorClick(sponsorLinks.sponsor1, 'BookBuzz Foundation');
              }}
              title="BookBuzz Foundation"
            ></div>
            <div 
              className="absolute top-[45%] right-0 w-[35%] h-[55%] cursor-pointer z-10"
              onClick={(e) => {
                e.stopPropagation();
                handleSponsorClick(sponsorLinks.sponsor2, 'Ujesa Studios');
              }}
              title="Ujesa Studios"
            ></div>
          </div>
        </div>
        <div className="flex justify-left items-left relative">
          <div className="relative">
            <img
              src="/sm low.svg"
              alt="sponsors"
              className="w-auto h-auto"
            />
            {/* Spur Hub is smaller on left, Paradigm is larger on right */}
            <div 
              className="absolute top-0 left-0 w-[40%] h-[60%] cursor-pointer z-10"
              onClick={(e) => {
                e.stopPropagation();
                handleSponsorClick(sponsorLinks.sponsor3, 'The Spur Hub');
              }}
              title="The Spur Hub"
            ></div>
            <div 
              className="absolute bottom-0 right-0 w-[60%] h-[70%] cursor-pointer z-10"
              onClick={(e) => {
                e.stopPropagation();
                handleSponsorClick(sponsorLinks.sponsor4, 'Paradigm BRC');
              }}
              title="Paradigm BRC"
            ></div>
          </div>
        </div>
        <div>
          <a
            href="https://wa.me/2348152760532?text=I%20want%20to%20partner%20with%20ANA-OAU%20for%20their%202025%20festival"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#008300] text-white px-6 py-2 border-2 border-[#000000] rounded my-4 transition duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              Partner With Us
            </button>
          </a>
        </div>
      </div>

      <div className="hidden lg:flex flex-row justify-between gap-6 w-full">
        <div className="flex justify-center items-center relative">
          <div className="relative">
            <img
              src="/big left.svg"
              alt="sponsors"
              className="w-[50rem] h-[20rem] object-contain"
            />
            {/* Desktop left SVG: BookBuzz on top half, Ujesa on bottom right as circle */}
            <div 
              className="absolute top-0 left-0 w-full h-1/2 cursor-pointer z-10"
              onClick={(e) => {
                e.stopPropagation();
                handleSponsorClick(sponsorLinks.sponsor1, 'BookBuzz Foundation');
              }}
              title="BookBuzz Foundation"
            ></div>
            <div 
              className="absolute bottom-0 right-[20%] w-[30%] h-1/2 cursor-pointer z-10"
              onClick={(e) => {
                e.stopPropagation();
                handleSponsorClick(sponsorLinks.sponsor2, 'Ujesa Studios');
              }}
              title="Ujesa Studios"
            ></div>
          </div>
        </div>
        <div className="flex justify-center items-center relative">
          <div className="relative">
            <img
              src="/big right.svg"
              alt="sponsors"
              className="w-[50rem] h-[20rem] object-contain"
            />
            {/* Desktop right SVG: Spur Hub on top left, Paradigm on bottom right */}
            <div 
              className="absolute top-0 left-0 w-[60%] h-1/2 cursor-pointer z-10"
              onClick={(e) => {
                e.stopPropagation();
                handleSponsorClick(sponsorLinks.sponsor3, 'The Spur Hub');
              }}
              title="The Spur Hub"
            ></div>
            <div 
              className="absolute bottom-0 right-0 w-[80%] h-1/2 cursor-pointer z-10"
              onClick={(e) => {
                e.stopPropagation();
                handleSponsorClick(sponsorLinks.sponsor4, 'Paradigm BRC');
              }}
              title="Paradigm BRC"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;