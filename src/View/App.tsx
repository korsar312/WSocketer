import { HashRouter } from "react-router-dom";
import PagesLayout from "./Layouts/PagesLayout";
import BackgroundLayout from "./Layouts/BackgroundLayout";

const App = () => {
	return (
		<HashRouter>
			<BackgroundLayout />
			<PagesLayout />
		</HashRouter>
	);
};

export default App;
