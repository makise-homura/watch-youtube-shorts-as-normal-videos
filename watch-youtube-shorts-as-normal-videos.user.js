// ==UserScript==
// @name     Watch Youtube shorts as normal videos
// @version  1
// @grant    none
// @author   makise-homura
// @include  https://www.youtube.com/shorts/*
// ==/UserScript==

window.location.replace(window.location.toString().replace('/shorts/','/watch?v='))
