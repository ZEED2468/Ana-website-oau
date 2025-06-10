import React from "react";

const FAQ = () => {
  const [active, setActive] = React.useState(null);

  const faqData = [
    {
      id: "ANA-OAU",
      title: "What is ANA-OAU?",
      content:
        "ANA-OAU is an acronym for the Association of Nigerian Authors–Obafemi Awolowo University, Ile-Ife. We are a community of book-lovers, artists, and art enthusiasts on OAU Campus.",
    },
    {
      id: "New Tongues",
      title: `Why "New Tongues"?`,
      content: `See what Hafvy did with "The Girl with English Class", yeah? We're turning it around and showing how languages can actually work together. Fimí, Cezie, Shallipopi (Laho), FOJ, Brymo, and ASA are some artists who come to mind.`,
    },
    {
      id: "Art Festival",
      title: "What is an Art Festival?",
      content: `Erhm, erh, it's a little bit difficult to pin down. But check Ake Festival, Lipfest, and Sobafest on Insta or Twitter. We want to do something like that for university creatives: face painting, art exhibition, poetry, panel discussions, book giveaways, prizes, and music and drama performances.`,
    },
    {
      id: "ticket",
      title: "How much is the ticket?",
      content: `One ticket costs one thousand naira only (₦1,000). But there are perks if you are two or five people. Check through the ticket link.`,
    },
    {
      id: "festival hold",
      title: "When does the festival hold?",
      content: `It holds on Saturday, the 14th of June 2025, at BOOC Hall, OAU Campus and starts by 10AM.`,
    },
  ];

  const toggleFAQ = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <div>
      <div className="p-[4.5rem_1.5rem] flex flex-col justify-center items-start lg:items-center gap-[2.5rem]">
        <h1 className="special-font text-[1.5rem] lg:text-[2.75rem] text-left lg:text-center">
          FAQ
        </h1>
        <div className="w-[21.5625rem] lg:w-[28.125rem] p-[0rem_1rem] flex flex-col justify-center items-stretch gap-5 lg:p-[1rem_2.5rem] bg-white border border-[#B9BBC6] shadow-[8px_8px_0_0_rgba(0,0,0,0.08)] lg:shadow-[24px_24px_0_0_rgba(0,0,0,0.08)] rounded-md">
          {faqData.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => toggleFAQ(item.id)}
                className="p-[1.5rem_0rem] flex flex-col justify-center items-start gap-[0.25rem]"
              >
                <div className="flex justify-between items-center w-full cursor-pointer">
                  <p
                    className={`${
                      active === item.id
                        ? "text-[#007D00] special-font"
                        : "text-[#1E1F24]"
                    } text-[1rem] lg:text-[1.5rem]`}
                  >
                    {item.title}
                  </p>
                  <img
                    src={`${
                      active === item.id ? "/close-faq.svg" : "/open-faq.svg"
                    }`}
                    alt="FAQ"
                    className="w-[1.5rem] h-[1.5rem] object-contain"
                  />
                </div>
                <div
                  className={`text-[#62636C] text-[0.875rem] lg:text-[1.125rem] ${
                    active === item.id ? "block h-full" : "hidden h-0"
                  }`}
                >
                  {item.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
