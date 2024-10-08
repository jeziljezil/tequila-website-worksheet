import "./App.css";
import React from "react";

import { useState, useEffect } from "react";

import Form from "./components/Form";
import FormDataContextProvider from "./store/form-context";

const svg = (
  <svg
    width="86"
    height="86"
    viewBox="0 0 86 86"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M77.5363 85.9637H76.2617L78.2089 80.333H79.7316L81.6788 85.9637H80.4042L79.9796 84.6891H77.9609L77.5363 85.9637ZM78.2442 83.7684H79.6609L78.953 81.6438H78.9177L78.2451 83.7684H78.2442Z"
      fill="white"
    />
    <path
      d="M82.2109 85.9637V80.333H86.0003V81.3243H83.3796V82.6695H86.0003V83.6607H83.3796V85.0059H86.0003V85.9972L82.2109 85.9619V85.9637Z"
      fill="white"
    />
    <path
      d="M86.0008 34.4177H0.0117188V40.0484H86.0008V34.4177Z"
      fill="white"
    />
    <path d="M66.6279 80.3684H39.6641V85.9991H66.6279V80.3684Z" fill="white" />
    <path d="M34.6486 45.948H0V51.5787H34.6486V45.948Z" fill="white" />
    <path
      d="M24.2735 0H0V6.00273H9.13582V28.5173H15.1386V6.00273H24.2744V0H24.2735Z"
      fill="white"
    />
    <path
      d="M48.0133 6.00273V0H29.2891V28.5173H48.0133V22.5526H35.2918V17.0631H48.0133V11.0604H35.2918V6.00183H48.0133V6.00273Z"
      fill="white"
    />
    <path
      d="M85.9986 28.5172L79.0236 21.5422C83.1706 14.9828 81.1727 6.27332 74.6123 2.16438C68.0528 -1.98259 59.3434 0.0153038 55.2344 6.57567C51.0875 13.1351 53.0854 21.8446 59.6457 25.9535C64.3205 28.8938 70.2399 28.8187 74.8395 25.8023L77.5544 28.5172H85.9995H85.9986ZM67.1105 22.1451C62.662 22.1451 59.0428 18.5259 59.0428 14.0775C59.0428 9.62909 62.662 6.00989 67.1105 6.00989C71.5589 6.00989 75.1781 9.62909 75.1781 14.0775C75.1781 18.5259 71.5589 22.108 67.1105 22.1451Z"
      fill="white"
    />
    <path
      d="M11.8163 85.9992C5.28487 85.9992 0.0380206 80.7134 0 74.1829V57.4592H6.00273V74.1829C6.00273 77.392 8.60715 79.9964 11.8163 79.9964C15.0254 79.9964 17.6298 77.392 17.6298 74.1829V57.4592H23.6325V74.1829C23.5945 80.7134 18.3097 85.9992 11.8163 85.9992Z"
      fill="white"
    />
    <path d="M34.6473 57.4592H28.6445V85.9982H34.6473V57.4592Z" fill="white" />
    <path
      d="M56.0673 74.4119H39.6641V45.948H45.6668V68.4091H56.0673V74.4119Z"
      fill="white"
    />
    <path
      d="M74.4893 83.1665C74.4893 84.7245 73.2147 85.9991 71.6568 85.9991C70.0988 85.9991 68.8242 84.7245 68.8242 83.1665C68.8242 81.6086 70.0988 80.334 71.6568 80.334C73.2147 80.334 74.4893 81.5733 74.4893 83.1665Z"
      fill="white"
    />
    <path
      d="M73.5401 45.948L61.082 74.4119H67.6505L73.5392 60.633L79.4279 74.4119H85.9964L73.5383 45.948H73.5401Z"
      fill="white"
    />
  </svg>
);

function App() {
  const [hasScrolled, setHasScrolled] = useState(false); // Track if the user has scrolled

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled) {
        setHasScrolled(true); // Set that user has scrolled
      }
    };

    // Attach the scroll listener
    window.addEventListener("wheel", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [hasScrolled]);

  return (
    <FormDataContextProvider>
      <div className="w-full h-full p-0 overflow-x-hidden font-inter">
        <div
          className="fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 
      [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#5C20AF_150%)]"
        />
        <div className="h-[100vh]">
          <div
            className={`fixed transition-all duration-700 ease-in-out ${
              !hasScrolled
                ? "mt-[45vh] ml-[6%] scale-100"
                : "mt-3 ml-3 scale-75"
            }`}
          >
            {svg}
          </div>
          <Form scrolled={setHasScrolled} />
        </div>
      </div>
    </FormDataContextProvider>
  );
}

export default App;
