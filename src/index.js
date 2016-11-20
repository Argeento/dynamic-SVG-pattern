import getSVG from './getSVG';
import createPattern from './createPattern';
import setLineOnSVG from './setLineOnSVG';

// rollup with iife mode
let spdLength = 0;
let patternLength = 0;

class Spd {

	constructor( svgQuery ) {

		this.nr = spdLength;
		this.svgElement = getSVG( svgQuery, spdLength );
		this.height = this.svgElement.clientHeight;

		spdLength++;
	}

	addLine( config ) {

		const patternId = `spdpattern${ patternLength }`;
		const pattern = createPattern( {
			after: config.after,
			before: config.before
		}, patternId );

		this.svgElement.appendChild( pattern );
		this.svgElement.setAttribute( 'fill', `url(#${ patternId })` );

		// recalculate DOM...  magic.exe
		this.svgElement.innerHTML = this.svgElement.innerHTML;

		window.addEventListener( 'scroll', ( e ) => {

			const coverage = ( window.scrollY + this.height - config.height ) / this.height;
			setLineOnSVG( this.svgElement, patternId, coverage );

		}, false );

		patternLength++;

		// chaining <3
		return this;
	}
}

if ( typeof window.Spd === 'undefined' ) {
	window.Spd = Spd;
}
