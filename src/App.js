import { Provider } from "react-redux";
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Body from './components/Body';
import Head from './components/Head';
import store from './Utils/store';
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

//Router
const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: <MainContainer />
    },
    {
      path: "/watch",
      element: <WatchPage />
    }
  ]
}])

function App() {
  return (
    <Provider store={store}>
      {console.log(store.isMenueOpen)}
      <div>
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider >
  );
}

export default App;
