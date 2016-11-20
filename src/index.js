import getSVG from './getSVG';
import createPattern from './createPattern';
import setLineOnSVG from './setLineOnSVG';

// rollup with iife mode
let spdLength = 0;
let patternLength = 0;

class DynamicPattern {

	constructor( config ) {

		this.nr = spdLength;
		this.svgElement = getSVG( config.svgElement, spdLength );
		this.height = this.svgElement.clientHeight;
		this.offsetTop = config.svgOffsetTop;

		spdLength++;
	}

	addLine( config ) {

		const patternId = `spdpattern${ patternLength }`;
		const pattern = createPattern( {
			after: config.after,
			before: config.before
		}, patternId );

		this.svgElement.appendChild( pattern );

		// recalculate DOM...  magic.exe
		this.svgElement.innerHTML = this.svgElement.innerHTML;

		const setPattern = ( e ) => {

			const coverage = ( window.scrollY + this.height + this.offsetTop - config.height ) / this.height;

			if ( coverage >= 0 && coverage <= 1 ) {
				this.svgElement.setAttribute( 'fill', `url(#${ patternId })` );
			}

			setLineOnSVG( this.svgElement, patternId, coverage );
		};

		window.addEventListener( 'scroll', setPattern );
		window.addEventListener( 'load', setPattern );

		patternLength++;

		// chaining <3
		return this;
	}
}

if ( typeof window.DynamicPattern === 'undefined' ) {
	window.DynamicPattern = DynamicPattern;
}
