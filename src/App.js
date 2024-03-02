import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import { Provider } from "react-redux";
import store from "./Components/Redux/store";

function App() {
  const routers = createBrowserRouter([{ path: "/", element: <Home /> }]);

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={routers} />
      </Provider>
    </>
  );
}

export default App;
