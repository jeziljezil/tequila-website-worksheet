import React, { useContext, useState, useEffect } from "react";

import { FormData } from "./form-context";

import AddVInactive from "../assets/addButtons/addVsmall.png";
import AddGActive from "../assets/addButtons/addbtnactive.png";
import CancelGDisabled from "../assets/addButtons/cancelGsmall.png";
import CancelGDisabledHover from "../assets/addButtons/addGsmall.png";
import NeonButton from "../utils/NeonButton";

// const { formData, updateFormData } = useContext(FormData);
//   const [touched, setTouched] = useState(false);
//   const [error, setError] = useState(false);

//   const handleBlur = () => {
//     setTouched(true); // Mark the field as "touched" once the user leaves the input

//     // Check if the input is empty when the user blurs the field
//     if (!formData.companyName) {
//       setError(true);
//       handleEmptyField(true);
//     } else {
//       setError(false); // Clear error if there's input
//       handleEmptyField(false);
//     }
//   };

//        <p
//         className={`text-red-400 max-w-fit ${
//           touched && error ? "opacity-100" : "opacity-0"
//         }`}
//        >
//         This field is required.
//        </p>

// Section 1
export const ProjectName = () => {
  const { formData, updateFormData, handleEmptyField } = useContext(FormData);
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState(false);

  const handleBlur = () => {
    setTouched(true); // Mark the field as "touched" once the user leaves the input

    // Check if the input is empty when the user blurs the field
    if (!formData.projectName) {
      setError(true);
      handleEmptyField(true);
    } else {
      setError(false); // Clear error if there's input
      handleEmptyField(false);
    }
  };
  return (
    <>
      <label htmlFor="projectName" className="font-inter text-lg text-left">
        What's the name of the project for the website ?
      </label>
      <input
        type="text"
        className="w-[58%] text-2xl placeholder:text-base placeholder:font-light placeholder:my-auto border-b-[0.25px] border-opacity-50 border-gray-300 bg-transparent  p-2 placeholder:opacity-50 focus:outline-none  focus:ring-gray-500"
        placeholder="Enter project name"
        autoComplete="off"
        id="projectName"
        // onFocus={() => setTouched(true)}
        onBlur={handleBlur}
        value={formData.projectName || ""}
        onChange={(event) => updateFormData("projectName", event.target.value)}
      />
      <p
        className={`text-red-400 max-w-fit ${
          touched && error ? "opacity-100" : "opacity-0"
        }`}
      >
        This field is required.
      </p>
    </>
  );
};

