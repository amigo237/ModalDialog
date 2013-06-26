/*!
 * jQuery ModalDialog Plugin v1.0
 *
 * Copyright 2013 luzhao
 * Released under the MIT license
 */

(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as anonymous module.
		define(['jquery'], factory);
	} else {
		// Browser globals.
		factory(jQuery);
	}
}(function ($) {
	var $overLay = $(".md_overlay");

	var ModalDialog = {
		show: function( modalDialogNode ) {
			$modalDialog = $(modalDialogNode);
			$overLay = $modalDialog.parent();
			$overLay.addClass("md_overlay_show");
			$modalDialog.addClass("md_show");
		},

		hide: function( modalDialogNode ) {
			$modalDialog = $(modalDialogNode);
			$overLay = $modalDialog.parent();
			$overLay.removeClass("md_overlay_show");
			$modalDialog.removeClass("md_show");
		}
	};

	window["ModalDialog"] = window["ModalDialog"] || ModalDialog;

	return ModalDialog;
}));