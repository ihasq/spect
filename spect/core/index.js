const secretRandToken = `spect$${crypto.getRandomValues(new Uint8Array(8)).join("$")}`

const htmlTempMap = new WeakMap();

const parserDocumentFragment = document.createDocumentFragment();

const html = (htmlStrings, ...htmlValues) => {
	const templateCache = htmlTempMap.get(htmlStrings);
	if(templateCache === undefined) {
		const joinedHTMLString = htmlStrings.join(secretRandToken);
		for(let htmlStringsIndex = 0; htmlStringsIndex < htmlStrings.length - 1; htmlStringsIndex++) {
			joinedHTMLString.replace(secretRandToken, secretRandToken + (htmlStringsIndex + "").padStart(10, '0'));
		}
		parserDocumentFragment.innerHTML = joinedHTMLString;
	}
}

html`<div *dev=app>${'wow'}</div>`;

console.log(parserDocumentFragment.innerHTML)