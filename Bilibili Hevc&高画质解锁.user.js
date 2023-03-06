// ==UserScript==
// @name               Bilibili Hevc&高画质解锁
// @name:zh-CN         Bilibili Hevc&高画质解锁
// @version            1.0
// @description        Bilibili Hevc&高画质解锁
// @description:zh-CN  Bilibili Hevc&高画质解锁
// @author             yudong2ao
// @namespace          https://github.com/yudong2ao/Bilibili-Hevc
// @homepageURL        https://github.com/yudong2ao/Bilibili-Hevc
// @supportURL         https://github.com/yudong2ao/Bilibili-Hevc
// @match              *://www.bilibili.com/bangumi/play/ep*
// @match              *://www.bilibili.com/bangumi/play/ss*
// @match              *://bangumi.bilibili.com/anime/*
// @match              *://bangumi.bilibili.com/movie/*
// @match              *://www.bilibili.com/bangumi/media/md*
// @match              *://www.bilibili.com/watchroom/*
// @match              *://www.bilibili.com/video/BV*
// @match              *://www.bilibili.com/video/bv*
// @match              *://www.bilibili.com/video/av*
// @match              *://www.bilibili.com/medialist/play/*
// @match              *://www.bilibili.com/watchlater/*
// @match              *://www.bilibili.com/list/watchlater*
// @match              *://www.bilibili.com/blackboard/html5player.html*
// @match              *://live.bilibili.com/*
// @icon               https://www.google.com/s2/favicons?domain=bilibili.com
// @license            MIT
// @run-at             document-start
// @grant              none
// ==/UserScript==
 
(function() {
    window.localStorage['bilibili_player_force_DolbyAtmos&8K&HDR'] = 1;
    'use strict';Object.defineProperty(navigator, 'userAgent', {
        value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.19041"
    });
 
})();