import logo from "./logo.svg";
import logoVillaMadero from "./logoVillaMadero.svg";
import searchIcon from "./searchIcon.svg";
import userIcon from "./userIcon.svg";
import calenderIcon from "./calenderIcon.svg";
import locationIcon from "./locationIcon.svg";
import starIconFilled from "./starIconFilled.svg";
import arrowIcon from "./arrowIcon.svg";
import starIconOutlined from "./starIconOutlined.svg";
import instagramIcon from "./instagramIcon.svg";
import facebookIcon from "./facebookIcon.svg";
import twitterIcon from "./twitterIcon.svg";
import linkendinIcon from "./linkendinIcon.svg";
import freeWifiIcon from "./freeWifiIcon.svg";
import freeBreakfastIcon from "./freeBreakfastIcon.svg";
import roomServiceIcon from "./roomServiceIcon.svg";
import mountainIcon from "./mountainIcon.svg";
import poolIcon from "./poolIcon.svg";
import homeIcon from "./homeIcon.svg";
import closeIcon from "./closeIcon.svg";
import locationFilledIcon from "./locationFilledIcon.svg";
import heartIcon from "./heartIcon.svg";
import badgeIcon from "./badgeIcon.svg";
import menuIcon from "./menuIcon.svg";
import closeMenu from "./closeMenu.svg";
import guestsIcon from "./guestsIcon.svg";
import roomImg1 from "./roomImg1.png";
import roomImg2 from "./roomImg2.png";
import roomImg3 from "./roomImg3.png";
import roomImg4 from "./roomImg4.png";
import regImage from "./regImage.png";
import executiveRoom from "./executiveRoom.jpg";
import double_basic_room from "./double_basic_room.jpg";
import urbana_suite from "./urbana_suite.jpg";
import exclusiveOfferCardImg1 from "./exclusiveOfferCardImg1.png";
import exclusiveOfferCardImg2 from "./exclusiveOfferCardImg2.png";
import exclusiveOfferCardImg3 from "./exclusiveOfferCardImg3.png";
import commonArea1 from "./commonArea1.jpg";
import commonArea2 from "./commonArea2.jpg";
import commonArea3 from "./commonArea3.jpg";
import commonArea4 from "./commonArea4.jpg";
import commonArea5 from "./commonArea5.jpg";
import vestibulo from "./vestibulo.jpg";
import vestibulo2 from "./vestibulo2.jpg";
import vestibulo3 from "./vestibulo3.jpg";
import zonaRosa from "./zonaRosa.png";
import desayunos from "./desayunos.jpg";
import areasComunes from "./areasComunes.jpg";
import addIcon from "./addIcon.svg";
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";
import uploadArea from "./uploadArea.svg";
import totalBookingIcon from "./totalBookingIcon.svg";
import totalRevenueIcon from "./totalRevenueIcon.svg";
import phoneSolid from "./phoneSolid.svg";
import envelopeSolid from "./envelopeSolid.svg";
import whatsapp from "./whatsappIcon.svg";

export const recursos = {
  vestibulo,
  vestibulo2,
  vestibulo3,
};
export const assets = {
  logo,
  logoVillaMadero,
  searchIcon,
  userIcon,
  calenderIcon,
  locationIcon,
  starIconFilled,
  arrowIcon,
  starIconOutlined,
  instagramIcon,
  facebookIcon,
  twitterIcon,
  linkendinIcon,
  freeWifiIcon,
  freeBreakfastIcon,
  roomServiceIcon,
  mountainIcon,
  poolIcon,
  closeIcon,
  homeIcon,
  locationFilledIcon,
  heartIcon,
  badgeIcon,
  menuIcon,
  closeMenu,
  guestsIcon,
  regImage,
  addIcon,
  dashboardIcon,
  listIcon,
  uploadArea,
  totalBookingIcon,
  totalRevenueIcon,
  phoneSolid,
  envelopeSolid,
  whatsapp,
};

export const cities = ["Dubai", "Singapore", "New York", "London"];

