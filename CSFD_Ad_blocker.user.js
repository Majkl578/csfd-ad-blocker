// ==UserScript==
// @name        CSFD Ad blocker
// @namespace   http://majkl578.cz/
// @description Blocks annoying ads on csfd.cz.
// @include     http://www.csfd.cz/film/*
// @version     1.0
// ==/UserScript==

$(function () {
	for (var i = 0; i < VideoPlayer.instances.length; ++i) {
		VideoPlayer.instances[i]._clips.shift();
	}
});
