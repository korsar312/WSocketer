import { BrowserRouter } from "react-router-dom";
import PagesLayout from "./Layouts/PagesLayout";
import BackgroundLayout from "./Layouts/BackgroundLayout";

const App = () => {
	return (
		<BrowserRouter>
			<BackgroundLayout />
			<PagesLayout />
		</BrowserRouter>
	);
};

export default App;
