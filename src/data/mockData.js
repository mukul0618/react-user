import { tokens } from "../theme";

export const mockDataGroups = [
  {
    id: "644e37f130e71d058b561c00",
    grouptype: "agency",
    grouplicence: "type1",
    groupname: "LJ Hooker",
    groupcontact: "0987654321",
    groupemail: "ljhooker@example.com",
    grouparea: "Paramatta",
    datecreated: "2023-04-30",
  },
];

export const mockDataUsers = [
  {
    id: "644927777b483f85ff68febf",
    accType: "builder",
    firstname: "Nia",
    lastname: "Patel",
    phone: "0987654321",
    email: "kcarson@you.com",
    datecreated: "2023-04-26",
    group: "6449452900a52a48d6e83cab",
  },
  {
    id: "6449280e32483f85ff68fec7",
    accType: "moderator",
    firstname: "Maya",
    lastname: "Zhang",
    phone: "0987654321",
    email: "jhdoe@you.com",
    datecreated: "2023-04-26",
    group: "644e35ab943r43b1184953407298",
  },
  {
    id: "64492802r43r83f85ff68fec7",
    accType: "admin",
    firstname: "Maya",
    lastname: "Zhang",
    phone: "0987654321",
    email: "jhdoe@you.com",
    datecreated: "2023-04-26",
    group: "644e3r43r1184953407298",
  },
  {
    id: "6449280223r2483f85ff68fec7",
    accType: "user",
    firstname: "Maya",
    lastname: "Zhang",
    phone: "0987654321",
    email: "jhdoe@you.com",
    datecreated: "2023-04-26",
    group: "644e35a3327b1184953407298",
  },
  {
    id: "64492802e43483f85ff68fec7",
    accType: "agent",
    firstname: "Maya",
    lastname: "Zhang",
    phone: "0987654321",
    email: "jhdoe@you.com",
    datecreated: "2023-04-26",
    group: "644e3434b97b1184953407298",
  },


  
];

export const mockDataListings = [
  {
    id: "646c536ff2754a1a996eea9e",
    listingname: "Test Listings",
    type: "Land",
    pricerange: "20k - 50k",
    datecreated: "2023-05-23",
    description: "a swap with a tree",
    streetaddress: "734 swap road",
    postcode: "2527",
    region: "swap land",
    landsize: "5",
    developer: "64530686bf5bf4e16eac995f",
    status: "SOLD-out",
    commission: "5.67%",
  },
];

export const mockTransactions = [
  {
    _id: "646c536f",
    listingName: "Sydney",
    createdAt: "2023-05-23",
    priceRange: "800,000 - 1000,000",
  },
    {
      _id: "646c536f",
      listingName: "Melbourne",
      createdAt: "2023-05-23",
      priceRange: "800,000 - 1000,000",
    },
    {
      _id: "646c536f",
      listingName: "Gold Coast",
      createdAt: "2023-05-23",
      priceRange: "800,000 - 1000,000",
    },
    {
      _id: "646c536f",
      listingName: "Brisbane",
      createdAt: "2023-05-23",
      priceRange: "800,000 - 1000,000",
    },
    {
      _id: "646c536f",
      listingName: "Sydney1",
      createdAt: "2023-05-23",
      priceRange: "800,000 - 1000,000",
    },
    {
      _id: "646c536f",
      listingName: "Sydney1",
      createdAt: "2023-05-23",
      priceRange: "800,000 - 1000,000",
    }
];

