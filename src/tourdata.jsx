import amritsar from "./assets/amritsar.jpg";
import darjeeling from "./assets/darjeeling.jpg";
import kashiayodhya from "./assets/kashiayodhya.jpg";
import kashigaya from "./assets/kashigaya.jpg";
import kashmir from "./assets/kashmir.jpg";
import kerala from "./assets/kerala.jpg";
import nepal from "./assets/nepal.jpg";
import rajasthan from "./assets/rajasthan.jpg";
import shimla from "./assets/shimla.jpg";

const tourData = [
  {
    slug: "darjeeling-tour",
    image: darjeeling,
    name: "Darjeeling Tour",
    dates: "20 Sept, 15 Oct, 7 Nov, 10 Dec",
    days: [
      "Mumbai to NJP by Train - Start your journey from Mumbai to NJP by train.",

      "Full Day Train Ride - Spend the entire day traveling by train.",
      "Arrival at NJP/Bagdogra - Arrive at NJP/Bagdogra Airport. Stay overnight at Bagdogra hotel.",

      "Bagdogra to Gangtok (121 km) - After breakfast, proceed to Gangtok. Overnight stay at Gangtok hotel.",

      "Changu Lake & Baba Mandir Tour - Visit Changu Lake, Kyongnosla, and Baba Mandir. Return to Gangtok for an overnight stay.",

      "Gangtok to Lachung - Travel to Lachung, visit Seven Sisters and Naga waterfalls. Overnight stay in Lachung.",

      "Yamthang Valley - Visit the Valley of Flowers in Yamthang and return to Gangtok in the evening. Overnight stay in Gangtok.",

      "Gangtok to Pelling - After breakfast, proceed to Pelling. Visit Char Dham and Buddha Park en route.",

      "Pelling Sightseeing - Visit Rimbi Waterfall, Kanchanjunga Waterfall, Khecheopalri Lake, and monasteries. Optional Skywalk.",

      "Darjeeling Sightseeing - Visit Tiger Hill, Batasia Loop, War Memorial, Peace Pagoda, and other local attractions.",

      "Departure - After breakfast, transfer to Bagdogra Airport (IXB) or NJP Station for the journey back.",

      "Full Day Travel",
      "Arrival in Mumbai",
    ],
    include:
      "Hotel, breakfast, lunch, dinner, 1-liter water bottle, AC Innova vehicle.",
    notincluded:
      "Rail/flight tickets, local taxis, toy train ride, river rafting, ropeway, paragliding, entrance fees, personal expenses.",
    note: "Nathula Pass and Zero Point are weather-dependent and subject to change.",
    tourprice:
      "₹33,500 per person (triple sharing), ₹36,500 per person (double sharing)",
  },
  {
    slug: "rajasthan-tour",
    image: rajasthan,
    name: "Rajasthan Tour",
    dates: "23/09, 15/10, 06/11, 19/11, 04/12, 19/11",
    days: [
      "Pune to Jaipur - Travel from Pune to Jaipur by train (12939 Pune Jaipur Express) departing at 05:30 PM.",
      "Jaipur - Arrive in Jaipur at 02:40 PM. Enjoy the Chokhi Dhani experience after lunch. Overnight stay at the hotel.",
      "Jaipur - After breakfast, visit Birla Temple, Albert Hall, Ram Niwas Garden, Amber Fort, Jal Mahal, Kanak Garden, Jantar Mantar, City Palace, and Hawa Mahal. Overnight stay at the hotel (B, L, D).",
      "Jaipur to Pushkar - After breakfast, travel to Pushkar and visit Ajmer Dargah en route. Overnight stay at the hotel in Pushkar (B, L, D).",
      "Pushkar to Bikaner - After breakfast, visit Brahma Temple and Pushkar Lake, then proceed to Deshnok. Overnight stay at the hotel in Bikaner (B, L, D).",
      "Bikaner to Jaisalmer - After breakfast, travel to Jaisalmer. Visit Junagarh Fort, Camel Farm, and then proceed to Jaisalmer for a desert stay (B, L, D).",
      "Jaisalmer - Visit Sam Village, Golden Fort, Patwa Haveli, Gadisar Lake, and the museum. Optional Skywalk.",
      "Jaisalmer to Jodhpur - Travel from Jaisalmer to Jodhpur early in the morning. Sightseeing in Jodhpur includes Mehrangarh Fort, Jaswant Thada, Umaid Bhawan Palace, and Mandore Gardens. Overnight stay at the hotel (B, L, D).",
      "Jodhpur to Udaipur - After breakfast, travel from Jodhpur to Udaipur. Visit Ranakpur Temple. After lunch in Udaipur, visit Gulab Bagh, Lake Pichola, City Palace, and Jag Mandir. Overnight stay at the hotel (B, L, D).",

      "Udaipur to Chittorgarh - Visit Chittorgarh Fort and Nathdwara early in the morning. After lunch, visit Haldighati. Overnight stay at the hotel (B, L, D).",

      "Udaipur to Mount Abu - After breakfast, visit Fateh Sagar Lake, Saheliyon Ki Bari, and the Art Gallery. Proceed to Mount Abu after lunch. Enjoy the Sunset Point and Nakki Lake. Overnight stay at the hotel (B, L, D).",

      "Mount Abu - Full day sightseeing in Mount Abu. Visit Universal Hall (Pandu Pol), Arbuda Devi Temple, Peace Park, Achalgarh Fort, and Dilwara Temples (B, L, D).",

      "Mount Abu to Pune - After breakfast, travel to Abu Road Railway Station by train (11089 Aii Mys Express) departing at 10:25 AM (B).",
      "Tour Ends - Arrival in Pune at 01:25 PM.",
    ],
    include:
      "Accommodation in 3* hotels, breakfast, lunch, dinner, 1-liter water bottle daily, all sightseeing by bus.",
    notincluded:
      "Any train/flight tickets, monument entry fees/guide charges, optional activities (e.g., paragliding, river rafting, boating), personal expenses.",
    note: "Train reservations must be made 120 days in advance for confirmation.",
    tourprice:
      "₹27,500 per person (triple sharing), ₹30,500 per person (double sharing)",
  },
  {
    slug: "kashmir-tour",
    image: kashmir,
    name: "Kashmir & Vaishnao Devi Tour",
    dates:
      "15 March, 20 March, 25 March, 30 March, 5 April, 10 April, 15 April, 20 April, 25 April, 30 April",
    days: [
      "Pune to Jammu - Travel from Pune to Jammu by train (11077 Jhelum Express) departing at 05:20 PM.",
      "Full day train journey.",
      "Jammu to Katra (43 km) - Arrive at Jammu Railway Station at 10:00 AM. Proceed to Katra by bus, check into the hotel, have lunch, and visit Vaishno Devi Temple for darshan.",
      "Katra - Morning darshan at the temple. Return to the hotel for rest. Overnight stay at the hotel in Katra.",
      "Katra to Pahalgam (227 km) - After breakfast, check out from the hotel and travel to Pahalgam. En route, visit saffron fields, dry fruit farms, and bat factory. Check into the hotel in Pahalgam.",
      "Pahalgam local sightseeing - After breakfast, visit local attractions like Chandanwadi, Aru Valley, Betaab Valley, and Mini Switzerland (horse ride required). Return to the hotel in Pahalgam.",
      "Pahalgam to Srinagar (110 km) - After breakfast, check out from the hotel and travel to Srinagar. Visit Mughal Gardens, Tulip Garden, Shalimar Bagh, Shankaracharya Temple, and enjoy a Shikara ride. Overnight stay on a houseboat.",
      "Srinagar to Gulmarg (55 km) - After breakfast, travel to Gulmarg. Visit the Gondola Ropeway and return to the hotel in Gulmarg.",
      "Srinagar to Sonmarg (100 km) - After breakfast, travel to Sonmarg. Visit Khir Bhawani Temple, Zero Point, and return to the hotel in Srinagar.",

      "Srinagar to Jammu (244 km) to Pune - After breakfast, check out from the hotel and travel to Jammu. Train departs from Jammu Railway Station at 11:45 PM (Jhelum Express).",
      "Full day train journey.",
      "Arrival in Pune at 04:00 ",
    ],
    include:
      "SL train tickets, daily 1-liter water bottle, breakfast, lunch, dinner, accommodation in deluxe hotels, sightseeing by bus.",
    notincluded:
      "2AC/3AC train/air tickets, entry fees, rickshaw, horse, boat rides, personal expenses, water sports, and other activities.",
    tourprice: "₹27,500 per person",
  },
  {
    slug: "shimla-tour",
    image: shimla,
    name: "Shimla, Kullu, Manali, Dharamshala, Dalhousie & Amritsar Tour",
    dates: "15 Oct, 30 Oct, 15 Nov, 30 Nov, 15 Dec",
    days: [
      "Pune to Delhi - Travel from Pune to Delhi by train (11094 Nanded Jammu Tawi Express) departing at 05:20 PM.",
      "Full day train journey.",
      "Delhi to Shimla - Arrive at Delhi Railway Station at 07:05 AM. Proceed to Shimla by bus. Check into the hotel, rest, and enjoy an evening walk on Mall Road.",
      "Shimla - After breakfast, visit local attractions like Christ Church, Scandal Point, and Jakhu Temple. Return to the hotel for an overnight stay.",
      "Shimla to Manali - After breakfast, travel to Manali. Visit Kullu Valley, enjoy river rafting, and proceed to Manali for an overnight stay.",
      "Manali - After breakfast, visit Solang Valley, Rohtang Pass (subject to weather), and local attractions. Return to the hotel in Manali.",
      "Manali to Dharamshala - Travel to Dharamshala and visit local temples, monasteries, and McLeod Ganj. Overnight stay at the hotel.",
      "Dharamshala - Visit local attractions and experience Tibetan culture. Overnight stay at the hotel.",
      "Dharamshala to Dalhousie - After breakfast, travel to Dalhousie. Visit Khajjiar (mini Switzerland) and local attractions. Overnight stay in Dalhousie.",

      "Dalhousie to Amritsar - After breakfast, travel to Amritsar. Visit Golden Temple and Jallianwala Bagh. Overnight stay in Amritsar.",

      "Amritsar to Delhi - After breakfast, travel to Delhi. Overnight stay in Delhi.",

      "Delhi to Pune - After breakfast, travel from Delhi to Pune by train (11093 Nanded Jammu Tawi Express) departing at 10:00 PM.",
      "Full day train journey.",
      "Arrival in Pune at 07:15",
    ],
    include:
      "AC train tickets, daily 1-liter water bottle, breakfast, lunch, dinner, accommodation in 3* hotels, sightseeing by bus.",
    notincluded:
      "Personal expenses, entry fees, local taxis, and other activities.",
    tourprice:
      "₹32,500 per person (triple sharing), ₹35,500 per person (double sharing)",
  },
  {
    slug: "amritsar-tour",
    image: amritsar,
    name: "Amritsar-Vaishno Devi-Patnitop-Shivkhori Tour",
    dates: "17 November, 17 December",
    days: [
      "Departure from Jalandhar Railway Station at 5:20 PM by Jhelum Express (11077).",
      "Train Journey.",
      "Jalandhar to Amritsr (85 km) - Arrive at Jalandhar Railway Station at 5:10 AM. Proceed to Amritsar, check into the hotel, have breakfast, then visit Jallianwala Bagh and Wagah Border. Evening visit to Golden Temple. Overnight stay at Amritsar.",
      "Amritsar to Katra (265 km) - After breakfast, proceed to Katra (lunch on the way). Check into the hotel and visit Mata Vaishno Devi temple in the evening. Overnight stay at Katra.",
      "Katra to Shivkhori (80 km) - After breakfast, check out from the hotel and proceed to Shivkhori. Overnight stay at Katra.",
      "Katra to Patnitop (200 km return) - After breakfast, proceed to Patnitop, also known as Mini-Kashmir, for sightseeing including Deodar trees, horse riding, picnic spots, and Nag Temple. In the evening, return to Jammu Railway Station. Departure at 11:00 PM by Jhelum Express (11078).",
      "Train Journey.",
      "Arrival in Pune at 4:30 PM",
    ],
    include:
      "Hotel accommodation, breakfast, lunch, dinner, 1 liter water bottle, AC Tempo travel.",
    notincluded:
      "Railway/airfare, local taxi fare, any other items not mentioned in the itinerary, toy train rides, river rafting, ropeway (waiting charges), ropeway tickets, entry fees, other expenses.",
    tourprice:
      "₹11,500 per person (quad sharing), ₹12,500 per person (triple sharing), ₹13,500 per person (double sharing)",
    note: "Railway reservations must be made 120 days (4 months) in advance. Booking deadline is 10 August or until seats are available. For tour details, please WhatsApp the tour name.",
  },
  {
    slug: "kashi-ayodhya-tour",
    image: kashiayodhya,
    name: "Kashi Prayag Ayodhya Tour",
    dates: "26 September, 20 October, 19 November, 16 December",
    days: [
      "Pune to Prayag Raj - Departure from Pune Railway Station at 9:05 PM by DNR 12149.",
      "Train Traveling Full Day.",
      "Prayag Raj to Ayodhya (129 km) - After breakfast, visit Triveni Sangam and Bade Hanuman Temple. Proceed to Ayodhya (167.7 km). Check into hotel and overnight stay in Ayodhya.",
      "Ayodhya to Varanasi (218 km) - After breakfast, visit Shri Ram Janmabhoomi Temple, Hanuman Garhi, and Dashrath Mahal. Proceed to Varanasi. Visit Sita Mithila on the way. Overnight stay in Varanasi.",
      "Varanasi - After breakfast, visit Kashi Vishwanath Temple, Kavi Mata Temple, Annapurna Temple, Kalbhairav Temple, and Sankat Mochan Temple. In the afternoon, go for Ganga Aarti at 4:30 PM.",
      "Varanasi to Din Dayal Upadhya - After breakfast, visit Sarnath Temple. Proceed to Din Dayal Upadhya Railway Station. Departure at 2:48 AM by DNR 12150.",
      "Full day travel.",
      "Arrival at 4:40 AM.",
    ],
    include:
      "SL train ticket, breakfast, tea, lunch, deluxe hotel accommodation, AC bus travel, 1 liter water bottle daily.",
    notincluded:
      "Train AC tickets/air tickets, rickshaw, boating, personal expenses.",
    tourprice: "₹10,500 per person (triple sharing)",
  },
  {
    slug: "kerala-tour",
    image: kerala,
    name: "Kerala, Kanyakumari, Rameshwaram, Madurai Tour",
    dates: "5 November",
    days: [
      "Pune To Cochin: Pune To Cochin By Train (16381 Kanyakumari Express) At 11:50 Pm",
      "Train Traveling Full Day",
      "Cochin: Arrival At Cochin At 03:55 Am Then Visit Local Sightseeing By Cochin Cruise (Chinese Fishing Nets, St. Francisco Church) And Overnight Stay At Hotel",
      "Cochin To Munnar (130 Km): After Breakfast Proceed To Munnar, After Arrival Check In Hotel And Then Free Time For Shopping And Rest, Overnight Stay At Hotel",
      "Munnar Local Sightseeing: After Breakfast Proceed To Visit Tata Tea Estate, Eravikulam National Park, Eco Point, And Mattupetty Dam, Evening Back To Hotel And Overnight Stay At Hotel",
      "Munnar To Thekkady (91 Km): After Breakfast Check Out From Hotel And Proceed To Thekkady (Periyar). On Way Visit Spice Garden And Take Lunch There, On Arrival Check In To Hotel At Thekkady. Katthakaly Dance Show And Massage, Then Free Time For Shopping, Overnight Stay At Hotel",
      "Thekkady To Alleppy (139 Km): After Breakfast Check Out From Hotel And Proceed To Alleppy. Allapuzza Boat Ride And Overnight Stay At Hotel",
      "Alleppy To Trivandrum (146 Km): After Breakfast Visit To Trivandrum Zoo, Raja Ravi Varma Art Gallery Then Enjoy Sunset At Kovalam Beach, Overnight Stay At Trivandrum",
      "Trivandrum To Kanyakumari (97 Km): After Breakfast Check Out From Hotel Proceed To Suchindram Temple Then Visit To Vivekanand Rock Memorial, Triveni Sangam At Night Visit To Kanyakumari Temple And Overnight Stay At Hotel",

      "Kanyakumari To Madurai (297 Km): After Breakfast Checkout From Hotel. Proceed To Madurai, Check In At Hotel. Visit To Madurai Temple And Overnight Stay At Hotel",

      "Madurai (180 Km): After Breakfast Visit To Rameshwaram Temple, Dhanush Kodi, Pamban Bridge, Apj Abdul Kalam House Back To Madurai And Overnight Stay At Hotel",

      "Madurai To Pune: Madurai To Pune By Train (16352 Mcj Cstm Express) At 11:00 Am",
      "Pune Tour End: Arrival At Pune At 03:15 Am",
    ],
    include:
      "SL Class Train Ticket, Breakfast – Lunch – Dinner, Accommodation In Deluxe Hotels, Entire Sightseeing By AC Bus",
    notincluded:
      "Any Airfare/Train Ticket, Entry Fees/ Guides Fees At The Monuments, Optional Activity Charges Like Paragliding, River Rafting, Boating, Etc, Personal Expenses",
    tourprice: "31,500/- Per Person",
  },
  {
    slug: "nepal-tour",
    image: nepal,
    name: "Nepal, Ayodhya, Varanasi Tour",
    dates: "07 May 2024 to 20 May 2024",
    days: [
      "07/05/2024 Pune To Delhi: Pune To Delhi By Train (12779 Goa Express) At 4:30 Am",
      "08/05/2024 Delhi To Kathmandu: Arrival At Nizamuddin Railway Station At 6:25 Am, Then Flight From Delhi To Kathmandu. Overnight Stay At Kathmandu",
      "09/05/2024 Kathmandu: Visit Pashupatinath Temple, Guheshwari Temple, Sleeping Vishnu, Swayambhunath, Royal Palace, And Chana Market. Overnight Stay At Kathmandu",
      "10/05/2024 Kathmandu To Manokamna (130 Km) To Pokhara (93 Km): Visit Manokamna Temple (130 Km), Then Proceed To Pokhara. Overnight Stay At Pokhara",
      "11/05/2024 Pokhara To Muktinath (175 Km): Visit Muktinath Temple, Return To Pokhara. Overnight Stay At Pokhara",
      "12/05/2024 Pokhara Local Sightseeing: Visit Fewa Lake, Bindhyabasini Temple, Mahendra Cave, And Devi's Fall. Overnight Stay At Pokhara",
      "13/05/2024 Pokhara To Chitwan (170 Km): Visit Chitwan National Park. Overnight Stay At Chitwan",
      "14/05/2024 Chitwan To Lumbini (169 Km): Visit Lumbini (Birthplace Of Lord Buddha), Overnight Stay At Lumbini",
      "15/05/2024 Lumbini To Ayodhya (169 Km): Visit Gorakhnath Temple And Proceed To Ayodhya. Overnight Stay At Ayodhya",

      "16/05/2024 Ayodhya To Prayagraj (167 Km): Visit Ram Janmabhoomi, Hanuman Garhi, Local Sightseeing, Then Proceed To Prayagraj. Overnight Stay At Prayagraj",

      "17/05/2024 Prayagraj To Varanasi (120 Km): Visit Triveni Sangam, Bade Hanuman Temple, Proceed To Varanasi. Overnight Stay At Varanasi",

      "18/05/2024 Varanasi Local Sightseeing: Visit Kashi Vishwanath Temple, Kal Bhairav Temple, Kavi Mata Temple, Annapurna Temple, Sankat Mochan Temple, And Attend Ganga Aarti (4:30 PM). Overnight Stay At Varanasi",

      "19/05/2024 Varanasi To Pune: Early Morning Departure From Varanasi Railway Station (11034 DBG Pune Exp / 22132 Gyan Gang Exp) At 3:25 Am / 4:25 Am",
      "20/05/2024 Pune: Arrival At Pune At 7:20 Am",
    ],
    include:
      "Deluxe AC Hotel Accommodation, Sightseeing By AC Bus, Breakfast, Lunch, Dinner, Daily 1 Liter Water Bottle, 2 Tea Times Daily",
    notincluded:
      "Railway Tickets, Airfare, Entry Fees, Rickshaw, Optional Activities, Personal Expenses",
    tourprice: "27,500/- Per Person",
  },
  {
    slug: "kashi-gaya-tour",
    image: kashigaya,
    name: "Kashi, Prayagraj, Ayodhya, Chitrakoot, Gaya Tour",
    dates: "19 September, 13 October, 10 November, 5 December",
    days: [
      "Pune To Prayagraj: Departure From Pune Railway Station At 9:05 PM By Train (DNR 12149)",
      "Prayagraj: Arrival At Prayagraj Railway Station, Overnight Stay At Prayagraj",
      "Prayagraj To Chitrakoot (129 Km): Visit Triveni Sangam And Bade Hanuman Temple, Then Proceed To Chitrakoot. Check In At Hotel And Attend Aarti At Ram Ghat.",
      "Chitrakoot To Ayodhya (273 Km): Visit Hanuman Dhara, Sati Anusuya Temple, Gupt Godavari, Sphatik Shila, Then Proceed To Ayodhya. Overnight Stay At Ayodhya",
      "Ayodhya To Varanasi (218 Km): Visit Shri Ram Janmabhoomi Temple, Hanuman Garhi, Dashrath Mahal, Then Proceed To Varanasi. Sightseeing At Sitamadhi En Route. Overnight Stay At Varanasi",
      "Varanasi: Visit Kashi Vishwanath Temple, Kavi Mata Temple, Annapurna Temple, Kal Bhairav Temple, Sankat Mochan Temple, Then Attend Ganga Aarti (4:30 PM). Overnight Stay At Varanasi",
      "Varanasi To Bodhgaya: Visit Sarnath Temple, Then Proceed To Bodhgaya. Check In At Hotel And Visit Buddha Temple. Overnight Stay At Bodhgaya",
      "Bodhgaya To Patna: Visit Vishnu Temple In Bodhgaya, Then Proceed To Patna. Check Out From Hotel And Head To Danapur Railway Station (DNR 12150) For Departure At 11:15 PM",
      "Full Day Travel: Train Journey",
      "Arrival At 4:40 AM",
    ],
    include:
      "SL Class Train Ticket, Breakfast, Lunch, Tea, Deluxe Hotel Accommodation, AC Bus For Sightseeing, Daily 1 Liter Water Bottle",
    notincluded:
      "Railway AC Tickets/Airfare, Rickshaw, Boat, Personal Expenses",
    tourprice:
      "15,500/- Per Person (Double Sharing), 13,000/- Per Person (Triple Sharing)",
    note: "Railway Reservation Must Be Made 120 Days In Advance For Confirmation",
  },
];

export { tourData };
