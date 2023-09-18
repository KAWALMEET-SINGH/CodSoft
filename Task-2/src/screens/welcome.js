import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image ,TouchableOpacity} from 'react-native';

const Welcome = (props) => {
  const navigate = props.navigation.navigate;
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/undraw_Creative_woman_re_u5tk.png")}
        style={styles.heroImage}
      />
      <StatusBar style="auto" />
      <Text style={styles.title}>WisdomWords</Text>
      <TouchableOpacity onPress={() => { navigate("Home") }} style={styles.getStartedButton}>
        <Text style={styles.buttonText}>Read Quotes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, heroImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  getStartedButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FCD3FF',
    borderRadius: 15,
  },
  buttonText: {
    color: '#323232',
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    color: "#323232",
    fontSize: 28,
    fontWeight: "700",

  }
});


export default Welcome;