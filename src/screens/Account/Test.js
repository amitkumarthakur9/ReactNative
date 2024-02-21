// import React from "react";
// import { View, Dimensions } from "react-native";
// import Pdf from "react-native-pdf";

// export default function App() {
//   return (
//     <View style={{ flex: 1 }}>
//       <Pdf
//         source={{
//           uri: "file:///storage/emulated/0/Android/data/com.growthvinecapitalapp.app/files/capitalgain_2020.pdf",
//           cache: true,
//         }}
//         onLoadComplete={(numberOfPages, filePath) => {
//           console.log(`number of pages: ${numberOfPages}`);
//         }}
//         onPageChanged={(page, numberOfPages) => {
//           console.log(`current page: ${page}`);
//         }}
//         onError={(error) => {
//           console.log(error);
//         }}
//         style={styles.pdf}
//       />
//     </View>
//   );
// }

// const styles = {
//   pdf: {
//     flex: 1,
//     width: Dimensions.get("window").width, // Adjust width to fit the entire screen
//     height: Dimensions.get("window").height, // Adjust height to fit the entire screen
//   },
// };
