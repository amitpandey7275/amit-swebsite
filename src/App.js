import {BrowserRouter,Routes,Route} from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Gallery from "./pages/Gallery";
import Upload from "./pages/upload";
import Journey from "./pages/Journey";
import ProtectedRoute from "./ProtectedRoute";

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Home/>} />

<Route path="/login" element={<Login/>} />

<Route path="/register" element={<Register/>} />

<Route
path="/gallery"
element={
<ProtectedRoute>
<Gallery/>
</ProtectedRoute>
}
/>

<Route
path="/journey"
element={
<ProtectedRoute>
<Journey/>
</ProtectedRoute>
}
/>

<Route
path="/upload"
element={
<ProtectedRoute>
<Upload/>
</ProtectedRoute>
}
/>

</Routes>

</BrowserRouter>

)

}

export default App;