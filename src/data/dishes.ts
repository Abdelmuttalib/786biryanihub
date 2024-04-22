const sourceDishesData = [
  { dishName: "Beef biryani", dishImageName: "beef-biryani.png" },
  { dishName: "Beef kebab", dishImageName: "beef-kebab.jpg" },
  {
    dishName: "Beef shawarma rice",
    dishImageName: "beef-shawarma-rice.jpg",
  },
  { dishName: "Beef shawarma", dishImageName: "beef-shawarma.jpg" },
  { dishName: "Chapati", dishImageName: "chapati.jpg" },
  { dishName: "Cheese parata", dishImageName: "cheese-parata.jpg" },
  { dishName: "Chicken biryani", dishImageName: "chicken-biryani.jpg" },
  { dishName: "Chicken curry", dishImageName: "chicken-curry.jpg" },
  { dishName: "Chicken fillet", dishImageName: "chicken-fillet.jpg" },
  { dishName: "Chicken kebab", dishImageName: "chicken-kebab.jpg" },
  { dishName: "Chicken masala", dishImageName: "chicken-masala.jpg" },
  {
    dishName: "Chicken shawarma",
    dishImageName: "chicken-shawarma.jpg",
  },
  { dishName: "Chicken sisig", dishImageName: "chicken-sisig.jpg" },
  { dishName: "Chicken tandori", dishImageName: "chicken-tandori.jpg" },
  { dishName: "Egg chapati", dishImageName: "egg-chapati.jpg" },
  { dishName: "Fried chicken", dishImageName: "fried-chicken.jpg" },
  { dishName: "Iced milk tea", dishImageName: "iced-milk-tea.jpg" },
  { dishName: "Milk tea", dishImageName: "milk-tea.jpg" },
  { dishName: "Red tea", dishImageName: "red-tea.jpg" },
  { dishName: "Samosa", dishImageName: "samosa.jpg" },
  { dishName: "Shakshuka", dishImageName: "shakshuka.jpg" },
];

export const dishes = sourceDishesData.map((dish, index) => {
  return {
    id: `${dish.dishName.replace(/ /g, "-").toLowerCase()}${index}`,
    ...dish,
  };
});

// export const dishes = [
//   {
//     name: "Beef Biryani",
//     image: "/beef-biryani.jpg",
//   },
//   {
//     name: "Chicken Biryani",
//     image: "/chicken-biryani.jpg",
//   },
//   {
//     name: "Mutton Biryani",
//     image: "/mutton-biryani.jpg",
//   },
// ];

// import fs from "fs";
// const fs = require("fs");

// // Define the directory path
// const directoryPath = "../../public/images/";

// // Function to capitalize the dish name
// const capitalize = (str: string) => {
//   return str
//     .split("-")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// };

// // Function to read directory and generate data
// const generateDishesData = () => {
//   try {
//     // Read directory contents
//     const files = fs.readdirSync(directoryPath);

//     // Filter out only image files
//     const imageFiles = files.filter(
//       (file) =>
//         file.endsWith(".jpg") || file.endsWith(".jpeg") || file.endsWith(".png")
//     );

//     // Generate data object for each image
//     const dishesData = imageFiles.map((file) => {
//       const dishName = capitalize(file.split(".")[0].replace(/-/g, " "));
//       return {
//         imageName: file,
//         dishName: dishName,
//       };
//     });

//     return dishesData;
//   } catch (err) {
//     console.error("Error reading directory:", err);
//     return [];
//   }
// };

// // Usage example
// const dishesData = generateDishesData();
// console.log(dishesData);
