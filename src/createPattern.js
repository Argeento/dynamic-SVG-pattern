export default function createPattern( color, id ) {

	const pattern = document.createElement( 'pattern' );
	pattern.id = id;
	pattern.setAttribute( 'patternUnits', 'userSpaceOnUse' );
	pattern.setAttribute( 'x', '0' );
	pattern.setAttribute( 'y', '0' );
	pattern.setAttribute( 'width', '100%' );
	pattern.setAttribute( 'height', '100%' );

	const rectBefore = document.createElement( 'rect' );
	rectBefore.setAttribute( 'width', '100%' );
	rectBefore.setAttribute( 'height', '100%' );
	rectBefore.setAttribute( 'fill', color.before );
	rectBefore.classList.add( 'sdg-rect-before' );

	const rectAfter = document.createElement( 'rect' );
	rectAfter.setAttribute( 'width', '100%' );
	rectAfter.setAttribute( 'height', '100%' );
	rectAfter.setAttribute( 'y', '100%' );
	rectAfter.setAttribute( 'fill', color.after );
	rectAfter.classList.add( 'sdg-rect-after' );

	pattern.appendChild( rectBefore );
	pattern.appendChild( rectAfter );

	return pattern;
}
