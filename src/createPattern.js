export default function createPattern( color, id ) {

	const setAttributes = ( el, attrs ) => {
		for ( const key in attrs ) {
			el.setAttribute( key, attrs[ key ] );
		}
	};

	const pattern = document.createElement( 'pattern' );
	setAttributes( pattern, {
		id, patternUnits: 'userSpaceOnUse',
		x: 0,
		y: 0,
		width: '100%',
		height: '100%'
	} );

	const rectBefore = document.createElement( 'rect' );
	setAttributes( rectBefore, {
		width: '100%',
		height: '100%',
		fill: color.before,
		class: 'sdg-rect-before'
	} );

	const rectAfter = document.createElement( 'rect' );
	setAttributes( rectAfter, {
		width: '100%',
		height: '100%',
		fill: color.after
	} );

	pattern.appendChild( rectBefore );
	pattern.appendChild( rectAfter );

	return pattern;
}
