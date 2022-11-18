import { useState } from "react";
import TextBox from "./Components/TextBox";

function App() {
	const [bgColor, setBgColor] = useState<string>("bg-violet-200");

	const callback = (color: string) => {
		setBgColor(color);
	};

	return (
		<div className={`h-screen ${bgColor}`}>
			<TextBox callbackFunc={callback} />
		</div>
	);
}

export default App;
