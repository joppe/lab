/*global Lab, jQuery, aap*/

var Lab = (function ($) {
	'use strict';

	return {
		init: function () {
			var canvas = aap.canvas.create('canvas-lab', {
					width: 400,
					height: 400
				}, aap.dom.getCachedElement('body'));

			aap.preload('<img src="images/lenna.jpg">', function (image_properties) {
				var canvas_context = canvas.getContext('2d');

				canvas_context.drawImage(
					image_properties.content[0],
					0,
					0);

				$('<a>Black White</a>').appendTo(aap.dom.getCachedElement('body')).click(function (event) {
					var imgd = canvas_context.getImageData(0, 0, image_properties.width, image_properties.height),
						pix = imgd.data,
						i,
						n,
						grayscale;
					// source: http://spyrestudios.com/html5-canvas-image-effects-black-white/
					for (i = 0, n = pix.length; i < n; i += 4) {
					    grayscale = pix[i] * .3 + pix[i+1] * .59 + pix[i+2] * .11;
						pix[i] = grayscale;   // red
					    pix[i+1] = grayscale;   // green
					    pix[i+2] = grayscale;   // blue

					    // alpha

					    }

					    canvas_context.putImageData(imgd, 0, 0);

				});
			});
		}
	};
}(jQuery));