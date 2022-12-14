import { useEffect, useState } from "react";
import axios from "axios";
import { backgroundColor } from "./colors";

//the type of object we will get from the api call
type Quote = {
	text: string;
	author: string;
};

//type for the callback function being passed from the parent to the child component
type ParentProp = {
	callbackFunc: (color: string) => void;
};

const TextBox = (props: ParentProp) => {
	//instead of using <Quote | null> we used {} as Quote because we know that
	//quote will be assigned an object as soon as the app renders(useEffect) so it will not be null
	const [quote, setQuote] = useState<Quote>({} as Quote);
	//set the background color.
	const [color, setColor] = useState<string>("bg-violet-200");

	//works when the button is clicked!
	const handleClick = () => {
		let randomNum: number = Math.floor(Math.random() * 1642 + 1);
		let randomColor: number = Math.floor(Math.random() * 17 + 1);
		axios
			.get("https://type.fit/api/quotes")
			.then((res) => {
				setQuote(res.data[randomNum]);
				setColor(backgroundColor[randomColor]);
				props.callbackFunc(backgroundColor[randomColor]);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	//use effect for when the app is first loaded (component did mount)
	useEffect(() => {
		let randomNum: number = Math.floor(Math.random() * 1642 + 1);

		axios
			.get("https://type.fit/api/quotes")
			.then((res) => {
				setQuote(res.data[randomNum]);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<div
			id="quote-box"
			className={`absolute top-1/2 left-1/2 h-[320px] md:h-[320px] md:w-[750px] w-[350px] -translate-y-1/2 -translate-x-1/2 border-4 rounded-lg p-2  transition-colors border-black bg-white`}
		>
			<div
				id="text"
				className="border-2 rounded-md h-52 p-5 m-2 border-black"
			>
				<div className="sm:text-xl text-justify p-2 font-bold">
					{quote?.text}
				</div>

				<div id="author" className="text-right mr-8 font-bold">
					~{quote?.author}
				</div>
			</div>
			<button
				id="new-quote"
				onClick={handleClick}
				className="absolute right-5 p-3 border-2 rounded-md border-black font-medium"
			>
				Click Here
			</button>
		</div>
	);
};

export default TextBox;
