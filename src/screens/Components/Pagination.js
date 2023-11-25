import { View, StyleSheet } from "react-native";
import { width, height } from "../../Dimension";

const renderPaginationDots = (currentPage, totalDots) => {
  return (
    <View style={styles.paginationContainer}>
      {Array.from({ length: totalDots }, (_, index) => (
        <View
          key={index}
          style={[
            styles.paginationDot,
            {
              backgroundColor:
                index === currentPage
                  ? "rgba(251, 133, 0, 1)"
                  : "rgb(255, 207, 153)",
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: height * 0.01,
  },
  paginationDot: {
    width: width * 0.022,
    height: width * 0.022,
    borderRadius: width * 0.012,
    marginHorizontal: width * 0.012,
  },
});

export default renderPaginationDots;
