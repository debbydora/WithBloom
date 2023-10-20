import Router from "./routes/Routes"
import { BrowserRouter } from "react-router-dom";


function App() {
   return (
     <div>
       <BrowserRouter>
         <Router />
       </BrowserRouter>
     </div>
   );
}

export default App
