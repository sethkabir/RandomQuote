import { useEffect, useState } from "react";
import axios from "axios";

//the type of object we will get from the api call
type Quote = {
	text: string;
	author: string;
};

const TextBox = () => {
	//instead of using <Quote | null> we used {} as Quote because we know that
	//quote will be assigned an object as soon as the app renders(useEffect) so it will not be null
	const [quote, setQuote] = useState<Quote>({} as Quote);

	//works when the button is clicked!
	const handleClick = () => {
		let randomNum: number = Math.floor(Math.random() * 1642 + 1);
		axios
			.get("https://type.fit/api/quotes")
			.then((res) => {
				setQuote(res.data[randomNum]);
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
			className="absolute top-1/2 left-1/2 h-[300px] md:h-[300px] md:w-[750px] w-[350px] -translate-y-1/2 -translate-x-1/2 border-4 rounded-lg p-2"
		>
			<div id="text" className="border-2 rounded-md h-44 p-5 m-2">
				<div className="sm:text-xl text-justify p-2">{quote?.text}</div>

				<div id="author" className="text-right mr-8">
					~{quote?.author}
				</div>
			</div>
			<button
				id="new-quote"
				onClick={handleClick}
				className="absolute right-5 p-3 border-2 rounded-md"
			>
				Click Here
			</button>
		</div>
	);
};

export default TextBox;
