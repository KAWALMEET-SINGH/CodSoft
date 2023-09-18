import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Welcome from "./src/screens/welcome";
import QuoteOfTheDay from "./src/screens/QuoteOfTheDay";

const navigator = createStackNavigator(
  {
    Welcome: Welcome,
    Home:QuoteOfTheDay
  },
  {
    initialRouteName: "Welcome",
    defaultNavigationOptions: {
      title: "WisdomWords",
    },
  }
);

export default createAppContainer(navigator);