export const Website = () => {
  const { formData, updateWebsiteInfo, handleEmptyField } =
    useContext(FormData);
  const [isChecked, setIsChecked] = useState(false);
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState(false);

  const handleBlur = () => {
    setTouched(true); // Mark the field as "touched" once the user leaves the input

    // Check if the input is empty when the user blurs the field
    if (!formData.website.url) {
      setError(true);
      handleEmptyField(true);
    } else {
      setError(false); // Clear error if there's input
      handleEmptyField(false);
    }
  };

  useEffect(() => {
    updateWebsiteInfo("newWebsite", isChecked);
    updateWebsiteInfo("redesignWebsite", !isChecked);
    if (formData.website.newWebsite) {
      setError(false);
      handleEmptyField(false);
    }
  }, [isChecked]);

  const toggleSwitch = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className="flex flex-col mt-10">
      <div>
        <label
          htmlFor="toggle"
          className="cursor-pointer font-inter text-left text-lg my-4 "
        >
          <p className="items-start">Already Have a website?</p>
          <p
            className={`absolute top-[49%] cursor-pointer transition-colors duration-300 ease-in-out ${
              !isChecked ? "text-white neon-text" : ""
            }`}
          >
            NO
          </p>
          <div>
            <input
              type="checkbox"
              className="hidden ml-10"
              id="toggle"
              checked={isChecked}
              onChange={toggleSwitch}
            />
            <div
              className={`absolute toggle-bg mt-2 ml-10 w-[72px] h-9 border-[0.5px] border-gray-600 rounded-full overflow-hidden bg-elliptic-gradient-toggle `}
            >
              <div
                className={`absolute left-0 bg-[#0D0D0D] h-full w-full rounded-full transition-all duration-500 ease-in-out ${
                  isChecked ? "translate-x-9" : ""
                }`}
              ></div>
            </div>
            <div
              className={`toggle-dot mt-2 w-9 h-9 ml-10 border border-gray-300 backdrop-blur-100 bg-zinc-800 rounded-full shadow absolute left-0 transition-all duration-500 ease-in-out ${
                isChecked ? "translate-x-full" : "translate-x-0"
              }`}
            ></div>
          </div>
          <p
            className={`absolute left-32 top-[49%] cursor-pointer transition-colors duration-300 ease-in-out ${
              isChecked ? "text-white neon-text" : ""
            }`}
          >
            YES
          </p>
        </label>
        <div className="relative mt-2">
          <p
            className={`absolute text-left mt-14 font-inter transition-opacity duration-500 ease-in-out 
          ${isChecked ? "opacity-0" : "opacity-100"}
          `}
          >
            No? We'll design a new one for you!
          </p>
          <p
            className={`absolute text-left mt-14 font-inter transition-opacity duration-500 ease-in-out 
          ${isChecked ? "opacity-100" : "opacity-0"}
          `}
          >
            Okay, Let's redesign you website!
          </p>
        </div>
      </div>
      <div
        className={`flex flex-col overflow-hidden transition-opacity duration-500 ease-in-out ${
          isChecked ? "opacity-100" : "opacity-0 z-[-10]"
        }`}
      >
        <label
          htmlFor="projectUrl"
          className={`${
            isChecked ? "" : "opacity-30"
          } mt-24 transition-opacity duration-500 text-lg ease-in-out font-inter text-left`}
        >
          Enter your website url
        </label>
        <input
          type="url" // Use type "url" for URL input validation
          className={`w-[58%] text-xl placeholder:lowercase placeholder:text-base placeholder:font-light 
        placeholder:my-auto border-b-[0.25px] border-opacity-50 border-gray-300 
        bg-transparent p-2 placeholder:opacity-50 focus:outline-none 
        `}
          placeholder="www.your-website.com"
          autoComplete="off"
          id="projectUrl"
          value={formData.website.url || ""} // Adjust the form data key as necessary
          onChange={
            (event) => updateWebsiteInfo("url", event.target.value) // Update the URL in form data
          }
          disabled={!isChecked}
          onBlur={handleBlur}
        />
        <p
          className={`text-red-400 max-w-fit ${
            touched && error ? "opacity-100" : "opacity-0"
          }`}
        >
          This field is required.
        </p>
      </div>
    </div>
  );
};

// Section 2
export const CompanyName = () => {
  const { formData, updateFormData, handleEmptyField } = useContext(FormData);
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState(false);

  const handleBlur = () => {
    setTouched(true); // Mark the field as "touched" once the user leaves the input

    // Check if the input is empty when the user blurs the field
    if (!formData.companyName) {
      setError(true);
      handleEmptyField(true);
    } else {
      setError(false); // Clear error if there's input
      handleEmptyField(false);
    }
  };
  return (
    <>
      <label
        htmlFor="companyName"
        className={`mt-4 transition-opacity duration-500 ease-in-out font-inter text-left`}
      >
        Name of Company
      </label>
      <input
        type="text"
        className={`w-[25%] text-xl placeholder:text-base placeholder:font-light
        placeholder:my-auto border-b-[0.25px] border-opacity-50 border-gray-300 
        bg-transparent p-2 placeholder:opacity-50 focus:outline-none 
        `}
        placeholder="Enter company name"
        autoComplete="off"
        id="companyName"
        value={formData.companyName || ""}
        onChange={(event) => updateFormData("companyName", event.target.value)}
        onBlur={handleBlur}
      />
      <p
        className={`text-red-400 max-w-fit ${
          touched && error ? "opacity-100" : "opacity-0"
        }`}
      >
        This field is required.
      </p>
    </>
  );
};

