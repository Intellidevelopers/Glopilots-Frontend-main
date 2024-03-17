import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

export const colors = {
  black: "#0d1317",
  blue: "#4460ef",
  grey: "#545454",
  white: "#ffffff",
  lightgrey: "#eeeeee",
  red: "#D00000",
};
export const homestyle = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.lightgrey,
    backgroundColor: "#d7eaf9af",
    justifyContent: "space-between",
  },
  hero: {
    padding: 10,
    height: Dimensions.get("screen").height - 400,
  },

  heroImg: {
    width: Dimensions.get("screen").width - 100,
    objectFit: "cover",
    height: Dimensions.get("screen").height - 200,
  },

  heroText: {
    fontWeight: "700",
    fontSize: Dimensions.get("screen").width / 16,
    width: Dimensions.get("screen").width - 100,

    color: "#000000",
  },

  recommendation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },

  recommendationButton: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 5,

    alignItems: "center",
  },
  recommendationButtonText: {
    fontWeight: "600",
    fontSize: Dimensions.get("screen").fontScale * 16,
    borderRadius: 10,
    marginLeft: 10,
  },

  location: {
    padding: 10,
    flexDirection: "row",
  },
  locationContainer: {
    // flex: 1,
    height: 400,
    paddingBottom: 100,
    borderTopEndRadius: 25,
    borderTopLeftRadius: 25,
    // justifyContent: 'space-around',
    backgroundColor: "#fff",
  },

  locationButton: {
    flexDirection: "row",
    width: Dimensions.get("screen").width - 50,
    alignItems: "center",

    paddingVertical: 10,
    borderRadius: 10,
    justifyContent: "space-between",
  },
  locationButtonMid: {
    flexDirection: "row",
    width: Dimensions.get("screen").width - 50,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 10,
    justifyContent: "space-between",
  },

  locationIconsArea: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationIconsArea2: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationIcons: {
    width: 30,
  },
  locationButtonTextBold: {
    fontWeight: "700",
    paddingVertical: 5,
    fontSize: Dimensions.get("screen").fontScale * 20,
  },
  divider: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: "100%",
  },
  locationButtonTextUnstyled: {
    fontSize: Dimensions.get("screen").fontScale * 20,
    color: colors.black,
  },
});

export const buttonStyle = StyleSheet.create({
  button: {
    backgroundColor: colors.blue,
    paddingVertical: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("screen").width - 30,
  },
  text: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
  },
});

export const headerStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "#d7eaf9",
    padding: 0,
    borderBottomColor: colors.black,
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: "100%",
    elevation: 0,
    height: 100,
  },
});
export const calendarStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,

    justifyContent: "space-between",
  },
  headerContainer: {
    paddingVertical: 10,
  },
  header: {
    fontWeight: "700",
    fontSize: Dimensions.get("screen").fontScale * 26,

    padding: 6,
  },
  badgeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  badge: {
    backgroundColor: colors.lightgrey,
    padding: 5,

    borderRadius: 10,
  },
  button: {
    height: 90,
    alignItems: "center",
  },
});

export const locationStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEEEEE",
  },

  headerContainer: {
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  input: {
    backgroundColor: "#eeeeee",
    fontSize: Dimensions.get("screen").fontScale * 20,
    width: Dimensions.get("screen").width - 50,
    height: 40,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  inputer: {
    backgroundColor: "#eeeeee",
    fontSize: Dimensions.get("screen").fontScale * 20,
    width: Dimensions.get("screen").width - 75,
    height: 40,
    borderRadius: 10,
    padding: 10,

    marginLeft: 10,
    marginVertical: 10,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  listItem: {
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItemText: {},
  listItemContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
});

export const carListStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d7eaf9af",
  },
  selectContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  select: {
    flexDirection: "row",
    alignItems: "center",

    width: (Dimensions.get("screen").width - 20) / 2,
    height: 40,
    borderRadius: 15,
    justifyContent: "space-between",

    padding: 10,

    backgroundColor: "#d7eaf9af",
  },

  info: {
    backgroundColor: "#d6ead7",
    width: Dimensions.get("screen").width - 20,
    height: Dimensions.get("screen").height / 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 4,
    padding: 10,
    marginVertical: Dimensions.get("screen").height / 40,
  },

  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",

    height: "95%",
    position: "relative",
    padding: 10,
    borderRadius: 10,
  },
  tag: {
    position: "absolute",
    top: 5,
    left: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  tagText: {
    color: "#787878",
    fontSize: Dimensions.get("screen").fontScale * 17,
  },
  badgeContainer: {
    flexDirection: "row",

    gap: 6,
    alignItems: "center",
  },
  textBold: {
    fontWeight: "bold",
    fontSize: Dimensions.get("screen").fontScale * 17,
  },
  carInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  footer: {
    backgroundColor: "#d7eaf9af",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  footerText1: {
    fontSize: 18,
  },
  footerText2: {
    fontSize: 14,
  },
});

export const badgeStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    fontSize: 16,
  },
  text: {
    marginLeft: -1,
    textAlignVertical: "top",
    fontWeight: "700",
  },
});

export const carDetailStyle = StyleSheet.create({
  info: {
    alignItems: "center",
  },
  infoDetails1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  infoProperty1: {
    padding: 10,
  },
});

export const reservation = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  reserveDetails: {},
  reservationContainer: {
    flexDirection: "row",
    alignItems: "center",

    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  reserve: {
    paddingVertical: 15,
    paddingLeft: 10,
    gap: 10,
    flex: 1,
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
  },
  subtitle: {
    fontSize: 12.5,
  },
  titlegroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  due: {
    paddingVertical: 15,
    gap: 10,
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
  },

  requirement: {
    paddingVertical: 15,
    gap: 15,

    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
  },
  box: {
    gap: 5,
  },
  terms: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 20,
  },
  link: {
    flexDirection: "row",
    alignItems: "center",
  },
  linkText: {
    color: "royalblue",
    textDecorationColor: "royalblue",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  carddetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
  },
});

export const hourlystyle = StyleSheet.create({
  section: {
    height: 500,
    padding: 10,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
  },
  hero: {
    padding: 10,

    height: Dimensions.get("screen").height - 530,
  },

  sectionTitleText: {
    fontSize: 20,
    fontWeight: "bold",
  },

  listContainer: {},

  listItem: {
    flexDirection: "row",
    gap: 10,
    paddingVertical: 15,
    alignItems: "center",
  },
  listItemText: {
    fontSize: 16,
  },
  buttoncontainer: {
    marginTop: 100,
  },
});
