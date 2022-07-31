import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getProducts().map((product) => {
      return db.product.create({ data: product });
    })
  );
}

seed();

function getProducts() {
  return [
    {
      name: "Harman Kardon Speaker",
      category: "Electronics",
      price: 725.0,
      image_url: "/assets/Bitmap.png",
      rating: 3,
      has_discount: true,
    },
    {
      name: "Women Yellow Turtleneck",
      category: "Fashion",
      price: 25.0,
      image_url: "/assets/Bitmap2.png",
      rating: 5,
      has_discount: false,
    },
    {
      name: "Garmin Watch Fit X",
      category: "Electronics",
      price: 500.0,
      image_url: "/assets/Bitmap3.png",
      rating: 4,
      has_discount: false,
    },
    {
      name: "Airpods 2nd Gen",
      category: "Electronics",
      price: 1200.0,
      image_url: "/assets/Bitmap4.png",
      rating: 2,
      has_discount: true,
    },
    {
      name: "iPhone XS Max Pro",
      category: "Electronics",
      price: 1100.0,
      image_url: "/assets/Bitmap5.png",
      rating: 5,
      has_discount: true,
    },
    {
      name: "Beats by Dre C 3450",
      category: "Electronics",
      price: 400.0,
      image_url: "/assets/Bitmap6.png",
      rating: 1,
      has_discount: false,
    },
    {
      name: "Apple Watch 4 2020",
      category: "Electronics",
      price: 800.0,
      image_url: "/assets/Bitmap7.png",
      rating: 5,
      has_discount: false,
    },
    {
      name: "Samsung Galaxy Watch 3",
      category: "Electronics",
      price: 1000.0,
      image_url: "/assets/Bitmap8.png",
      rating: 4,
      has_discount: false,
    },
  ];
}
