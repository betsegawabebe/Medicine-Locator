import { CountryType, IColumn, ISideBarMenu, ServiceType } from "./types";

export const maxImageSizeInMB = 15;
export const maxAudioSizeInMB = 15;
export const maxVideoSizeInMB = 50;
export const acceptedImageFormats = ".jpg, .png, .jpeg, .svg";
export const acceptedAudioFormats = ".mp3";
export const acceptedVideoFormats = ".mp4, .mov";

export const API_ROUTE = import.meta.env.VITE_API_ROUTE;

export const cookieKeys = {
  authToken: "au-few92",
};

export const routeConstants = {
  home: "/",
  login: "/login",
  signup: "/sign-up",
};
export const adminMenu: ISideBarMenu[] = [
  {
    label: "Dashboard",
    to: "/dashboard",
  },
  {
    label: "Diaspora",
    to: "/diasporas",
  },
  {
    label: "Bank",
    to: "/banks",
  },
  {
    label: "PhoneOperator",
    to: "/phoneOperators",
  },

  {
    label: "Scheduled",
    to: "/scheduled",
  },
  {
    label: "Offers",
    to: "/offers",
  },
  {
    label: "user",
    to: "/user",
  },
];
export const BanksMenu = [
  {
    label: "Dashboard",
    to: "/dashboard",
  },

  {
    label: "Client request",
    to: "/requests",
  },
  {
    label: "Offers",
    to: "/offers",
  },
];
export const PhoneOperatorMenu = [
  {
    label: "Dashboard",
    to: "/dashboard",
  },

  {
    label: "Client",
    to: "/LoanRequest",
  },
  {
    label: "Scheduled",
    to: "/scheduled",
  },
];

// columns
export const adminPhoneOperatorColumn = [
  { id: "Name", label: "Name", minWidth: 220 },
  {
    id: "Email",
    label: "Email",
    minWidth: 220,
  },
  {
    id: "Phone number",
    label: "Phone number",
    minWidth: 220,
  },
  {
    id: "Action",
    label: "Action",
    // minWidth: 10,
  },
];
export const adminDiasporaColumn = [
  {
    id: "Service Type",
    label: "Service Type",
    minWidth: 150,
  },
  {
    id: "Amount",
    label: "Amount",
    minWidth: 150,
  },
  {
    id: "Assigged",
    label: "Assigged",
    minWidth: 150,
  },
  {
    id: "Country",
    label: "Country",
    minWidth: 150,
  },
  {
    id: "Verified",
    label: "Verified",
    minWidth: 150,
  },
];
export const adminPhoneOperatorDetailColumn = [
  { id: "Client Email", label: "Client Email", minWidth: 170 },
  {
    id: "Service Type",
    label: "Service Type",
  },
  {
    id: "Loan Amount",
    label: "Loan Amount",
  },
  {
    id: "Scheduled For",
    label: "Scheduled For",
    minWidth: 10,
  },
  {
    id: "Completed At",
    label: "Completed At",
  },
  {
    id: "Rejection Reason",
    label: "Rejection Reason",
    minWidth: 10,
  },
  {
    id: "Status",
    label: "Status",
    minWidth: 10,
  },
];
export const adminScheduledCallsColumn = [
  { id: "Client Name", label: "Client Name", minWidth: 170 },
  { id: "Client Email", label: "Client Email", minWidth: 170 },
  { id: "Phone Number", label: "Phone Number", minWidth: 170 },
  {
    id: "Scheduled For",
    label: "Scheduled For",
  },
];
export const adminLoanOfferColumn: IColumn[] = [
  { id: "Client Email", label: "Client Email", minWidth: 260 },
  {
    id: "Bank Name",
    label: "Bank Name",
    minWidth: 260,
  },
  {
    id: "Interst Rate",
    label: "Interst Rate",
    minWidth: 150,
  },
  {
    id: "Offered Amount",
    label: "Offered Amount",
    minWidth: 150,
  },
  {
    id: "Client Response",
    label: "Client Response",
    minWidth: 150,
  },
  {
    id: "Bank Response",
    label: "Bank Response",
    minWidth: 150,
  },
];
export const bankLoanOfferColumn: IColumn[] = [
  { id: "Name", label: "Name", minWidth: 170 },
  {
    id: "Client Response",
    label: "Client Response",
  },
  {
    id: "Bank Response",
    label: "Bank Response",
  },
  {
    id: "Loan Amount",
    label: "Loan Amount",
  },
  {
    id: "Offered Amount",
    label: "Offered Amount",
  },
  {
    id: " Service Type",
    label: "Service Type",
  },
  {
    id: "Initial Deposit",
    label: "Initial Deposit",
  },
];

