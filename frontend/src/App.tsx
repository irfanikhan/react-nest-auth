import "./App.css";
import ProvideAuth from "context/AuthContext";
import { AppRoutes } from "routes/PrivateRoute";

function App() {
  return (
    <>
      <ProvideAuth>
        <AppRoutes />
      </ProvideAuth>
    </>
  );
}

export default App;