export const mockBarData = [
  {
    xaxisval: "AD",
    "hot dog": 137,
    "hot dogColor": "hsl(229, 70%, 50%)",
    burger: 96,
    burgerColor: "hsl(296, 70%, 50%)",
    kebab: 72,
    kebabColor: "hsl(97, 70%, 50%)",
    donut: 140,
    donutColor: "hsl(340, 70%, 50%)",
  },
  {
    xaxisval: "AE",
    "hot dog": 55,
    "hot dogColor": "hsl(307, 70%, 50%)",
    burger: 28,
    burgerColor: "hsl(111, 70%, 50%)",
    kebab: 58,
    kebabColor: "hsl(273, 70%, 50%)",
    donut: 29,
    donutColor: "hsl(275, 70%, 50%)",
  },
  {
    xaxisval: "AF",
    "hot dog": 109,
    "hot dogColor": "hsl(72, 70%, 50%)",
    burger: 23,
    burgerColor: "hsl(96, 70%, 50%)",
    kebab: 34,
    kebabColor: "hsl(106, 70%, 50%)",
    donut: 152,
    donutColor: "hsl(256, 70%, 50%)",
  },
  {
    xaxisval: "AG",
    "hot dog": 133,
    "hot dogColor": "hsl(257, 70%, 50%)",
    burger: 52,
    burgerColor: "hsl(326, 70%, 50%)",
    kebab: 43,
    kebabColor: "hsl(110, 70%, 50%)",
    donut: 83,
    donutColor: "hsl(9, 70%, 50%)",
  },
  {
    xaxisval: "AI",
    "hot dog": 81,
    "hot dogColor": "hsl(190, 70%, 50%)",
    burger: 80,
    burgerColor: "hsl(325, 70%, 50%)",
    kebab: 112,
    kebabColor: "hsl(54, 70%, 50%)",
    donut: 35,
    donutColor: "hsl(285, 70%, 50%)",
  },
  {
    xaxisval: "AL",
    "hot dog": 66,
    "hot dogColor": "hsl(208, 70%, 50%)",
    burger: 111,
    burgerColor: "hsl(334, 70%, 50%)",
    kebab: 167,
    kebabColor: "hsl(182, 70%, 50%)",
    donut: 18,
    donutColor: "hsl(76, 70%, 50%)",
  },
  {
    xaxisval: "AM",
    "hot dog": 80,
    "hot dogColor": "hsl(87, 70%, 50%)",
    burger: 47,
    burgerColor: "hsl(141, 70%, 50%)",
    kebab: 158,
    kebabColor: "hsl(224, 70%, 50%)",
    donut: 49,
    donutColor: "hsl(274, 70%, 50%)",
  },
];

export const mockPieData = [
  {
    id: "land",
    label: "land",
    value: 239,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "house",
    label: "house",
    value: 170,
    color: "hsl(162, 70%, 50%)",
  },
  {
    id: "apartment",
    label: "apartment",
    value: 322,
    color: "hsl(291, 70%, 50%)",
  },
];

export const mockLineData = [
  {
    id: "apartment",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "06-2022",
        y: 101,
      },
      {
        x: "07-2022",
        y: 75,
      },
      {
        x: "08-2022",
        y: 36,
      },
      {
        x: "09-2022",
        y: 216,
      },
      {
        x: "10-2022",
        y: 35,
      },
      {
        x: "11-2022",
        y: 236,
      },
      {
        x: "12-2022",
        y: 88,
      },
      {
        x: "01-2023",
        y: 232,
      },
      {
        x: "02-2023",
        y: 281,
      },
      {
        x: "03-2023",
        y: 1,
      },
      {
        x: "04-2023",
        y: 35,
      },
      {
        x: "05-2023",
        y: 14,
      },
    ],
  },
  {
    id: "house",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: "06-2022",
        y: 212,
      },
      {
        x: "07-2022",
        y: 190,
      },
      {
        x: "08-2022",
        y: 270,
      },
      {
        x: "09-2022",
        y: 9,
      },
      {
        x: "10-2022",
        y: 75,
      },
      {
        x: "11-2022",
        y: 175,
      },
      {
        x: "12-2022",
        y: 33,
      },
      {
        x: "01-2023",
        y: 189,
      },
      {
        x: "02-2023",
        y: 97,
      },
      {
        x: "03-2023",
        y: 87,
      },
      {
        x: "04-2023",
        y: 299,
      },
      {
        x: "05-2023",
        y: 251,
      },
    ],
  },
  {
    id: "land",
    color: tokens("dark").redAccent[200],
    data: [
      {
        x: "06-2022",
        y: 191,
      },
      {
        x: "07-2022",
        y: 136,
      },
      {
        x: "08-2022",
        y: 91,
      },
      {
        x: "09-2022",
        y: 190,
      },
      {
        x: "10-2022",
        y: 211,
      },
      {
        x: "11-2022",
        y: 152,
      },
      {
        x: "12-2022",
        y: 189,
      },
      {
        x: "01-2023",
        y: 152,
      },
      {
        x: "02-2023",
        y: 8,
      },
      {
        x: "03-2023",
        y: 197,
      },
      {
        x: "04-2023",
        y: 107,
      },
      {
        x: "05-2023",
        y: 170,
      },
    ],
  },
];

