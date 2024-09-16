import Timelie from "./components/Timelie";
import Layout from "./components/Layout";
import MasonryComponent from "./components/Masonry";

function App() {
	return (
		<Layout>
			<div className="pb-5">
				<Timelie />
			</div>
			<MasonryComponent />
		</Layout>
	);
}

export default App;
