const changeEvent = () => {

}

const h1Style = h1Ref => {
	return at => at`
		*color=${h1Ref.theme? '#000' : '#fff'};
		*font-family=Inter;
		*font-weight=800;

		@click=${() => window.location.hash = `#${h1Ref.textContent}`}

		::selection {
			*color=${h1Ref.theme? '#fff' : '#000'}
			*background-color=${h1Ref.theme? '#000' : '#fff'}
		}
	`;
}

const ThemeSwitch = $ => {
	return h => h`
		<div
			*border-radius=
		>
			<>
		</div>
	`
}

export default $ => h => h`
	<body *width=100%;>
		<div
			*width=720px;
			*margin=32px calc((100% - 720px) / 2);
		>
			<h1 ${h1Style}>Evolt</h1>
			<${ThemeSwitch} />
		</div>
	</body>
`;