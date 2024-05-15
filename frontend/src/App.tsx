import "./App.css";
import ProvideAuth from "context/AuthContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppRoutes } from "routes/PrivateRoute";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ProvideAuth>
          <AppRoutes />
        </ProvideAuth>
      </QueryClientProvider>
    </>
  );
}

export default App;
