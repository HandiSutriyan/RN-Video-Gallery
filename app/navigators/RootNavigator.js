import { StackNavigator } from 'react-navigation';

import Task1and2 from "../task/task1and2.js"
import Task3 from "../task/task3.js"
import IndexPage from "../task/index.js"
const RootNavigator = StackNavigator({
  Task1and2 :{
    screen: Task1and2,
    navigationOptions:{
      title: 'Task 1 and 2'
    }
  },
  IndexPage :{
    screen: IndexPage,
    navigationOptions:{
      title:'Index Page',
      headerStyle: {
          backgroundColor: '#3f51b5',
          height:70,
        },
        headerTintColor: '#fff',
    }
  },
  Task3:{
    screen: Task3,
    navigationOptions:{
      title: 'Task 3'
    }
  }
})

export default RootNavigator