const EachContact = ({ onAddContact, pocObject, handleBlur }) => {
  const { formData, updateFormData } = useContext(FormData);

  return (
    <div className="flex flex-col w-full">
      <label
        htmlFor="pointOfContact"
        className={`mt-4 transition-opacity duration-500 ease-in-out font-inter text-left`}
      >
        Point of Contact
      </label>
      <input
        type="text"
        className={`w-full mt-6 text-xl placeholder:text-base placeholder:text-white placeholder:font-light
        placeholder:my-auto border-b-[0.25px] border-opacity-50 border-gray-300 
        bg-transparent p-2 placeholder:opacity-50 focus:outline-none 
       `}
        placeholder="Enter name"
        autoComplete="off"
        id="pointOfContact"
        value={pocObject.pointOfContact || ""}
        onChange={(event) => onAddContact("pointOfContact", event.target.value)}
        onBlur={handleBlur}
      />

      <input
        type="text" // Use type "text" to handle custom validation
        className={`w-full mt-6 text-xl placeholder:text-base placeholder:text-white placeholder:font-light
        placeholder:my-auto border-b-[0.25px] border-opacity-50 border-gray-300 
        bg-transparent p-2 placeholder:opacity-50 focus:outline-none 
       `}
        placeholder="Enter phone number"
        // autoComplete="off"
        id="phoneNumber"
        value={pocObject.phoneNumber || ""} // Assuming formData contains phoneNumber
        onChange={(event) => onAddContact("phoneNumber", event.target.value)}
        pattern="[0-9]*" // This pattern ensures only digits can be input
        inputMode="numeric" // This hints mobile browsers to show a numeric keypad
        maxLength={15} // Set a maximum length for the input (optional)
        onBlur={handleBlur}
      />

      <input
        type="email" // Use type "email" for email validation
        className={`w-full mt-6 text-xl placeholder:text-base placeholder:text-white placeholder:font-light
        placeholder:my-auto border-b-[0.25px] border-opacity-50 border-gray-300 
        bg-transparent p-2 placeholder:opacity-50 focus:outline-none 
       `}
        placeholder="Enter email"
        // autoComplete="off"
        id="email"
        value={pocObject.email || ""}
        onChange={(event) => onAddContact("email", event.target.value)} // Handle email input
        onBlur={handleBlur}
      />
    </div>
  );
};

export const ContactPOC = () => {
  const { formData, updateListOfPOC, handleEmptyField } = useContext(FormData);
  const [addContact, setAddContact] = useState(false);
  const [addHover, setAddHover] = useState(false);
  const [listOfPoc, setListOfPoc] = useState({
    firstContact: {
      pointOfContact: undefined,
      phoneNumber: undefined,
      email: undefined,
    },
    secondContact: {
      pointOfContact: undefined,
      phoneNumber: undefined,
      email: undefined,
    },
  });
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState(false);

  const handleBlur = () => {
    setTouched(true); // Mark the field as "touched" once the user leaves the input

    // Check if the input is empty when the user blurs the field
    if (
      !listOfPoc.firstContact.pointOfContact ||
      !listOfPoc.firstContact.phoneNumber ||
      !listOfPoc.firstContact.email
    ) {
      setError(true);
      handleEmptyField(true);
    } else {
      setError(false); // Clear error if there's input
      handleEmptyField(false);
    }
  };
  function onAddAnotherContact() {
    setAddContact((prev) => {
      if (prev) {
        setListOfPoc((prev) => ({
          ...prev,
          secondContact: {
            pointOfContact: undefined,
            phoneNumber: undefined,
            email: undefined,
          },
        }));
      }
      return !prev;
    });
  }

  function onAddFirstContact(key, value) {
    setListOfPoc((prev) => ({
      ...prev,
      firstContact: { ...prev.firstContact, [key]: value },
    }));
    updateListOfPOC(listOfPoc);
  }
  function onAddSecondContact(key, value) {
    setListOfPoc((prev) => ({
      ...prev,
      secondContact: { ...prev.secondContact, [key]: value },
    }));
    updateListOfPOC(listOfPoc);
  }
  // console.log(listOfPoc);
  return (
    <div className="flex gap-5">
      <div className="w-[25%]">
        <EachContact
          onAddContact={onAddFirstContact}
          pocObject={listOfPoc.firstContact}
          handleBlur={handleBlur}
        />
        <p
          className={`text-red-400 max-w-fit ${
            touched && error ? "opacity-100" : "opacity-0"
          }`}
        >
          All fields are required.
        </p>
      </div>
      <div
        className={`w-[25%] transition-opacity duration-700 ease-in-out ${
          addContact ? "opacity-100" : "opacity-0"
        }`}
      >
        <EachContact
          onAddContact={onAddSecondContact}
          pocObject={listOfPoc.secondContact}
        />
      </div>
      <div
        onMouseOver={() => setAddHover(true)}
        onMouseOut={() => setAddHover(false)}
        onClick={onAddAnotherContact}
        className={`ml-6 mt-[8%]
       cursor-pointer max-h-fit transition-all duration-700 ease-in-out border-opacity-50 
       ${addContact ? "translate-x-0" : "-translate-x-[600%]"}
       `}
      >
        {!addContact ? (
          addHover ? (
            <img
              src={AddVInactive}
              alt="Add Point of Contact"
              className={` ${
                !addContact ? "" : ""
              } transition-all duration-700 ease-in-out`}
            />
          ) : (
            <img
              src={AddGActive}
              alt=""
              className={` ${
                !addContact ? "" : ""
              } transition-all duration-700 ease-in-out`}
            />
          )
        ) : addHover ? (
          <img
            src={CancelGDisabledHover}
            alt=""
            className={`  transition-all duration-700 ease-in-out`}
          />
        ) : (
          <img
            src={CancelGDisabled}
            alt=""
            className={`  transition-all duration-700 ease-in-out`}
          />
        )}
      </div>
    </div>
  );
};

