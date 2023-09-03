import Header from "./components/Header";

import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-2xl flex-col items-stretch justify-start gap-4">
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
