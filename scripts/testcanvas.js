/*global jQuery, setInterval, aap*/

var TestCanvas = (function ($) {
	'use strict';

	function degrees2radians(degrees) {
		return degrees * Math.PI / 180;
	}

	function radians2degrees(radians) {
		return radians * 180 / Math.PI;
	}

	function createFeature(raw_feature) {
		var feature_api,
			identifier,
			destroy = false,
			hide = false;

		feature_api = {
			getIdentifier: function () {
				if (aap.utils.isUndefined(identifier) === true) {
					identifier = aap.utils.createUniqueId();
				}

				return identifier;
			},

			draw: function (context) {
				if (hide === false) {
					raw_feature(context);
				}
			},

			show: function () {
				hide = false;
			},

			hide: function () {
				hide = false;
			},

			destroy: function () {
				destroy = true;
			}
		};

		return feature_api;
	}

	function createPlotter(canvas) {
		var plotter_api,
			features = {};

		plotter_api = {
			redraw: function () {
				var feature_identifier;

				canvas.clear();

				for (feature_identifier in features) {
					if (features.hasOwnProperty(feature_identifier)) {
						features[feature_identifier].draw(canvas.getContext());
					}
				}
			},
			addFeature: function (feature) {
				features[feature.getIdentifier()] = feature;
			},
			removeFeature: function (feature) {
				delete features[feature.getIdentifier()];
			}
		};

		setInterval(function () {
			plotter_api.redraw();
		}, 50);

		return plotter_api;
	}

	function createArc() {
		var x = 200,
			y = 200,
			radius = 50,
			start_angle = 0,
			step = 1,
			new_angle = 0,
			end_angle = 270;

		return function (context) {
			context.beginPath();
			context.moveTo(x, y);
			context.arc(x, y, radius, 0, degrees2radians(new_angle), false);
			context.closePath();
			context.fillStyle = '#0f0';
			context.fill();

			if (new_angle < end_angle) {
				new_angle += step;
			}
		};
	}

	return {
		init: function () {
			var canvas = aap.canvas.create('my-canvas', {
					width: 500,
					height: 500
				}, $('body')),
				plotter = createPlotter(canvas),
				arc = createFeature(createArc());

			plotter.addFeature(arc);
		}
	};
}(jQuery));