// Section 3
export const FileUploadComponent = ({ setError, setTouched }) => {
  const { formData, updateFormData, handleEmptyField } = useContext(FormData);
  const [dragging, setDragging] = useState(false);
  const [fileName, setFileName] = useState("");

  const MAX_FILE_SIZE = 5 * 1024 * 1024;

  // Handle file selection through file input
  const handleInputChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > MAX_FILE_SIZE) {
      alert("File size exceeds the 5MB limit. Please select a smaller file.");
      return;
    }
    if (file) {
      setFileName(file.name);
      updateFormData("fileCompanyProfile", file);
      setError(false);
      handleEmptyField(false);
    } else {
      setFileName("");
      updateFormData("fileCompanyProfile", null);
      setError(true);
      handleEmptyField(true);
    }
  };

  // Handle file selection through drag and drop
  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.size > MAX_FILE_SIZE) {
      alert("File size exceeds the 5MB limit. Please select a smaller file.");
      return;
    }
    if (file) {
      setFileName(file.name);
      updateFormData("fileCompanyProfile", file);
      setError(false);
      handleEmptyField(false);
    } else {
      setFileName("");
      setError(true);
      handleEmptyField(true);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  return (
    <div className="mt-10 w-full h-full">
      <label htmlFor="fileUpload" className="font-inter text-lg text-nowrap">
        Upload your company profile:
      </label>

      <div
        className={`mt-2 p-6 w-full h-full rounded-lg backdrop-blur-3xl flex items-center justify-center cursor-pointer transition-colors ${
          dragging ? "bg-[#613d92] bg-opacity-10" : ""
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => document.getElementById("fileUpload").click()}
      >
        <p className="text-center transition-opacity duration-300 ease-in-out opacity-50 hover:opacity-100">
          {fileName
            ? `${fileName}`
            : "Drag & Drop your file here or click to select"}
        </p>
      </div>

      <input
        type="file"
        id="fileUpload"
        className="hidden"
        onChange={handleInputChange}
      />
    </div>
  );
};

export const ServicesOffered = ({ setError, setTouched }) => {
  const { formData, updateFormData, handleEmptyField } = useContext(FormData);

  const handleBlur = () => {
    setTouched(true); // Mark the field as "touched" once the user leaves the input

    // Check if the input is empty when the user blurs the field
    if (!formData.brandDescription && formData.fileCompanyProfile === null) {
      setError(true);
      handleEmptyField(true);
    } else {
      setError(false); // Clear error if there's input
      handleEmptyField(false);
    }
  };

  return (
    <div className="w-full h-full mt-10">
      <label
        htmlFor="brandDescription"
        className={`font-inter text-lg text-left`}
      >
        Tell us about the services you offer?
      </label>
      <textarea
        className={`w-full h-[80%] mt-2 text-xl placeholder:text-base placeholder:font-light
        placeholder:my-auto placeholder:text-wrap placeholder:text-center backdrop-blur-3xl bg-transparent bg-opacity-10 
        rounded-lg p-2 placeholder:opacity-50 focus:outline-none 
        resize-none`}
        placeholder="About your products or services in a few words"
        autoComplete="off"
        id="brandDescription"
        maxLength={500} // Set the word limit
        value={formData.brandDescription || ""}
        onChange={(event) =>
          updateFormData("brandDescription", event.target.value)
        }
        onBlur={handleBlur}
      />
    </div>
  );
};

export const WebsitePurpose = () => {
  const { formData, updatePurposeList, handleEmptyField } =
    useContext(FormData);
  const [selectedButtons, setSelectedButtons] = useState([]);
  const [error, setError] = useState(false);

  const purposes = [
    "Online Presence",
    "Business Promotion",
    "E-Commerce",
    "Information Sharing",
    "Portfolio",
    "Lead Generation",
    "Community Building",
    "Entertainment",
    "Customer Support",
    "Event Promotion",
    "Brand Building",
  ];

  function onSelectButton(selected) {
    setSelectedButtons((prev) => {
      let newList;

      if (prev.includes(selected)) {
        // Remove the selected item
        newList = prev.filter((item) => item !== selected);
      } else {
        // Add the selected item
        newList = [...prev, selected];
      }

      // Update the purpose list and error state
      updatePurposeList(newList);

      if (newList.length === 0) {
        setError(true);
        handleEmptyField(true);
      } else {
        setError(false);
        handleEmptyField(false);
      }

      return newList;
    });
  }

  return (
    <div className="absolute top-[45%] left-[20%] w-[70%]">
      <div className="w-full p-2">
        <p className="text-lg text-nowrap">
          What will be the website for?
          <span className="tracking-wider text-xl font-semibold bg-gradient-to-r from-[#38c3ed] via-[#3250e7] to-[#9261d6] bg-clip-text text-transparent">
            &nbsp; Select atleast one...
          </span>
        </p>
      </div>
      <div className={`px-2 py-6`}>
        <div className="flex gap-4 flex-wrap justify-center">
          {purposes.map((item) => (
            <NeonButton
              key={item}
              text={item}
              color={"#613d92"}
              onSelect={onSelectButton}
            />
          ))}
        </div>
      </div>
      <p
        className={`text-red-400 mx-auto max-w-fit ${
          error ? "opacity-100" : "opacity-0"
        }`}
      >
        Atleast one selection required.
      </p>
    </div>
  );
};

// Section 4
export const TargetAudience = () => {
  const { updateDemographicList } = useContext(FormData);
  const [selectedButtons, setSelectedButtons] = useState([]);
  const [error, setError] = useState(false);

  const demographicsAge = [
    "Youth",
    "Teens",
    "Adults",
    "Seniors",
    "Kids",
    "Millennials",
    "GenZ",
    "Boomers",
    "Toddlers",
  ];
  const demographicsNationality = [
    "Global",
    "Americans",
    "Europeans",
    "Asians",
    "Africans",
    "MiddleEastern",
  ];
  const demographicsBusiness = [
    "Corporate",
    "Startups",
    "Enterprises",
    "Nonprofits",
    "SmallBiz",
    "Retail",
    "Tech",
  ];
  const demographicsGender = ["Men", "Women", "Unisex"];
  const demographicsOccupation = [
    "Students",
    "Gamers",
    "Entrepreneurs",
    "Parents",
    "Tourists",
  ];

  function onSelectButton(selected) {
    setSelectedButtons((prev) => {
      let newList;

      if (prev.includes(selected)) {
        // Remove the selected item
        newList = prev.filter((item) => item !== selected);
      } else {
        // Add the selected item
        newList = [...prev, selected];
      }

      // Update the form data with the new list
      updateDemographicList(newList);

      // Set the error state based on whether the list is empty
      if (newList.length === 0) {
        setError(true);
      } else {
        setError(false);
      }

      return newList;
    });
  }

  return (
    <div className="absolute top-[10%] left-[20%] w-[70%] h-full">
      <div className="w-full p-2">
        <p className="text-2xl text-nowrap">
          <span className="text-3xl tracking-widest">
            <span className="font-bold text-4xl bg-gradient-to-r from-[#38c3ed] via-[#3250e7] to-[#9261d6] bg-clip-text text-transparent">
              Select
            </span>{" "}
            all your target audience.
          </span>
          <br />
          <span className="text-xl">
            We will design the
            <span className="font-semibold bg-gradient-to-r from-[#38c3ed] via-[#3250e7] to-[#9261d6] bg-clip-text text-transparent">
              &nbsp;website tailored for them
            </span>
          </span>
        </p>
      </div>
      <div className={`npx-2 py-6`}>
        <div className="relative flex gap-4 flex-wrap justify-center">
          {demographicsAge.map((item, index) => (
            <NeonButton
              key={item}
              text={item}
              color={"#1395BC"}
              bgColor={"#1395BC"}
              onSelect={onSelectButton}
              style={{
                position: "absolute",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
          {demographicsNationality.map((item, index) => (
            <NeonButton
              key={item}
              text={item}
              color={"#43A7FF"}
              bgColor={"#43A7FF"}
              onSelect={onSelectButton}
              style={{
                position: "absolute",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
          {demographicsGender.map((item, index) => (
            <NeonButton
              key={item}
              text={item}
              color={"#8464c9"}
              bgColor={"#8464c9"}
              onSelect={onSelectButton}
              style={{
                position: "absolute",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
          {demographicsOccupation.map((item, index) => (
            <NeonButton
              key={item}
              text={item}
              color={"#c45cad"}
              bgColor={"#c45cad"}
              onSelect={onSelectButton}
              style={{
                position: "absolute",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
          {demographicsBusiness.map((item, index) => (
            <NeonButton
              key={item}
              text={item}
              color={"#db5161"}
              bgColor={"#db5161"}
              onSelect={onSelectButton}
              style={{
                position: "absolute",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </div>
        <p
          className={`text-red-400 mx-auto mt-10 max-w-fit ${
            error ? "opacity-100" : "opacity-0"
          }`}
        >
          Atleast one selection required.
        </p>
      </div>
    </div>
  );
};

// Section 5
export const BrandStyle = () => {
  const [isHovered, setIsHovered] = useState(0);
  const { updateBrandStyle1, updateBrandStyle2 } = useContext(FormData);
  const [selectedButtonslist1, setSelectedButtonslist1] = useState([]);
  const [selectedButtonslist2, setSelectedButtonslist2] = useState([]);
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);

  const list1 = [
    "Trustworthy",
    "Friendly",
    "Professional",
    "Bold",
    "Creative",
    "Innovative",
    "Approachable",
    "Reliable",
  ];
  const list2 = [
    "Intuitive",
    "Simple",
    "Interactive",
    "Sleek",
    "Playful",
    "Functional",
    "Immersive",
  ];

  function onSelectButtonList1(selected) {
    setSelectedButtonslist1((prev) => {
      let newList;
      if (prev.includes(selected)) {
        // Remove the selected item
        newList = prev.filter((item) => item !== selected);
      } else {
        // Add the selected item
        newList = [...prev, selected];
      }
      updateBrandStyle1(newList);
      if (newList.length === 0) {
        setError1(true);
      } else {
        setError1(false);
      }
      return newList;
    });
  }

  function onSelectButtonList2(selected) {
    setSelectedButtonslist2((prev) => {
      let newList;
      if (prev.includes(selected)) {
        // Remove the selected item
        newList = prev.filter((item) => item !== selected);
      } else {
        // Add the selected item
        newList = [...prev, selected];
      }
      if (newList.length === 0) {
        setError2(true);
      } else {
        setError2(false);
      }
      updateBrandStyle2(newList);
      return newList;
    });
  }
  return (
    <div className="flex flex-col fixed top-20 left-36 w-[90%]">
      <label
        htmlFor="brandStyle"
        className={`mt-4 w-20 transition-opacity text-4xl duration-500 ease-in-out font-inter text-left`}
      >
        Desirable User Experience?
      </label>
      <p className="text-left mt-6">
        Feel free and{" "}
        <span className="tracking-widest text-3xl bg-gradient-to-r from-[#38c3ed] via-[#3250e7] to-[#9261d6] bg-clip-text text-transparent">
          select a few...
        </span>
        <br />
        And we'll join the dots
      </p>
      <div
        onMouseOver={() => setIsHovered(1)}
        onMouseOut={() => setIsHovered(0)}
        className="absolute top-0 left-[30%] w-[32%] h-full flex flex-col items-end"
      >
        <div className="w-full p-4">
          <p className="neon-text-b text-xl text-nowrap text-left">
            Brand Perception
          </p>
          <p
            className={`text-left mt-2 transition-opacity duration-300 ease-in-out ${
              isHovered === 1 ? "opacity-100" : "opacity-0"
            }`}
          >
            What should come to mind when people see your brand?
          </p>
        </div>
        <div className={``}>
          <div className="flex gap-4 flex-wrap">
            {list1.map((item) => (
              <NeonButton
                key={item}
                text={item}
                color={"#1395BC"}
                onSelect={onSelectButtonList1}
              />
            ))}
          </div>
        </div>
        <p
          className={`text-red-400 mr-auto max-w-fit ${
            error1 ? "opacity-100" : "opacity-0"
          }`}
        >
          Atleast one selection required.
        </p>
      </div>

      <div
        onMouseOver={() => setIsHovered(2)}
        onMouseOut={() => setIsHovered(0)}
        className="absolute top-0 left-[65%] w-[32%] h-full flex flex-col items-end"
      >
        <div className="w-full p-4">
          <p className="neon-text text-xl text-nowrap text-left">
            Design Style
          </p>
          <p
            className={`text-left mt-2 transition-opacity duration-300 ease-in-out ${
              isHovered === 2 ? "opacity-100" : "opacity-0"
            }`}
          >
            How should you're website look and feel?
          </p>
        </div>
        <div className={``}>
          <div className="flex gap-4 flex-wrap justify-start">
            {list2.map((item) => (
              <NeonButton
                key={item}
                text={item}
                color={"#613d92"}
                onSelect={onSelectButtonList2}
              />
            ))}
          </div>
        </div>
        <p
          className={`text-red-400 mr-auto max-w-fit ${
            error2 ? "opacity-100" : "opacity-0"
          }`}
        >
          Atleast one selection required.
        </p>
      </div>
    </div>
  );
};

// Section 6
export const Reference = () => {
  const { formData, updateReference, updateFormData } = useContext(FormData);
  return (
    <>
      <div className="w-[35%] py-8 px-6">
        <div className="flex flex-col w-full">
          <label htmlFor="projectUrl" className={`font-inter text-left`}>
            Reference website URL
          </label>
          <input
            type="url" // Use type "url" for URL input validation
            className={`w-full text-xl placeholder:lowercase placeholder:text-base placeholder:font-light 
        placeholder:my-auto border-b-[0.25px] border-opacity-50  border-gray-300 
        bg-transparent p-2 placeholder:opacity-50 focus:outline-none 
        focus:ring-[0.5px] focus:ring-gray-500`}
            placeholder="www.example.com"
            autoComplete="off"
            id="projectUrl"
            value={formData.references.url || ""} // Adjust the form data key as necessary
            onChange={
              (event) => updateReference("url", event.target.value) // Update the URL in form data
            }
          />
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="comments" className={`mt-4 font-inter text-left`}>
            Comments
          </label>
          <textarea
            className={`w-full h-16 text-lg placeholder:text-base placeholder:font-light
        placeholder:my-auto border-b-[0.25px] border-opacity-50 border-gray-300 
        bg-transparent p-2 placeholder:opacity-50 focus:outline-none 
         resize-none custom-scroll`}
            placeholder="What do you like about this website?"
            autoComplete="off"
            id="comments"
            maxLength={200} // Set the word limit
            value={formData.references.comments || ""}
            onChange={(event) =>
              updateReference("comments", event.target.value)
            }
          />
          <p className="text-right text-sm mt-2">
            {formData.references.comments?.length || 0}/200
          </p>
        </div>
      </div>
      <div className="w-[35%] flex flex-col pb-8 px-6">
        <label htmlFor="otherSpecifications" className={`font-inter text-left`}>
          Anything specific for your website?
        </label>
        <textarea
          className={`w-full h-32 text-xl placeholder:text-base placeholder:font-light
        placeholder:my-auto border-b-[0.25px] border-opacity-50 border-gray-300 
        bg-transparent p-2 placeholder:opacity-50 focus:outline-none 
       resize-none`}
          placeholder="Tell us about your likes and dislikes for your website?"
          autoComplete="off"
          id="otherSpecifications"
          maxLength={500} // Set the word limit
          value={formData.otherSpecifications || ""}
          onChange={(event) =>
            updateFormData("otherSpecifications", event.target.value)
          }
        />
        <p className="text-right text-sm mt-2">
          {formData.otherSpecifications?.length || 0}/500
        </p>
      </div>
    </>
  );
};

// Section 7
export const DomainHostingServices = () => {
  const { updateDomainHosting, updateAddonServices, updateBrandingServices } =
    useContext(FormData);
  const [selectedDomainHosting, setSelectedDomainHosting] = useState([]);
  const [selectedAddonServices, setSelectedAddonServices] = useState([]);
  const [selectedBrandingServices, setSelectedBrandingServices] = useState([]);
  const domainHostingList = ["Domain", "Hosting"];
  const postlaunchService = ["Website Maintenance", "Website Design Contract"];
  const otherServices = [
    "Branding / Re-branding",
    "Logo Design",
    "Graphic Design",
    "Social Media Management",
  ];

  function onSelectDomainHosting(selected) {
    setSelectedDomainHosting((prev) => {
      const newList = [...prev, selected];
      updateDomainHosting(newList);
      return newList;
    });
  }
  function onSelectAddonServices(selected) {
    setSelectedAddonServices((prev) => {
      const newList = [...prev, selected];
      updateAddonServices(newList);
      return newList;
    });
  }
  function onSelectBrandingServices(selected) {
    setSelectedBrandingServices((prev) => {
      const newList = [...prev, selected];
      updateBrandingServices(newList);
      return newList;
    });
  }

  return (
    <div className="flex flex-col w-full">
      {/* <div className="flex justify-between"> */}
      <div className="">
        <label htmlFor="projectName" className="font-inter text-left text-xl">
          Which of the following do you have?
        </label>
        <div className="my-4 flex gap-4 flex-wrap justify-center">
          {domainHostingList.map((item) => (
            <NeonButton
              key={item}
              text={item}
              color={"#1395BC"}
              bgColor={"#1395BC"}
              onSelect={onSelectDomainHosting}
            />
          ))}
        </div>
      </div>
      <div className="mt-6">
        <label htmlFor="projectName" className="font-inter text-left text-xl">
          Would you like to discuss these post-launch services?
        </label>
        <div className="my-4 flex gap-4 flex-wrap justify-center">
          {postlaunchService.map((item) => (
            <NeonButton
              key={item}
              text={item}
              color={"#613d92"}
              bgColor={"#613d92"}
              onSelect={onSelectAddonServices}
            />
          ))}
        </div>
      </div>
      {/* </div> */}
      <div className="mt-6">
        <label htmlFor="projectName" className="font-inter text-left text-xl">
          Any other services of ours that you would like to know about?
        </label>
        <div className="my-4 flex gap-4 flex-wrap justify-center">
          {otherServices.map((item) => (
            <NeonButton
              key={item}
              text={item}
              color={"#c45cad"}
              bgColor={"#c45cad"}
              onSelect={onSelectBrandingServices}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
