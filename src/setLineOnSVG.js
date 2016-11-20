export default function( svg, patternId, coverage ) {

	coverage *= 100;

	if ( coverage > 100 ) {
		coverage = 100;
	}
	if ( coverage < 0 ) {
		coverage = 0;
	}

	coverage = 100 - coverage;

	svg.querySelector( `#${ patternId }` ).childNodes[ 1 ].setAttribute( 'y', `${ coverage }%` );
}
