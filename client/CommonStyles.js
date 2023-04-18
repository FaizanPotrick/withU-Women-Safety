import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  bg: {
    backgroundColor: "#7d40ff",
  },
  container: {
    flex: 8 / 9,
  },
  bold: {
    fontFamily: "Poppins-Bold",
    fontWeight: "600",
  },
  medium: {
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
  },
  light: {
    fontFamily: "Poppins-Thin",
    fontWeight: "400",
  },
  button: {
    backgroundColor: "#7d40ff",
    paddingVertical: 12,
    borderRadius: 12,
    paddingHorizontal: 40,
  },
  card: {
    marginBottom: 30,
    backgroundColor: "white",
    padding: 25,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    justifyContent: "center",
  },
  silentText: {
    color: "#8e8e8e",
    fontSize: 13,
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  divider: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginTop: 20,
  },
  actionButton: {
    alignItems: "center",
    position: "absolute",
    bottom: 40,
    right: 40,
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    width: 60,
    height: 60,
  },
  input: {
    backgroundColor: "#f0f0f0",
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
    color: "#000",
  },
  inputTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  outlineRedBtn: {
    borderColor: "red",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  outlineGreenBtn: {
    borderColor: "green",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  blueBtn: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 10,
  },
});

export default Styles;