export const mockGeographyData = [
  {
    id: "AFG",
    value: 520600,
  },
  {
    id: "AGO",
    value: 949905,
  },
  {
    id: "ALB",
    value: 329910,
  },
  {
    id: "ARE",
    value: 675484,
  },
  {
    id: "ARG",
    value: 432239,
  },
  {
    id: "ARM",
    value: 288305,
  },
  {
    id: "ATA",
    value: 415648,
  },
  {
    id: "ATF",
    value: 665159,
  },
  {
    id: "AUT",
    value: 798526,
  },
  {
    id: "AZE",
    value: 481678,
  },
  {
    id: "BDI",
    value: 496457,
  },
  {
    id: "BEL",
    value: 252276,
  },
  {
    id: "BEN",
    value: 440315,
  },
  {
    id: "BFA",
    value: 343752,
  },
  {
    id: "BGD",
    value: 920203,
  },
  {
    id: "BGR",
    value: 261196,
  },
  {
    id: "BHS",
    value: 421551,
  },
  {
    id: "BIH",
    value: 974745,
  },
  {
    id: "BLR",
    value: 349288,
  },
  {
    id: "BLZ",
    value: 305983,
  },
  {
    id: "BOL",
    value: 430840,
  },
  {
    id: "BRN",
    value: 345666,
  },
  {
    id: "BTN",
    value: 649678,
  },
  {
    id: "BWA",
    value: 319392,
  },
  {
    id: "CAF",
    value: 722549,
  },
  {
    id: "CAN",
    value: 332843,
  },
  {
    id: "CHE",
    value: 122159,
  },
  {
    id: "CHL",
    value: 811736,
  },
  {
    id: "CHN",
    value: 593604,
  },
  {
    id: "CIV",
    value: 143219,
  },
  {
    id: "CMR",
    value: 630627,
  },
  {
    id: "COG",
    value: 498556,
  },
  {
    id: "COL",
    value: 660527,
  },
  {
    id: "CRI",
    value: 60262,
  },
  {
    id: "CUB",
    value: 177870,
  },
  {
    id: "-99",
    value: 463208,
  },
  {
    id: "CYP",
    value: 945909,
  },
  {
    id: "CZE",
    value: 500109,
  },
  {
    id: "DEU",
    value: 63345,
  },
  {
    id: "DJI",
    value: 634523,
  },
  {
    id: "DNK",
    value: 731068,
  },
  {
    id: "DOM",
    value: 262538,
  },
  {
    id: "DZA",
    value: 760695,
  },
  {
    id: "ECU",
    value: 301263,
  },
  {
    id: "EGY",
    value: 148475,
  },
  {
    id: "ERI",
    value: 939504,
  },
  {
    id: "ESP",
    value: 706050,
  },
  {
    id: "EST",
    value: 977015,
  },
  {
    id: "ETH",
    value: 461734,
  },
  {
    id: "FIN",
    value: 22800,
  },
  {
    id: "FJI",
    value: 18985,
  },
  {
    id: "FLK",
    value: 64986,
  },
  {
    id: "FRA",
    value: 447457,
  },
  {
    id: "GAB",
    value: 669675,
  },
  {
    id: "GBR",
    value: 757120,
  },
  {
    id: "GEO",
    value: 158702,
  },
  {
    id: "GHA",
    value: 893180,
  },
  {
    id: "GIN",
    value: 877288,
  },
  {
    id: "GMB",
    value: 724530,
  },
  {
    id: "GNB",
    value: 387753,
  },
  {
    id: "GNQ",
    value: 706118,
  },
  {
    id: "GRC",
    value: 377796,
  },
  {
    id: "GTM",
    value: 66890,
  },
  {
    id: "GUY",
    value: 719300,
  },
  {
    id: "HND",
    value: 739590,
  },
  {
    id: "HRV",
    value: 929467,
  },
  {
    id: "HTI",
    value: 538961,
  },
  {
    id: "HUN",
    value: 146095,
  },
  {
    id: "IDN",
    value: 490681,
  },
  {
    id: "IND",
    value: 549818,
  },
  {
    id: "IRL",
    value: 630163,
  },
  {
    id: "IRN",
    value: 596921,
  },
  {
    id: "IRQ",
    value: 767023,
  },
  {
    id: "ISL",
    value: 478682,
  },
  {
    id: "ISR",
    value: 963688,
  },
  {
    id: "ITA",
    value: 393089,
  },
  {
    id: "JAM",
    value: 83173,
  },
  {
    id: "JOR",
    value: 52005,
  },
  {
    id: "JPN",
    value: 199174,
  },
  {
    id: "KAZ",
    value: 181424,
  },
  {
    id: "KEN",
    value: 60946,
  },
  {
    id: "KGZ",
    value: 432478,
  },
  {
    id: "KHM",
    value: 254461,
  },
  {
    id: "OSA",
    value: 942447,
  },
  {
    id: "KWT",
    value: 414413,
  },
  {
    id: "LAO",
    value: 448339,
  },
  {
    id: "LBN",
    value: 620090,
  },
  {
    id: "LBR",
    value: 435950,
  },
  {
    id: "LBY",
    value: 75091,
  },
  {
    id: "LKA",
    value: 595124,
  },
  {
    id: "LSO",
    value: 483524,
  },
  {
    id: "LTU",
    value: 867357,
  },
  {
    id: "LUX",
    value: 689172,
  },
  {
    id: "LVA",
    value: 742980,
  },
  {
    id: "MAR",
    value: 236538,
  },
  {
    id: "MDA",
    value: 926836,
  },
  {
    id: "MDG",
    value: 840840,
  },
  {
    id: "MEX",
    value: 353910,
  },
  {
    id: "MKD",
    value: 505842,
  },
  {
    id: "MLI",
    value: 286082,
  },
  {
    id: "MMR",
    value: 915544,
  },
  {
    id: "MNE",
    value: 609500,
  },
  {
    id: "MNG",
    value: 410428,
  },
  {
    id: "MOZ",
    value: 32868,
  },
  {
    id: "MRT",
    value: 375671,
  },
  {
    id: "MWI",
    value: 591935,
  },
  {
    id: "MYS",
    value: 991644,
  },
  {
    id: "NAM",
    value: 701897,
  },
  {
    id: "NCL",
    value: 144098,
  },
  {
    id: "NER",
    value: 312944,
  },
  {
    id: "NGA",
    value: 862877,
  },
  {
    id: "NIC",
    value: 90831,
  },
  {
    id: "NLD",
    value: 281879,
  },
  {
    id: "NOR",
    value: 224537,
  },
  {
    id: "NPL",
    value: 322331,
  },
  {
    id: "NZL",
    value: 86615,
  },
  {
    id: "OMN",
    value: 707881,
  },
  {
    id: "PAK",
    value: 158577,
  },
  {
    id: "PAN",
    value: 738579,
  },
  {
    id: "PER",
    value: 248751,
  },
  {
    id: "PHL",
    value: 557292,
  },
  {
    id: "PNG",
    value: 516874,
  },
  {
    id: "POL",
    value: 682137,
  },
  {
    id: "PRI",
    value: 957399,
  },
  {
    id: "PRT",
    value: 846430,
  },
  {
    id: "PRY",
    value: 720555,
  },
  {
    id: "QAT",
    value: 478726,
  },
  {
    id: "ROU",
    value: 259318,
  },
  {
    id: "Rland",
    value: 268735,
  },
  {
    id: "RWA",
    value: 136781,
  },
  {
    id: "ESH",
    value: 151957,
  },
  {
    id: "SAU",
    value: 111821,
  },
  {
    id: "SDN",
    value: 927112,
  },
  {
    id: "SDS",
    value: 966473,
  },
  {
    id: "SEN",
    value: 158085,
  },
  {
    id: "SLB",
    value: 178389,
  },
  {
    id: "SLE",
    value: 528433,
  },
  {
    id: "SLV",
    value: 353467,
  },
  {
    id: "ABV",
    value: 251,
  },
  {
    id: "SOM",
    value: 445243,
  },
  {
    id: "SRB",
    value: 202402,
  },
  {
    id: "SUR",
    value: 972121,
  },
  {
    id: "SVK",
    value: 319923,
  },
  {
    id: "SVN",
    value: 728766,
  },
  {
    id: "SWZ",
    value: 379669,
  },
  {
    id: "SYR",
    value: 16221,
  },
  {
    id: "TCD",
    value: 101273,
  },
  {
    id: "TGO",
    value: 498411,
  },
  {
    id: "THA",
    value: 506906,
  },
  {
    id: "TJK",
    value: 613093,
  },
  {
    id: "TKM",
    value: 327016,
  },
  {
    id: "TLS",
    value: 607972,
  },
  {
    id: "TTO",
    value: 936365,
  },
  {
    id: "TUN",
    value: 898416,
  },
  {
    id: "TUR",
    value: 237783,
  },
  {
    id: "TWN",
    value: 878213,
  },
  {
    id: "TZA",
    value: 442174,
  },
  {
    id: "UGA",
    value: 720710,
  },
  {
    id: "UKR",
    value: 74172,
  },
  {
    id: "URY",
    value: 753177,
  },
  {
    id: "landA",
    value: 658725,
  },
  {
    id: "UZB",
    value: 550313,
  },
  {
    id: "VEN",
    value: 707492,
  },
  {
    id: "VNM",
    value: 538907,
  },
  {
    id: "VUT",
    value: 650646,
  },
  {
    id: "PSE",
    value: 476078,
  },
  {
    id: "YEM",
    value: 957751,
  },
  {
    id: "ZAF",
    value: 836949,
  },
  {
    id: "ZMB",
    value: 714503,
  },
  {
    id: "ZWE",
    value: 405217,
  },
  {
    id: "KOR",
    value: 171135,
  },
];