// Exclusive Offers Dummy Data
export const exclusiveOffers = [
  {
    _id: 1,
    title: "Stay 5 Nights & Save",
    description: "Book 5 nights and enjoy an exclusive discount on your total stay. Perfect for long vacations or remote work stays.",
    priceOff: 18,
    expiryDate: "December 31, 2025",
    image: exclusiveOfferCardImg1,
  },
  {
    _id: 2,
    title: "Multiple Room Discount",
    description: "Reserve 2 or more rooms and receive a special discount — ideal for families, groups, or business travelers.",
    priceOff: 15,
    expiryDate: "December 31, 2025",
    image: exclusiveOfferCardImg2,
  },
  {
    _id: 3,
    title: "Anniversary Celebration Package",
    description:
      "Celebrate love with our anniversary package, including a room upgrade (subject to availability), welcome amenities, and a special discounted rate.",
    priceOff: 12,
    expiryDate: "December 31, 2025",
    image: exclusiveOfferCardImg3,
  },
];
export const commonAreas = [
  {
    id: 1,
    name: "Common Areas",
    image: commonArea1,
  },
  {
    id: 2,
    name: "Rooftop Terrace",
    image: commonArea2,
  },
  {
    id: 3,
    name: "breakfast area",
    image: commonArea3,
  },
  {
    id: 4,
    name: "breakfast area",
    image: commonArea4,
  },
  {
    id: 5,
    name: "white living room",
    image: commonArea5,
  },
];

export const experienceSteps = [
  {
    title: "Exclusive Welcome",
    description:
      "We greet our guests with a smile and personalized attention from the very first moment.",
    image: vestibulo,
  },
  {
    title: "Dreamlike Rooms",
    description:
      "Comfort, design, and impeccable cleanliness to make your rest truly perfect.",
    image: executiveRoom,
  },
  {
    title: "Excellent Location",
    description:
      "Located near the main points of interest, with easy access to transportation and shops.",
    image: zonaRosa,
  },
  {
    title: "Free Breakfast with Special Recipes",
    description:
      "Start your day with a varied and fresh breakfast, prepared with local ingredients.",
    image: desayunos,
  },
  {
    title: "Cozy Common Areas",
    description:
      "Enjoy spaces that are perfect for relaxing, reading, or sharing with other guests.",
    image: areasComunes,
  },
];

// Testimonials Dummy Data
export const testimonials = [
  {
    id: 1,
    name: "Olivia Carter",
    address: "London, UK",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?q=80&w=200",
    rating: 5,
    review:
      "Hotel Villa Madero was the highlight of our trip. The location is perfect—close to the main attractions but quiet enough for a peaceful rest. Staff went above and beyond to make us feel at home.",
  },
  {
    id: 2,
    name: "Jean-Pierre Laurent",
    address: "Paris, France",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200",
    rating: 5,
    review:
      "Séjour exceptionnel au Hotel Villa Madero ! L'emplacement est idéal, à proximité des meilleurs restaurants et sites touristiques. Le personnel est chaleureux et attentif, je reviendrai sans hésiter.",
  },
  {
    id: 3,
    name: "María Fernández",
    address: "Madrid, España",
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=200",
    rating: 5,
    review:
      "Mi experiencia en Hotel Villa Madero fue excelente. La habitación impecable, el desayuno delicioso y la ubicación insuperable para explorar la ciudad caminando.",
  },
  {
    id: 4,
    name: "Giovanni Rossi",
    address: "Rome, Italy",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=200",
    rating: 5,
    review:
      "Soggiorno fantastico al Hotel Villa Madero! Posizione centrale, servizio impeccabile e camere confortevoli. Ogni dettaglio è stato curato con grande attenzione.",
  },
  {
    id: 5,
    name: "Emily Thompson",
    address: "Sydney, Australia",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200",
    rating: 4,
    review:
      "I loved my stay at Hotel Villa Madero. The rooftop view at sunset is breathtaking, and the staff’s hospitality truly made the difference. Would definitely stay again.",
  },
  {
    id: 6,
    name: "王伟 (Wáng Wěi)",
    address: "北京, 中国",
    image:
      "https://images.unsplash.com/photo-1743446770828-180040aba491?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 6,
    review:
      "在维拉马德罗酒店的体验非常棒！位置优越，步行即可到达主要景点，服务员非常友好，房间整洁舒适。",
  },
  {
    id: 7,
    name: "Sophie Martin",
    address: "Montreal, Canada",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200",
    rating: 5,
    review:
      "From the moment we arrived at Hotel Villa Madero, we felt welcomed. The design is elegant yet cozy, and the location allowed us to explore the city with ease.",
  },
  {
    id: 8,
    name: "Carlos Gutierrez",
    address: "Buenos Aires, Argentina",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200",
    rating: 5,
    review:
      "Excelente atención en Hotel Villa Madero. El personal siempre dispuesto a ayudar y la ubicación te permite disfrutar de la ciudad sin necesidad de transporte.",
  },
];

// Facility Icon
export const facilityIcons = {
  "Free WiFi": assets.freeWifiIcon,
  "Free Breakfast": assets.freeBreakfastIcon,
  "Room Service": assets.roomServiceIcon,
  "Mountain View": assets.mountainIcon,
  "Pool Access": assets.poolIcon,
  "Air Conditioner": assets.homeIcon,
  "Garden View": assets.locationFilledIcon,
  "private Bathroom": assets.badgeIcon,
  "double Bed accomodation": assets.starIconFilled,
  "Closet": assets.arrowIcon,
};

