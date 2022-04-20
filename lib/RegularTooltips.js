/**
 * Regular Tooltips
 *
 * @author Sanjay Thiyagarajan
 */

( function ( mw, $ ) {
	'use strict';

	/**
	 * Decodes html-encoded string
	 *
	 * @param {string} input
	 * @return {string}
	 */
	function htmlDecode( input ) {
		var e = document.createElement( 'textarea' );
		e.innerHTML = input;
		return e.childNodes.length === 0 ? '' : e.childNodes[ 0 ].nodeValue;
	}

	/**
	 * @param {Object} $context
	 */
	var toolTipTrigger = function ( $context ) {

		if ( $context ) {
			$context = $context.find( 'regular-tooltips' );
		} else {
			$context = $( '.regular-tooltips' );
		}

		$context.each( function () {
			var text = $( this ).attr( 'data-regular-tooltips' );
			text = htmlDecode( text );

			var popup = new OO.ui.PopupButtonWidget( {
				icon: 'info',
				framed: false,
				popup: {
					padded: true,
					align: 'force-right',
					$content: $( '<p>' + text + '</p>' )
				}
			} );

			$( this ).append( popup.$element );

		} );

	};

	$( function () {
		toolTipTrigger( null );
		mw.hook( 'pf.addTemplateInstance' ).add( function ( $elements ) {
			toolTipTrigger( $elements );
		} );

	} );

}( mediaWiki, jQuery ) );
