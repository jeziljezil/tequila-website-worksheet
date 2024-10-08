import React, { useState, useEffect } from "react";

const ValidatorEmbed = ({ url }) => {
  const [isValid, setIsValid] = useState(false); // State to track load status

  const handleLoad = () => {
    setIsValid(true); // Set to true if the object loads successfully
  };
  //   useEffect(() => {
  //     // Perform any action needed when the URL changes
  //     console.log("URL changed:", url);
  //   }, [url]); // Run effect whenever the URL changes

  return (
    <>
      {isValid && (
        <div>
          <object
            type="text/html"
            data={url}
            width="800px"
            height="600px"
            style={{ overflow: "auto", border: "5px ridge blue" }}
            onLoad={handleLoad} // Event to detect load success
          ></object>
        </div>
      )}
    </>
  );
};

export default ValidatorEmbed;
