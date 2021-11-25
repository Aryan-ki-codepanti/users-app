import "./App.css";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Home  from "./Pages/Home/Home";
import Profile  from "./Pages/Profile/Profile";

function App() {
    return (
		<Router>
			<Routes>
				<Route path="/" element={ <Home /> } />
				<Route path="/profile/:id" element={ <Profile /> } />
			</Routes>
		</Router>
    );
}

export default App;
