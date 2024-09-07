// import tourimg from "../../src/assets/tourimg.png";
import ImageCard from "./ImageCard.jsx";

import amritsar from "../assets/amritsar.jpg";
import darjeeling from "../assets/darjeeling.jpg";
import kashiayodhya from "../assets/kashiayodhya.jpg";
import kashigaya from "../assets/kashigaya.jpg";
import kashmir from "../assets/kashmir.jpg";
import kerala from "../assets/kerala.jpg";
import nepal from "../assets/nepal.jpg";
import rajasthan from "../assets/rajasthan.jpg";
import shimla from "../assets/shimla.jpg";

const tours = [
  {
    slug: "darjeeling-tour",
    image: darjeeling,
    name: "Darjeeling Tour",
    description:
      "Dates: 20 Sept, 15 Oct, 7 Nov, 10 Dec. Includes: Hotel, breakfast, lunch, dinner, 1-liter water bottle, AC Innova vehicle. Not included: Rail/flight tickets, local taxis, toy train ride, river rafting, ropeway, paragliding, entrance fees, personal expenses. Note: Nathula Pass and Zero Point are weather-dependent and subject to change. Tour price: ₹33,500 per person (triple sharing), ₹36,500 per person (double sharing).",
  },
  {
    image: rajasthan,
    name: "Rajasthan Tour",
    slug: "rajasthan-tour",
    description:
      "Dates: 23/09, 15/10, 06/11, 19/11, 04/12, 19/11. Includes: Accommodation in 3* hotels, breakfast, lunch, dinner, 1-liter water bottle daily, all sightseeing by bus. Not included: Any train/flight tickets, monument entry fees/guide charges, optional activities (e.g., paragliding, river rafting, boating), personal expenses. Note: Train reservations must be made 120 days in advance for confirmation. Tour price: ₹27,500 per person (triple sharing), ₹30,500 per person (double sharing).",
  },
  {
    slug: "kashmir-tour",
    image: kashmir,
    name: "Kashmir Tour",
    description:
      "Dates: 15 March, 20 March, 25 March, 30 March, 5 April, 10 April, 15 April, 20 April, 25 April, 30 April. Includes: SL train tickets, daily 1-liter water bottle, breakfast, lunch, dinner, accommodation in deluxe hotels, sightseeing by bus. Not included: 2AC/3AC train/air tickets, entry fees, rickshaw, horse, boat rides, personal expenses, water sports, and other activities. Tour price: ₹27,500 per person.",
  },
  {
    slug: "shimla-tour",
    image: shimla,
    name: "Shimla Tour",
    description:
      "Dates: 15 Oct, 30 Oct, 15 Nov, 30 Nov, 15 Dec. Includes: AC train tickets, daily 1-liter water bottle, breakfast, lunch, dinner, accommodation in 3* hotels, sightseeing by bus. Not included: Personal expenses, entry fees, local taxis, and other activities. Tour price: ₹32,500 per person (triple sharing), ₹35,500 per person (double sharing).",
  },
  {
    slug: "amritsar-tour",
    image: amritsar,
    name: "Amritsar Tour",
    description:
      "Dates: 17 November, 17 December. Includes: Hotel accommodation, breakfast, lunch, dinner, 1 liter water bottle, AC Tempo travel. Not included: Railway/airfare, local taxi fare, any other items not mentioned in the itinerary, toy train rides, river rafting, ropeway (waiting charges), ropeway tickets, entry fees, other expenses. Tour price: ₹11,500 per person (quad sharing), ₹12,500 per person (triple sharing), ₹13,500 per person (double sharing). Note: Railway reservations must be made 120 days (4 months) in advance.",
  },
  {
    slug: "kashi-ayodhya-tour",
    image: kashiayodhya,
    name: "Kashi Ayodhya Tour",
    description:
      "Dates: 26 September, 20 October, 19 November, 16 December. Includes: SL train ticket, breakfast, tea, lunch, deluxe hotel accommodation, AC bus travel, 1 liter water bottle daily. Not included: Train AC tickets/air tickets, rickshaw, boating, personal expenses. Tour price: ₹10,500 per person (triple sharing).",
  },
  {
    slug: "kerala-tour",
    image: kerala,
    name: "Kerala Tour",
    description:
      "Dates: 5 November. Includes: SL Class Train Ticket, Breakfast, Lunch, Dinner, Accommodation In Deluxe Hotels, Entire Sightseeing By AC Bus. Not included: Any Airfare/Train Ticket, Entry Fees/ Guides Fees At The Monuments, Optional Activity Charges Like Paragliding, River Rafting, Boating, Etc, Personal Expenses. Tour price: 31,500/- Per Person.",
  },
  {
    slug: "nepal-tour",
    image: nepal,
    name: "Nepal Tour",
    description:
      "Dates: 07 May 2024 to 20 May 2024. Includes: Deluxe AC Hotel Accommodation, Sightseeing By AC Bus, Breakfast, Lunch, Dinner, Daily 1 Liter Water Bottle, 2 Tea Times Daily. Not included: Railway Tickets, Airfare, Entry Fees, Rickshaw, Optional Activities, Personal Expenses. Tour price: 27,500/- Per Person.",
  },
  {
    slug: "kashi-gaya-tour",
    image: kashigaya,
    name: "Kashi Gaya Tour",
    description:
      "Dates: 19 September, 13 October, 10 November, 5 December. Includes: SL Class Train Ticket, Breakfast, Lunch, Tea, Deluxe Hotel Accommodation, AC Bus For Sightseeing, Daily 1 Liter Water Bottle. Not included: Railway AC Tickets/Airfare, Rickshaw, Boat, Personal Expenses. Tour price: 15,500/- Per Person (Double Sharing), 13,000/- Per Person (Triple Sharing). Note: Railway Reservation Must Be Made 120 Days In Advance For Confirmation.",
  },
];

export default function Tours() {
  return (
    <>
      <div className="w-[100%] mb-6 flex-col justify-center items-center gap-2.5 inline-flex">
        <div
          className={`poppins-medium text-center w-screen text-[42px] font-medium  text-black uppercase`}
        >
          Explore Our Tours
        </div>
        {/* <div className="w-[495px] ml-[120px] text-black text-3xl font-semibold font-['Poppins'] capitalize">
          Lorem ipsum doler sit amure
          <br />
          udbse yuthes
        </div> */}
        <div className="grid grid-cols-1  lg:grid-cols-4 gap-7 lg:p-8 p-0 ">
          {tours.map((tours, index) => (
            <ImageCard
              key={index}
              image={tours.image}
              name={tours.name}
              description={tours.description}
              slug={tours.slug}
            />
          ))}
        </div>
      </div>
    </>
  );
}
