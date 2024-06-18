import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Body';
import appStore from './Utils/appStore';
import Notification from './Components/Notification';

function App() {
  return (
    <Provider store={appStore}>
      <Notification/>
      <Body/>
    </Provider>
  );
} 

export default App;
