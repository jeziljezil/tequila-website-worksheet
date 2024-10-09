import { createContext, useState } from "react";

export const FormData = createContext({
  formData: {
    // Section 1
    projectName: undefined,
    website: {
      newWebsite: undefined,
      redesignWebsite: undefined,
      url: undefined,
    },
    // Section 2
    companyName: undefined,
    pocContact: [],
    // Section 3
    fileCompanyProfile: undefined,
    brandDescription: undefined,
    websitePurpose: [],
    // Section 4
    targetDemographics: [],
    // Section 5
    brandStyle: {
      brandImage: [],
      uxuiStyle: [],
    },
    // Section 6
    references: {
      url: undefined,
      comments: undefined,
    },
    otherSpecifications: undefined,
    // Section 7
    domainAndHosting: [],
    addOnServices: [],
    brandingService: [],
  },
  isEmpty: false,
  updateFormData: () => {},
  handleEmptyField: () => {},
  updateWebsiteInfo: () => {},
  updateListOfPOC: () => {},
  updateBrandStyle1: () => {},
  updateBrandStyle2: () => {},
  updateReference: () => {},
  updatePurposeList: () => {},
  updateDemographicList: () => {},
  updateDomainHosting: () => {},
  updateAddonServices: () => {},
  updateBrandingServices: () => {},
});

export default function FormDataContextProvider({ children }) {
  const [isEmpty, setIsEmpty] = useState(false);
  const [formDataState, setFormDataState] = useState({
    // Section 1
    projectName: undefined,
    website: {
      newWebsite: undefined,
      redesignWebsite: undefined,
      url: undefined,
    },
    // Section 2
    companyName: undefined,
    pocContact: [],
    // Section 3
    fileCompanyProfile: undefined,
    brandDescription: undefined,
    websitePurpose: [],
    // Section 4
    targetDemographics: [],
    // Section 5
    brandStyle: {
      brandImage: [],
      uxuiStyle: [],
    },
    // Section 6
    references: {
      url: undefined,
      comments: undefined,
    },
    otherSpecifications: undefined,
    // Section 7
    domainAndHosting: [],
    addOnServices: [],
    brandingService: [],
  });
  console.log(formDataState);
  // console.log(isEmpty);
  // functions

  const updateFormData = (key, value) => {
    setFormDataState((prev) => ({ ...prev, [key]: value }));
  };

  // Checking empty fields
  const handleEmptyField = (val) => {
    setIsEmpty(val);
  };

  // Section 1
  function updateWebsiteInfo(key, value) {
    setFormDataState((prev) => ({
      ...prev,
      website: { ...prev.website, [key]: value },
    }));
  }

  // Section 2   need to change list to object
  function updateListOfPOC(list) {
    setFormDataState((prev) => ({ ...prev, pocContact: { ...list } }));
  }

  // Section 3
  function updatePurposeList(list) {
    setFormDataState((prev) => ({
      ...prev,
      websitePurpose: [...list],
    }));
  }

  // Section 4
  function updateDemographicList(list) {
    setFormDataState((prev) => ({
      ...prev,
      targetDemographics: [...list],
    }));
  }

  // Section 5
  function updateBrandStyle1(list) {
    setFormDataState((prev) => ({
      ...prev,
      brandStyle: {
        ...prev.brandStyle,
        brandImage: [...list],
      },
    }));
  }
  function updateBrandStyle2(list) {
    setFormDataState((prev) => ({
      ...prev,
      brandStyle: {
        ...prev.brandStyle,
        uxuiStyle: [...list],
      },
    }));
  }

  // Section 6
  function updateReference(key, value) {
    setFormDataState((prev) => ({
      ...prev,
      references: { ...prev.references, [key]: value },
    }));
  }

  // Section 7
  function updateDomainHosting(list) {
    setFormDataState((prev) => ({
      ...prev,
      domainAndHosting: [...list],
    }));
  }

  function updateAddonServices(list) {
    setFormDataState((prev) => ({
      ...prev,
      addOnServices: [...list],
    }));
  }

  function updateBrandingServices(list) {
    setFormDataState((prev) => ({
      ...prev,
      brandingService: [...list],
    }));
  }

  const formDataCtx = {
    formData: formDataState,
    isEmpty: isEmpty,
    updateFormData,
    handleEmptyField,
    updateWebsiteInfo,
    updateListOfPOC,
    updateBrandStyle1,
    updateBrandStyle2,
    updateReference,
    updatePurposeList,
    updateDemographicList,
    updateDomainHosting,
    updateAddonServices,
    updateBrandingServices,
  };
  return <FormData.Provider value={formDataCtx}>{children}</FormData.Provider>;
}
