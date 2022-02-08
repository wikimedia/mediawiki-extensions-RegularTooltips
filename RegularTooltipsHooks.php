<?php

/**
 * RegularTooltips Extension
 *
 * @file
 * @ingroup Extensions
 * @author Sanjay Thiyagarajan
 *
 */

 class RegularTooltipsHooks {

  /**
  * Register parser hooks
  * See also http://www.mediawiki.org/wiki/Manual:Parser_functions
  */
  public static function registerParserFunctions( &$parser ) {

    global $wgOut;
		$wgOut->addModules( 'ext.RegularTooltips' );

    // Register parser functions
    $parser->setFunctionHook( 'inline-tooltip', [ 'RegularTooltipsParser', 'inlineTooltip' ] );
    $parser->setFunctionHook( 'info-tooltip', [ 'RegularTooltipsParser', 'infoTooltip' ] );

    return true;
  }

 }
