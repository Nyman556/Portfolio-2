import "./App.css";
import BioPanel from "./components/BioPanel";
import MainContent from "./components/MainContent";

function App() {
	return (
		<div className="md:grid grid-cols-3 w-screen min-h-screen bg-gray-900 text-white sm:flex sm:flex-col">
			<div className="col-span-1">
				<BioPanel />
			</div>
			<div className="col-span-2">
				<MainContent />
			</div>
		</div>
	);
}

export default App;
