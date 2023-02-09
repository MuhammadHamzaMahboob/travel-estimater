import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containersi: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: '#10F50C',
  },
  button: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#10F50C',
  },
  input: {
    width: 300,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  font: {
    fontSize: 30,
    color: "white",
    alignItems: "center",
    marginRight: 50,
    marginLeft: 50
  }
});

export default styles;
