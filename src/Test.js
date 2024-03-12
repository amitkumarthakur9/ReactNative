import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { createUser } from "./api/services/endpoints/userEndpoints";
import {
  searchFund,
  Nfo,
  Trendingschemes,
} from "./api/services/endpoints/exploreEndpoints";

const UserScreen = () => {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    // Create a new user
    const newUser = {
      //   action: "login",
      //   email: "amitskumar15041995@gmail.com",
      //   password: "Amit123@",
      //   //   ifaLogin: false,
      //   addedBy: 186100,
      //   ref: "App",
    };

    const jsonData = JSON.parse(JSON.stringify(newUser));

    // console.log(jsonData.email);

    createUser(jsonData)
      .then((response) => {
        console.log("User data:", response.data);
      })
      .catch((error) => {
        console.error("Error login:", error);
      });
  };

  const handleSearch = () => {
    const funddata = {
      //   term: "aditya % 20birla",
      //   optiontype: "GROWTH",
    };

    searchFund(funddata)
      .then((response) => {
        console.log("search data:", response.data);
      })
      .catch((error) => {
        console.error("search failed:", error);
      });
  };

  const handleNfo = () => {
    const funddata = {
      //   term: "aditya % 20birla",
      //   optiontype: "GROWTH",
    };

    Nfo(funddata)
      .then((response) => {
        console.log("nfo data:", response.data);
      })
      .catch((error) => {
        console.error("nfo failed:", error);
      });
  };

  const handleTrendingSchemes = () => {
    const funddata = {
      //   term: "aditya % 20birla",
      //   optiontype: "GROWTH",
    };

    Trendingschemes(funddata)
      .then((response) => {
        console.log("schemes data:", response.data);
      })
      .catch((error) => {
        console.error("schemes failed:", error);
      });
  };

  return (
    <View style={{ marginTop: 100 }}>
      <Button title="User Login" onPress={handleLogin} />

      <Button title="search axis" onPress={handleSearch} />
      <Button title="get Nfo" onPress={handleNfo} />
      <Button title="Trending Schemes" onPress={handleTrendingSchemes} />
    </View>
  );
};

