/**
 * Regular Tooltips
 *
 * @author Sanjay Thiyagarajan
 */

'use strict';

const Vue = require( 'vue' );
const InfoTooltip = require( './InfoTooltip.vue' );

/**
 * Decodes html-encoded string
 *
 * @param {string} input
 * @return {string}
 */
function htmlDecode( input ) {
	const e = document.createElement( 'textarea' );
	e.innerHTML = input;
	return e.childNodes.length === 0 ? '' : e.childNodes[ 0 ].nodeValue;
}

/**
 * Mounts an info-tooltip Codex app on every matching element.
 *
 * @param {jQuery} $context
 * @param {boolean} [multiple=false]
 */
function toolTipTrigger( $context, multiple = false ) {

	if ( multiple ) {
		$context = $context.find( '.regular-tooltips' );
	}

	$context.each( function () {
		const text = htmlDecode( $( this ).attr( 'data-regular-tooltips' ) );

		Vue.createMwApp( InfoTooltip, { content: text } ).mount( this );
	} );

}

$( function () {
	mw.hook( 'pf.addTemplateInstance' ).add( function ( $elements ) {
		toolTipTrigger( $elements, true );
	} );
	$( '.regular-tooltips' ).each( function () {
		if ( $( this ).closest( '.multipleTemplateList' ).length === 0 ) {
			toolTipTrigger( $( this ), false );
		}
	} );
} );
