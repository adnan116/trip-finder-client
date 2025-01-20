export interface Property {
  ID: string;
  GeoInfo: {
    Lat: string;
    Lng: string;
    City: string;
    Country: string;
    Display: string;
  };
  Property: {
    PropertyName: string;
    PropertyType: string;
    Price: number;
    StarRating: number;
    FeatureImage: string;
    Counts: {
      Bedroom: number;
      Bathroom: number;
    };
    Amenities: {
      [key: string]: string;
    };
  };
}

export const sampleProperties: Property[] = [
  {
    ID: "EP-17350009",
    GeoInfo: {
      Lat: "23.80112",
      Lng: "90.41445",
      City: "Dhaka",
      Country: "Bangladesh",
      Display: "Dhaka, Dhaka, Bangladesh",
    },
    Property: {
      PropertyName: "White House Guest House",
      PropertyType: "House",
      Price: 41.4,
      StarRating: 3,
      FeatureImage:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      Counts: {
        Bedroom: 1,
        Bathroom: 1,
      },
      Amenities: {
        "1": "Air Conditioner",
        "2": "Balcony/Terrace",
        "3": "Bedding/Linens",
        "4": "Breakfast",
        "7": "Internet",
      },
    },
  },
  {
    ID: "EP-17350010",
    GeoInfo: {
      Lat: "23.81234",
      Lng: "90.42445",
      City: "Dhaka",
      Country: "Bangladesh",
      Display: "Gulshan, Dhaka, Bangladesh",
    },
    Property: {
      PropertyName: "Luxury Villa Gulshan",
      PropertyType: "Villa",
      Price: 120.5,
      StarRating: 4,
      FeatureImage:
        "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      Counts: {
        Bedroom: 3,
        Bathroom: 2,
      },
      Amenities: {
        "1": "Air Conditioner",
        "2": "Balcony/Terrace",
        "7": "Internet",
        "8": "Kitchen",
        "9": "Laundry",
      },
    },
  },
  {
    ID: "EP-17350011",
    GeoInfo: {
      Lat: "23.79856",
      Lng: "90.40234",
      City: "Dhaka",
      Country: "Bangladesh",
      Display: "Dhanmondi, Dhaka, Bangladesh",
    },
    Property: {
      PropertyName: "Dhanmondi Lake View Apartment",
      PropertyType: "Apartment",
      Price: 75.0,
      StarRating: 4,
      FeatureImage:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      Counts: {
        Bedroom: 2,
        Bathroom: 2,
      },
      Amenities: {
        "1": "Air Conditioner",
        "2": "Balcony/Terrace",
        "3": "Internet",
        "4": "Kitchen",
        "5": "Swimming Pool",
      },
    },
  },
  {
    ID: "EP-17350012",
    GeoInfo: {
      Lat: "23.82567",
      Lng: "90.43789",
      City: "Dhaka",
      Country: "Bangladesh",
      Display: "Banani, Dhaka, Bangladesh",
    },
    Property: {
      PropertyName: "Banani Executive Suite",
      PropertyType: "Apartment",
      Price: 95.0,
      StarRating: 5,
      FeatureImage:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      Counts: {
        Bedroom: 2,
        Bathroom: 2,
      },
      Amenities: {
        "1": "Air Conditioner",
        "2": "Gym",
        "3": "Internet",
        "4": "Kitchen",
        "5": "Security",
      },
    },
  },
  {
    ID: "EP-17350013",
    GeoInfo: {
      Lat: "23.83456",
      Lng: "90.41678",
      City: "Dhaka",
      Country: "Bangladesh",
      Display: "Uttara, Dhaka, Bangladesh",
    },
    Property: {
      PropertyName: "Uttara Family Home",
      PropertyType: "House",
      Price: 85.0,
      StarRating: 4,
      FeatureImage:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      Counts: {
        Bedroom: 3,
        Bathroom: 2,
      },
      Amenities: {
        "1": "Air Conditioner",
        "2": "Parking",
        "3": "Internet",
        "4": "Kitchen",
        "5": "Garden",
      },
    },
  },
  {
    ID: "EP-17350014",
    GeoInfo: {
      Lat: "23.78923",
      Lng: "90.39567",
      City: "Dhaka",
      Country: "Bangladesh",
      Display: "Mohammadpur, Dhaka, Bangladesh",
    },
    Property: {
      PropertyName: "Mohammadpur Cozy Studio",
      PropertyType: "Studio",
      Price: 35.0,
      StarRating: 3,
      FeatureImage:
        "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      Counts: {
        Bedroom: 1,
        Bathroom: 1,
      },
      Amenities: {
        "1": "Air Conditioner",
        "2": "Internet",
        "3": "Kitchen",
        "4": "Washing Machine",
      },
    },
  },
  {
    ID: "EP-17350015",
    GeoInfo: {
      Lat: "23.81789",
      Lng: "90.44123",
      City: "Dhaka",
      Country: "Bangladesh",
      Display: "Baridhara, Dhaka, Bangladesh",
    },
    Property: {
      PropertyName: "Baridhara Luxury Penthouse",
      PropertyType: "Penthouse",
      Price: 150.0,
      StarRating: 5,
      FeatureImage:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      Counts: {
        Bedroom: 4,
        Bathroom: 3,
      },
      Amenities: {
        "1": "Air Conditioner",
        "2": "Private Pool",
        "3": "Internet",
        "4": "Kitchen",
        "5": "Gym",
        "6": "Security",
        "7": "Parking",
      },
    },
  },
];

