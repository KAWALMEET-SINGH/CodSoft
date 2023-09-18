import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomePage from "./src/screens/home";
import TodoListApp from "./src/screens/todoList";

const navigator = createStackNavigator(
  {
    Home: HomePage,
    TodoList:TodoListApp
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "ToDoList",
    },
  }
);

export default createAppContainer(navigator);