// For Room Details Page
export const roomCommonData = [
  {
    icon: assets.homeIcon,
    title: "Clean & Safe Stay",
    description: "A well-maintained and hygienic space just for you.",
  },
  {
    icon: assets.badgeIcon,
    title: "Enhanced Cleaning",
    description: "This host follows Staybnb's strict cleaning standards.",
  },
  {
    icon: assets.locationFilledIcon,
    title: "Excellent Location",
    description: "90% of guests rated the location 5 stars.",
  },
  {
    icon: assets.heartIcon,
    title: "Smooth Check-In",
    description: "100% of guests gave check-in a 5-star rating.",
  },
];

// User Dummy Data
export const userDummyData = {
  _id: "user_2unqyL4diJFP1E3pIBnasc7w8hP",
  username: "Great Stack",
  email: "user.greatstack@gmail.com",
  image:
    "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJ2N2c5YVpSSEFVYVUxbmVYZ2JkSVVuWnFzWSJ9",
  role: "hotelOwner",
  createdAt: "2025-03-25T09:29:16.367Z",
  updatedAt: "2025-04-10T06:34:48.719Z",
  __v: 1,
  recentSearchedCities: ["New York"],
};

// Hotel Dummy Data
export const hotelDummyData = {
  _id: "67f76393197ac559e4089b72",
  name: "Urbanza Suites",
  address: "Main Road  123 Street , 23 Colony",
  contact: "+0123456789",
  owner: userDummyData,
  city: "New York",
  createdAt: "2025-04-10T06:22:11.663Z",
  updatedAt: "2025-04-10T06:22:11.663Z",
  __v: 0,
};

export const stayInfo = [
  {
    title: "Clean & Safe Stay",
    icon: "badgeIcon", 
    description: "A well-maintained and hygienic space just for you.",
  },
  {
    title: "Enhanced Cleaning",
    icon: "starIconFilled",
    description: "This host follows Staybnb's strict cleaning standards.",
  },
  {
    title: "Excellent Location",
    icon: "locationFilledIcon",
    description: "90% of guests rated the location 5 stars.",
  },
  {
    title: "Smooth Check-In",
    icon: "calenderIcon",
    description: "100% of guests gave check-in a 5-star rating.",
  },
];



