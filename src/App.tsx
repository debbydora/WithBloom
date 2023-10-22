import { AuthContextProvider } from "./context/AuthContext";
import Router from "./routes/Routes"
import { BrowserRouter } from "react-router-dom";


function App() {
   return (
     <AuthContextProvider>
       <BrowserRouter>
         <Router />
       </BrowserRouter>
     </AuthContextProvider>
   );
}

export default App
