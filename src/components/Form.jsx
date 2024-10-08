import React, { useContext } from "react";
import { useEffect, useState, useRef } from "react";

import { FormData } from "../store/form-context";

// import Logo from "../public/tequila-logo.svg";
import FormCard from "./FormCard";
import Intro from "./Intro";
import NameIt from "./formSections/NameIt";
import Connect from "./formSections/Connect";
import AboutYou from "./formSections/AboutYou";
import Target from "./formSections/Target";
import Preference from "./formSections/Preference";
import DomainHosting from "./formSections/DomainHosting";
import Appearance from "./formSections/Appearance";
import SubmitSlider from "./SubmitSlider";

const Form = ({ scrolled }) => {
  const { formData, isEmpty } = useContext(FormData);
  const cards = [
    <Intro firstScroll={handleFirstScroll} />,
    <NameIt />,
    <Connect />,
    <AboutYou />,
    <Target />,
    <Appearance />,
    <Preference />,
    <DomainHosting />,
    <SubmitSlider />,
  ];
  const cardname = [
    "Welcome",
    "Name",
    "Contact",
    "Profile",
    "Demographics",
    "Design",
    "Comments",
    "Domain",
    "Submit",
  ];
  const cardRefs = useRef([]); // Array to hold refs for each section
  const [currentCard, setCurrentCard] = useState(0); // Track the current section
  const [isScrolling, setIsScrolling] = useState(true); // Timer control for scrolling

  const screenWidth = window.innerWidth;
  const newStatusBarWidth =
    (screenWidth * 0.9 * (currentCard + 1)) / cards.length;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Prepare data to send to the backend
      const formDataToSend = {
        name: formData.name || "",
        email: formData.email || "",
        phoneNumber: formData.phoneNumber || "",
        company: formData.company || "",
        file: formData.selectedFile
          ? {
              name: formData.selectedFile.name,
              url: URL.createObjectURL(formData.selectedFile),
            }
          : null,
      };

      // Send POST request to the backend
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataToSend),
      });

      const result = await response.json();
      if (result.success) {
        alert("Form submitted and email sent successfully!");
      } else {
        alert("Failed to send email.");
      }
    } catch (error) {
      // console.error("Error submitting the form:", error);
      // alert("An error occurred while submitting the form.");
    }
  };

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault(); // Prevent default scroll behavior
      if (!isScrolling || (currentCard === 0 && event.deltaY < 0)) return; // If not allowed to scroll, exit early

      let newCard = currentCard;

      if (event.deltaY > 0) {
        // User scrolls down
        newCard = Math.min(currentCard + 1, cardRefs.current.length - 1);
      } else {
        // User scrolls up
        newCard = Math.max(currentCard - 1, 0);
      }

      setCurrentCard(newCard);
      setIsScrolling(false); // Disable scrolling

      // Scroll to the top of the new section
      cardRefs.current[newCard]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest", // For vertical alignment (can be "start", "end", "center", or "nearest")
        inline: "start", // For horizontal alignment ("start", "center", "end", or "nearest")
      });

      // Set a timer to allow scrolling again after 3 seconds
      setTimeout(() => {
        setIsScrolling(true); // Re-enable scrolling after 3 seconds
      }, 500);
    };

    // Attach the scroll listener
    window.addEventListener("wheel", handleScroll, { passive: false });

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("wheel", handleScroll);
  }, [currentCard, isScrolling]);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(formData); // Access form data here
  //   console.log("form submitted"); // Access form data here
  // };

  function handleFirstScroll() {
    setCurrentCard(1);
    scrolled(true);

    cardRefs.current[1]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className={`flex h-screen pt-20 `}>
        {cards.map((card, index) => {
          const isActive = currentCard === index;
          return (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`transition-all duration-1000 ease-in-out ${
                isActive && index !== cards.length - 1 && index !== 0
                  ? "z-10 translate-x-[20%] scale-100"
                  : ""
              } ${
                isActive && index === 0
                  ? "z-10 translate-x-[18%] scale-100"
                  : ""
              } ${
                isActive && index === cards.length - 1
                  ? "z-10 -translate-x-[5%] scale-100"
                  : ""
              } ${!isActive ? "scale-75 z-0" : ""} 
          `}
            >
              <div className={``}>
                <FormCard className={``}>{card}</FormCard>
              </div>
            </div>
          );
        })}
        <div className="absolute bottom-4 w-full ">
          <div className="flex justify-evenly w-full mx-auto">
            {cardname.map((card, index) => {
              // ${currentCard === index ? "text-white neon-text" : ""}
              return (
                <div
                  key={index}
                  // onClick={() => handleQuickAccessClick(index)}
                  className={`cursor-pointer px-4 py-2 transition-colors duration-300 ease-in-out 
                      `}
                >
                  <p
                    className={`text-[10px] transition-all duration-100 ease-in-out text-gray-400`}
                  >
                    {card}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="w-[90%] mx-auto">
            <div
              style={{ width: `${newStatusBarWidth}px` }}
              className={`absolute max-w-[90%] h-[1.5px] transition-all duration-500 ease-in-out mx-auto rounded-full bg-gray-100 shadow-2xl`}
            ></div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;

// bottom status bar color gradient
// bg-gradient-to-r from-[#337e95] via-[#3f0097] to-[#bd296e] bg-opacity-0
