// import react from "react";
// import RNFS from "react-native-fs";

// const Downloadfile = () => {
//   const url = "https://www.africau.edu/images/default/sample.pdf"; // Replace with your file URL
//   const destinationPath = `${RNFS.DocumentDirectoryPath}/yourfile.pdf`;

//   const options = {
//     fromUrl: url,
//     toFile: destinationPath,
//     background: true, // Enable background downloading on Android
//     discretionary: true, // Allow the OS to control the timing of the download
//     progressDivider: 1, // Progress event interval in percentage (optional)
//     begin: (res) => {
//       console.log("Download has begun:", res);
//     },
//     progress: (res) => {
//       const percentage = ((res.bytesWritten / res.contentLength) * 100).toFixed(
//         2
//       );
//       console.log(`Download progress: ${percentage}%`);
//     },
//   };

//   RNFS.downloadFile(options)
//     .promise.then((response) => {
//       console.log("File downloaded successfully:", response);
//     })
//     .catch((error) => {
//       console.error("Download failed:", error);
//     });
// };

// export default Downloadfile;