// Rooms Dummy Data
export const roomsDummyData = [
  {
    _id: "67f7647c197ac559e4089b96",
    hotel: hotelDummyData,
    roomType: "executive room",
    codeName: "veraneras",
    pricePerNight: 58,
    amenities: ["Air Conditioner", "Garden View", "private Bathroom"],
    images: [executiveRoom, roomImg2, roomImg3, roomImg4],
    isAvailable: true,
    createdAt: "2025-04-10T06:26:04.013Z",
    updatedAt: "2025-04-10T06:26:04.013Z",
    __v: 0,
    formId: "9deb9e332a05301c",
    address: "San Salvador, El Salvador",
    cities: "Colonia San Benito",
  },
  {
    _id: "67f76452197ac559e4089b8e",
    hotel: hotelDummyData,
    roomType: "Double Basic Room",
    codeName: "nogal",
    pricePerNight: 53,
    amenities: [
      "double Bed accomodation",
      "Garden View",
      "Air Conditioner",
      "private Bathroom",
    ],
    images: [double_basic_room, roomImg3, roomImg4, roomImg1],
    isAvailable: true,
    createdAt: "2025-04-10T06:25:22.593Z",
    updatedAt: "2025-04-10T06:25:22.593Z",
    __v: 0,
    formId: "966bf5a54fff0299",
    address: "San Salvador, El Salvador",
    cities: "Colonia San Benito",
  },
  {
    _id: "67f76406197ac559e4089b82",
    hotel: hotelDummyData,
    roomType: "Urbana Suite Room",
    codeName: "San Andres",
    pricePerNight: 65,
    amenities: [
      "Free WiFi",
      "Free Breakfast",
      "Air Conditioner",
      "private Bathroom",
    ],
    images: [urbana_suite, roomImg2, roomImg3, roomImg4],
    isAvailable: true,
    createdAt: "2025-04-10T06:24:06.285Z",
    updatedAt: "2025-04-10T06:24:06.285Z",
    __v: 0,
    formId: "acbfc13408b1083b",
    address: "San Salvador, El Salvador",
    cities: "Colonia San Benito",
  },
  {
    _id: "67f763d8197ac559e4089b7a",
    hotel: hotelDummyData,
    roomType: "Basic Double Room",
    codeName: "olivo",
    pricePerNight: 43,
    amenities: ["Free WiFi", "Room Service", "Pool Access"],
    images: [roomImg4, roomImg1, roomImg2, roomImg3],
    isAvailable: true,
    createdAt: "2025-04-10T06:23:20.252Z",
    updatedAt: "2025-04-10T06:23:20.252Z",
    __v: 0,
    formId: "b844e932a9f13ba9",
    address: "San Salvador, El Salvador",
    cities: "Colonia San Benito",
  },
  {
    _id: "67f763b0197ac559e4089b70",
    hotel: hotelDummyData,
    roomType: "Junior Room",
    codeName: "Bambu",
    pricePerNight: 30,
    amenities: ["Free WiFi", "Room Service", "Pool Access"],
    images: [roomImg4, roomImg1, roomImg2, roomImg3],
    isAvailable: true,
    createdAt: "2025-04-10T06:23:20.252Z",
    updatedAt: "2025-04-10T06:23:20.252Z",
    __v: 0,
    formId: "8803cf0af038abb1",
    address: "San Salvador, El Salvador",
    cities: "Colonia San Benito",
  },
  {
    _id: "67f7639b197ac559e4089b68",
    hotel: hotelDummyData,
    roomType: "Superior Room",
    codeName: "Maquilishuat",
    pricePerNight: 58,
    amenities: ["Free WiFi", "Room Service", "Pool Access"],
    images: [roomImg4, roomImg1, roomImg2, roomImg3],
    isAvailable: true,
    createdAt: "2025-04-10T06:23:20.252Z",
    updatedAt: "2025-04-10T06:23:20.252Z",
    __v: 0,
    formId: "b8fc83995c083389",
    address: "San Salvador, El Salvador",
    cities: "Colonia San Benito",
  },
  {
    _id: "67f7637f197ac559e4089b60",
    hotel: hotelDummyData,
    roomType: "Economy single Room",
    codeName: "Gardenias",
    pricePerNight: 28,
    amenities: ["Free WiFi", "Room Service", "Closet"],
    images: [roomImg4, roomImg1, roomImg2, roomImg3],
    isAvailable: true,
    createdAt: "2025-04-10T06:23:20.252Z",
    updatedAt: "2025-04-10T06:23:20.252Z",
    __v: 0,
    formId: "af7bd9d68df2234d",
    address: "San Salvador, El Salvador",
    cities: "Colonia San Benito",
  },
];

// User Bookings Dummy Data
export const userBookingsDummyData = [
  {
    _id: "67f76839994a731e97d3b8ce",
    user: userDummyData,
    room: roomsDummyData[1],
    hotel: hotelDummyData,
    checkInDate: "2025-04-30T00:00:00.000Z",
    checkOutDate: "2025-05-01T00:00:00.000Z",
    totalPrice: 299,
    guests: 1,
    status: "pending",
    paymentMethod: "Stripe",
    isPaid: true,
    createdAt: "2025-04-10T06:42:01.529Z",
    updatedAt: "2025-04-10T06:43:54.520Z",
    __v: 0,
  },
  {
    _id: "67f76829994a731e97d3b8c3",
    user: userDummyData,
    room: roomsDummyData[0],
    hotel: hotelDummyData,
    checkInDate: "2025-04-27T00:00:00.000Z",
    checkOutDate: "2025-04-28T00:00:00.000Z",
    totalPrice: 399,
    guests: 1,
    status: "pending",
    paymentMethod: "Pay At Hotel",
    isPaid: false,
    createdAt: "2025-04-10T06:41:45.873Z",
    updatedAt: "2025-04-10T06:41:45.873Z",
    __v: 0,
  },
  {
    _id: "67f76810994a731e97d3b8b4",
    user: userDummyData,
    room: roomsDummyData[3],
    hotel: hotelDummyData,
    checkInDate: "2025-04-11T00:00:00.000Z",
    checkOutDate: "2025-04-12T00:00:00.000Z",
    totalPrice: 199,
    guests: 1,
    status: "pending",
    paymentMethod: "Pay At Hotel",
    isPaid: false,
    createdAt: "2025-04-10T06:41:20.501Z",
    updatedAt: "2025-04-10T06:41:20.501Z",
    __v: 0,
  },
];

// Dashboard Dummy Data
export const dashboardDummyData = {
  totalBookings: 3,
  totalRevenue: 897,
  bookings: userBookingsDummyData,
};

// --------- SVG code for Book Icon------
/* 
const BookIcon = ()=>(
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
</svg>
)

*/