export const adminDiasporaLoanOffersColumn = [
  { id: "Bank Name", label: "Bank Name", minWidth: 170 },
  {
    id: "Offer Amount",
    label: "Offered Amount",
  },
  {
    id: "Diaspora Response",
    label: "Diaspora Response",
  },
];
export const adminPhoneOperatotLoanRequestColumn = [
  { id: "Client Name", label: "Client Name", minWidth: 170 },
  {
    id: "Client Email",
    label: "Client Email",
  },
  {
    id: "Phone Number",
    label: "Phone Number",
  },
  {
    id: "Status",
    label: "Status",
  },
  {
    id: "Scheduled For",
    label: "Scheduled For",
  },
];
export const AdminBanksPageColumn = [
  { id: "Bank Name", label: "Name", minWidth: 280 },
  {
    id: "Bank Email",
    label: "Email",
    minWidth: 280,
  },
  {
    id: "Action",
    label: "Action",
    // minWidth: 10,
    align: "right",
  },
];

export const PhoneOperatorLoanRequestPageColumn = [
  { id: "Name", label: "Name", minWidth: 170 },
  {
    id: "Email",
    label: "Email",
  },
  {
    id: "Status",
    label: "Status",
  },
  {
    id: "Scheduled For",
    label: "Scheduled For",
  },
  {
    id: "Phone",
    label: "Phone",
  },
];

// filter

export const filterDiasporaData = [
  {
    items: [
      { name: "Mortgage Loan", value: ServiceType.MortgageLoan },
      { name: "Vehicle Loan", value: ServiceType.VehicleLoan },
    ],
    placeholder: "Service Type",
    queryName: "serviceType",
  },

  {
    items: [
      { name: "True", value: "true" },
      { name: "False", value: "false" },
    ],
    placeholder: "Assigned",
    queryName: "isAssigned",
  },
  {
    items: [
      { name: "True", value: "true" },
      { name: "False", value: "false" },
    ],
    placeholder: "Verified",
    queryName: "isVerified",
  },
  {
    items: Object.values(CountryType).map((country) => {
      return { name: country, value: country };
    }),
    placeholder: "Country",
    queryName: "country",
    // type:'selector'
  },
  // {
  //   items: [
  //     { name: 'min', value: 10000 },
  //     { name: 'max', value: 100000000 },
  //   ],
  //   placeholder: 'Loan Aamount',
  //   queryName: 'loanAmount',
  //   type: 'number',
  // },
];
export const filterBanksLoanOfferData = [
  {
    items: [
      { name: "Mortgage Loan", value: ServiceType.MortgageLoan },
      { name: "Vehicle Loan", value: ServiceType.VehicleLoan },
    ],
    placeholder: "Service Type",
    queryName: "serviceType",
  },
  {
    items: [
      { name: "True", value: "ACCEPTED" },
      { name: "False", value: "REJECTED" },
    ],
    placeholder: "Bank Response",
    queryName: "bankResponse",
  },
  {
    items: [
      { name: "True", value: "ACCEPTED" },
      { name: "False", value: "REJECTED" },
    ],
    placeholder: "Client Response",
    queryName: "clientResponse",
  },

  {
    items: [
      { name: "min", value: 10000 },
      { name: "max", value: 100000000 },
    ],
    placeholder: "Loan Aamount",
    queryName: "loanAmount",
    type: "number",
  },
];
export const filterBanksLoanRequestData = [
  {
    items: [
      { name: "True", value: "ACCEPTED" },
      { name: "False", value: "REJECTED" },
    ],
    placeholder: "Client Response",
    queryName: "clientResponse",
  },

  {
    items: [
      { name: "min", value: 10000 },
      { name: "max", value: 100000000 },
    ],
    placeholder: "Loan Aamount",
    queryName: "loanAmount",
    type: "number",
  },
];

export const filterBankData = [];
export const filterPhoneOperatorData = [];
export const filterLoanOfferData = [
  {
    items: [
      { name: "True", value: "ACCEPTED" },
      { name: "False", value: "REJECTED" },
    ],
    placeholder: "Bank Response",
    queryName: "bankResponse",
  },
  {
    items: [
      { name: "True", value: "ACCEPTED" },
      { name: "False", value: "REJECTED" },
    ],
    placeholder: "Client Response",
    queryName: "clientResponse",
  },
  // {
  //   items: [
  //     { name: 'min', value: 10000 },
  //     { name: 'max', value: 100000000 },
  //   ],
  //   placeholder: 'Loan Aamount',
  //   queryName: 'loanAmount',
  //   type:'number'
  // },
];
export const bankLoanRequestColumn = [
  {
    id: "Name",
    label: "Name",
    minWidth: 120,
  },
  {
    id: "Loan Amount",
    label: "Loan Amount",
  },

  {
    id: "Verified At",
    label: "Verified At",
    minWidth: 10,
  },
];
export const PhoneOperatorScheduledDiasporasColumn = [
  { id: "client", label: "Client" },
  { id: "Email", label: "Email", minWidth: 170 },
  {
    id: "Phone number",
    label: "Phone",
  },
  {
    id: "Scheduled Date",
    label: "Scheduled Date",
  },
];
