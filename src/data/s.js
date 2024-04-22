const fs = require("fs");

// Define the directory path
const directoryPath = "../../public/images/";

// Function to capitalize the dish name
// const { exec } = require("child_process");
const path = require("path");

// function potreeConverter(directory, filename, outputDir) {
//   return new Promise((resolve, reject) => {
//     exec(
//       `~/PotreeConverter-2.1.1/build/PotreeConverter ${directory}/${filename} -o ${outputDir}`,
//       (err, stdout, stderr) => {
//         if (err) {
//           console.error("err", err.message);
//           reject(err.message);
//         }
//         if (stderr) {
//           console.error("err", stderr);
//           reject(err.message);
//         }
//         resolve(stdout ? stdout : stderr);
//       }
//     );
//   });
// }

async function multipleConvert(directory) {
  var terra_las = path.resolve(directory, "");
  // find full path of the current directory
  console.log("s", path.dirname(terra_las));
  var directoryContents = fs.readdirSync(terra_las);

  console.log("d: ", directoryContents);

  for (var i in directoryContents) {
    console.log("威尼斯人.txt" === directoryContents[i]);
  }

  // for (var i in directoryContents) {
  //   if (directoryContents[i].endsWith(".las")) {
  //     console.log(`converting: ${i}/${directoryContents.length}`);
  //     var convertedDirectory = path.resolve(
  //       directory,
  //       "converted",
  //       directoryContents[i].replace(".las", "")
  //     );
  //     await potreeConverter(
  //       terra_las,
  //       directoryContents[i],
  //       convertedDirectory
  //     );
  //   }
  // }
}

multipleConvert("../../public");