export const filteredProperties: Property[] = [
  {
    ID: "EP-17350012",
    GeoInfo: {
      Lat: "40.7120", // Slightly modified
      Lng: "-74.0055", // Slightly modified
      City: "New York",
      Country: "USA",
      Display: "Manhattan, New York, USA",
    },
    Property: {
      PropertyName: "Central Park Penthouse",
      PropertyType: "Penthouse",
      Price: 500,
      StarRating: 5,
      FeatureImage:
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      Counts: {
        Bedroom: 4,
        Bathroom: 3,
      },
      Amenities: {
        "1": "Wi-Fi",
        "2": "Central Heating",
        "3": "Private Elevator",
        "4": "Gym",
        "5": "Balcony",
      },
    },
  },
  {
    ID: "EP-17350013",
    GeoInfo: {
      Lat: "31.6900", // Slightly modified
      Lng: "75.6925", // Slightly modified
      City: "Tokyo",
      Country: "Japan",
      Display: "Tokyo, Japan",
    },
    Property: {
      PropertyName: "Shibuya Sky Loft",
      PropertyType: "Loft",
      Price: 300,
      StarRating: 4,
      FeatureImage:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      Counts: {
        Bedroom: 3,
        Bathroom: 2,
      },
      Amenities: {
        "1": "Wi-Fi",
        "2": "Rooftop View",
        "3": "Kitchen",
        "4": "Air Conditioning",
      },
    },
  },
  {
    ID: "EP-17350014",
    GeoInfo: {
      Lat: "42.8690", // Slightly modified
      Lng: "70.2090", // Slightly modified
      City: "Sydney",
      Country: "Australia",
      Display: "Sydney, New South Wales, Australia",
    },
    Property: {
      PropertyName: "Sydney Harbour Retreat",
      PropertyType: "Villa",
      Price: 400,
      StarRating: 5,
      FeatureImage:
        "https://images.unsplash.com/photo-1596797888351-5b5d4e213f37?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      Counts: {
        Bedroom: 5,
        Bathroom: 4,
      },
      Amenities: {
        "1": "Wi-Fi",
        "2": "Swimming Pool",
        "3": "Garden",
        "4": "Barbecue",
        "5": "Ocean View",
      },
    },
  },
  {
    ID: "EP-17350015",
    GeoInfo: {
      Lat: "39.5070", // Slightly modified
      Lng: "80.1280", // Slightly modified
      City: "London",
      Country: "United Kingdom",
      Display: "London, England, UK",
    },
    Property: {
      PropertyName: "Royal Borough Apartment",
      PropertyType: "Apartment",
      Price: 250,
      StarRating: 4,
      FeatureImage:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      Counts: {
        Bedroom: 2,
        Bathroom: 2,
      },
      Amenities: {
        "1": "Wi-Fi",
        "2": "Smart TV",
        "3": "Kitchen",
        "4": "Washer/Dryer",
      },
    },
  },
  {
    ID: "EP-17350016",
    GeoInfo: {
      Lat: "38.0510", // Slightly modified
      Lng: "75.2440", // Slightly modified
      City: "Los Angeles",
      Country: "USA",
      Display: "Los Angeles, California, USA",
    },
    Property: {
      PropertyName: "Hollywood Hills Mansion",
      PropertyType: "Mansion",
      Price: 800,
      StarRating: 5,
      FeatureImage:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      Counts: {
        Bedroom: 6,
        Bathroom: 5,
      },
      Amenities: {
        "1": "Wi-Fi",
        "2": "Infinity Pool",
        "3": "Home Cinema",
        "4": "Gym",
        "5": "Garage",
      },
    },
  },
  {
    ID: "EP-17350017",
    GeoInfo: {
      Lat: "41.9025", // Slightly modified
      Lng: "80.4970", // Slightly modified
      City: "Rome",
      Country: "Italy",
      Display: "Rome, Lazio, Italy",
    },
    Property: {
      PropertyName: "Colosseum View Studio",
      PropertyType: "Studio",
      Price: 150,
      StarRating: 3,
      FeatureImage:
        "https://images.unsplash.com/photo-1526481280696-3bfa7568e617?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      Counts: {
        Bedroom: 1,
        Bathroom: 1,
      },
      Amenities: {
        "1": "Wi-Fi",
        "2": "Air Conditioning",
        "3": "Kitchenette",
        "4": "Balcony",
      },
    },
  },
  {
    ID: "EP-17350018",
    GeoInfo: {
      Lat: "37.7750", // Slightly modified
      Lng: "-122.4190", // Slightly modified
      City: "San Francisco",
      Country: "USA",
      Display: "San Francisco, California, USA",
    },
    Property: {
      PropertyName: "Golden Gate Villa",
      PropertyType: "Villa",
      Price: 600,
      StarRating: 5,
      FeatureImage:
        "https://images.unsplash.com/photo-1600573471799-0f2549ef8d21?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      Counts: {
        Bedroom: 4,
        Bathroom: 3,
      },
      Amenities: {
        "1": "Wi-Fi",
        "2": "Hot Tub",
        "3": "Fireplace",
        "4": "Garden",
        "5": "Garage",
      },
    },
  },
  {
    ID: "EP-17350019",
    GeoInfo: {
      Lat: "55.7560", // Slightly modified
      Lng: "37.6180", // Slightly modified
      City: "Moscow",
      Country: "Russia",
      Display: "Moscow, Russia",
    },
    Property: {
      PropertyName: "Red Square Residence",
      PropertyType: "Condo",
      Price: 350,
      StarRating: 4,
      FeatureImage:
        "https://images.unsplash.com/photo-1576685291404-0a95f41f6d8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      Counts: {
        Bedroom: 3,
        Bathroom: 2,
      },
      Amenities: {
        "1": "Wi-Fi",
        "2": "Central Heating",
        "3": "Private Balcony",
        "4": "Security System",
      },
    },
  },
  {
    ID: "EP-17350020",
    GeoInfo: {
      Lat: "-22.9070", // Slightly modified
      Lng: "-43.1730", // Slightly modified
      City: "Rio de Janeiro",
      Country: "Brazil",
      Display: "Rio de Janeiro, Brazil",
    },
    Property: {
      PropertyName: "Copacabana Beach House",
      PropertyType: "Beach House",
      Price: 450,
      StarRating: 5,
      FeatureImage:
        "https://images.unsplash.com/photo-1504386106331-3e4e71712b38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      Counts: {
        Bedroom: 3,
        Bathroom: 2,
      },
      Amenities: {
        "1": "Wi-Fi",
        "2": "Beach Access",
        "3": "Outdoor Shower",
        "4": "Barbecue",
        "5": "Hammocks",
      },
    },
  },
  {
    ID: "EP-17350021",
    GeoInfo: {
      Lat: "43.7700", // Slightly modified
      Lng: "11.2560", // Slightly modified
      City: "Florence",
      Country: "Italy",
      Display: "Florence, Tuscany, Italy",
    },
    Property: {
      PropertyName: "Tuscan Countryside Cottage",
      PropertyType: "Cottage",
      Price: 220,
      StarRating: 4,
      FeatureImage:
        "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      Counts: {
        Bedroom: 2,
        Bathroom: 1,
      },
      Amenities: {
        "1": "Wi-Fi",
        "2": "Fireplace",
        "3": "Garden",
        "4": "Mountain View",
      },
    },
  },
];
