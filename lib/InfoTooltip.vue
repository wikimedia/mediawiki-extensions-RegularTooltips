<template>
	<span class="ext-regulartooltips-info">
		<cdx-toggle-button
			ref="trigger"
			v-model="open"
			:quiet="true"
			:aria-label="label"
		>
			<cdx-icon :icon="icon"></cdx-icon>
		</cdx-toggle-button>
		<cdx-popover
			v-model:open="open"
			:anchor="trigger"
			:use-close-button="false"
			placement="bottom-start"
                        title=""
		>
			<!-- eslint-disable vue/no-v-html -->
			<div
				class="ext-regulartooltips-info__content"
				v-html="content"
			></div>
			<!-- eslint-enable vue/no-v-html -->
		</cdx-popover>
	</span>
</template>

<script>
const { defineComponent, ref } = require( 'vue' );
const { CdxToggleButton, CdxPopover, CdxIcon } = require( '../codex.js' );
const { cdxIconInfo } = require( './icons.json' );

module.exports = defineComponent( {
	name: 'InfoTooltip',
	components: { CdxToggleButton, CdxPopover, CdxIcon },
	props: {
		content: {
			type: String,
			default: ''
		}
	},
	setup() {
		const trigger = ref( null );
		const open = ref( false );

		return {
			trigger,
			open,
			icon: cdxIconInfo,
			// eslint-disable-next-line no-undef
			label: mw.msg( 'regulartooltips-info-label' )
		};
	}
} );
</script>
