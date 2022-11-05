const TextBox = () => {
	return (
		<div
			id="quote-box"
			className="absolute top-1/2 left-1/2 md:h-[400px] md:w-[750px] w-[350px] -translate-y-1/2 -translate-x-1/2 bg-red-200 p-2 space-y-3"
		>
			<div id="text" className="bg-blue-200 h-3/4 p-5 m-2">
				<div className="text-xl text-justify p-2">
					It is a long established fact that a reader will be
					distracted by the readable content of a page when looking at
					its layout. The point of using Lorem Ipsum is that it has a
					more-or-less normal distribution of letters, as opposed to
					using 'Content here, content here', making it look like
					readable English. Many desktop publishing packages and web
					page editors now use Lorem Ipsum as their default model
					text, and a search for 'lorem ipsum'
				</div>

				<div id="author" className="text-right mr-8">
					~author
				</div>
			</div>
			<button id="new-quote" className="absolute right-5 bg-green-50 p-3" >Click Here</button>
		</div>
	);
};

export default TextBox;
