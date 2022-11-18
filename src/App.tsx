import { useState } from "react";
import TextBox from "./Components/TextBox";

function App() {
	//default color for the first load
	const [bgColor, setBgColor] = useState<string>("bg-violet-200");

	//callback function for whenever the bgcolor changes in the child component,
	//it gets passed to this component and changes the bgcolor of the whole screen
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
