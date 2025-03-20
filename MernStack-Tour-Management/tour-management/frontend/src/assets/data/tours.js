import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";

const tours = [
  {
    id: "01",
    title: "Westminister Bridge",
    city: "London",
    distance: 300,
    address: "Somewhere",
    price: 99,
    maxGroupSize: 10,
    desc: "Visit the iconic Westminster Bridge, offering stunning views of the Houses of Parliament and Big Ben. A must-see landmark in London.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Bali, Indonesia",
    city: "Indonesia",
    distance: 400,
    address: "Somewhere",
    price: 99,
    maxGroupSize: 8,
    desc: "Explore the beautiful island of Bali, known for its lush landscapes, temples, and vibrant culture. A tropical paradise awaits.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    address: "Somewhere",
    price: 99,
    maxGroupSize: 8,
    desc: "Discover the breathtaking beauty of Thailand's snowy mountain ranges. Perfect for nature lovers seeking adventure and tranquility.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Beautiful Sunrise, Thailand",
    city: "Thailand",
    distance: 500,
    address: "Somewhere",
    price: 99,
    maxGroupSize: 8,
    desc: "Catch the most beautiful sunrise over the stunning beaches of Phuket. An experience that will leave you in awe of nature's beauty.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Nusa Pendia Bali, Indonesia",
    city: "Indonesia",
    distance: 500,
    address: "Somewhere",
    price: 99,
    maxGroupSize: 8,
    desc: "Visit the breathtaking Nusa Pendia in Bali, famous for its crystal-clear waters, dramatic cliffs, and pristine beaches.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Cherry Blossoms Spring",
    city: "Japan",
    distance: 500,
    address: "Somewhere",
    price: 99,
    maxGroupSize: 8,
    desc: "Experience the beauty of cherry blossoms in full bloom during spring in Tokyo. A magical season that transforms the city into a sea of pink.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Holmen Lofoten",
    city: "France",
    distance: 500,
    address: "Somewhere",
    price: 99,
    maxGroupSize: 8,
    desc: "Discover the enchanting Holmen Lofoten in France, known for its rugged landscapes, pristine beaches, and dramatic mountain views.",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    address: "Somewhere",
    price: 99,
    maxGroupSize: 8,
    desc: "Explore the majestic snowy mountains of Thailand, perfect for outdoor enthusiasts and those seeking peace amidst nature.",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
];

export default tours;