const bankDAta = {
  aadhaarNumber: "",
  aadhaarVerified: false,
  accountNumber2: "",
  accountNumber3: "",
  action: "bankDetails",
  active: false,
  addressLine1: "",
  addressLine2: "",
  addressLine3: "",
  adminId: 2818,
  adminP: "$2y$10$SVbyAAXrCqgUe/uOfqEYJuoYF2VkEN0vgagHVbqS/z7HGxEW.nKkC",
  aofUploaded: false,
  aofVerified: false,
  app: "2.0.3",
  bankAccountType: "",
  bankAccountType2: "",
  bankAccountType3: "",
  bankAccountVerified: false,
  bankDetails: [],
  "basket[0][bankCode]": undefined,
  "basket[0][bankName]": undefined,
  "basket[0][ifscCode]": "",
  "basket[0][accountNumber]": "",
  "basket[0][bankAccountType]": "",
  "basket[0][micr]": "",
  "basket[0][proofOfAccount]": 14,
  "basket[0][bankName]": "STATE BANK OF INDIA",
  "basket[0][accountNo]": "1111111111",
  "basket[0][accountType]": "SB",
  "basket[0][bankCode]": "002",
  buyFlag: false,
  camsFolioActive: false,
  chequeUploaded: true,
  city: "",
  clientId: "",
  country: "INDIA",
  createdOn: "2023-12-04 16:33:07.0",
  dematAccountVerified: false,
  dematOnboardingAllowed: true,
  dematType: "KSec",
  directClientId: "",
  dob: "01-02-2024",
  dob2: "",
  dob3: "",
  dynamicSip: false,
  eMandateId: "",
  eMandateStatus: 0,
  eMandateUpdatedOn: "",
  editable: true,
  email: "ramendrasukla9889@gmail.com",
  emailVerified: false,
  fatcaDetails: [
    {
      addressType: "2",
      birthCity: "but ",
      birthCountry: "101",
      citizenship: "101",
      createdOn: 1701693476000,
      fatcaFor: 1,
      grossIncome: "02",
      id: 1739,
      nationality: "101",
      netWorth: null,
      netWorthDate: 1680201000000,
      occupation: "4",
      pep: "PEP",
      platform: "MFU",
      sourceOfwealth: "02",
      taxResFlag: "N",
      taxResRecords:
        '{"taxpayerIDN1":"GBEPS4393M","taxpayerIDDoc1":"C","residenceCntry1":"101"}',
      updatedOn: 1701756939000,
      userId: 1293623,
    },
  ],
  fatherName: "",
  firstName: "RAMENDRA",
  flexiCartCount: 1,
  foreignAddressLine1: "",
  foreignAddressLine2: "",
  foreignAddressLine3: "",
  foreignCity: "",
  foreignCountry: "",
  foreignPinCode: "",
  foreignState: "",
  guardianDob: "",
  guardianFirstName: " ",
  guardianLastName: "",
  guardianMiddleName: "",
  guardianName: "",
  holdingMode: "SI",
  host: "fundexpert",
  id: 1293623,
  isDematAccount: false,
  isFatcaDone: true,
  isFatcaDone2: false,
  isFatcaDone3: false,
  isPrimaryAccount: true,
  isipAmount: 0,
  isipMandateId: "",
  isipMandateStatus: 0,
  isipMandateUpdatedOn: "",
  jointAccount: false,
  karvyFolioActive: false,
  kycStatus: "kyc",
  lastLogin: "2024-02-01 12:02:06.0",
  lastName: "SHUKLA",
  lastName2: "",
  lastName3: "",
  manager: {
    additionalAddedBy: "",
    address: "Demo Address",
    appStoreUrl: "https://fundexpert.page.link/ARN-1122344555",
    appType: "black",
    arn: "ARN-13974",
    brokerUrl: "",
    city: "Demo City",
    companyName: "AMFI Registered Mutual Fund Distributor",
    dsaCode: "DSAMFU",
    dynamicLinkKey: "AIzaSyBXsNN6-35wBUdT-8CXrXpqvQbSljcEJ4o",
    dynamicLinkUserName: "fundexpert",
    email: "demomfu@fundexpert.in",
    euin: "E151354",
    frontPage: "dashboard",
    googleMapUrl: "",
    hideFELogo: false,
    icon: "",
    id: 969057,
    iiflUrl: "",
    iilId: "Under Activation",
    ipoUrl: "",
    isFranchise: false,
    logo: "https://www.fundexpert.in/app/img/felogo.png",
    mascotName: "",
    mascotUrl: "",
    memberId: "T969057",
    msg: "",
    name: "DEMO MFU",
    nameFromBseTable: "DEMO MFU",
    number: "9166655544",
    paid: true,
    partnerBizEQId: 0,
    pin: "100001",
    platform: "MFU",
    playStoreUrl: "https://fundexpert.page.link/ARN-1122344555",
    productName: "DEMO MFU",
    riaFlag: false,
    riskProfileQuestion: 10,
    rtaSynced: false,
    rtaUpload: false,
    sendx: false,
    sendxKey: "",
    sendxTeamId: "",
    showOnlyKotakProducts: false,
    sipManualOrAutomaticFlag: 0,
    url: "https://demomfu.fundexpert.net",
    whatsappNumber: "",
    whitelabel: false,
  },
  mandateId: 0,
  mandateStage: 0,
  mandateStatus: 0,
  mfuActive: false,
  mfuAdditional: {
    bankDetails: false,
    basicDetails: true,
    contactDetails: true,
    createdOn: 1701687787000,
    guardianEmail: null,
    guardianMobile: null,
    guardianPan: "GBEPS4393M",
    jh1CommunicationEmail: null,
    jh1CommunicationMobile: null,
    jh2CommunicationEmail: null,
    jh2CommunicationMobile: null,
    nomVerUrl1: null,
    nomVerUrl2: null,
    nomVerUrl3: null,
    nomineeDetails: true,
    nomineeOptedFlag: "Y",
    relationship: null,
    relationshipProof: null,
    updatedOn: 1706768825000,
    userId: 1293623,
  },
  mfuCan: "",
  midName: "",
  midName2: "",
  midName3: "",
  minorAccount: 0,
  mobileNumber: "8181832501",
  mobileVerified: true,
  nMandateAmount: "",
  nMandateId: "",
  nMandateStatus: 0,
  nMandateUpdatedOn: "",
  name: "RAMENDRA  SHUKLA",
  name2: "",
  name3: "",
  nominee: {
    dob: "2000-12-01",
    dob2: "01-12-1993",
    dob3: "31-12-1998",
    guardianDob: "",
    guardianDob2: "",
    guardianDob3: "",
    guardianName: "",
    guardianName2: "",
    guardianName3: "",
    minor: false,
    minor2: false,
    minor3: false,
    name: "amit",
    name2: "aaa",
    name3: "bbb",
    pan: "",
    pan2: "",
    pan3: "",
    percentage: 80,
    percentage2: 10,
    percentage3: 10,
    relation: "bro",
    relation2: "bro",
    relation3: "bro",
    secondNominee: true,
    thirdNominee: true,
    userId: 1293623,
  },
  occupation: "4",
  panNumber: "GBEPS4393M",
  panNumber2: "",
  panNumber3: "",
  panVerified: true,
  panVerified2: false,
  panVerified3: false,
  pinCode: "",
  rebalanceRequest: false,
  redeemFlag: false,
  role: 0,
  sex: 0,
  signature2Uploaded: false,
  signature3Uploaded: false,
  signatureUploaded: false,
  state: "",
  stockHoldingsCount: 0,
  stpFlag: false,
  subscriptionList: [
    { agentId: 969057, allowedUsers: 0, isActive: true, paidModulesId: 67 },
    { agentId: 969057, allowedUsers: 0, isActive: true, paidModulesId: 82 },
    { agentId: 969057, allowedUsers: 0, isActive: true, paidModulesId: 90 },
    { agentId: 969057, allowedUsers: 0, isActive: true, paidModulesId: 93 },
    { agentId: 969057, allowedUsers: 0, isActive: true, paidModulesId: 106 },
    { agentId: 969057, allowedUsers: 0, isActive: true, paidModulesId: 112 },
    { agentId: 969057, allowedUsers: 0, isActive: true, paidModulesId: 121 },
  ],
  swpFlag: false,
  taxStatus: "01",
  updatedOn: "2024-02-01 11:57:05.0",
  userId: 1293623,
  userVerifiedAOF: false,
  userVerifiedAOFOn: "",
  userVerifiedMandate: false,
  userVerifiedMandateOn: "",
  videoKycFinalVerification: false,
  xsipAmount: 0,
};

export default UserScreen;
