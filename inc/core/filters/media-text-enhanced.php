<?php

namespace Bcgov\Theme\Block;

/**
 * Improve button block by adding additional attribtes: size class and tabindex.
 *
 * Load this file via inc/core/theme-bootstrap.php.
 *
 * @param  string $block_content Block content to be rendered.
 * @param  array  $block         Block attributes.
 * @return string
 */
function add_media_text_attributes( $block_content = '', $block = [] ) {

	if ( isset( $block['blockName'] ) && 'core/media-text' === $block['blockName'] ) {
		$defaults = [
			'title' => 'none',
		];

		$args = wp_parse_args( $block['attrs'], $defaults );

		if ( 'none' !== $args['title'] ) {
			$title = 'title="' . esc_attr( $args['title'] ) . '"';
		} else {
			$title = null;
		}

		$html = str_replace(
			[
				'<img ',
			],
			[
				'<img ' . $title . ' ',
			],
			$block_content
		);

		return $html;
	}

	return $block_content;
}

add_filter( 'render_block', __NAMESPACE__ . '\add_media_text_attributes', 10, 2 );