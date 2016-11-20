export default function( query, spdLength ) {

	if ( typeof query === 'undefined' ) {
		console.error( 'SDP.getSVG: arg must be not empty' );
		return false;
	}

	if ( typeof query !== 'string' ) {
		console.error( 'SDP.getSVG: arg must be a string' );
		return false;
	}

	if ( query.length === 0 ) {
		console.error( 'SPD.getSVG: query must be not empty' );
		return false;
	}

	const svg = document.querySelector( query );

	if ( typeof svg === 'undefined' || svg === null ) {
		console.error( `SPD: There is no element ${query}` );
		return false;
	}

	if ( svg.nodeName !== 'svg' ) {
		console.error( `SPD: ${query} element is not a SVG node` );
		return false;
	}

	if ( svg.getAttribute( 'data-spd' ) !== null ) {
		console.error( `SPD: ${query} element arleady has a spd function` );
		return false;
	}

	// Mark a SVG
	svg.setAttribute( 'data-spd', spdLength );

	return svg;
}
