!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.shevchenko=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

var Helpers = _dereq_("./helpers");
var Rules = _dereq_("./rules");
var Pos = _dereq_("./pos");

var Assert = Helpers.Assert;
var StringCaseMask = Helpers.StringCaseMask;
var Inflector = Rules.Inflector;
var Filter = Rules.Filter;
var Sort = Rules.Sort;

/**
 * Get a male gender name.
 *
 * @type {string}
 */
shevchenko.getGenderNameMale = function () {
  return "male";
};

/**
 * Get a female gender name.
 *
 * @type {string}
 */
shevchenko.getGenderNameFemale = function () {
  return "female";
};

/**
 * Get nominative case name.
 *
 * @type {string}
 */
shevchenko.getCaseNameNominative = function () {
  return "nominative";
};

/**
 * Get a genitive case name.
 *
 * @type {string}
 */
shevchenko.getCaseNameGenitive = function () {
  return "genitive";
};

/**
 * Get a dative case name.
 *
 * @type {string}
 */
shevchenko.getCaseNameDative = function () {
  return "dative";
};

/**
 * Get an accusative case name.
 *
 * @type {string}
 */
shevchenko.getCaseNameAccusative = function () {
  return "accusative";
};

/**
 * Get an ablative case name.
 *
 * @type {string}
 */
shevchenko.getCaseNameAblative = function () {
  return "ablative";
};

/**
 * Get a locative case name.
 *
 * @type {string}
 */
shevchenko.getCaseNameLocative = function () {
  return "locative";
};

/**
 * Get a vocative case name.
 *
 * @type {string}
 */
shevchenko.getCaseNameVocative = function () {
  return "vocative";
};

/**
 * Get an array of Rules.
 *
 * @returns {Array<Object>}
 */
shevchenko.getRules = function () {
  var Rules = [{ "description": "жіноче ім'я любов", "examples": ["любов"], "pos": "noun", "gender": ["female"], "priority": 10, "applications": ["firstName"], "regexp": { "find": "^любов$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "append", "value": "і" } }], "dative": [{ "0": { "type": "append", "value": "і" } }], "accusative": [], "ablative": [{ "0": { "type": "append", "value": "'ю" } }], "locative": [{ "0": { "type": "append", "value": "і" } }], "vocative": [{ "0": { "type": "append", "value": "е" } }] } }, { "description": "чоловіче ім'я ігор", "examples": ["ігор"], "pos": "noun", "gender": ["male"], "priority": 10, "applications": [], "regexp": { "find": "^ігор$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "append", "value": "я" } }], "dative": [{ "0": { "type": "append", "value": "ю" } }, { "0": { "type": "append", "value": "еві" } }], "accusative": [{ "0": { "type": "append", "value": "я" } }], "ablative": [{ "0": { "type": "append", "value": "ем" } }], "locative": [{ "0": { "type": "append", "value": "ю" } }, { "0": { "type": "append", "value": "еві" } }], "vocative": [{ "0": { "type": "append", "value": "ю" } }] } }, { "description": "чоловіче ім'я лазар", "examples": ["лазар"], "pos": "noun", "gender": ["male"], "priority": 10, "applications": [], "regexp": { "find": "^лазар$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "append", "value": "я" } }], "dative": [{ "0": { "type": "append", "value": "ю" } }, { "0": { "type": "append", "value": "еві" } }], "accusative": [{ "0": { "type": "append", "value": "я" } }], "ablative": [{ "0": { "type": "append", "value": "ем" } }], "locative": [{ "0": { "type": "append", "value": "ю" } }, { "0": { "type": "append", "value": "еві" } }], "vocative": [{ "0": { "type": "append", "value": "ю" } }] } }, { "description": "чоловіче ім'я федір", "examples": ["федір"], "pos": "noun", "gender": ["male"], "priority": 10, "applications": ["firstName"], "regexp": { "find": "^федір$", "modify": "(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "у" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }], "accusative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ом" } }], "locative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "у" } }], "vocative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "е" } }] } }, { "description": "друга відміна / чоловічий рід / м'яка група / на -(голосна)лець", "examples": ["стрілець"], "pos": "noun", "gender": ["male"], "priority": 6, "applications": [], "regexp": { "find": "(а|о|у|е|и|і)лець$", "modify": "(.{1})(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "ь" }, "2": { "type": "replace", "value": "я" } }], "dative": [{ "0": { "type": "replace", "value": "ь" }, "2": { "type": "replace", "value": "ю" } }, { "0": { "type": "replace", "value": "ь" }, "2": { "type": "replace", "value": "еві" } }], "accusative": [{ "0": { "type": "replace", "value": "ь" }, "2": { "type": "replace", "value": "я" } }], "ablative": [{ "0": { "type": "replace", "value": "ь" }, "2": { "type": "replace", "value": "ем" } }], "locative": [{ "0": { "type": "replace", "value": "ь" }, "2": { "type": "replace", "value": "ю" } }, { "0": { "type": "replace", "value": "ь" }, "2": { "type": "replace", "value": "еві" } }], "vocative": [{ "0": { "type": "replace", "value": "ь" }, "2": { "type": "replace", "value": "ю" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -батіг", "examples": ["батіг"], "pos": "noun", "gender": ["male"], "priority": 6, "applications": [], "regexp": { "find": "батіг$", "modify": "(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "у" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }], "accusative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ом" } }], "locative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "replace", "value": "зі" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }], "vocative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "replace", "value": "гу" } }] } }, { "description": "друга відміна / чоловічий рід / м'яка група / на -кріль", "examples": ["кріль"], "pos": "noun", "gender": ["male"], "priority": 6, "applications": [], "regexp": { "find": "кріль$", "modify": "(.{1})(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "о" }, "2": { "type": "replace", "value": "я" } }], "dative": [{ "0": { "type": "replace", "value": "о" }, "2": { "type": "replace", "value": "ю" } }, { "0": { "type": "replace", "value": "о" }, "2": { "type": "replace", "value": "еві" } }], "accusative": [{ "0": { "type": "replace", "value": "о" }, "2": { "type": "replace", "value": "я" } }], "ablative": [{ "0": { "type": "replace", "value": "о" }, "2": { "type": "replace", "value": "ем" } }], "locative": [{ "0": { "type": "replace", "value": "о" }, "2": { "type": "replace", "value": "ю" } }, { "0": { "type": "replace", "value": "о" }, "2": { "type": "replace", "value": "еві" } }], "vocative": [{ "0": { "type": "replace", "value": "о" }, "2": { "type": "replace", "value": "ю" } }] } }, { "description": "друга відміна / чоловічий рід / м'яка група / на -(голосна)(тверда_приголосна)ець", "examples": ["половець"], "pos": "noun", "gender": ["male"], "priority": 5, "applications": [], "regexp": { "find": "(а|о|у|е|и|і)(б|в|г|ґ|д|дз|дж|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)ець$", "modify": "(.{1})(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "" }, "2": { "type": "replace", "value": "я" } }], "dative": [{ "0": { "type": "replace", "value": "" }, "2": { "type": "replace", "value": "ю" } }, { "0": { "type": "replace", "value": "" }, "2": { "type": "replace", "value": "еві" } }], "accusative": [{ "0": { "type": "replace", "value": "" }, "2": { "type": "replace", "value": "я" } }], "ablative": [{ "0": { "type": "replace", "value": "" }, "2": { "type": "replace", "value": "ем" } }], "locative": [{ "0": { "type": "replace", "value": "" }, "2": { "type": "replace", "value": "ю" } }, { "0": { "type": "replace", "value": "" }, "2": { "type": "replace", "value": "еві" } }], "vocative": [{ "0": { "type": "replace", "value": "" }, "2": { "type": "replace", "value": "ю" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -куліш", "examples": ["поле"], "pos": "noun", "gender": ["male", "female"], "priority": 5, "applications": [], "regexp": { "find": "куліш$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "append", "value": "у" } }], "accusative": [{ "0": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "append", "value": "ем" } }], "locative": [{ "0": { "type": "append", "value": "еві" } }], "vocative": [{ "0": { "type": "append", "value": "е" } }] } }, { "description": "друга відміна / чоловічий рід / м'яка група / на -(тверда_приголосна)(тверда_приголосна)ець", "examples": ["жнець"], "pos": "noun", "gender": ["male"], "priority": 5, "applications": [], "regexp": { "find": "(б|в|г|ґ|д|дз|дж|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)(б|в|г|ґ|д|дз|дж|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)ець$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "я" } }], "dative": [{ "0": { "type": "replace", "value": "ю" } }, { "0": { "type": "replace", "value": "еві" } }], "accusative": [{ "0": { "type": "replace", "value": "я" } }], "ablative": [{ "0": { "type": "replace", "value": "ем" } }], "locative": [{ "0": { "type": "replace", "value": "ю" } }, { "0": { "type": "replace", "value": "еві" } }], "vocative": [{ "0": { "type": "replace", "value": "ю" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -кінь", "examples": ["кінь"], "pos": "noun", "gender": ["male"], "priority": 5, "applications": [], "regexp": { "find": "кінь$", "modify": "(.{1})(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "о" }, "2": { "type": "replace", "value": "я" } }], "dative": [{ "0": { "type": "replace", "value": "о" }, "2": { "type": "replace", "value": "ю" } }, { "0": { "type": "replace", "value": "о" }, "2": { "type": "replace", "value": "еві" } }], "accusative": [{ "0": { "type": "replace", "value": "о" }, "2": { "type": "replace", "value": "я" } }], "ablative": [{ "0": { "type": "replace", "value": "о" }, "2": { "type": "replace", "value": "ем" } }], "locative": [{ "0": { "type": "replace", "value": "о" }, "2": { "type": "replace", "value": "і" } }, { "0": { "type": "replace", "value": "о" }, "2": { "type": "replace", "value": "еві" } }], "vocative": [{ "0": { "type": "replace", "value": "о" }, "2": { "type": "replace", "value": "ю" } }] } }, { "description": "друга відміна / чоловічий рід / м'яка група / на -.бідь", "examples": ["лебідь"], "pos": "noun", "gender": ["male"], "priority": 5, "applications": [], "regexp": { "find": ".бідь$", "modify": "(.{1})(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "е" }, "2": { "type": "replace", "value": "я" } }], "dative": [{ "0": { "type": "replace", "value": "е" }, "2": { "type": "replace", "value": "ю" } }, { "0": { "type": "replace", "value": "е" }, "2": { "type": "replace", "value": "еві" } }], "accusative": [{ "0": { "type": "replace", "value": "е" }, "2": { "type": "replace", "value": "я" } }], "ablative": [{ "0": { "type": "replace", "value": "е" }, "2": { "type": "replace", "value": "ем" } }], "locative": [{ "0": { "type": "replace", "value": "е" }, "2": { "type": "replace", "value": "ю" } }, { "0": { "type": "replace", "value": "е" }, "2": { "type": "replace", "value": "еві" } }], "vocative": [{ "0": { "type": "replace", "value": "е" }, "2": { "type": "replace", "value": "ю" } }] } }, { "description": "друга відміна / чоловічий рід / м'яка група / на -.мінь", "examples": ["кремінь"], "pos": "noun", "gender": ["male"], "priority": 5, "applications": [], "regexp": { "find": ".мінь$", "modify": "(.{1})(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "е" }, "2": { "type": "replace", "value": "я" } }], "dative": [{ "0": { "type": "replace", "value": "е" }, "2": { "type": "replace", "value": "ю" } }, { "0": { "type": "replace", "value": "е" }, "2": { "type": "replace", "value": "еві" } }], "accusative": [{ "0": { "type": "replace", "value": "е" }, "2": { "type": "replace", "value": "я" } }], "ablative": [{ "0": { "type": "replace", "value": "е" }, "2": { "type": "replace", "value": "ем" } }], "locative": [{ "0": { "type": "replace", "value": "е" }, "2": { "type": "replace", "value": "ю" } }, { "0": { "type": "replace", "value": "е" }, "2": { "type": "replace", "value": "еві" } }], "vocative": [{ "0": { "type": "replace", "value": "е" }, "2": { "type": "replace", "value": "ю" } }] } }, { "description": "слово сіль", "examples": ["сіль"], "pos": "noun", "gender": ["male"], "priority": 5, "applications": ["lastName"], "regexp": { "find": "^сіль$", "modify": "(.{1})(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "о" }, "2": { "type": "replace", "value": "і" } }], "dative": [{ "0": { "type": "replace", "value": "о" }, "2": { "type": "replace", "value": "і" } }], "accusative": [], "ablative": [{ "2": { "type": "replace", "value": "лю" } }], "locative": [{ "0": { "type": "replace", "value": "о" }, "2": { "type": "replace", "value": "і" } }], "vocative": [{ "0": { "type": "replace", "value": "о" }, "2": { "type": "replace", "value": "е" } }] } }, { "description": "друга відміна / чоловічий рід / м'яка група / на -сіль", "examples": ["кисіль"], "pos": "noun", "gender": ["male"], "priority": 5, "applications": [], "regexp": { "find": "сіль$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "я" } }], "dative": [{ "0": { "type": "replace", "value": "ю" } }, { "0": { "type": "replace", "value": "еві" } }], "accusative": [{ "0": { "type": "replace", "value": "я" } }], "ablative": [{ "0": { "type": "replace", "value": "ем" } }], "locative": [{ "0": { "type": "replace", "value": "ю" } }, { "0": { "type": "replace", "value": "еві" } }], "vocative": [{ "0": { "type": "replace", "value": "ю" } }] } }, { "description": "друга відміна / чоловічий рід / м'яка група / на -.міль", "examples": ["хміль"], "pos": "noun", "gender": ["male"], "priority": 5, "applications": [], "regexp": { "find": ".міль$", "modify": "(.{1})(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "е" }, "2": { "type": "replace", "value": "я" } }], "dative": [{ "0": { "type": "replace", "value": "е" }, "2": { "type": "replace", "value": "ю" } }], "accusative": [{ "0": { "type": "replace", "value": "е" }, "2": { "type": "replace", "value": "я" } }], "ablative": [{ "0": { "type": "replace", "value": "е" }, "2": { "type": "replace", "value": "ем" } }], "locative": [{ "0": { "type": "replace", "value": "е" }, "2": { "type": "replace", "value": "ю" } }], "vocative": [{ "0": { "type": "replace", "value": "е" }, "2": { "type": "replace", "value": "е" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -.ків", "examples": ["яків"], "pos": "noun", "gender": ["male"], "priority": 4, "applications": [], "regexp": { "find": ".ків$", "modify": "(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "у" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }], "accusative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ом" } }], "locative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "і" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }], "vocative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "е" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -віз", "examples": ["узвіз"], "pos": "noun", "gender": ["male"], "priority": 4, "applications": [], "regexp": { "find": "віз$", "modify": "(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "у" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }], "accusative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ом" } }], "locative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "і" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }], "vocative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "е" } }] } }, { "description": "жіночий рід / на -ова", "examples": ["іванова"], "pos": "adjective", "gender": ["female"], "priority": 4, "applications": ["lastName"], "regexp": { "find": "ова$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "ої" } }], "dative": [{ "0": { "type": "replace", "value": "ій" } }], "accusative": [{ "0": { "type": "replace", "value": "у" } }], "ablative": [{ "0": { "type": "replace", "value": "ою" } }], "locative": [{ "0": { "type": "replace", "value": "ій" } }], "vocative": [] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -.(к|р)іп", "examples": ["прокіп"], "pos": "noun", "gender": ["male"], "priority": 4, "applications": [], "regexp": { "find": ".(к|р)іп$", "modify": "(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "у" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }], "accusative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ом" } }], "locative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "і" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }], "vocative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "е" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -піп", "examples": ["прокіп"], "pos": "noun", "gender": ["male"], "priority": 4, "applications": [], "regexp": { "find": "піп$", "modify": "(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "у" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }], "accusative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ом" } }], "locative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "і" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }], "vocative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "е" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -рід", "examples": ["рід"], "pos": "noun", "gender": ["male"], "priority": 4, "applications": [], "regexp": { "find": "рід$", "modify": "(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "у" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }], "accusative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ом" } }], "locative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "і" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }], "vocative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "е" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -ніс", "examples": ["кривоніс"], "pos": "noun", "gender": ["male"], "priority": 4, "applications": [], "regexp": { "find": "ніс$", "modify": "(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "у" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }], "accusative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ом" } }], "locative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "і" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }], "vocative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "е" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -зір", "examples": ["дивозір"], "pos": "noun", "gender": ["male"], "priority": 4, "applications": [], "regexp": { "find": "зір$", "modify": "(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "у" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }], "accusative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ом" } }], "locative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "і" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }], "vocative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "е" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -віл", "examples": ["рябовіл"], "pos": "noun", "gender": ["male"], "priority": 4, "applications": [], "regexp": { "find": "віл$", "modify": "(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "у" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }], "accusative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ом" } }], "locative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "і" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }], "vocative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "е" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -ріг", "examples": ["пиріг"], "pos": "noun", "gender": ["male"], "priority": 4, "applications": [], "regexp": { "find": "ріг$", "modify": "(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "у" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }], "accusative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ом" } }], "locative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "replace", "value": "зі" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }], "vocative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "у" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -хід", "examples": ["прихід"], "pos": "noun", "gender": ["male"], "priority": 4, "applications": [], "regexp": { "find": "хід$", "modify": "(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "у" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }], "accusative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ом" } }], "locative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "і" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }], "vocative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "е" } }] } }, { "description": "перша відміна / чоловічий, жіночий рід / м'яка група / на -ння", "examples": ["кохання"], "pos": "noun", "gender": ["male", "female"], "priority": 4, "applications": [], "regexp": { "find": "ння$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [], "dative": [{ "0": { "type": "replace", "value": "ю" } }], "accusative": [], "ablative": [{ "0": { "type": "append", "value": "м" } }], "locative": [{ "0": { "type": "replace", "value": "і" } }], "vocative": [{ "0": { "type": "replace", "value": "я" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -тер", "examples": ["вітер"], "pos": "noun", "gender": ["male"], "priority": 4, "applications": [], "regexp": { "find": "тер$", "modify": "(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "" }, "1": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "replace", "value": "" }, "1": { "type": "append", "value": "у" } }], "accusative": [{ "0": { "type": "replace", "value": "" }, "1": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "replace", "value": "" }, "1": { "type": "append", "value": "ом" } }], "locative": [{ "0": { "type": "replace", "value": "" }, "1": { "type": "append", "value": "ові" } }], "vocative": [{ "0": { "type": "replace", "value": "" }, "1": { "type": "append", "value": "е" } }] } }, { "description": "жіночий рід / на -іна", "examples": ["зеленкіна"], "pos": "adjective", "gender": ["female"], "priority": 4, "applications": ["lastName"], "regexp": { "find": "іна$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "ої" } }], "dative": [{ "0": { "type": "replace", "value": "ій" } }], "accusative": [{ "0": { "type": "replace", "value": "у" } }], "ablative": [{ "0": { "type": "replace", "value": "ою" } }], "locative": [{ "0": { "type": "replace", "value": "ій" } }], "vocative": [] } }, { "description": "чоловічі імена / на -(в|д)ір", "examples": ["дір", "вір"], "pos": "noun", "gender": ["male"], "priority": 4, "applications": [], "regexp": { "find": "(в|д)ір$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "append", "value": "у" } }, { "0": { "type": "append", "value": "ові" } }], "accusative": [{ "0": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "append", "value": "ом" } }], "locative": [{ "0": { "type": "append", "value": "ові" } }, { "0": { "type": "append", "value": "у" } }], "vocative": [{ "0": { "type": "append", "value": "е" } }] } }, { "description": "перша відміна / чоловічий рід / тверда група / на -світ", "examples": ["світ"], "pos": "noun", "gender": ["male"], "priority": 4, "applications": [], "regexp": { "find": "світ$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "append", "value": "у" } }], "accusative": [{ "0": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "append", "value": "ом" } }], "locative": [{ "0": { "type": "append", "value": "ові" } }], "vocative": [{ "0": { "type": "append", "value": "е" } }] } }, { "description": "друга відміна / чоловічий рід / м'яка група / на -(голосна)єць", "examples": ["заєць"], "pos": "noun", "gender": ["male"], "priority": 4, "applications": [], "regexp": { "find": "(а|о|у|е|и|і)єць$", "modify": "(.{1})(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "й" }, "2": { "type": "replace", "value": "я" } }], "dative": [{ "0": { "type": "replace", "value": "й" }, "2": { "type": "replace", "value": "ю" } }, { "0": { "type": "replace", "value": "й" }, "2": { "type": "replace", "value": "еві" } }], "accusative": [{ "0": { "type": "replace", "value": "й" }, "2": { "type": "replace", "value": "я" } }], "ablative": [{ "0": { "type": "replace", "value": "й" }, "2": { "type": "replace", "value": "ем" } }], "locative": [{ "0": { "type": "replace", "value": "й" }, "2": { "type": "replace", "value": "ю" } }, { "0": { "type": "replace", "value": "й" }, "2": { "type": "replace", "value": "еві" } }], "vocative": [{ "0": { "type": "replace", "value": "й" }, "2": { "type": "replace", "value": "ю" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -кіт", "examples": ["кіт"], "pos": "noun", "gender": ["male"], "priority": 4, "applications": [], "regexp": { "find": "кіт$", "modify": "(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "у" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }], "accusative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ом" } }], "locative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "і" } }, { "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ові" } }], "vocative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "е" } }] } }, { "description": "жіночий рід / на -(тверда_приголосна)ька", "examples": ["ільницька", "сумська"], "pos": "adjective", "gender": ["female"], "priority": 4, "applications": ["lastName"], "regexp": { "find": "(б|в|г|ґ|д|дз|дж|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)ька$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "ої" } }], "dative": [{ "0": { "type": "replace", "value": "ій" } }], "accusative": [{ "0": { "type": "replace", "value": "у" } }], "ablative": [{ "0": { "type": "replace", "value": "ою" } }], "locative": [{ "0": { "type": "replace", "value": "ій" } }], "vocative": [] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -ишин", "examples": ["ковалишин"], "pos": "noun", "gender": ["male"], "priority": 4, "applications": [], "regexp": { "find": "ишин$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "append", "value": "у" } }], "accusative": [{ "0": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "append", "value": "им" } }], "locative": [{ "0": { "type": "append", "value": "у" } }], "vocative": [{ "0": { "type": "append", "value": "е" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -га", "examples": ["нога"], "pos": "noun", "gender": ["male"], "priority": 3, "applications": [], "regexp": { "find": "га$", "modify": "(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "1": { "type": "replace", "value": "и" } }], "dative": [{ "0": { "type": "replace", "value": "з" }, "1": { "type": "replace", "value": "і" } }], "accusative": [{ "1": { "type": "replace", "value": "у" } }], "ablative": [{ "1": { "type": "replace", "value": "ою" } }], "locative": [{ "0": { "type": "replace", "value": "з" }, "1": { "type": "replace", "value": "і" } }], "vocative": [{ "1": { "type": "replace", "value": "о" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -ен", "examples": ["семен"], "pos": "noun", "gender": ["male"], "priority": 3, "applications": [], "regexp": { "find": "ен$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "append", "value": "у" } }], "accusative": [{ "0": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "append", "value": "ом" } }], "locative": [{ "0": { "type": "append", "value": "ові" } }], "vocative": [{ "0": { "type": "append", "value": "е" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -кіш", "examples": ["розкіш"], "pos": "noun", "gender": ["male"], "priority": 3, "applications": [], "regexp": { "find": "кіш$", "modify": "(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "еві" } }], "accusative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "ем" } }], "locative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "еві" } }], "vocative": [{ "0": { "type": "replace", "value": "о" }, "1": { "type": "append", "value": "е" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -пес", "examples": ["пес"], "pos": "noun", "gender": ["male"], "priority": 3, "applications": [], "regexp": { "find": "пес$", "modify": "(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "" }, "1": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "replace", "value": "" }, "1": { "type": "append", "value": "у" } }], "accusative": [{ "0": { "type": "replace", "value": "" }, "1": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "replace", "value": "" }, "1": { "type": "append", "value": "ом" } }], "locative": [{ "0": { "type": "replace", "value": "" }, "1": { "type": "append", "value": "ові" } }], "vocative": [{ "0": { "type": "replace", "value": "" }, "1": { "type": "append", "value": "е" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -(их|аго|ово)", "examples": ["бряних"], "pos": "noun", "gender": ["male"], "priority": 3, "applications": [], "regexp": { "find": "(их|аго|ово)$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [], "dative": [], "accusative": [], "ablative": [], "locative": [], "vocative": [] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -х", "examples": ["кожух"], "pos": "noun", "gender": ["male"], "priority": 2, "applications": [], "regexp": { "find": "х$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "append", "value": "у" } }, { "0": { "type": "append", "value": "ові" } }], "accusative": [{ "0": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "append", "value": "ом" } }], "locative": [{ "0": { "type": "append", "value": "ові" } }], "vocative": [{ "0": { "type": "append", "value": "у" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -яр", "examples": ["скляр"], "pos": "noun", "gender": ["male"], "priority": 2, "applications": [], "regexp": { "find": "яр$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "append", "value": "у" } }, { "0": { "type": "append", "value": "еві" } }], "accusative": [{ "0": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "append", "value": "ем" } }], "locative": [{ "0": { "type": "append", "value": "еві" } }, { "0": { "type": "append", "value": "у" } }], "vocative": [{ "0": { "type": "append", "value": "е" } }] } }, { "description": "друга відміна / чоловічий рід / м'яка група / на -ьо", "examples": ["іваньо", "кузьо"], "pos": "noun", "gender": ["male"], "priority": 2, "applications": [], "regexp": { "find": "ьо$", "modify": "(.{2})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "я" } }], "dative": [{ "0": { "type": "replace", "value": "ю" } }], "accusative": [{ "0": { "type": "replace", "value": "я" } }], "ablative": [{ "0": { "type": "append", "value": "м" } }], "locative": [{ "0": { "type": "replace", "value": "ю" } }], "vocative": [] } }, { "description": "друга відміна / чоловічий рід / тверда, м'яка група / на -(о|ь|приголосна)", "examples": ["шевченко"], "pos": "noun", "gender": ["female"], "priority": 2, "applications": [], "regexp": { "find": "(о|ь|(б|в|г|ґ|д|дз|дж|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ))$", "modify": "(.{2})$" }, "cases": { "nominative": [], "genitive": [], "dative": [], "accusative": [], "ablative": [], "locative": [], "vocative": [] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -ок", "examples": ["сашок"], "pos": "noun", "gender": ["male"], "priority": 2, "applications": [], "regexp": { "find": "ок$", "modify": "(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "" }, "1": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "replace", "value": "" }, "1": { "type": "append", "value": "у" } }, { "0": { "type": "replace", "value": "" }, "1": { "type": "append", "value": "ові" } }], "accusative": [{ "0": { "type": "replace", "value": "" }, "1": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "replace", "value": "" }, "1": { "type": "append", "value": "ом" } }], "locative": [{ "0": { "type": "replace", "value": "" }, "1": { "type": "append", "value": "ові" } }], "vocative": [{ "0": { "type": "replace", "value": "" }, "1": { "type": "append", "value": "у" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -е(тверда_прилосона)", "examples": ["марек"], "pos": "noun", "gender": ["male"], "priority": 2, "applications": [], "regexp": { "find": "е(б|в|г|ґ|д|дз|дж|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "append", "value": "у" } }], "accusative": [{ "0": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "append", "value": "ом" } }], "locative": [{ "0": { "type": "append", "value": "ові" } }], "vocative": [{ "0": { "type": "append", "value": "у" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група/ на -ов", "examples": ["павлов"], "pos": "noun", "gender": ["male"], "priority": 2, "applications": ["lastName"], "regexp": { "find": "ов$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "append", "value": "у" } }], "accusative": [{ "0": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "append", "value": "им" } }], "locative": [{ "0": { "type": "append", "value": "у" } }], "vocative": [{ "0": { "type": "append", "value": "е" } }] } }, { "description": "жіночі імена / на -(тверда_приголосна)я", "examples": ["неля"], "pos": "noun", "gender": ["female"], "priority": 2, "applications": ["firstName"], "regexp": { "find": "(б|в|г|ґ|д|дз|дж|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)я$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "і" } }], "dative": [{ "0": { "type": "replace", "value": "і" } }], "accusative": [{ "0": { "type": "replace", "value": "ю" } }], "ablative": [{ "0": { "type": "replace", "value": "ею" } }], "locative": [{ "0": { "type": "replace", "value": "і" } }], "vocative": [{ "0": { "type": "replace", "value": "ю" } }] } }, { "description": "жіночі по батькові / на -на", "examples": ["юріївна"], "pos": "noun", "gender": ["female"], "priority": 2, "applications": ["middleName"], "regexp": { "find": "на$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "и" } }], "dative": [{ "0": { "type": "replace", "value": "і" } }], "accusative": [{ "0": { "type": "replace", "value": "у" } }], "ablative": [{ "0": { "type": "replace", "value": "ою" } }], "locative": [{ "0": { "type": "replace", "value": "і" } }], "vocative": [{ "0": { "type": "replace", "value": "о" } }] } }, { "description": "друга відміна / чоловічий рід / м'яка група / на -(тверда_приголосна)я", "examples": ["гмиря"], "pos": "noun", "gender": ["male", "female"], "priority": 2, "applications": [], "regexp": { "find": "(б|в|г|ґ|д|дз|дж|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)я$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "і" } }], "dative": [{ "0": { "type": "replace", "value": "і" } }], "accusative": [{ "0": { "type": "replace", "value": "ю" } }], "ablative": [{ "0": { "type": "replace", "value": "ею" } }], "locative": [{ "0": { "type": "replace", "value": "і" } }], "vocative": [{ "0": { "type": "replace", "value": "е" } }] } }, { "description": "друга відміна / чоловічий, жіночий роди / м'яка група / на -(і|ь)я", "examples": ["юлія"], "pos": "noun", "gender": ["male", "female"], "priority": 2, "applications": [], "regexp": { "find": "(і|ь)я$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "ї" } }], "dative": [{ "0": { "type": "replace", "value": "ї" } }], "accusative": [{ "0": { "type": "replace", "value": "ю" } }], "ablative": [{ "0": { "type": "replace", "value": "єю" } }], "locative": [{ "0": { "type": "replace", "value": "ї" } }], "vocative": [{ "0": { "type": "replace", "value": "є" } }] } }, { "description": "друга відміна / чоловічий рід / мішана група / на -(дж|ж|ч|ш)", "examples": ["януш", "джордж"], "pos": "noun", "gender": ["male"], "priority": 2, "applications": [], "regexp": { "find": "(дж|ж|ч|ш)$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "append", "value": "у" } }, { "0": { "type": "append", "value": "еві" } }], "accusative": [{ "0": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "append", "value": "ем" } }], "locative": [{ "0": { "type": "append", "value": "еві" } }, { "0": { "type": "append", "value": "і" } }, { "0": { "type": "append", "value": "у" } }], "vocative": [{ "0": { "type": "append", "value": "е" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -ко", "examples": ["марко"], "pos": "noun", "gender": ["male"], "priority": 2, "applications": [], "regexp": { "find": "ко$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "а" } }], "dative": [{ "0": { "type": "replace", "value": "у" } }, { "0": { "type": "replace", "value": "ові" } }], "accusative": [{ "0": { "type": "replace", "value": "а" } }], "ablative": [{ "0": { "type": "replace", "value": "ом" } }], "locative": [{ "0": { "type": "replace", "value": "ові" } }, { "0": { "type": "replace", "value": "у" } }], "vocative": [{ "0": { "type": "replace", "value": "у" } }] } }, { "description": "перша відміна / чоловічий, жіночий роди / мішана група / на -а", "examples": ["мойша"], "pos": "noun", "gender": ["male", "female"], "priority": 2, "applications": [], "regexp": { "find": "(дж|ж|ч|ш)а$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "і" } }], "dative": [{ "0": { "type": "replace", "value": "і" } }], "accusative": [{ "0": { "type": "replace", "value": "у" } }], "ablative": [{ "0": { "type": "replace", "value": "ею" } }], "locative": [{ "0": { "type": "replace", "value": "і" } }], "vocative": [{ "0": { "type": "replace", "value": "о" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -к", "examples": ["кузик", "мисяк"], "pos": "noun", "gender": ["male"], "priority": 2, "applications": [], "regexp": { "find": "к$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "append", "value": "у" } }, { "0": { "type": "append", "value": "ові" } }], "accusative": [{ "0": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "append", "value": "ом" } }], "locative": [{ "0": { "type": "append", "value": "ові" } }, { "0": { "type": "append", "value": "у" } }], "vocative": [{ "0": { "type": "append", "value": "у" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -ів", "examples": ["ковалів"], "pos": "noun", "gender": ["male"], "priority": 2, "applications": ["lastName"], "regexp": { "find": "ів$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "append", "value": "у" } }], "accusative": [{ "0": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "append", "value": "им" } }], "locative": [{ "0": { "type": "append", "value": "у" } }], "vocative": [{ "0": { "type": "append", "value": "е" } }] } }, { "description": "жіночий рід / на -(тверда_приголосна)а", "examples": ["зелена"], "pos": "adjective", "gender": ["female"], "priority": 2, "applications": ["lastName"], "regexp": { "find": "(б|в|г|ґ|д|дз|дж|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)а$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "ої" } }], "dative": [{ "0": { "type": "replace", "value": "ій" } }], "accusative": [{ "0": { "type": "replace", "value": "у" } }], "ablative": [{ "0": { "type": "replace", "value": "ою" } }], "locative": [{ "0": { "type": "replace", "value": "ій" } }], "vocative": [] } }, { "description": "перша відміна / чоловічий рід / тверда група / на -ле", "examples": ["поле"], "pos": "noun", "gender": ["male", "female"], "priority": 2, "applications": [], "regexp": { "find": "ле$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "я" } }], "dative": [{ "0": { "type": "replace", "value": "ю" } }], "accusative": [{ "0": { "type": "replace", "value": "е" } }], "ablative": [{ "0": { "type": "replace", "value": "ем" } }], "locative": [{ "0": { "type": "replace", "value": "і" } }], "vocative": [] } }, { "description": "перша відміна / чоловічий, жіночий роди / тверда група / на -ха", "examples": ["старуха"], "pos": "noun", "gender": ["male", "female"], "priority": 2, "applications": [], "regexp": { "find": "ха$", "modify": "(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "1": { "type": "replace", "value": "и" } }], "dative": [{ "0": { "type": "replace", "value": "с" }, "1": { "type": "replace", "value": "і" } }], "accusative": [{ "1": { "type": "replace", "value": "у" } }], "ablative": [{ "1": { "type": "replace", "value": "ою" } }], "locative": [{ "0": { "type": "replace", "value": "с" }, "1": { "type": "replace", "value": "і" } }], "vocative": [{ "1": { "type": "replace", "value": "о" } }, { "1": { "type": "replace", "value": "а" } }] } }, { "description": "перша відміна / чоловічий, жіночий роди / тверда група / на -ка", "examples": ["прилука"], "pos": "noun", "gender": ["male", "female"], "priority": 2, "applications": [], "regexp": { "find": "ка$", "modify": "(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "1": { "type": "replace", "value": "и" } }], "dative": [{ "0": { "type": "replace", "value": "ц" }, "1": { "type": "replace", "value": "і" } }], "accusative": [{ "1": { "type": "replace", "value": "у" } }], "ablative": [{ "1": { "type": "replace", "value": "ою" } }], "locative": [{ "0": { "type": "replace", "value": "ц" }, "1": { "type": "replace", "value": "і" } }], "vocative": [{ "1": { "type": "replace", "value": "о" } }, { "1": { "type": "replace", "value": "а" } }] } }, { "description": "жіночий рід / на -(тверда_приголосна)я", "examples": ["задорожня"], "pos": "adjective", "gender": ["female"], "priority": 2, "applications": ["lastName"], "regexp": { "find": "(б|в|г|ґ|д|дз|дж|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)я$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "ьої" } }], "dative": [{ "0": { "type": "replace", "value": "ій" } }], "accusative": [{ "0": { "type": "replace", "value": "ю" } }], "ablative": [{ "0": { "type": "replace", "value": "ьою" } }], "locative": [{ "0": { "type": "replace", "value": "ій" } }], "vocative": [] } }, { "description": "перша відміна / чоловічий, жіночий рід / тверда група / на -йо", "examples": ["йойо"], "pos": "noun", "gender": ["male"], "priority": 2, "applications": [], "regexp": { "find": "йо$", "modify": "(.{2})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "я" } }], "dative": [{ "0": { "type": "append", "value": "ві" } }], "accusative": [{ "0": { "type": "replace", "value": "я" } }], "ablative": [{ "0": { "type": "append", "value": "м" } }], "locative": [{ "0": { "type": "append", "value": "ві" } }], "vocative": [] } }, { "description": "чоловічі по батькові та прізвища / на -ич", "examples": ["валерійович", "риндич"], "pos": "noun", "gender": ["male"], "priority": 2, "applications": ["middleName", "lastName"], "regexp": { "find": "ич$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "append", "value": "у" } }], "accusative": [{ "0": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "append", "value": "ем" } }], "locative": [{ "0": { "type": "append", "value": "у" } }], "vocative": [{ "0": { "type": "append", "value": "у" } }] } }, { "description": "перша відміна / чоловічий, жіночий рід / тверда група / на -(тверда_приголосна)о", "examples": ["петро", "павло"], "pos": "noun", "gender": ["male", "female"], "priority": 2, "applications": [], "regexp": { "find": "(б|в|г|ґ|д|дз|дж|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)о$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "а" } }], "dative": [{ "0": { "type": "replace", "value": "у" } }], "accusative": [{ "0": { "type": "replace", "value": "а" } }], "ablative": [{ "0": { "type": "replace", "value": "ом" } }], "locative": [{ "0": { "type": "replace", "value": "ові" } }], "vocative": [{ "0": { "type": "replace", "value": "е" } }] } }, { "description": "чоловічий рід / на -ий", "examples": ["сухомлинський"], "pos": "adjective", "gender": ["male"], "priority": 2, "applications": ["lastName"], "regexp": { "find": "ий$", "modify": "(.{2})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "ого" } }], "dative": [{ "0": { "type": "replace", "value": "ому" } }], "accusative": [{ "0": { "type": "replace", "value": "ого" } }], "ablative": [{ "0": { "type": "replace", "value": "им" } }], "locative": [{ "0": { "type": "replace", "value": "ому" } }], "vocative": [] } }, { "description": "перша відміна / чоловічий, жіночий рід / м'яка група / на -ь", "examples": ["петрунь"], "pos": "noun", "gender": ["male", "female"], "priority": 1, "applications": [], "regexp": { "find": "ь$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "я" } }], "dative": [{ "0": { "type": "replace", "value": "ю" } }], "accusative": [{ "0": { "type": "replace", "value": "я" } }], "ablative": [{ "0": { "type": "replace", "value": "ем" } }], "locative": [{ "0": { "type": "replace", "value": "еві" } }], "vocative": [{ "0": { "type": "replace", "value": "ю" } }] } }, { "description": "перша відміна / жіночий рід / тверда група / на -(г|ґ)а", "examples": ["ольга"], "pos": "noun", "gender": ["female"], "priority": 1, "applications": [], "regexp": { "find": "(г|ґ)а$", "modify": "(.{1})(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "1": { "type": "replace", "value": "и" } }], "dative": [{ "0": { "type": "replace", "value": "з" }, "1": { "type": "replace", "value": "і" } }], "accusative": [{ "1": { "type": "replace", "value": "у" } }], "ablative": [{ "1": { "type": "replace", "value": "ою" } }], "locative": [{ "0": { "type": "replace", "value": "з" }, "1": { "type": "replace", "value": "і" } }], "vocative": [{ "1": { "type": "replace", "value": "о" } }] } }, { "description": "друга відміна / чоловічий, жіночий роди / на -е", "examples": ["прізвище"], "pos": "noun", "gender": ["male", "female"], "priority": 1, "applications": [], "regexp": { "find": "е$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "а" } }], "dative": [{ "0": { "type": "replace", "value": "у" } }], "accusative": [], "ablative": [{ "0": { "type": "replace", "value": "ем" } }], "locative": [{ "0": { "type": "replace", "value": "і" } }], "vocative": [] } }, { "description": "друга відміна / чоловічий рід / м'яка група / на -й", "examples": ["валерій"], "pos": "noun", "gender": ["male"], "priority": 1, "applications": [], "regexp": { "find": "й$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "я" } }], "dative": [{ "0": { "type": "replace", "value": "ю" } }, { "0": { "type": "replace", "value": "єві" } }], "accusative": [{ "0": { "type": "replace", "value": "я" } }], "ablative": [{ "0": { "type": "replace", "value": "єм" } }], "locative": [{ "0": { "type": "replace", "value": "єві" } }, { "0": { "type": "replace", "value": "ю" } }, { "0": { "type": "replace", "value": "ї" } }], "vocative": [{ "0": { "type": "replace", "value": "ю" } }] } }, { "description": "перша відміна / чоловічий, жіночий роди / тверда група / на -а", "examples": ["анна"], "pos": "noun", "gender": ["male", "female"], "priority": 1, "applications": [], "regexp": { "find": "а$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "replace", "value": "и" } }], "dative": [{ "0": { "type": "replace", "value": "і" } }], "accusative": [{ "0": { "type": "replace", "value": "у" } }], "ablative": [{ "0": { "type": "replace", "value": "ою" } }], "locative": [{ "0": { "type": "replace", "value": "і" } }], "vocative": [{ "0": { "type": "replace", "value": "о" } }] } }, { "description": "друга відміна / чоловічий рід / тверда група / на -(тверда_приголосна)", "examples": ["олександр"], "pos": "noun", "gender": ["male"], "priority": 1, "applications": [], "regexp": { "find": "(б|в|г|ґ|д|дз|дж|ж|з|к|л|м|н|п|р|с|т|ф|х|ц|ч|ш|щ)$", "modify": "(.{1})$" }, "cases": { "nominative": [], "genitive": [{ "0": { "type": "append", "value": "а" } }], "dative": [{ "0": { "type": "append", "value": "у" } }, { "0": { "type": "append", "value": "ові" } }], "accusative": [{ "0": { "type": "append", "value": "а" } }], "ablative": [{ "0": { "type": "append", "value": "ом" } }], "locative": [{ "0": { "type": "append", "value": "ові" } }, { "0": { "type": "append", "value": "у" } }], "vocative": [{ "0": { "type": "append", "value": "е" } }] } }];
  return Rules.slice(0);
};

/**
 * Get an array of gender names.
 *
 * @returns {Array<string>}
 */
shevchenko.getGenderNames = function () {
  var genderNames = [shevchenko.getGenderNameMale(), shevchenko.getGenderNameFemale()];
  return genderNames.slice(0);
};

/**
 * Get an array of case names.
 *
 * @returns {Array<string>}
 */
shevchenko.getCaseNames = function () {
  var caseNames = [shevchenko.getCaseNameNominative(), shevchenko.getCaseNameGenitive(), shevchenko.getCaseNameDative(), shevchenko.getCaseNameAccusative(), shevchenko.getCaseNameAblative(), shevchenko.getCaseNameLocative(), shevchenko.getCaseNameVocative()];
  return caseNames.slice(0);
};

/**
 * Inflect the person's first, last and middle names in a nominative case.
 *
 * @param {Object} person
 * @returns {Object}
 */
shevchenko.inNominative = function (person) {
  return shevchenko(person, shevchenko.getCaseNameNominative());
};

/**
 * Inflect the person's first, last and middle names in a genitive case.
 *
 * @param {Object} person
 * @returns {Object}
 */
shevchenko.inGenitive = function (person) {
  return shevchenko(person, shevchenko.getCaseNameGenitive());
};

/**
 * Inflect the person's first, last and middle names in a dative case.
 *
 * @param {Object} person
 * @returns {Object}
 */
shevchenko.inDative = function (person) {
  return shevchenko(person, shevchenko.getCaseNameDative());
};

/**
 * Inflect the person's first, last and middle names in an accusative case.
 *
 * @param {Object} person
 * @returns {Object}
 */
shevchenko.inAccusative = function (person) {
  return shevchenko(person, shevchenko.getCaseNameAccusative());
};

/**
 * Inflect the person's first, last and middle names in an ablative case.
 *
 * @param {Object} person
 * @returns {Object}
 */
shevchenko.inAblative = function (person) {
  return shevchenko(person, shevchenko.getCaseNameAblative());
};

/**
 * Inflect the person's first, last and middle names in a locative case.
 *
 * @param {Object} person
 * @returns {Object}
 */
shevchenko.inLocative = function (person) {
  return shevchenko(person, shevchenko.getCaseNameLocative());
};

/**
 * Inflect the person's first, last and middle names in a vocative case.
 *
 * @param {Object} person
 * @returns {Object}
 */
shevchenko.inVocative = function (person) {
  return shevchenko(person, shevchenko.getCaseNameVocative());
};

/**
 * Inflect the person's first, last and middle names in all cases.
 *
 * @param {Object} person
 * @return {Object}
 */
shevchenko.inAll = function (person) {
  var results = {};
  shevchenko.getCaseNames().forEach(function (caseName) {
    return results[caseName] = shevchenko(person, caseName);
  });
  return results;
};

/**
 * Inflect the person's first, last and middle names.
 *
 * @example var result = shevchenko({
 *     gender: "male",  // or "female"
 *     lastName: "Шевченко",
 *     firstName: "Тарас",
 *     middleName: "Григорович"
 * }, shevchenko.getCaseNameVocative());
 *
 * @param {Object} person
 * @param {string} caseName
 * @returns {Object}
 */
function shevchenko(person, caseName) {
  validatePersonParameter(person);
  validateCaseNameParameter(caseName);

  var result = {};

  if (typeof person.lastName === "string") {
    var inflectedName = inflectLastName(person.gender, person.lastName.toLowerCase(), caseName);
    result.lastName = StringCaseMask.applyByExample(person.lastName, inflectedName || person.lastName);
  }

  if (typeof person.firstName === "string") {
    var _inflectedName = inflectFirstName(person.gender, person.firstName.toLowerCase(), caseName);
    result.firstName = StringCaseMask.applyByExample(person.firstName, _inflectedName || person.firstName);
  }

  if (typeof person.middleName === "string") {
    var _inflectedName2 = inflectMiddleName(person.gender, person.middleName.toLowerCase(), caseName);
    result.middleName = StringCaseMask.applyByExample(person.middleName, _inflectedName2 || person.middleName);
  }

  return result;
}

function validatePersonParameter(person) {
  Assert.object(person, "Invalid 'person' type.");
  if (!person.hasOwnProperty("gender")) Assert.throw("Missed 'person.gender' property.");
  Assert.string(person.gender, "Invalid 'person.gender' type.");
  Assert.inArray(shevchenko.getGenderNames(), person.gender, "Invalid 'person.gender' value.");
  if (!person.hasOwnProperty("firstName") && !person.hasOwnProperty("middleName") && !person.hasOwnProperty("lastName")) {
    Assert.throw("Missed 'person.lastName', 'person.firstName', 'person.middleName' properties.");
  }
  if (person.hasOwnProperty("lastName")) Assert.string(person.lastName, "Invalid 'person.lastName' type.");
  if (person.hasOwnProperty("firstName")) Assert.string(person.firstName, "Invalid 'person.firstName' type.");
  if (person.hasOwnProperty("middleName")) Assert.string(person.middleName, "Invalid 'person.middleName' type.");
}

function validateCaseNameParameter(caseName) {
  Assert.string(caseName, "Invalid 'caseName' type.");
  Assert.inArray(shevchenko.getCaseNames(), caseName, "Invalid 'caseName' value.");
}

function inflectLastName(gender, lastName, caseName) {
  var doubleLastName = lastName.split("-");
  if (doubleLastName.length > 1) {
    return doubleLastName.map(function (lastName) {
      return inflectLastName(gender, lastName, caseName);
    }).join("-");
  }

  var rule = shevchenko.getRules().filter(function (rule) {
    return Filter.byGender(rule, gender);
  }).filter(function (rule) {
    return gender === shevchenko.getGenderNameMale() || Filter.byPos(rule, Pos.resolve(lastName));
  }) // #pos_limits
  .filter(function (rule) {
    return Filter.byApplication(rule, "lastName");
  }).filter(function (rule) {
    return Filter.byRegexp(rule, lastName);
  }).sort(function (firstRule, secondRule) {
    return Sort.rulesByApplicationDesc(firstRule, secondRule, "lastName");
  }).shift();

  return Inflector.inflectByRule(rule, caseName, lastName);
}

function inflectFirstName(gender, firstName, caseName) {
  var rule = shevchenko.getRules().filter(function (rule) {
    return Filter.byGender(rule, gender);
  }).filter(function (rule) {
    return Filter.byApplication(rule, "firstName");
  }).filter(function (rule) {
    return Filter.byRegexp(rule, firstName);
  }).sort(function (firstRule, secondRule) {
    return Sort.rulesByApplicationDesc(firstRule, secondRule, "firstName");
  }).shift();

  return Inflector.inflectByRule(rule, caseName, firstName);
}

function inflectMiddleName(gender, middleName, caseName) {
  var rule = shevchenko.getRules().filter(function (rule) {
    return Filter.byGender(rule, gender);
  }).filter(function (rule) {
    return Filter.byApplication(rule, "middleName", true);
  }).filter(function (rule) {
    return Filter.byRegexp(rule, middleName);
  }).sort(function (firstRule, secondRule) {
    return Sort.rulesByApplicationDesc(firstRule, secondRule, "middleName");
  }).shift();

  return Inflector.inflectByRule(rule, caseName, middleName);
}

module.exports = shevchenko;
}).call(this,_dereq_("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},_dereq_("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_7752b724.js","/")
},{"./helpers":3,"./pos":5,"./rules":9,"buffer":13,"rH1JPG":15}],2:[function(_dereq_,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var Assert = {};

/**
 * Assert than a value is a string.
 *
 * @param value
 * @param {string|null} errorMessage
 */
Assert.number = function (value) {
  var errorMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (typeof value !== "number") Assert.throw(errorMessage);
};

/**
 * Assert than a value is a string.
 *
 * @param value
 * @param {string|null} errorMessage
 */
Assert.string = function (value) {
  var errorMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (typeof value !== "string") Assert.throw(errorMessage);
};

/**
 * Assert than a value is an object.
 *
 * @param value
 * @param {string|null} errorMessage
 */
Assert.object = function (value) {
  var errorMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if ((typeof value === "undefined" ? "undefined" : _typeof(value)) !== "object") Assert.throw(errorMessage);
};

/**
 * Assert than a value is an array.
 *
 * @param value
 * @param {string|null} errorMessage
 */
Assert.array = function (value) {
  var errorMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (!(value instanceof Array)) Assert.throw(errorMessage);
};

/**
 * Assert than a value exists in array.
 *
 * @param {Array} array
 * @param value
 * @param {string|null} errorMessage
 */
Assert.inArray = function (array, value) {
  var errorMessage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  if (array.indexOf(value) === -1) Assert.throw(errorMessage);
};

/**
 * Throw an assertion errorMessage.
 *
 * @param {string|null} errorMessage
 */
Assert.throw = function (errorMessage) {
  throw new Error(errorMessage || "Invalid value.");
};

module.exports = Assert;
}).call(this,_dereq_("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},_dereq_("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/helpers/assert.js","/helpers")
},{"buffer":13,"rH1JPG":15}],3:[function(_dereq_,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

var Assert = _dereq_("./assert");
var StringCaseMask = _dereq_("./string-case-mask");

module.exports = {
    Assert: Assert,
    StringCaseMask: StringCaseMask
};
}).call(this,_dereq_("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},_dereq_("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/helpers/index.js","/helpers")
},{"./assert":2,"./string-case-mask":4,"buffer":13,"rH1JPG":15}],4:[function(_dereq_,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

var Assert = _dereq_("./assert");

var StringCaseMask = {};

/**
 * An upper case identifier.
 *
 * @type {string}
 */
StringCaseMask.upperCase = "u";

/**
 * A lower case identifier.
 *
 * @type {string}
 */
StringCaseMask.lowerCase = "l";

/**
 * Not recognized case identifier.
 *
 * @type {string}
 */
StringCaseMask.notRecognizedCase = null;

/**
 * Detect if a character is a segment break character.
 *
 * Used in the double last names such as "Нечуй-Левицький", to create case mask segments for each word.
 *
 * @param {string} char
 * @return {boolean}
 */
StringCaseMask.isSegmentBreakCharacter = function (char) {
  return char === "-";
};

/**
 * Detect if a character is in the upper case.
 *
 * @param {string} char
 */
StringCaseMask.isUpperCase = function (char) {
  return char === char.toUpperCase() && char !== char.toLowerCase();
};

/**
 * Detect if a character is in the lower case.
 *
 * @param {string} char
 */
StringCaseMask.isLowerCase = function (char) {
  return char === char.toLowerCase() && char !== char.toUpperCase();
};

/**
 * Load the case mask from the string.
 *
 * @param {string} string
 * @returns {Object}
 */
StringCaseMask.loadMask = function (string) {
  Assert.string(string);
  var mask = {};
  var segmentNumber = 0;
  var stringIndex = 0;
  while (stringIndex < string.length) {
    var char = string.charAt(stringIndex++);
    // If the current character is a segment break character go to the next segment.
    if (StringCaseMask.isSegmentBreakCharacter(char)) {
      segmentNumber++;
      continue;
    }
    // Initialize the default value (an empty array) for a new segment.
    if (typeof mask[segmentNumber] === "undefined") mask[segmentNumber] = [];
    // If a character is in the upper case push the uppercase identifier into the segment array.
    if (StringCaseMask.isUpperCase(char)) mask[segmentNumber].push(StringCaseMask.upperCase);
    // If a character is in the lower case push the lowercase identifier into the segment array.
    else if (StringCaseMask.isLowerCase(char)) mask[segmentNumber].push(StringCaseMask.lowerCase);
      // If a character case is not recognized push the empty identifier into the segment array.
      else mask[segmentNumber].push(StringCaseMask.notRecognizedCase);
  }
  return mask;
};

/**
 * Apply the case mask to the string.
 *
 * @param {Object} mask
 * @param {string} string
 * @returns {string}
 */
StringCaseMask.applyByMask = function (mask, string) {
  var result = "";
  var segmentNumber = 0;
  var segmentIndex = 0;
  var stringIndex = 0;
  while (stringIndex < string.length) {
    var char = string.charAt(stringIndex++);
    // If the current character is a segment break character go to the next segment and reset the segment index.
    if (StringCaseMask.isSegmentBreakCharacter(char)) {
      segmentNumber++;
      segmentIndex = -1;
    }
    var segment = mask[segmentNumber];
    var charMask = segment[segmentIndex++];
    // If the string length is bigger than a segment length set the character mask to the last segment character mask value.
    if (typeof charMask === "undefined") charMask = segment[segment.length - 1];
    // If a character mask equals the upper case identifier convert the character to upper case.
    if (charMask === StringCaseMask.upperCase) char = char.toUpperCase();
    // If a character mask equals the lower case identifier convert the character to lower case.
    else if (charMask === StringCaseMask.lowerCase) char = char.toLowerCase();
    // Append the character to the resulting string.
    result += char;
  }
  return result;
};

/**
 * Apply the case mask of the example string to the string.
 *
 * @param {string} exampleString
 * @param {string} string
 * @returns {string}
 */
StringCaseMask.applyByExample = function (exampleString, string) {
  var mask = StringCaseMask.loadMask(exampleString);
  return StringCaseMask.applyByMask(mask, string);
};

module.exports = StringCaseMask;
}).call(this,_dereq_("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},_dereq_("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/helpers/string-case-mask.js","/helpers")
},{"./assert":2,"buffer":13,"rH1JPG":15}],5:[function(_dereq_,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

var resolve = _dereq_("./resolve");

module.exports = {
    resolve: resolve
};
}).call(this,_dereq_("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},_dereq_("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/pos/index.js","/pos")
},{"./resolve":7,"buffer":13,"rH1JPG":15}],6:[function(_dereq_,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

var synaptic = _dereq_("synaptic");

var pos = {
  noun: [1, 0],
  adjective: [0, 1]
};

/**
 * NeuralNetwork used for the part of speech recognizing.
 */
function NeuralNetwork(structure) {
  var _this = this;

  /**
   * Neural network instance.
   *
   * @property {synaptic.Network}
   */
  this.network = synaptic.Network.fromJSON(structure);

  /**
   * Run the neural network on the input data.
   *
   * @param {string} value
   * @return {string|null}
   */
  this.run = function (value) {
    var normalizedInput = NeuralNetwork.normalizeInput(value);
    var normalizedOutput = _this.network.activate(normalizedInput);
    var denormalizedOutput = NeuralNetwork.denormalizeOutput(normalizedOutput);
    return typeof denormalizedOutput !== "undefined" ? denormalizedOutput : null;
  };

  return this;
}

/**
 * Build the neural network on the sample data array.
 *
 * @param {Array<Object>} samples
 * @param {Object} options
 * @return {Object}
 */
NeuralNetwork.build = function (samples, options) {
  var network = new synaptic.Architect.Perceptron(360, 100, NeuralNetwork.getPos().length);
  var trainer = new synaptic.Trainer(network);
  trainer.train(samples, options);
  return network.toJSON();
};

/**
 * Get an array of part of speech.
 *
 * @return {Array<string>}
 */
NeuralNetwork.getPos = function () {
  return Object.keys(pos);
};

/**
 * Normalize the input for the neural network. Human-readable -> Machine-readable.
 *
 * @param {string} value
 * @return {Array<number>}
 */
NeuralNetwork.normalizeInput = function (value) {
  /**
   * @param {string} string
   * @return {string}
   */
  var stringToBinary = function stringToBinary(string) {
    return string.split("").map(function (char) {
      return char.charCodeAt(0).toString(2);
    }).join("");
  };

  /**
   * @param {string} string
   * @param {number} length
   * @param {string} symbol
   * @return {string}
   */
  var stringFillLeft = function stringFillLeft(string) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 360;
    var symbol = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "0";

    var filler = new Array(length + 1).join(symbol);
    return filler.substring(0, filler.length - string.length) + string;
  };

  return stringFillLeft(stringToBinary(value)).split("");
};

/**
 * Normalize the output for the neural network. Human-readable -> Machine-readable.
 *
 * @param {string} value
 * @return {Array<number>|null}
 */
NeuralNetwork.normalizeOutput = function (value) {
  return pos[value];
};

/**
 * Denormalize the output of the neural network. Machine-readable -> Human-readable.
 *
 * @param {Array<number>} value
 * @return {string|null}
 */
NeuralNetwork.denormalizeOutput = function (value) {
  var maxValueIndex = value.reduce(function (accumulator, value, index, array) {
    return value > array[accumulator] ? index : accumulator;
  }, 0);
  var normalizedValue = value.map(function (value, index) {
    return Number(index === maxValueIndex);
  });
  var posIndex = Object.values(pos).map(function (value) {
    return value.join("");
  }).indexOf(normalizedValue.join(""));
  return Object.keys(pos)[posIndex];
};

module.exports = NeuralNetwork;
}).call(this,_dereq_("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},_dereq_("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/pos/neural-network.js","/pos")
},{"buffer":13,"rH1JPG":15,"synaptic":20}],7:[function(_dereq_,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
 * Resolve the part of speech of the word.
 *
 * @param {string} value
 * @return {string|null}
 */module.exports=function(value){// Search value in the cache.
if(typeof cache[value]!=="undefined"){return cache[value];}// Process value by the part of speech neural network.
// #pos_limits - The part of speech resolver works only with the female genus words ending with -а, -я.
if(/[ая]$/.test(value)){return cache[value]=posNeuralNetwork.run(value);}return null;};
}).call(this,_dereq_("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},_dereq_("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/pos/resolve.js","/pos")
},{"./neural-network":6,"buffer":13,"rH1JPG":15}],8:[function(_dereq_,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

var Filter = {};

/**
 * Filter by the rule part of speech.
 *
 * @param {Object} rule
 * @param {string} value
 * @return {boolean}
 */
Filter.byPos = function (rule, value) {
    return value ? rule.pos === value : true;
};

/**
 * Filter by the rule applications.
 *
 * @param {Object} rule
 * @param {string} value
 * @param {boolean} strict
 * @return {*}
 */
Filter.byApplication = function (rule, value) {
    var strict = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (rule.applications.length) {
        return rule.applications.some(function (ruleValue) {
            return ruleValue === value;
        });
    }
    return !strict;
};

/**
 * Filter by the rule gender.
 *
 * @param {Object} rule
 * @param {string} value
 * @return {boolean}
 */
Filter.byGender = function (rule, value) {
    return rule.gender.indexOf(value) !== -1;
};

/**
 * Filter by the rule find regular expression.
 *
 * @param {Object} rule
 * @param {string} value
 * @return {boolean}
 */
Filter.byRegexp = function (rule, value) {
    return new RegExp(rule.regexp.find, "gm").test(value);
};

module.exports = Filter;
}).call(this,_dereq_("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},_dereq_("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/rules/filter.js","/rules")
},{"buffer":13,"rH1JPG":15}],9:[function(_dereq_,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

var Inflector = _dereq_("./inflector");
var Filter = _dereq_("./filter");
var Sort = _dereq_("./sort");

module.exports = {
    Inflector: Inflector,
    Filter: Filter,
    Sort: Sort
};
}).call(this,_dereq_("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},_dereq_("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/rules/index.js","/rules")
},{"./filter":8,"./inflector":10,"./sort":11,"buffer":13,"rH1JPG":15}],10:[function(_dereq_,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

var Inflector = {};

/**
 * Inflect a value by inflection rule.
 *
 * @param {Object} rule
 * @param {string} caseName
 * @param {string} value
 * @returns {string}
 */
Inflector.inflectByRule = function (rule, caseName, value) {
    if (typeof rule === "undefined") return value;
    var regexp = rule.regexp.modify;
    var modifiers = rule.cases[caseName][0]; // Retrieve the first group modifiers object by case name.
    return value.replace(new RegExp(regexp, "gm"), function (match) {
        var replacement = "";
        var count = Inflector.countRegexpGroups(regexp);
        var index = 0;
        while (index < count) {
            var modifier = typeof modifiers === "undefined" ? modifiers : modifiers[index];
            replacement += Inflector.applyGroupModifier(modifier, arguments.length <= index + 1 ? undefined : arguments[index + 1]);
            index++;
        }
        return replacement;
    });
};

/**
 * Apply a group modifier to the value.
 *
 * @see Inflector.inflectByRule
 *
 * @param {Object} modifier
 * @param {string} value
 * @returns {string}
 */
Inflector.applyGroupModifier = function (modifier, value) {
    if (typeof modifier === "undefined") return value;
    switch (modifier.type) {
        case "append":
            return value + modifier.value;
        case "replace":
            return modifier.value;
        default:
            return value;
    }
};

/**
 * Count a number of groups in regular expression string.
 *
 * @param {string} regexp
 * @returns {number}
 */
Inflector.countRegexpGroups = function (regexp) {
    return new RegExp(regexp.toString() + "|").exec("").length - 1;
};

module.exports = Inflector;
}).call(this,_dereq_("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},_dereq_("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/rules/inflector.js","/rules")
},{"buffer":13,"rH1JPG":15}],11:[function(_dereq_,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";

var Sort = {};

Sort.rulesByApplicationDesc = function (firstRule, secondRule, application) {
    return !firstRule.applications.length && secondRule.applications.length && secondRule.applications.indexOf(application) !== -1;
};

module.exports = Sort;
}).call(this,_dereq_("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},_dereq_("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/rules/sort.js","/rules")
},{"buffer":13,"rH1JPG":15}],12:[function(_dereq_,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

;(function (exports) {
	'use strict';

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

	var PLUS   = '+'.charCodeAt(0)
	var SLASH  = '/'.charCodeAt(0)
	var NUMBER = '0'.charCodeAt(0)
	var LOWER  = 'a'.charCodeAt(0)
	var UPPER  = 'A'.charCodeAt(0)
	var PLUS_URL_SAFE = '-'.charCodeAt(0)
	var SLASH_URL_SAFE = '_'.charCodeAt(0)

	function decode (elt) {
		var code = elt.charCodeAt(0)
		if (code === PLUS ||
		    code === PLUS_URL_SAFE)
			return 62 // '+'
		if (code === SLASH ||
		    code === SLASH_URL_SAFE)
			return 63 // '/'
		if (code < NUMBER)
			return -1 //no match
		if (code < NUMBER + 10)
			return code - NUMBER + 26 + 26
		if (code < UPPER + 26)
			return code - UPPER
		if (code < LOWER + 26)
			return code - LOWER + 26
	}

	function b64ToByteArray (b64) {
		var i, j, l, tmp, placeHolders, arr

		if (b64.length % 4 > 0) {
			throw new Error('Invalid string. Length must be a multiple of 4')
		}

		// the number of equal signs (place holders)
		// if there are two placeholders, than the two characters before it
		// represent one byte
		// if there is only one, then the three characters before it represent 2 bytes
		// this is just a cheap hack to not do indexOf twice
		var len = b64.length
		placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

		// base64 is 4/3 + up to two characters of the original data
		arr = new Arr(b64.length * 3 / 4 - placeHolders)

		// if there are placeholders, only get up to the last complete 4 chars
		l = placeHolders > 0 ? b64.length - 4 : b64.length

		var L = 0

		function push (v) {
			arr[L++] = v
		}

		for (i = 0, j = 0; i < l; i += 4, j += 3) {
			tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
			push((tmp & 0xFF0000) >> 16)
			push((tmp & 0xFF00) >> 8)
			push(tmp & 0xFF)
		}

		if (placeHolders === 2) {
			tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
			push(tmp & 0xFF)
		} else if (placeHolders === 1) {
			tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
			push((tmp >> 8) & 0xFF)
			push(tmp & 0xFF)
		}

		return arr
	}

	function uint8ToBase64 (uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length

		function encode (num) {
			return lookup.charAt(num)
		}

		function tripletToBase64 (num) {
			return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
		}

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
			output += tripletToBase64(temp)
		}

		// pad the end with zeros, but make sure to not forget the extra bytes
		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1]
				output += encode(temp >> 2)
				output += encode((temp << 4) & 0x3F)
				output += '=='
				break
			case 2:
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
				output += encode(temp >> 10)
				output += encode((temp >> 4) & 0x3F)
				output += encode((temp << 2) & 0x3F)
				output += '='
				break
		}

		return output
	}

	exports.toByteArray = b64ToByteArray
	exports.fromByteArray = uint8ToBase64
}(typeof exports === 'undefined' ? (this.base64js = {}) : exports))

}).call(this,_dereq_("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},_dereq_("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/base64-js/lib/b64.js","/../../node_modules/base64-js/lib")
},{"buffer":13,"rH1JPG":15}],13:[function(_dereq_,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

var base64 = _dereq_('base64-js')
var ieee754 = _dereq_('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = Buffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192

/**
 * If `Buffer._useTypedArrays`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (compatible down to IE6)
 */
Buffer._useTypedArrays = (function () {
  // Detect if browser supports Typed Arrays. Supported browsers are IE 10+, Firefox 4+,
  // Chrome 7+, Safari 5.1+, Opera 11.6+, iOS 4.2+. If the browser does not support adding
  // properties to `Uint8Array` instances, then that's the same as no `Uint8Array` support
  // because we need to be able to add all the node Buffer API methods. This is an issue
  // in Firefox 4-29. Now fixed: https://bugzilla.mozilla.org/show_bug.cgi?id=695438
  try {
    var buf = new ArrayBuffer(0)
    var arr = new Uint8Array(buf)
    arr.foo = function () { return 42 }
    return 42 === arr.foo() &&
        typeof arr.subarray === 'function' // Chrome 9-10 lack `subarray`
  } catch (e) {
    return false
  }
})()

/**
 * Class: Buffer
 * =============
 *
 * The Buffer constructor returns instances of `Uint8Array` that are augmented
 * with function properties for all the node `Buffer` API functions. We use
 * `Uint8Array` so that square bracket notation works as expected -- it returns
 * a single octet.
 *
 * By augmenting the instances, we can avoid modifying the `Uint8Array`
 * prototype.
 */
function Buffer (subject, encoding, noZero) {
  if (!(this instanceof Buffer))
    return new Buffer(subject, encoding, noZero)

  var type = typeof subject

  // Workaround: node's base64 implementation allows for non-padded strings
  // while base64-js does not.
  if (encoding === 'base64' && type === 'string') {
    subject = stringtrim(subject)
    while (subject.length % 4 !== 0) {
      subject = subject + '='
    }
  }

  // Find the length
  var length
  if (type === 'number')
    length = coerce(subject)
  else if (type === 'string')
    length = Buffer.byteLength(subject, encoding)
  else if (type === 'object')
    length = coerce(subject.length) // assume that object is array-like
  else
    throw new Error('First argument needs to be a number, array or string.')

  var buf
  if (Buffer._useTypedArrays) {
    // Preferred: Return an augmented `Uint8Array` instance for best performance
    buf = Buffer._augment(new Uint8Array(length))
  } else {
    // Fallback: Return THIS instance of Buffer (created by `new`)
    buf = this
    buf.length = length
    buf._isBuffer = true
  }

  var i
  if (Buffer._useTypedArrays && typeof subject.byteLength === 'number') {
    // Speed optimization -- use set if we're copying from a typed array
    buf._set(subject)
  } else if (isArrayish(subject)) {
    // Treat array-ish objects as a byte array
    for (i = 0; i < length; i++) {
      if (Buffer.isBuffer(subject))
        buf[i] = subject.readUInt8(i)
      else
        buf[i] = subject[i]
    }
  } else if (type === 'string') {
    buf.write(subject, 0, encoding)
  } else if (type === 'number' && !Buffer._useTypedArrays && !noZero) {
    for (i = 0; i < length; i++) {
      buf[i] = 0
    }
  }

  return buf
}

// STATIC METHODS
// ==============

Buffer.isEncoding = function (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.isBuffer = function (b) {
  return !!(b !== null && b !== undefined && b._isBuffer)
}

Buffer.byteLength = function (str, encoding) {
  var ret
  str = str + ''
  switch (encoding || 'utf8') {
    case 'hex':
      ret = str.length / 2
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8ToBytes(str).length
      break
    case 'ascii':
    case 'binary':
    case 'raw':
      ret = str.length
      break
    case 'base64':
      ret = base64ToBytes(str).length
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = str.length * 2
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.concat = function (list, totalLength) {
  assert(isArray(list), 'Usage: Buffer.concat(list, [totalLength])\n' +
      'list should be an Array.')

  if (list.length === 0) {
    return new Buffer(0)
  } else if (list.length === 1) {
    return list[0]
  }

  var i
  if (typeof totalLength !== 'number') {
    totalLength = 0
    for (i = 0; i < list.length; i++) {
      totalLength += list[i].length
    }
  }

  var buf = new Buffer(totalLength)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

// BUFFER INSTANCE METHODS
// =======================

function _hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  assert(strLen % 2 === 0, 'Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var byte = parseInt(string.substr(i * 2, 2), 16)
    assert(!isNaN(byte), 'Invalid hex string')
    buf[offset + i] = byte
  }
  Buffer._charsWritten = i * 2
  return i
}

function _utf8Write (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(utf8ToBytes(string), buf, offset, length)
  return charsWritten
}

function _asciiWrite (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(asciiToBytes(string), buf, offset, length)
  return charsWritten
}

function _binaryWrite (buf, string, offset, length) {
  return _asciiWrite(buf, string, offset, length)
}

function _base64Write (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(base64ToBytes(string), buf, offset, length)
  return charsWritten
}

function _utf16leWrite (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(utf16leToBytes(string), buf, offset, length)
  return charsWritten
}

Buffer.prototype.write = function (string, offset, length, encoding) {
  // Support both (string, offset, length, encoding)
  // and the legacy (string, encoding, offset, length)
  if (isFinite(offset)) {
    if (!isFinite(length)) {
      encoding = length
      length = undefined
    }
  } else {  // legacy
    var swap = encoding
    encoding = offset
    offset = length
    length = swap
  }

  offset = Number(offset) || 0
  var remaining = this.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }
  encoding = String(encoding || 'utf8').toLowerCase()

  var ret
  switch (encoding) {
    case 'hex':
      ret = _hexWrite(this, string, offset, length)
      break
    case 'utf8':
    case 'utf-8':
      ret = _utf8Write(this, string, offset, length)
      break
    case 'ascii':
      ret = _asciiWrite(this, string, offset, length)
      break
    case 'binary':
      ret = _binaryWrite(this, string, offset, length)
      break
    case 'base64':
      ret = _base64Write(this, string, offset, length)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = _utf16leWrite(this, string, offset, length)
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.prototype.toString = function (encoding, start, end) {
  var self = this

  encoding = String(encoding || 'utf8').toLowerCase()
  start = Number(start) || 0
  end = (end !== undefined)
    ? Number(end)
    : end = self.length

  // Fastpath empty strings
  if (end === start)
    return ''

  var ret
  switch (encoding) {
    case 'hex':
      ret = _hexSlice(self, start, end)
      break
    case 'utf8':
    case 'utf-8':
      ret = _utf8Slice(self, start, end)
      break
    case 'ascii':
      ret = _asciiSlice(self, start, end)
      break
    case 'binary':
      ret = _binarySlice(self, start, end)
      break
    case 'base64':
      ret = _base64Slice(self, start, end)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = _utf16leSlice(self, start, end)
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.prototype.toJSON = function () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function (target, target_start, start, end) {
  var source = this

  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (!target_start) target_start = 0

  // Copy 0 bytes; we're done
  if (end === start) return
  if (target.length === 0 || source.length === 0) return

  // Fatal error conditions
  assert(end >= start, 'sourceEnd < sourceStart')
  assert(target_start >= 0 && target_start < target.length,
      'targetStart out of bounds')
  assert(start >= 0 && start < source.length, 'sourceStart out of bounds')
  assert(end >= 0 && end <= source.length, 'sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length)
    end = this.length
  if (target.length - target_start < end - start)
    end = target.length - target_start + start

  var len = end - start

  if (len < 100 || !Buffer._useTypedArrays) {
    for (var i = 0; i < len; i++)
      target[i + target_start] = this[i + start]
  } else {
    target._set(this.subarray(start, start + len), target_start)
  }
}

function _base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function _utf8Slice (buf, start, end) {
  var res = ''
  var tmp = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    if (buf[i] <= 0x7F) {
      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i])
      tmp = ''
    } else {
      tmp += '%' + buf[i].toString(16)
    }
  }

  return res + decodeUtf8Char(tmp)
}

function _asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++)
    ret += String.fromCharCode(buf[i])
  return ret
}

function _binarySlice (buf, start, end) {
  return _asciiSlice(buf, start, end)
}

function _hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function _utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i+1] * 256)
  }
  return res
}

Buffer.prototype.slice = function (start, end) {
  var len = this.length
  start = clamp(start, len, 0)
  end = clamp(end, len, len)

  if (Buffer._useTypedArrays) {
    return Buffer._augment(this.subarray(start, end))
  } else {
    var sliceLen = end - start
    var newBuf = new Buffer(sliceLen, undefined, true)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
    return newBuf
  }
}

// `get` will be removed in Node 0.13+
Buffer.prototype.get = function (offset) {
  console.log('.get() is deprecated. Access using array indexes instead.')
  return this.readUInt8(offset)
}

// `set` will be removed in Node 0.13+
Buffer.prototype.set = function (v, offset) {
  console.log('.set() is deprecated. Access using array indexes instead.')
  return this.writeUInt8(v, offset)
}

Buffer.prototype.readUInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  return this[offset]
}

function _readUInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    val = buf[offset]
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
  } else {
    val = buf[offset] << 8
    if (offset + 1 < len)
      val |= buf[offset + 1]
  }
  return val
}

Buffer.prototype.readUInt16LE = function (offset, noAssert) {
  return _readUInt16(this, offset, true, noAssert)
}

Buffer.prototype.readUInt16BE = function (offset, noAssert) {
  return _readUInt16(this, offset, false, noAssert)
}

function _readUInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    if (offset + 2 < len)
      val = buf[offset + 2] << 16
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
    val |= buf[offset]
    if (offset + 3 < len)
      val = val + (buf[offset + 3] << 24 >>> 0)
  } else {
    if (offset + 1 < len)
      val = buf[offset + 1] << 16
    if (offset + 2 < len)
      val |= buf[offset + 2] << 8
    if (offset + 3 < len)
      val |= buf[offset + 3]
    val = val + (buf[offset] << 24 >>> 0)
  }
  return val
}

Buffer.prototype.readUInt32LE = function (offset, noAssert) {
  return _readUInt32(this, offset, true, noAssert)
}

Buffer.prototype.readUInt32BE = function (offset, noAssert) {
  return _readUInt32(this, offset, false, noAssert)
}

Buffer.prototype.readInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null,
        'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  var neg = this[offset] & 0x80
  if (neg)
    return (0xff - this[offset] + 1) * -1
  else
    return this[offset]
}

function _readInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = _readUInt16(buf, offset, littleEndian, true)
  var neg = val & 0x8000
  if (neg)
    return (0xffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt16LE = function (offset, noAssert) {
  return _readInt16(this, offset, true, noAssert)
}

Buffer.prototype.readInt16BE = function (offset, noAssert) {
  return _readInt16(this, offset, false, noAssert)
}

function _readInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = _readUInt32(buf, offset, littleEndian, true)
  var neg = val & 0x80000000
  if (neg)
    return (0xffffffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt32LE = function (offset, noAssert) {
  return _readInt32(this, offset, true, noAssert)
}

Buffer.prototype.readInt32BE = function (offset, noAssert) {
  return _readInt32(this, offset, false, noAssert)
}

function _readFloat (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 23, 4)
}

Buffer.prototype.readFloatLE = function (offset, noAssert) {
  return _readFloat(this, offset, true, noAssert)
}

Buffer.prototype.readFloatBE = function (offset, noAssert) {
  return _readFloat(this, offset, false, noAssert)
}

function _readDouble (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 7 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 52, 8)
}

Buffer.prototype.readDoubleLE = function (offset, noAssert) {
  return _readDouble(this, offset, true, noAssert)
}

Buffer.prototype.readDoubleBE = function (offset, noAssert) {
  return _readDouble(this, offset, false, noAssert)
}

Buffer.prototype.writeUInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'trying to write beyond buffer length')
    verifuint(value, 0xff)
  }

  if (offset >= this.length) return

  this[offset] = value
}

function _writeUInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 2); i < j; i++) {
    buf[offset + i] =
        (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
            (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function (value, offset, noAssert) {
  _writeUInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt16BE = function (value, offset, noAssert) {
  _writeUInt16(this, value, offset, false, noAssert)
}

function _writeUInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffffffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 4); i < j; i++) {
    buf[offset + i] =
        (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function (value, offset, noAssert) {
  _writeUInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt32BE = function (value, offset, noAssert) {
  _writeUInt32(this, value, offset, false, noAssert)
}

Buffer.prototype.writeInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7f, -0x80)
  }

  if (offset >= this.length)
    return

  if (value >= 0)
    this.writeUInt8(value, offset, noAssert)
  else
    this.writeUInt8(0xff + value + 1, offset, noAssert)
}

function _writeInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fff, -0x8000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    _writeUInt16(buf, value, offset, littleEndian, noAssert)
  else
    _writeUInt16(buf, 0xffff + value + 1, offset, littleEndian, noAssert)
}

Buffer.prototype.writeInt16LE = function (value, offset, noAssert) {
  _writeInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt16BE = function (value, offset, noAssert) {
  _writeInt16(this, value, offset, false, noAssert)
}

function _writeInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fffffff, -0x80000000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    _writeUInt32(buf, value, offset, littleEndian, noAssert)
  else
    _writeUInt32(buf, 0xffffffff + value + 1, offset, littleEndian, noAssert)
}

Buffer.prototype.writeInt32LE = function (value, offset, noAssert) {
  _writeInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt32BE = function (value, offset, noAssert) {
  _writeInt32(this, value, offset, false, noAssert)
}

function _writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifIEEE754(value, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 23, 4)
}

Buffer.prototype.writeFloatLE = function (value, offset, noAssert) {
  _writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function (value, offset, noAssert) {
  _writeFloat(this, value, offset, false, noAssert)
}

function _writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 7 < buf.length,
        'Trying to write beyond buffer length')
    verifIEEE754(value, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 52, 8)
}

Buffer.prototype.writeDoubleLE = function (value, offset, noAssert) {
  _writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function (value, offset, noAssert) {
  _writeDouble(this, value, offset, false, noAssert)
}

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  if (typeof value === 'string') {
    value = value.charCodeAt(0)
  }

  assert(typeof value === 'number' && !isNaN(value), 'value is not a number')
  assert(end >= start, 'end < start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  assert(start >= 0 && start < this.length, 'start out of bounds')
  assert(end >= 0 && end <= this.length, 'end out of bounds')

  for (var i = start; i < end; i++) {
    this[i] = value
  }
}

Buffer.prototype.inspect = function () {
  var out = []
  var len = this.length
  for (var i = 0; i < len; i++) {
    out[i] = toHex(this[i])
    if (i === exports.INSPECT_MAX_BYTES) {
      out[i + 1] = '...'
      break
    }
  }
  return '<Buffer ' + out.join(' ') + '>'
}

/**
 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
 */
Buffer.prototype.toArrayBuffer = function () {
  if (typeof Uint8Array !== 'undefined') {
    if (Buffer._useTypedArrays) {
      return (new Buffer(this)).buffer
    } else {
      var buf = new Uint8Array(this.length)
      for (var i = 0, len = buf.length; i < len; i += 1)
        buf[i] = this[i]
      return buf.buffer
    }
  } else {
    throw new Error('Buffer.toArrayBuffer not supported in this browser')
  }
}

// HELPER FUNCTIONS
// ================

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

var BP = Buffer.prototype

/**
 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
 */
Buffer._augment = function (arr) {
  arr._isBuffer = true

  // save reference to original Uint8Array get/set methods before overwriting
  arr._get = arr.get
  arr._set = arr.set

  // deprecated, will be removed in node 0.13+
  arr.get = BP.get
  arr.set = BP.set

  arr.write = BP.write
  arr.toString = BP.toString
  arr.toLocaleString = BP.toString
  arr.toJSON = BP.toJSON
  arr.copy = BP.copy
  arr.slice = BP.slice
  arr.readUInt8 = BP.readUInt8
  arr.readUInt16LE = BP.readUInt16LE
  arr.readUInt16BE = BP.readUInt16BE
  arr.readUInt32LE = BP.readUInt32LE
  arr.readUInt32BE = BP.readUInt32BE
  arr.readInt8 = BP.readInt8
  arr.readInt16LE = BP.readInt16LE
  arr.readInt16BE = BP.readInt16BE
  arr.readInt32LE = BP.readInt32LE
  arr.readInt32BE = BP.readInt32BE
  arr.readFloatLE = BP.readFloatLE
  arr.readFloatBE = BP.readFloatBE
  arr.readDoubleLE = BP.readDoubleLE
  arr.readDoubleBE = BP.readDoubleBE
  arr.writeUInt8 = BP.writeUInt8
  arr.writeUInt16LE = BP.writeUInt16LE
  arr.writeUInt16BE = BP.writeUInt16BE
  arr.writeUInt32LE = BP.writeUInt32LE
  arr.writeUInt32BE = BP.writeUInt32BE
  arr.writeInt8 = BP.writeInt8
  arr.writeInt16LE = BP.writeInt16LE
  arr.writeInt16BE = BP.writeInt16BE
  arr.writeInt32LE = BP.writeInt32LE
  arr.writeInt32BE = BP.writeInt32BE
  arr.writeFloatLE = BP.writeFloatLE
  arr.writeFloatBE = BP.writeFloatBE
  arr.writeDoubleLE = BP.writeDoubleLE
  arr.writeDoubleBE = BP.writeDoubleBE
  arr.fill = BP.fill
  arr.inspect = BP.inspect
  arr.toArrayBuffer = BP.toArrayBuffer

  return arr
}

// slice(start, end)
function clamp (index, len, defaultValue) {
  if (typeof index !== 'number') return defaultValue
  index = ~~index;  // Coerce to integer.
  if (index >= len) return len
  if (index >= 0) return index
  index += len
  if (index >= 0) return index
  return 0
}

function coerce (length) {
  // Coerce length to a number (possibly NaN), round up
  // in case it's fractional (e.g. 123.456) then do a
  // double negate to coerce a NaN to 0. Easy, right?
  length = ~~Math.ceil(+length)
  return length < 0 ? 0 : length
}

function isArray (subject) {
  return (Array.isArray || function (subject) {
    return Object.prototype.toString.call(subject) === '[object Array]'
  })(subject)
}

function isArrayish (subject) {
  return isArray(subject) || Buffer.isBuffer(subject) ||
      subject && typeof subject === 'object' &&
      typeof subject.length === 'number'
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    var b = str.charCodeAt(i)
    if (b <= 0x7F)
      byteArray.push(str.charCodeAt(i))
    else {
      var start = i
      if (b >= 0xD800 && b <= 0xDFFF) i++
      var h = encodeURIComponent(str.slice(start, i+1)).substr(1).split('%')
      for (var j = 0; j < h.length; j++)
        byteArray.push(parseInt(h[j], 16))
    }
  }
  return byteArray
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(str)
}

function blitBuffer (src, dst, offset, length) {
  var pos
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length))
      break
    dst[i + offset] = src[i]
  }
  return i
}

function decodeUtf8Char (str) {
  try {
    return decodeURIComponent(str)
  } catch (err) {
    return String.fromCharCode(0xFFFD) // UTF 8 invalid char
  }
}

/*
 * We have to make sure that the value is a valid integer. This means that it
 * is non-negative. It has no fractional component and that it does not
 * exceed the maximum allowed value.
 */
function verifuint (value, max) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value >= 0, 'specified a negative value for writing an unsigned value')
  assert(value <= max, 'value is larger than maximum value for type')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifsint (value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifIEEE754 (value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
}

function assert (test, message) {
  if (!test) throw new Error(message || 'Failed assertion')
}

}).call(this,_dereq_("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},_dereq_("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/buffer/index.js","/../../node_modules/buffer")
},{"base64-js":12,"buffer":13,"ieee754":14,"rH1JPG":15}],14:[function(_dereq_,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

}).call(this,_dereq_("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},_dereq_("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/ieee754/index.js","/../../node_modules/ieee754")
},{"buffer":13,"rH1JPG":15}],15:[function(_dereq_,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

}).call(this,_dereq_("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},_dereq_("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/process/browser.js","/../../node_modules/process")
},{"buffer":13,"rH1JPG":15}],16:[function(_dereq_,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
// import
var Layer   = _dereq_('./layer')
,   Network = _dereq_('./network')
,   Trainer = _dereq_('./trainer')

/*******************************************************************************************
                                        ARCHITECT
*******************************************************************************************/

// Collection of useful built-in architectures
var Architect = {

  // Multilayer Perceptron
  Perceptron: function Perceptron() {
    var args = Array.prototype.slice.call(arguments); // convert arguments to Array
    if (args.length < 3)
      throw new Error("not enough layers (minimum 3) !!");

    var inputs = args.shift(); // first argument
    var outputs = args.pop(); // last argument
    var layers = args; // all the arguments in the middle

    var input = new Layer(inputs);
    var hidden = [];
    var output = new Layer(outputs);

    var previous = input;

    // generate hidden layers
    for (var i = 0; i < layers.length; i++) {
      var size = layers[i];
      var layer = new Layer(size);
      hidden.push(layer);
      previous.project(layer);
      previous = layer;
    }
    previous.project(output);

    // set layers of the neural network
    this.set({
      input: input,
      hidden: hidden,
      output: output
    });
  },

  // Multilayer Long Short-Term Memory
  LSTM: function LSTM() {
    var args = Array.prototype.slice.call(arguments); // convert arguments to array
    if (args.length < 3)
      throw new Error("not enough layers (minimum 3) !!");

    var last = args.pop();
    var option = {
      peepholes: Layer.connectionType.ALL_TO_ALL,
      hiddenToHidden: false,
      outputToHidden: false,
      outputToGates: false,
      inputToOutput: true,
    };
    if (typeof last != 'number') {
      var outputs = args.pop();
      if (last.hasOwnProperty('peepholes'))
        option.peepholes = last.peepholes;
      if (last.hasOwnProperty('hiddenToHidden'))
        option.hiddenToHidden = last.hiddenToHidden;
      if (last.hasOwnProperty('outputToHidden'))
        option.outputToHidden = last.outputToHidden;
      if (last.hasOwnProperty('outputToGates'))
        option.outputToGates = last.outputToGates;
      if (last.hasOwnProperty('inputToOutput'))
        option.inputToOutput = last.inputToOutput;
    } else {
      var outputs = last;
    }

    var inputs = args.shift();
    var layers = args;

    var inputLayer = new Layer(inputs);
    var hiddenLayers = [];
    var outputLayer = new Layer(outputs);

    var previous = null;

    // generate layers
    for (var i = 0; i < layers.length; i++) {
      // generate memory blocks (memory cell and respective gates)
      var size = layers[i];

      var inputGate = new Layer(size).set({
        bias: 1
      });
      var forgetGate = new Layer(size).set({
        bias: 1
      });
      var memoryCell = new Layer(size);
      var outputGate = new Layer(size).set({
        bias: 1
      });

      hiddenLayers.push(inputGate);
      hiddenLayers.push(forgetGate);
      hiddenLayers.push(memoryCell);
      hiddenLayers.push(outputGate);

      // connections from input layer
      var input = inputLayer.project(memoryCell);
      inputLayer.project(inputGate);
      inputLayer.project(forgetGate);
      inputLayer.project(outputGate);

      // connections from previous memory-block layer to this one
      if (previous != null) {
        var cell = previous.project(memoryCell);
        previous.project(inputGate);
        previous.project(forgetGate);
        previous.project(outputGate);
      }

      // connections from memory cell
      var output = memoryCell.project(outputLayer);

      // self-connection
      var self = memoryCell.project(memoryCell);

      // hidden to hidden recurrent connection
      if (option.hiddenToHidden)
        memoryCell.project(memoryCell, Layer.connectionType.ALL_TO_ELSE);

      // out to hidden recurrent connection
      if (option.outputToHidden)
        outputLayer.project(memoryCell);

      // out to gates recurrent connection
      if (option.outputToGates) {
        outputLayer.project(inputGate);
        outputLayer.project(outputGate);
        outputLayer.project(forgetGate);
      }

      // peepholes
      memoryCell.project(inputGate, option.peepholes);
      memoryCell.project(forgetGate, option.peepholes);
      memoryCell.project(outputGate, option.peepholes);

      // gates
      inputGate.gate(input, Layer.gateType.INPUT);
      forgetGate.gate(self, Layer.gateType.ONE_TO_ONE);
      outputGate.gate(output, Layer.gateType.OUTPUT);
      if (previous != null)
        inputGate.gate(cell, Layer.gateType.INPUT);

      previous = memoryCell;
    }

    // input to output direct connection
    if (option.inputToOutput)
      inputLayer.project(outputLayer);

    // set the layers of the neural network
    this.set({
      input: inputLayer,
      hidden: hiddenLayers,
      output: outputLayer
    });
  },

  // Liquid State Machine
  Liquid: function Liquid(inputs, hidden, outputs, connections, gates) {
    // create layers
    var inputLayer = new Layer(inputs);
    var hiddenLayer = new Layer(hidden);
    var outputLayer = new Layer(outputs);

    // make connections and gates randomly among the neurons
    var neurons = hiddenLayer.neurons();
    var connectionList = [];

    for (var i = 0; i < connections; i++) {
      // connect two random neurons
      var from = Math.random() * neurons.length | 0;
      var to = Math.random() * neurons.length | 0;
      var connection = neurons[from].project(neurons[to]);
      connectionList.push(connection);
    }

    for (var j = 0; j < gates; j++) {
      // pick a random gater neuron
      var gater = Math.random() * neurons.length | 0;
      // pick a random connection to gate
      var connection = Math.random() * connectionList.length | 0;
      // let the gater gate the connection
      neurons[gater].gate(connectionList[connection]);
    }

    // connect the layers
    inputLayer.project(hiddenLayer);
    hiddenLayer.project(outputLayer);

    // set the layers of the network
    this.set({
      input: inputLayer,
      hidden: [hiddenLayer],
      output: outputLayer
    });
  },

  Hopfield: function Hopfield(size) {
    var inputLayer = new Layer(size);
    var outputLayer = new Layer(size);

    inputLayer.project(outputLayer, Layer.connectionType.ALL_TO_ALL);

    this.set({
      input: inputLayer,
      hidden: [],
      output: outputLayer
    });

    var trainer = new Trainer(this);

    var proto = Architect.Hopfield.prototype;

    proto.learn = proto.learn || function(patterns)
    {
      var set = [];
      for (var p in patterns)
        set.push({
          input: patterns[p],
          output: patterns[p]
        });

      return trainer.train(set, {
        iterations: 500000,
        error: .00005,
        rate: 1
      });
    };

    proto.feed = proto.feed || function(pattern)
    {
      var output = this.activate(pattern);

      var pattern = [];
      for (var i in output)
        pattern[i] = output[i] > .5 ? 1 : 0;

      return pattern;
    }
  }
}

// Extend prototype chain (so every architectures is an instance of Network)
for (var architecture in Architect) {
  Architect[architecture].prototype = new Network();
  Architect[architecture].prototype.constructor = Architect[architecture];
}

// export
if (module) module.exports = Architect;

}).call(this,_dereq_("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},_dereq_("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/synaptic/src/architect.js","/../../node_modules/synaptic/src")
},{"./layer":17,"./network":18,"./trainer":21,"buffer":13,"rH1JPG":15}],17:[function(_dereq_,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
// export
if (module) module.exports = Layer;

// import
var Neuron  = _dereq_('./neuron')
,   Network = _dereq_('./network')

/*******************************************************************************************
                                            LAYER
*******************************************************************************************/

function Layer(size) {
  this.size = size | 0;
  this.list = [];

  this.connectedTo = [];

  while (size--) {
    var neuron = new Neuron();
    this.list.push(neuron);
  }
}

Layer.prototype = {

  // activates all the neurons in the layer
  activate: function(input) {

    var activations = [];

    if (typeof input != 'undefined') {
      if (input.length != this.size)
        throw new Error("INPUT size and LAYER size must be the same to activate!");

      for (var id in this.list) {
        var neuron = this.list[id];
        var activation = neuron.activate(input[id]);
        activations.push(activation);
      }
    } else {
      for (var id in this.list) {
        var neuron = this.list[id];
        var activation = neuron.activate();
        activations.push(activation);
      }
    }
    return activations;
  },

  // propagates the error on all the neurons of the layer
  propagate: function(rate, target) {

    if (typeof target != 'undefined') {
      if (target.length != this.size)
        throw new Error("TARGET size and LAYER size must be the same to propagate!");

      for (var id = this.list.length - 1; id >= 0; id--) {
        var neuron = this.list[id];
        neuron.propagate(rate, target[id]);
      }
    } else {
      for (var id = this.list.length - 1; id >= 0; id--) {
        var neuron = this.list[id];
        neuron.propagate(rate);
      }
    }
  },

  // projects a connection from this layer to another one
  project: function(layer, type, weights) {

    if (layer instanceof Network)
      layer = layer.layers.input;

    if (layer instanceof Layer) {
      if (!this.connected(layer))
        return new Layer.connection(this, layer, type, weights);
    } else
      throw new Error("Invalid argument, you can only project connections to LAYERS and NETWORKS!");


  },

  // gates a connection betwenn two layers
  gate: function(connection, type) {

    if (type == Layer.gateType.INPUT) {
      if (connection.to.size != this.size)
        throw new Error("GATER layer and CONNECTION.TO layer must be the same size in order to gate!");

      for (var id in connection.to.list) {
        var neuron = connection.to.list[id];
        var gater = this.list[id];
        for (var input in neuron.connections.inputs) {
          var gated = neuron.connections.inputs[input];
          if (gated.ID in connection.connections)
            gater.gate(gated);
        }
      }
    } else if (type == Layer.gateType.OUTPUT) {
      if (connection.from.size != this.size)
        throw new Error("GATER layer and CONNECTION.FROM layer must be the same size in order to gate!");

      for (var id in connection.from.list) {
        var neuron = connection.from.list[id];
        var gater = this.list[id];
        for (var projected in neuron.connections.projected) {
          var gated = neuron.connections.projected[projected];
          if (gated.ID in connection.connections)
            gater.gate(gated);
        }
      }
    } else if (type == Layer.gateType.ONE_TO_ONE) {
      if (connection.size != this.size)
        throw new Error("The number of GATER UNITS must be the same as the number of CONNECTIONS to gate!");

      for (var id in connection.list) {
        var gater = this.list[id];
        var gated = connection.list[id];
        gater.gate(gated);
      }
    }
    connection.gatedfrom.push({layer: this, type: type});
  },

  // true or false whether the whole layer is self-connected or not
  selfconnected: function() {

    for (var id in this.list) {
      var neuron = this.list[id];
      if (!neuron.selfconnected())
        return false;
    }
    return true;
  },

  // true of false whether the layer is connected to another layer (parameter) or not
  connected: function(layer) {
    // Check if ALL to ALL connection
    var connections = 0;
    for (var here in this.list) {
      for (var there in layer.list) {
        var from = this.list[here];
        var to = layer.list[there];
        var connected = from.connected(to);
        if (connected.type == 'projected')
          connections++;
      }
    }
    if (connections == this.size * layer.size)
      return Layer.connectionType.ALL_TO_ALL;

    // Check if ONE to ONE connection
    connections = 0;
    for (var neuron in this.list) {
      var from = this.list[neuron];
      var to = layer.list[neuron];
      var connected = from.connected(to);
      if (connected.type == 'projected')
        connections++;
    }
    if (connections == this.size)
      return Layer.connectionType.ONE_TO_ONE;
  },

  // clears all the neuorns in the layer
  clear: function() {
    for (var id in this.list) {
      var neuron = this.list[id];
      neuron.clear();
    }
  },

  // resets all the neurons in the layer
  reset: function() {
    for (var id in this.list) {
      var neuron = this.list[id];
      neuron.reset();
    }
  },

  // returns all the neurons in the layer (array)
  neurons: function() {
    return this.list;
  },

  // adds a neuron to the layer
  add: function(neuron) {
    this.neurons[neuron.ID] = neuron || new Neuron();
    this.list.push(neuron);
    this.size++;
  },

  set: function(options) {
    options = options || {};

    for (var i in this.list) {
      var neuron = this.list[i];
      if (options.label)
        neuron.label = options.label + '_' + neuron.ID;
      if (options.squash)
        neuron.squash = options.squash;
      if (options.bias)
        neuron.bias = options.bias;
    }
    return this;
  }
}

// represents a connection from one layer to another, and keeps track of its weight and gain
Layer.connection = function LayerConnection(fromLayer, toLayer, type, weights) {
  this.ID = Layer.connection.uid();
  this.from = fromLayer;
  this.to = toLayer;
  this.selfconnection = toLayer == fromLayer;
  this.type = type;
  this.connections = {};
  this.list = [];
  this.size = 0;
  this.gatedfrom = [];

  if (typeof this.type == 'undefined')
  {
    if (fromLayer == toLayer)
      this.type = Layer.connectionType.ONE_TO_ONE;
    else
      this.type = Layer.connectionType.ALL_TO_ALL;
  }

  if (this.type == Layer.connectionType.ALL_TO_ALL ||
      this.type == Layer.connectionType.ALL_TO_ELSE) {
    for (var here in this.from.list) {
      for (var there in this.to.list) {
        var from = this.from.list[here];
        var to = this.to.list[there];
        if(this.type == Layer.connectionType.ALL_TO_ELSE && from == to)
          continue;
        var connection = from.project(to, weights);

        this.connections[connection.ID] = connection;
        this.size = this.list.push(connection);
      }
    }
  } else if (this.type == Layer.connectionType.ONE_TO_ONE) {

    for (var neuron in this.from.list) {
      var from = this.from.list[neuron];
      var to = this.to.list[neuron];
      var connection = from.project(to, weights);

      this.connections[connection.ID] = connection;
      this.size = this.list.push(connection);
    }
  }

  fromLayer.connectedTo.push(this);
}

// types of connections
Layer.connectionType = {};
Layer.connectionType.ALL_TO_ALL = "ALL TO ALL";
Layer.connectionType.ONE_TO_ONE = "ONE TO ONE";
Layer.connectionType.ALL_TO_ELSE = "ALL TO ELSE";

// types of gates
Layer.gateType = {};
Layer.gateType.INPUT = "INPUT";
Layer.gateType.OUTPUT = "OUTPUT";
Layer.gateType.ONE_TO_ONE = "ONE TO ONE";

(function() {
  var connections = 0;
  Layer.connection.uid = function() {
    return connections++;
  }
})();

}).call(this,_dereq_("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},_dereq_("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/synaptic/src/layer.js","/../../node_modules/synaptic/src")
},{"./network":18,"./neuron":19,"buffer":13,"rH1JPG":15}],18:[function(_dereq_,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
// export
if (module) module.exports = Network;

// import
var Neuron  = _dereq_('./neuron')
,   Layer   = _dereq_('./layer')
,   Trainer = _dereq_('./trainer')

/*******************************************************************************************
                                         NETWORK
*******************************************************************************************/

function Network(layers) {
  if (typeof layers != 'undefined') {
    this.layers = {
      input:  layers.input || null,
      hidden: layers.hidden || [],
      output: layers.output || null
    };
    this.optimized = null;
  }
}
Network.prototype = {

  // feed-forward activation of all the layers to produce an ouput
  activate: function(input) {
    if (this.optimized === false)
    {
      this.layers.input.activate(input);
      for (var i = 0; i < this.layers.hidden.length; i++)
        this.layers.hidden[i].activate();
      return this.layers.output.activate();
    }
    else
    {
      if (this.optimized == null)
        this.optimize();
      return this.optimized.activate(input);
    }
  },

  // back-propagate the error thru the network
  propagate: function(rate, target) {
    if (this.optimized === false)
    {
      this.layers.output.propagate(rate, target);
      for (var i = this.layers.hidden.length - 1; i >= 0; i--)
        this.layers.hidden[i].propagate(rate);
    }
    else
    {
      if (this.optimized == null)
        this.optimize();
      this.optimized.propagate(rate, target);
    }
  },

  // project a connection to another unit (either a network or a layer)
  project: function(unit, type, weights) {
    if (this.optimized)
      this.optimized.reset();

    if (unit instanceof Network)
      return this.layers.output.project(unit.layers.input, type, weights);

    if (unit instanceof Layer)
      return this.layers.output.project(unit, type, weights);

    throw new Error("Invalid argument, you can only project connections to LAYERS and NETWORKS!");
  },

  // let this network gate a connection
  gate: function(connection, type) {
    if (this.optimized)
      this.optimized.reset();
    this.layers.output.gate(connection, type);
  },

  // clear all elegibility traces and extended elegibility traces (the network forgets its context, but not what was trained)
  clear: function() {
    this.restore();

    var inputLayer = this.layers.input,
      outputLayer = this.layers.output;

    inputLayer.clear();
    for (var i = 0; i < this.layers.hidden.length; i++) {
      this.layers.hidden[i].clear();
    }
    outputLayer.clear();

    if (this.optimized)
      this.optimized.reset();
  },

  // reset all weights and clear all traces (ends up like a new network)
  reset: function() {
    this.restore();

    var inputLayer = this.layers.input,
      outputLayer = this.layers.output;

    inputLayer.reset();
    for (var i = 0; i < this.layers.hidden.length; i++) {
      this.layers.hidden[i].reset();
    }
    outputLayer.reset();

    if (this.optimized)
      this.optimized.reset();
  },

  // hardcodes the behaviour of the whole network into a single optimized function
  optimize: function() {
    var that = this;
    var optimized = {};
    var neurons = this.neurons();

    for (var i = 0; i < neurons.length; i++) {
      var neuron = neurons[i].neuron;
      var layer = neurons[i].layer;
      while (neuron.neuron)
        neuron = neuron.neuron;
      optimized = neuron.optimize(optimized, layer);
    }

    for (var i = 0; i < optimized.propagation_sentences.length; i++)
      optimized.propagation_sentences[i].reverse();
    optimized.propagation_sentences.reverse();

    var hardcode = "";
    hardcode += "var F = Float64Array ? new Float64Array(" + optimized.memory +
      ") : []; ";
    for (var i in optimized.variables)
      hardcode += "F[" + optimized.variables[i].id + "] = " + (optimized.variables[
        i].value || 0) + "; ";
    hardcode += "var activate = function(input){\n";
    for (var i = 0; i < optimized.inputs.length; i++)
      hardcode += "F[" + optimized.inputs[i] + "] = input[" + i + "]; ";
    for (var i = 0; i < optimized.activation_sentences.length; i++) {
      if (optimized.activation_sentences[i].length > 0) {
        for (var j = 0; j < optimized.activation_sentences[i].length; j++) {
          hardcode += optimized.activation_sentences[i][j].join(" ");
          hardcode += optimized.trace_sentences[i][j].join(" ");
        }
      }
    }
    hardcode += " var output = []; "
    for (var i = 0; i < optimized.outputs.length; i++)
      hardcode += "output[" + i + "] = F[" + optimized.outputs[i] + "]; ";
    hardcode += "return output; }; "
    hardcode += "var propagate = function(rate, target){\n";
    hardcode += "F[" + optimized.variables.rate.id + "] = rate; ";
    for (var i = 0; i < optimized.targets.length; i++)
      hardcode += "F[" + optimized.targets[i] + "] = target[" + i + "]; ";
    for (var i = 0; i < optimized.propagation_sentences.length; i++)
      for (var j = 0; j < optimized.propagation_sentences[i].length; j++)
        hardcode += optimized.propagation_sentences[i][j].join(" ") + " ";
    hardcode += " };\n";
    hardcode +=
      "var ownership = function(memoryBuffer){\nF = memoryBuffer;\nthis.memory = F;\n};\n";
    hardcode +=
      "return {\nmemory: F,\nactivate: activate,\npropagate: propagate,\nownership: ownership\n};";
    hardcode = hardcode.split(";").join(";\n");

    var constructor = new Function(hardcode);

    var network = constructor();
    network.data = {
      variables: optimized.variables,
      activate: optimized.activation_sentences,
      propagate: optimized.propagation_sentences,
      trace: optimized.trace_sentences,
      inputs: optimized.inputs,
      outputs: optimized.outputs,
      check_activation: this.activate,
      check_propagation: this.propagate
    }

    network.reset = function() {
      if (that.optimized) {
        that.optimized = null;
        that.activate = network.data.check_activation;
        that.propagate = network.data.check_propagation;
      }
    }

    this.optimized = network;
    this.activate = network.activate;
    this.propagate = network.propagate;
  },

  // restores all the values from the optimized network the their respective objects in order to manipulate the network
  restore: function() {
    if (!this.optimized)
      return;

    var optimized = this.optimized;

    var getValue = function() {
      var args = Array.prototype.slice.call(arguments);

      var unit = args.shift();
      var prop = args.pop();

      var id = prop + '_';
      for (var property in args)
        id += args[property] + '_';
      id += unit.ID;

      var memory = optimized.memory;
      var variables = optimized.data.variables;

      if (id in variables)
        return memory[variables[id].id];
      return 0;
    }

    var list = this.neurons();

    // link id's to positions in the array
    for (var i = 0; i < list.length; i++) {
      var neuron = list[i].neuron;
      while (neuron.neuron)
        neuron = neuron.neuron;

      neuron.state = getValue(neuron, 'state');
      neuron.old = getValue(neuron, 'old');
      neuron.activation = getValue(neuron, 'activation');
      neuron.bias = getValue(neuron, 'bias');

      for (var input in neuron.trace.elegibility)
        neuron.trace.elegibility[input] = getValue(neuron, 'trace',
          'elegibility', input);

      for (var gated in neuron.trace.extended)
        for (var input in neuron.trace.extended[gated])
          neuron.trace.extended[gated][input] = getValue(neuron, 'trace',
            'extended', gated, input);

      // get connections
      for (var j in neuron.connections.projected) {
        var connection = neuron.connections.projected[j];
        connection.weight = getValue(connection, 'weight');
        connection.gain = getValue(connection, 'gain');
      }
    }
  },

  // returns all the neurons in the network
  neurons: function() {
    var neurons = [];

    var inputLayer = this.layers.input.neurons(),
      outputLayer = this.layers.output.neurons();

    for (var i = 0; i < inputLayer.length; i++) {
      neurons.push({
        neuron: inputLayer[i],
        layer: 'input'
      });
    }

    for (var i = 0; i < this.layers.hidden.length; i++) {
      var hiddenLayer = this.layers.hidden[i].neurons();
      for (var j = 0; j < hiddenLayer.length; j++)
        neurons.push({
          neuron: hiddenLayer[j],
          layer: i
        });
    }

    for (var i = 0; i < outputLayer.length; i++) {
      neurons.push({
        neuron: outputLayer[i],
        layer: 'output'
      });
    }

    return neurons;
  },

  // returns number of inputs of the network
  inputs: function() {
    return this.layers.input.size;
  },

  // returns number of outputs of hte network
  outputs: function() {
    return this.layers.output.size;
  },

  // sets the layers of the network
  set: function(layers) {
    this.layers = {
      input:  layers.input || null,
      hidden: layers.hidden || [],
      output: layers.output || null
    };
    if (this.optimized)
      this.optimized.reset();
  },

  setOptimize: function(bool){
    this.restore();
    if (this.optimized)
      this.optimized.reset();
    this.optimized = bool? null : false;
  },

  // returns a json that represents all the neurons and connections of the network
  toJSON: function(ignoreTraces) {
    this.restore();

    var list = this.neurons();
    var neurons = [];
    var connections = [];

    // link id's to positions in the array
    var ids = {};
    for (var i = 0; i < list.length; i++) {
      var neuron = list[i].neuron;
      while (neuron.neuron)
        neuron = neuron.neuron;
      ids[neuron.ID] = i;

      var copy = {
        trace: {
          elegibility: {},
          extended: {}
        },
        state: neuron.state,
        old: neuron.old,
        activation: neuron.activation,
        bias: neuron.bias,
        layer: list[i].layer
      };

      copy.squash = neuron.squash == Neuron.squash.LOGISTIC ? "LOGISTIC" :
        neuron.squash == Neuron.squash.TANH ? "TANH" :
        neuron.squash == Neuron.squash.IDENTITY ? "IDENTITY" :
        neuron.squash == Neuron.squash.HLIM ? "HLIM" :
        neuron.squash == Neuron.squash.RELU ? "RELU" :
        null;

      neurons.push(copy);
    }

    for(var i = 0; i < list.length; i++){
      var neuron = list[i].neuron;
      while (neuron.neuron)
        neuron = neuron.neuron;

      for (var j in neuron.connections.projected) {
        var connection = neuron.connections.projected[j];
        connections.push({
          from: ids[connection.from.ID],
          to: ids[connection.to.ID],
          weight: connection.weight,
          gater: connection.gater ? ids[connection.gater.ID] : null,
        });
      }
      if (neuron.selfconnected()) {
        connections.push({
          from: ids[neuron.ID],
          to: ids[neuron.ID],
          weight: neuron.selfconnection.weight,
          gater: neuron.selfconnection.gater ? ids[neuron.selfconnection.gater.ID] : null,
        });
      }
    }

    return {
      neurons: neurons,
      connections: connections
    }
  },

  // export the topology into dot language which can be visualized as graphs using dot
  /* example: ... console.log(net.toDotLang());
              $ node example.js > example.dot
              $ dot example.dot -Tpng > out.png
  */
  toDot: function(edgeConnection) {
    if (! typeof edgeConnection)
      edgeConnection = false;
    var code = "digraph nn {\n    rankdir = BT\n";
    var layers = [this.layers.input].concat(this.layers.hidden, this.layers.output);
    for (var i = 0; i < layers.length; i++) {
      for (var j = 0; j < layers[i].connectedTo.length; j++) { // projections
        var connection = layers[i].connectedTo[j];
        var layerTo = connection.to;
        var size = connection.size;
        var layerID = layers.indexOf(layers[i]);
        var layerToID = layers.indexOf(layerTo);
        /* http://stackoverflow.com/questions/26845540/connect-edges-with-graph-dot
         * DOT does not support edge-to-edge connections
         * This workaround produces somewhat weird graphs ...
        */
        if ( edgeConnection) {
          if (connection.gatedfrom.length) {
            var fakeNode = "fake" + layerID + "_" + layerToID;
            code += "    " + fakeNode +
              " [label = \"\", shape = point, width = 0.01, height = 0.01]\n";
            code += "    " + layerID + " -> " + fakeNode + " [label = " + size + ", arrowhead = none]\n";
            code += "    " + fakeNode + " -> " + layerToID + "\n";
          } else
            code += "    " + layerID + " -> " + layerToID + " [label = " + size + "]\n";
          for (var from in connection.gatedfrom) { // gatings
            var layerfrom = connection.gatedfrom[from].layer;
            var layerfromID = layers.indexOf(layerfrom);
            code += "    " + layerfromID + " -> " + fakeNode + " [color = blue]\n";
          }
        } else {
          code += "    " + layerID + " -> " + layerToID + " [label = " + size + "]\n";
          for (var from in connection.gatedfrom) { // gatings
            var layerfrom = connection.gatedfrom[from].layer;
            var layerfromID = layers.indexOf(layerfrom);
            code += "    " + layerfromID + " -> " + layerToID + " [color = blue]\n";
          }
        }
      }
    }
    code += "}\n";
    return {
      code: code,
      link: "https://chart.googleapis.com/chart?chl=" + escape(code.replace("/ /g", "+")) + "&cht=gv"
    }
  },

  // returns a function that works as the activation of the network and can be used without depending on the library
  standalone: function() {
    if (!this.optimized)
      this.optimize();

    var data = this.optimized.data;

    // build activation function
    var activation = "function (input) {\n";

    // build inputs
    for (var i = 0; i < data.inputs; i++)
      activation += "F[" + data.inputs[i] + "] = input[" + i + "];\n";

    // build network activation
    for (var i = 0; i < data.activate.length; i++) { // shouldn't this be layer?
      for (var j = 0; j <  data.activate[i].length; j++)
        activation += data.activate[i][j].join('') + "\n";
    }

    // build outputs
    activation += "var output = [];\n";
    for (var i = 0; i < data.outputs.length; i++)
      activation += "output[" + i + "] = F[" + data.outputs[i] + "];\n";
    activation += "return output;\n}";

    // reference all the positions in memory
    var memory = activation.match(/F\[(\d+)\]/g);
    var dimension = 0;
    var ids = {};

    for (var i = 0; i < memory.length; i++) {
      var tmp = memory[i].match(/\d+/)[0];
      if (!(tmp in ids)) {
        ids[tmp] = dimension++;
      }
    }
    var hardcode = "F = {\n";

    for (var i in ids)
      hardcode += ids[i] + ": " + this.optimized.memory[i] + ",\n";
    hardcode = hardcode.substring(0, hardcode.length - 2) + "\n};\n";
    hardcode = "var run = " + activation.replace(/F\[(\d+)]/g, function(
      index) {
      return 'F[' + ids[index.match(/\d+/)[0]] + ']'
    }).replace("{\n", "{\n" + hardcode + "") + ";\n";
    hardcode += "return run";

    // return standalone function
    return new Function(hardcode)();
  },


  // Return a HTML5 WebWorker specialized on training the network stored in `memory`.
  // Train based on the given dataSet and options.
  // The worker returns the updated `memory` when done.
  worker: function(memory, set, options) {

    // Copy the options and set defaults (options might be different for each worker)
    var workerOptions = {};
    if(options) workerOptions = options;
    workerOptions.rate = options.rate || .2;
    workerOptions.iterations = options.iterations || 100000;
    workerOptions.error = options.error || .005;
    workerOptions.cost = options.cost || null;
    workerOptions.crossValidate = options.crossValidate || null;

    // Cost function might be different for each worker
    costFunction = "var cost = " + (options && options.cost || this.cost || Trainer.cost.MSE) + ";\n";
    var workerFunction = Network.getWorkerSharedFunctions();
    workerFunction = workerFunction.replace(/var cost = options && options\.cost \|\| this\.cost \|\| Trainer\.cost\.MSE;/g, costFunction);

    // Set what we do when training is finished
    workerFunction = workerFunction.replace('return results;',
                      'postMessage({action: "done", message: results, memoryBuffer: F}, [F.buffer]);');

    // Replace log with postmessage
    workerFunction = workerFunction.replace("console.log('iterations', iterations, 'error', error, 'rate', currentRate)",
              "postMessage({action: 'log', message: {\n" +
                  "iterations: iterations,\n" +
                  "error: error,\n" +
                  "rate: currentRate\n" +
                "}\n" +
              "})");

    // Replace schedule with postmessage
    workerFunction = workerFunction.replace("abort = this.schedule.do({ error: error, iterations: iterations, rate: currentRate })",
              "postMessage({action: 'schedule', message: {\n" +
                  "iterations: iterations,\n" +
                  "error: error,\n" +
                  "rate: currentRate\n" +
                "}\n" +
              "})");

    if (!this.optimized)
      this.optimize();

    var hardcode = "var inputs = " + this.optimized.data.inputs.length + ";\n";
    hardcode += "var outputs = " + this.optimized.data.outputs.length + ";\n";
    hardcode += "var F =  new Float64Array([" + this.optimized.memory.toString() + "]);\n";
    hardcode += "var activate = " + this.optimized.activate.toString() + ";\n";
    hardcode += "var propagate = " + this.optimized.propagate.toString() + ";\n";
    hardcode +=
        "onmessage = function(e) {\n" +
          "if (e.data.action == 'startTraining') {\n" +
            "train(" + JSON.stringify(set) + "," + JSON.stringify(workerOptions) + ");\n" +
          "}\n" +
        "}";

    var workerSourceCode = workerFunction + '\n' + hardcode;
    var blob = new Blob([workerSourceCode]);
    var blobURL = window.URL.createObjectURL(blob);

    return new Worker(blobURL);
  },

  // returns a copy of the network
  clone: function() {
    return Network.fromJSON(this.toJSON());
  }
};

/**
 * Creates a static String to store the source code of the functions
 *  that are identical for all the workers (train, _trainSet, test)
 *
 * @return {String} Source code that can train a network inside a worker.
 * @static
 */
Network.getWorkerSharedFunctions = function() {
  // If we already computed the source code for the shared functions
  if(typeof Network._SHARED_WORKER_FUNCTIONS !== 'undefined')
    return Network._SHARED_WORKER_FUNCTIONS;

  // Otherwise compute and return the source code
  // We compute them by simply copying the source code of the train, _trainSet and test functions
  //  using the .toString() method

  // Load and name the train function
  var train_f = Trainer.prototype.train.toString();
  train_f = train_f.replace('function (set', 'function train(set') + '\n';

  // Load and name the _trainSet function
  var _trainSet_f = Trainer.prototype._trainSet.toString().replace(/this.network./g, '');
  _trainSet_f = _trainSet_f.replace('function (set', 'function _trainSet(set') + '\n';
  _trainSet_f = _trainSet_f.replace('this.crossValidate', 'crossValidate');
  _trainSet_f = _trainSet_f.replace('crossValidate = true', 'crossValidate = { }');

  // Load and name the test function
  var test_f = Trainer.prototype.test.toString().replace(/this.network./g, '');
  test_f = test_f.replace('function (set', 'function test(set') + '\n';

  return Network._SHARED_WORKER_FUNCTIONS = train_f + _trainSet_f + test_f;
};

// rebuild a network that has been stored in a json using the method toJSON()
Network.fromJSON = function(json) {
  var neurons = [];

  var layers = {
    input: new Layer(),
    hidden: [],
    output: new Layer()
  };

  for (var i = 0; i < json.neurons.length; i++) {
    var config = json.neurons[i];

    var neuron = new Neuron();
    neuron.trace.elegibility = {};
    neuron.trace.extended = {};
    neuron.state = config.state;
    neuron.old = config.old;
    neuron.activation = config.activation;
    neuron.bias = config.bias;
    neuron.squash = config.squash in Neuron.squash ? Neuron.squash[config.squash] : Neuron.squash.LOGISTIC;
    neurons.push(neuron);

    if (config.layer == 'input')
      layers.input.add(neuron);
    else if (config.layer == 'output')
      layers.output.add(neuron);
    else {
      if (typeof layers.hidden[config.layer] == 'undefined')
        layers.hidden[config.layer] = new Layer();
      layers.hidden[config.layer].add(neuron);
    }
  }

  for (var i = 0; i < json.connections.length; i++) {
    var config = json.connections[i];
    var from = neurons[config.from];
    var to = neurons[config.to];
    var weight = config.weight;
    var gater = neurons[config.gater];

    var connection = from.project(to, weight);
    if (gater)
      gater.gate(connection);
  }

  return new Network(layers);
};

}).call(this,_dereq_("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},_dereq_("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/synaptic/src/network.js","/../../node_modules/synaptic/src")
},{"./layer":17,"./neuron":19,"./trainer":21,"buffer":13,"rH1JPG":15}],19:[function(_dereq_,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
// export
if (module) module.exports = Neuron;

/******************************************************************************************
                                         NEURON
*******************************************************************************************/

function Neuron() {
  this.ID = Neuron.uid();

  this.connections = {
    inputs: {},
    projected: {},
    gated: {}
  };
  this.error = {
    responsibility: 0,
    projected: 0,
    gated: 0
  };
  this.trace = {
    elegibility: {},
    extended: {},
    influences: {}
  };
  this.state = 0;
  this.old = 0;
  this.activation = 0;
  this.selfconnection = new Neuron.connection(this, this, 0); // weight = 0 -> not connected
  this.squash = Neuron.squash.LOGISTIC;
  this.neighboors = {};
  this.bias = Math.random() * .2 - .1;
}

Neuron.prototype = {

  // activate the neuron
  activate: function(input) {
    // activation from enviroment (for input neurons)
    if (typeof input != 'undefined') {
      this.activation = input;
      this.derivative = 0;
      this.bias = 0;
      return this.activation;
    }

    // old state
    this.old = this.state;

    // eq. 15
    this.state = this.selfconnection.gain * this.selfconnection.weight *
      this.state + this.bias;

    for (var i in this.connections.inputs) {
      var input = this.connections.inputs[i];
      this.state += input.from.activation * input.weight * input.gain;
    }

    // eq. 16
    this.activation = this.squash(this.state);

    // f'(s)
    this.derivative = this.squash(this.state, true);

    // update traces
    var influences = [];
    for (var id in this.trace.extended) {
      // extended elegibility trace
      var neuron = this.neighboors[id];

      // if gated neuron's selfconnection is gated by this unit, the influence keeps track of the neuron's old state
      var influence = neuron.selfconnection.gater == this ? neuron.old : 0;

      // index runs over all the incoming connections to the gated neuron that are gated by this unit
      for (var incoming in this.trace.influences[neuron.ID]) { // captures the effect that has an input connection to this unit, on a neuron that is gated by this unit
        influence += this.trace.influences[neuron.ID][incoming].weight *
          this.trace.influences[neuron.ID][incoming].from.activation;
      }
      influences[neuron.ID] = influence;
    }

    for (var i in this.connections.inputs) {
      var input = this.connections.inputs[i];

      // elegibility trace - Eq. 17
      this.trace.elegibility[input.ID] = this.selfconnection.gain * this.selfconnection
        .weight * this.trace.elegibility[input.ID] + input.gain * input.from
        .activation;

      for (var id in this.trace.extended) {
        // extended elegibility trace
        var xtrace = this.trace.extended[id];
        var neuron = this.neighboors[id];
        var influence = influences[neuron.ID];

        // eq. 18
        xtrace[input.ID] = neuron.selfconnection.gain * neuron.selfconnection
          .weight * xtrace[input.ID] + this.derivative * this.trace.elegibility[
            input.ID] * influence;
      }
    }

    //  update gated connection's gains
    for (var connection in this.connections.gated) {
      this.connections.gated[connection].gain = this.activation;
    }

    return this.activation;
  },

  // back-propagate the error
  propagate: function(rate, target) {
    // error accumulator
    var error = 0;

    // whether or not this neuron is in the output layer
    var isOutput = typeof target != 'undefined';

    // output neurons get their error from the enviroment
    if (isOutput)
      this.error.responsibility = this.error.projected = target - this.activation; // Eq. 10

    else // the rest of the neuron compute their error responsibilities by backpropagation
    {
      // error responsibilities from all the connections projected from this neuron
      for (var id in this.connections.projected) {
        var connection = this.connections.projected[id];
        var neuron = connection.to;
        // Eq. 21
        error += neuron.error.responsibility * connection.gain * connection.weight;
      }

      // projected error responsibility
      this.error.projected = this.derivative * error;

      error = 0;
      // error responsibilities from all the connections gated by this neuron
      for (var id in this.trace.extended) {
        var neuron = this.neighboors[id]; // gated neuron
        var influence = neuron.selfconnection.gater == this ? neuron.old : 0; // if gated neuron's selfconnection is gated by this neuron

        // index runs over all the connections to the gated neuron that are gated by this neuron
        for (var input in this.trace.influences[id]) { // captures the effect that the input connection of this neuron have, on a neuron which its input/s is/are gated by this neuron
          influence += this.trace.influences[id][input].weight * this.trace.influences[
            neuron.ID][input].from.activation;
        }
        // eq. 22
        error += neuron.error.responsibility * influence;
      }

      // gated error responsibility
      this.error.gated = this.derivative * error;

      // error responsibility - Eq. 23
      this.error.responsibility = this.error.projected + this.error.gated;
    }

    // learning rate
    rate = rate || .1;

    // adjust all the neuron's incoming connections
    for (var id in this.connections.inputs) {
      var input = this.connections.inputs[id];

      // Eq. 24
      var gradient = this.error.projected * this.trace.elegibility[input.ID];
      for (var id in this.trace.extended) {
        var neuron = this.neighboors[id];
        gradient += neuron.error.responsibility * this.trace.extended[
          neuron.ID][input.ID];
      }
      input.weight += rate * gradient; // adjust weights - aka learn
    }

    // adjust bias
    this.bias += rate * this.error.responsibility;
  },

  project: function(neuron, weight) {
    // self-connection
    if (neuron == this) {
      this.selfconnection.weight = 1;
      return this.selfconnection;
    }

    // check if connection already exists
    var connected = this.connected(neuron);
    if (connected && connected.type == "projected") {
      // update connection
      if (typeof weight != 'undefined')
        connected.connection.weight = weight;
      // return existing connection
      return connected.connection;
    } else {
      // create a new connection
      var connection = new Neuron.connection(this, neuron, weight);
    }

    // reference all the connections and traces
    this.connections.projected[connection.ID] = connection;
    this.neighboors[neuron.ID] = neuron;
    neuron.connections.inputs[connection.ID] = connection;
    neuron.trace.elegibility[connection.ID] = 0;

    for (var id in neuron.trace.extended) {
      var trace = neuron.trace.extended[id];
      trace[connection.ID] = 0;
    }

    return connection;
  },

  gate: function(connection) {
    // add connection to gated list
    this.connections.gated[connection.ID] = connection;

    var neuron = connection.to;
    if (!(neuron.ID in this.trace.extended)) {
      // extended trace
      this.neighboors[neuron.ID] = neuron;
      var xtrace = this.trace.extended[neuron.ID] = {};
      for (var id in this.connections.inputs) {
        var input = this.connections.inputs[id];
        xtrace[input.ID] = 0;
      }
    }

    // keep track
    if (neuron.ID in this.trace.influences)
      this.trace.influences[neuron.ID].push(connection);
    else
      this.trace.influences[neuron.ID] = [connection];

    // set gater
    connection.gater = this;
  },

  // returns true or false whether the neuron is self-connected or not
  selfconnected: function() {
    return this.selfconnection.weight !== 0;
  },

  // returns true or false whether the neuron is connected to another neuron (parameter)
  connected: function(neuron) {
    var result = {
      type: null,
      connection: false
    };

    if (this == neuron) {
      if (this.selfconnected()) {
        result.type = 'selfconnection';
        result.connection = this.selfconnection;
        return result;
      } else
        return false;
    }

    for (var type in this.connections) {
      for (var connection in this.connections[type]) {
        var connection = this.connections[type][connection];
        if (connection.to == neuron) {
          result.type = type;
          result.connection = connection;
          return result;
        } else if (connection.from == neuron) {
          result.type = type;
          result.connection = connection;
          return result;
        }
      }
    }

    return false;
  },

  // clears all the traces (the neuron forgets it's context, but the connections remain intact)
  clear: function() {
    for (var trace in this.trace.elegibility){
      this.trace.elegibility[trace] = 0;
    }

    for (var trace in this.trace.extended){
      for (var extended in this.trace.extended[trace]){
        this.trace.extended[trace][extended] = 0;
      }
    }

    this.error.responsibility = this.error.projected = this.error.gated = 0;
  },

  // all the connections are randomized and the traces are cleared
  reset: function() {
    this.clear();

    for (var type in this.connections){
      for (var connection in this.connections[type]){
        this.connections[type][connection].weight = Math.random() * .2 - .1;
      }
    }

    this.bias = Math.random() * .2 - .1;
    this.old = this.state = this.activation = 0;
  },

  // hardcodes the behaviour of the neuron into an optimized function
  optimize: function(optimized, layer) {

    optimized = optimized || {};
    var store_activation = [];
    var store_trace = [];
    var store_propagation = [];
    var varID = optimized.memory || 0;
    var neurons = optimized.neurons || 1;
    var inputs = optimized.inputs || [];
    var targets = optimized.targets || [];
    var outputs = optimized.outputs || [];
    var variables = optimized.variables || {};
    var activation_sentences = optimized.activation_sentences || [];
    var trace_sentences = optimized.trace_sentences || [];
    var propagation_sentences = optimized.propagation_sentences || [];
    var layers = optimized.layers || { __count: 0, __neuron: 0 };

    // allocate sentences
    var allocate = function(store){
      var allocated = layer in layers && store[layers.__count];
      if (!allocated)
      {
        layers.__count = store.push([]) - 1;
        layers[layer] = layers.__count;
      }
    };
    allocate(activation_sentences);
    allocate(trace_sentences);
    allocate(propagation_sentences);
    var currentLayer = layers.__count;

    // get/reserve space in memory by creating a unique ID for a variablel
    var getVar = function() {
      var args = Array.prototype.slice.call(arguments);

      if (args.length == 1) {
        if (args[0] == 'target') {
          var id = 'target_' + targets.length;
          targets.push(varID);
        } else
          var id = args[0];
        if (id in variables)
          return variables[id];
        return variables[id] = {
          value: 0,
          id: varID++
        };
      } else {
        var extended = args.length > 2;
        if (extended)
          var value = args.pop();

        var unit = args.shift();
        var prop = args.pop();

        if (!extended)
          var value = unit[prop];

        var id = prop + '_';
        for (var i = 0; i < args.length; i++)
          id += args[i] + '_';
        id += unit.ID;
        if (id in variables)
          return variables[id];

        return variables[id] = {
          value: value,
          id: varID++
        };
      }
    };

    // build sentence
    var buildSentence = function() {
      var args = Array.prototype.slice.call(arguments);
      var store = args.pop();
      var sentence = "";
      for (var i = 0; i < args.length; i++)
        if (typeof args[i] == 'string')
          sentence += args[i];
        else
          sentence += 'F[' + args[i].id + ']';

      store.push(sentence + ';');
    };

    // helper to check if an object is empty
    var isEmpty = function(obj) {
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
          return false;
      }
      return true;
    };

    // characteristics of the neuron
    var noProjections = isEmpty(this.connections.projected);
    var noGates = isEmpty(this.connections.gated);
    var isInput = layer == 'input' ? true : isEmpty(this.connections.inputs);
    var isOutput = layer == 'output' ? true : noProjections && noGates;

    // optimize neuron's behaviour
    var rate = getVar('rate');
    var activation = getVar(this, 'activation');
    if (isInput)
      inputs.push(activation.id);
    else {
      activation_sentences[currentLayer].push(store_activation);
      trace_sentences[currentLayer].push(store_trace);
      propagation_sentences[currentLayer].push(store_propagation);
      var old = getVar(this, 'old');
      var state = getVar(this, 'state');
      var bias = getVar(this, 'bias');
      if (this.selfconnection.gater)
        var self_gain = getVar(this.selfconnection, 'gain');
      if (this.selfconnected())
        var self_weight = getVar(this.selfconnection, 'weight');
      buildSentence(old, ' = ', state, store_activation);
      if (this.selfconnected())
        if (this.selfconnection.gater)
          buildSentence(state, ' = ', self_gain, ' * ', self_weight, ' * ',
            state, ' + ', bias, store_activation);
        else
          buildSentence(state, ' = ', self_weight, ' * ', state, ' + ',
            bias, store_activation);
      else
        buildSentence(state, ' = ', bias, store_activation);
      for (var i in this.connections.inputs) {
        var input = this.connections.inputs[i];
        var input_activation = getVar(input.from, 'activation');
        var input_weight = getVar(input, 'weight');
        if (input.gater)
          var input_gain = getVar(input, 'gain');
        if (this.connections.inputs[i].gater)
          buildSentence(state, ' += ', input_activation, ' * ',
            input_weight, ' * ', input_gain, store_activation);
        else
          buildSentence(state, ' += ', input_activation, ' * ',
            input_weight, store_activation);
      }
      var derivative = getVar(this, 'derivative');
      switch (this.squash) {
        case Neuron.squash.LOGISTIC:
          buildSentence(activation, ' = (1 / (1 + Math.exp(-', state, ')))',
            store_activation);
          buildSentence(derivative, ' = ', activation, ' * (1 - ',
            activation, ')', store_activation);
          break;
        case Neuron.squash.TANH:
          var eP = getVar('aux');
          var eN = getVar('aux_2');
          buildSentence(eP, ' = Math.exp(', state, ')', store_activation);
          buildSentence(eN, ' = 1 / ', eP, store_activation);
          buildSentence(activation, ' = (', eP, ' - ', eN, ') / (', eP, ' + ', eN, ')', store_activation);
          buildSentence(derivative, ' = 1 - (', activation, ' * ', activation, ')', store_activation);
          break;
        case Neuron.squash.IDENTITY:
          buildSentence(activation, ' = ', state, store_activation);
          buildSentence(derivative, ' = 1', store_activation);
          break;
        case Neuron.squash.HLIM:
          buildSentence(activation, ' = +(', state, ' > 0)', store_activation);
          buildSentence(derivative, ' = 1', store_activation);
        case Neuron.squash.RELU:
          buildSentence(activation, ' = ', state, ' > 0 ? ', state, ' : 0', store_activation);
          buildSentence(derivative, ' = ', state, ' > 0 ? 1 : 0', store_activation);
          break;
      }

      for (var id in this.trace.extended) {
        // calculate extended elegibility traces in advance
        var neuron = this.neighboors[id];
        var influence = getVar('influences[' + neuron.ID + ']');
        var neuron_old = getVar(neuron, 'old');
        var initialized = false;
        if (neuron.selfconnection.gater == this)
        {
          buildSentence(influence, ' = ', neuron_old, store_trace);
          initialized = true;
        }
        for (var incoming in this.trace.influences[neuron.ID]) {
          var incoming_weight = getVar(this.trace.influences[neuron.ID]
            [incoming], 'weight');
          var incoming_activation = getVar(this.trace.influences[neuron.ID]
            [incoming].from, 'activation');

          if (initialized)
            buildSentence(influence, ' += ', incoming_weight, ' * ', incoming_activation, store_trace);
          else {
            buildSentence(influence, ' = ', incoming_weight, ' * ', incoming_activation, store_trace);
            initialized = true;
          }
        }
      }

      for (var i in this.connections.inputs) {
        var input = this.connections.inputs[i];
        if (input.gater)
          var input_gain = getVar(input, 'gain');
        var input_activation = getVar(input.from, 'activation');
        var trace = getVar(this, 'trace', 'elegibility', input.ID, this.trace
          .elegibility[input.ID]);
        if (this.selfconnected()) {
          if (this.selfconnection.gater) {
            if (input.gater)
              buildSentence(trace, ' = ', self_gain, ' * ', self_weight,
                ' * ', trace, ' + ', input_gain, ' * ', input_activation,
                store_trace);
            else
              buildSentence(trace, ' = ', self_gain, ' * ', self_weight,
                ' * ', trace, ' + ', input_activation, store_trace);
          } else {
            if (input.gater)
              buildSentence(trace, ' = ', self_weight, ' * ', trace, ' + ',
                input_gain, ' * ', input_activation, store_trace);
            else
              buildSentence(trace, ' = ', self_weight, ' * ', trace, ' + ',
                input_activation, store_trace);
          }
        } else {
          if (input.gater)
            buildSentence(trace, ' = ', input_gain, ' * ', input_activation,
              store_trace);
          else
            buildSentence(trace, ' = ', input_activation, store_trace);
        }
        for (var id in this.trace.extended) {
          // extended elegibility trace
          var neuron = this.neighboors[id];
          var influence = getVar('influences[' + neuron.ID + ']');

          var trace = getVar(this, 'trace', 'elegibility', input.ID, this.trace
            .elegibility[input.ID]);
          var xtrace = getVar(this, 'trace', 'extended', neuron.ID, input.ID,
            this.trace.extended[neuron.ID][input.ID]);
          if (neuron.selfconnected())
            var neuron_self_weight = getVar(neuron.selfconnection, 'weight');
          if (neuron.selfconnection.gater)
            var neuron_self_gain = getVar(neuron.selfconnection, 'gain');
          if (neuron.selfconnected())
            if (neuron.selfconnection.gater)
              buildSentence(xtrace, ' = ', neuron_self_gain, ' * ',
                neuron_self_weight, ' * ', xtrace, ' + ', derivative, ' * ',
                trace, ' * ', influence, store_trace);
            else
              buildSentence(xtrace, ' = ', neuron_self_weight, ' * ',
                xtrace, ' + ', derivative, ' * ', trace, ' * ',
                influence, store_trace);
          else
            buildSentence(xtrace, ' = ', derivative, ' * ', trace, ' * ',
              influence, store_trace);
        }
      }
      for (var connection in this.connections.gated) {
        var gated_gain = getVar(this.connections.gated[connection], 'gain');
        buildSentence(gated_gain, ' = ', activation, store_activation);
      }
    }
    if (!isInput) {
      var responsibility = getVar(this, 'error', 'responsibility', this.error
        .responsibility);
      if (isOutput) {
        var target = getVar('target');
        buildSentence(responsibility, ' = ', target, ' - ', activation,
          store_propagation);
        for (var id in this.connections.inputs) {
          var input = this.connections.inputs[id];
          var trace = getVar(this, 'trace', 'elegibility', input.ID, this.trace
            .elegibility[input.ID]);
          var input_weight = getVar(input, 'weight');
          buildSentence(input_weight, ' += ', rate, ' * (', responsibility,
            ' * ', trace, ')', store_propagation);
        }
        outputs.push(activation.id);
      } else {
        if (!noProjections && !noGates) {
          var error = getVar('aux');
          for (var id in this.connections.projected) {
            var connection = this.connections.projected[id];
            var neuron = connection.to;
            var connection_weight = getVar(connection, 'weight');
            var neuron_responsibility = getVar(neuron, 'error',
              'responsibility', neuron.error.responsibility);
            if (connection.gater) {
              var connection_gain = getVar(connection, 'gain');
              buildSentence(error, ' += ', neuron_responsibility, ' * ',
                connection_gain, ' * ', connection_weight,
                store_propagation);
            } else
              buildSentence(error, ' += ', neuron_responsibility, ' * ',
                connection_weight, store_propagation);
          }
          var projected = getVar(this, 'error', 'projected', this.error.projected);
          buildSentence(projected, ' = ', derivative, ' * ', error,
            store_propagation);
          buildSentence(error, ' = 0', store_propagation);
          for (var id in this.trace.extended) {
            var neuron = this.neighboors[id];
            var influence = getVar('aux_2');
            var neuron_old = getVar(neuron, 'old');
            if (neuron.selfconnection.gater == this)
              buildSentence(influence, ' = ', neuron_old, store_propagation);
            else
              buildSentence(influence, ' = 0', store_propagation);
            for (var input in this.trace.influences[neuron.ID]) {
              var connection = this.trace.influences[neuron.ID][input];
              var connection_weight = getVar(connection, 'weight');
              var neuron_activation = getVar(connection.from, 'activation');
              buildSentence(influence, ' += ', connection_weight, ' * ',
                neuron_activation, store_propagation);
            }
            var neuron_responsibility = getVar(neuron, 'error',
              'responsibility', neuron.error.responsibility);
            buildSentence(error, ' += ', neuron_responsibility, ' * ',
              influence, store_propagation);
          }
          var gated = getVar(this, 'error', 'gated', this.error.gated);
          buildSentence(gated, ' = ', derivative, ' * ', error,
            store_propagation);
          buildSentence(responsibility, ' = ', projected, ' + ', gated,
            store_propagation);
          for (var id in this.connections.inputs) {
            var input = this.connections.inputs[id];
            var gradient = getVar('aux');
            var trace = getVar(this, 'trace', 'elegibility', input.ID, this
              .trace.elegibility[input.ID]);
            buildSentence(gradient, ' = ', projected, ' * ', trace,
              store_propagation);
            for (var id in this.trace.extended) {
              var neuron = this.neighboors[id];
              var neuron_responsibility = getVar(neuron, 'error',
                'responsibility', neuron.error.responsibility);
              var xtrace = getVar(this, 'trace', 'extended', neuron.ID,
                input.ID, this.trace.extended[neuron.ID][input.ID]);
              buildSentence(gradient, ' += ', neuron_responsibility, ' * ',
                xtrace, store_propagation);
            }
            var input_weight = getVar(input, 'weight');
            buildSentence(input_weight, ' += ', rate, ' * ', gradient,
              store_propagation);
          }

        } else if (noGates) {
          buildSentence(responsibility, ' = 0', store_propagation);
          for (var id in this.connections.projected) {
            var connection = this.connections.projected[id];
            var neuron = connection.to;
            var connection_weight = getVar(connection, 'weight');
            var neuron_responsibility = getVar(neuron, 'error',
              'responsibility', neuron.error.responsibility);
            if (connection.gater) {
              var connection_gain = getVar(connection, 'gain');
              buildSentence(responsibility, ' += ', neuron_responsibility,
                ' * ', connection_gain, ' * ', connection_weight,
                store_propagation);
            } else
              buildSentence(responsibility, ' += ', neuron_responsibility,
                ' * ', connection_weight, store_propagation);
          }
          buildSentence(responsibility, ' *= ', derivative,
            store_propagation);
          for (var id in this.connections.inputs) {
            var input = this.connections.inputs[id];
            var trace = getVar(this, 'trace', 'elegibility', input.ID, this
              .trace.elegibility[input.ID]);
            var input_weight = getVar(input, 'weight');
            buildSentence(input_weight, ' += ', rate, ' * (',
              responsibility, ' * ', trace, ')', store_propagation);
          }
        } else if (noProjections) {
          buildSentence(responsibility, ' = 0', store_propagation);
          for (var id in this.trace.extended) {
            var neuron = this.neighboors[id];
            var influence = getVar('aux');
            var neuron_old = getVar(neuron, 'old');
            if (neuron.selfconnection.gater == this)
              buildSentence(influence, ' = ', neuron_old, store_propagation);
            else
              buildSentence(influence, ' = 0', store_propagation);
            for (var input in this.trace.influences[neuron.ID]) {
              var connection = this.trace.influences[neuron.ID][input];
              var connection_weight = getVar(connection, 'weight');
              var neuron_activation = getVar(connection.from, 'activation');
              buildSentence(influence, ' += ', connection_weight, ' * ',
                neuron_activation, store_propagation);
            }
            var neuron_responsibility = getVar(neuron, 'error',
              'responsibility', neuron.error.responsibility);
            buildSentence(responsibility, ' += ', neuron_responsibility,
              ' * ', influence, store_propagation);
          }
          buildSentence(responsibility, ' *= ', derivative,
            store_propagation);
          for (var id in this.connections.inputs) {
            var input = this.connections.inputs[id];
            var gradient = getVar('aux');
            buildSentence(gradient, ' = 0', store_propagation);
            for (var id in this.trace.extended) {
              var neuron = this.neighboors[id];
              var neuron_responsibility = getVar(neuron, 'error',
                'responsibility', neuron.error.responsibility);
              var xtrace = getVar(this, 'trace', 'extended', neuron.ID,
                input.ID, this.trace.extended[neuron.ID][input.ID]);
              buildSentence(gradient, ' += ', neuron_responsibility, ' * ',
                xtrace, store_propagation);
            }
            var input_weight = getVar(input, 'weight');
            buildSentence(input_weight, ' += ', rate, ' * ', gradient,
              store_propagation);
          }
        }
      }
      buildSentence(bias, ' += ', rate, ' * ', responsibility,
        store_propagation);
    }
    return {
      memory: varID,
      neurons: neurons + 1,
      inputs: inputs,
      outputs: outputs,
      targets: targets,
      variables: variables,
      activation_sentences: activation_sentences,
      trace_sentences: trace_sentences,
      propagation_sentences: propagation_sentences,
      layers: layers
    }
  }
}

// represents a connection between two neurons
Neuron.connection = function Connection(from, to, weight) {
  if (!from || !to)
    throw new Error("Connection Error: Invalid neurons");

  this.ID = Neuron.connection.uid();
  this.from = from;
  this.to = to;
  this.weight = typeof weight == 'undefined' ? Math.random() * .2 - .1 : weight;
  this.gain = 1;
  this.gater = null;
}

// squashing functions
Neuron.squash = {};

// eq. 5 & 5'
Neuron.squash.LOGISTIC = function(x, derivate) {
  var fx = 1 / (1 + Math.exp(-x));
  if (!derivate)
    return fx;
  return fx * (1 - fx);
};
Neuron.squash.TANH = function(x, derivate) {
  if(derivate)
    return 1 - Math.pow(Math.tanh(x), 2);
  return Math.tanh(x);
};
Neuron.squash.IDENTITY = function(x, derivate) {
  return derivate ? 1 : x;
};
Neuron.squash.HLIM = function(x, derivate) {
  return derivate ? 1 : x > 0 ? 1 : 0;
};
Neuron.squash.RELU = function(x, derivate) {
  if (derivate)
    return x > 0 ? 1 : 0;
  return x > 0 ? x : 0;
};

// unique ID's
(function() {
  var neurons = 0;
  var connections = 0;
  Neuron.uid = function() {
    return neurons++;
  }
  Neuron.connection.uid = function() {
    return connections++;
  }
  Neuron.quantity = function() {
    return {
      neurons: neurons,
      connections: connections
    }
  }
})();

}).call(this,_dereq_("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},_dereq_("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/synaptic/src/neuron.js","/../../node_modules/synaptic/src")
},{"buffer":13,"rH1JPG":15}],20:[function(_dereq_,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
var Synaptic = {
    Neuron: _dereq_('./neuron'),
    Layer: _dereq_('./layer'),
    Network: _dereq_('./network'),
    Trainer: _dereq_('./trainer'),
    Architect: _dereq_('./architect')
};

// CommonJS & AMD
if (typeof define !== 'undefined' && define.amd)
{
  define([], function(){ return Synaptic });
}

// Node.js
if (typeof module !== 'undefined' && module.exports)
{
  module.exports = Synaptic;
}

// Browser
if (typeof window == 'object')
{
  (function(){
    var oldSynaptic = window['synaptic'];
    Synaptic.ninja = function(){
      window['synaptic'] = oldSynaptic;
      return Synaptic;
    };
  })();

  window['synaptic'] = Synaptic;
}

}).call(this,_dereq_("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},_dereq_("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/synaptic/src/synaptic.js","/../../node_modules/synaptic/src")
},{"./architect":16,"./layer":17,"./network":18,"./neuron":19,"./trainer":21,"buffer":13,"rH1JPG":15}],21:[function(_dereq_,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
// export
if (module) module.exports = Trainer;

/*******************************************************************************************
                                        TRAINER
*******************************************************************************************/

//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
function shuffleInplace(o) { //v1.0
  for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
};

function Trainer(network, options) {
  options = options || {};
  this.network = network;
  this.rate = options.rate || .2;
  this.iterations = options.iterations || 100000;
  this.error = options.error || .005;
  this.cost = options.cost || null;
  this.crossValidate = options.crossValidate || null;
}

Trainer.prototype = {

  // trains any given set to a network
  train: function(set, options) {
    var error = 1;
    var iterations = bucketSize = 0;
    var abort = false;
    var currentRate;
    var cost = options && options.cost || this.cost || Trainer.cost.MSE;
    var crossValidate = false, testSet, trainSet;

    var start = Date.now();

    if (options) {
      if (options.iterations)
        this.iterations = options.iterations;
      if (options.error)
        this.error = options.error;
      if (options.rate)
        this.rate = options.rate;
      if (options.cost)
        this.cost = options.cost;
      if (options.schedule)
        this.schedule = options.schedule;
      if (options.customLog){
        // for backward compatibility with code that used customLog
        console.log('Deprecated: use schedule instead of customLog')
        this.schedule = options.customLog;
      }
      if (this.crossValidate || options.crossValidate) {
        if(!this.crossValidate) this.crossValidate = {};
        crossValidate = true;
        if (options.crossValidate.testSize)
          this.crossValidate.testSize = options.crossValidate.testSize;
        if (options.crossValidate.testError)
          this.crossValidate.testError = options.crossValidate.testError;
      }
    }

    currentRate = this.rate;
    if(Array.isArray(this.rate)) {
      var bucketSize = Math.floor(this.iterations / this.rate.length);
    }

    if(crossValidate) {
      var numTrain = Math.ceil((1 - this.crossValidate.testSize) * set.length);
      trainSet = set.slice(0, numTrain);
      testSet = set.slice(numTrain);
    }

    var lastError = 0;
    while ((!abort && iterations < this.iterations && error > this.error)) {
      if (crossValidate && error <= this.crossValidate.testError) {
        break;
      }

      var currentSetSize = set.length;
      error = 0;
      iterations++;

      if(bucketSize > 0) {
        var currentBucket = Math.floor(iterations / bucketSize);
        currentRate = this.rate[currentBucket] || currentRate;
      }

      if(typeof this.rate === 'function') {
        currentRate = this.rate(iterations, lastError);
      }

      if (crossValidate) {
        this._trainSet(trainSet, currentRate, cost);
        error += this.test(testSet).error;
        currentSetSize = 1;
      } else {
        error += this._trainSet(set, currentRate, cost);
        currentSetSize = set.length;
      }

      // check error
      error /= currentSetSize;
      lastError = error;

      if (options) {
        if (this.schedule && this.schedule.every && iterations %
          this.schedule.every == 0)
          abort = this.schedule.do({ error: error, iterations: iterations, rate: currentRate });
        else if (options.log && iterations % options.log == 0) {
          console.log('iterations', iterations, 'error', error, 'rate', currentRate);
        };
        if (options.shuffle)
          shuffleInplace(set);
      }
    }

    var results = {
      error: error,
      iterations: iterations,
      time: Date.now() - start
    };

    return results;
  },

  // trains any given set to a network, using a WebWorker (only for the browser). Returns a Promise of the results.
  trainAsync: function(set, options) {
    var train = this.workerTrain.bind(this);
    return new Promise(function(resolve, reject) {
      try {
        train(set, resolve, options, true)
      } catch(e) {
        reject(e)
      }
    })
  },

  // preforms one training epoch and returns the error (private function used in this.train)
  _trainSet: function(set, currentRate, costFunction) {
    var errorSum = 0;
    for (var i = 0; i < set.length; i++) {
      var input = set[i].input;
      var target = set[i].output;

      var output = this.network.activate(input);
      this.network.propagate(currentRate, target);

      errorSum += costFunction(target, output);
    }
    return errorSum;
  },

  // tests a set and returns the error and elapsed time
  test: function(set, options) {
    var error = 0;
    var input, output, target;
    var cost = options && options.cost || this.cost || Trainer.cost.MSE;

    var start = Date.now();

    for (var i = 0; i < set.length; i++) {
      input = set[i].input;
      target = set[i].output;
      output = this.network.activate(input);
      error += cost(target, output);
    }

    error /= set.length;

    var results = {
      error: error,
      time: Date.now() - start
    };

    return results;
  },

  // trains any given set to a network using a WebWorker [deprecated: use trainAsync instead]
  workerTrain: function(set, callback, options, suppressWarning) {
    if (!suppressWarning) {
      console.warn('Deprecated: do not use `workerTrain`, use `trainAsync` instead.')
    }
    var that = this;

    if (!this.network.optimized)
      this.network.optimize();

    // Create a new worker
    var worker = this.network.worker(this.network.optimized.memory, set, options);

    // train the worker
    worker.onmessage = function(e) {
      switch(e.data.action) {
          case 'done':
            var iterations = e.data.message.iterations;
            var error = e.data.message.error;
            var time = e.data.message.time;

            that.network.optimized.ownership(e.data.memoryBuffer);

            // Done callback
            callback({
              error: error,
              iterations: iterations,
              time: time
            });

            // Delete the worker and all its associated memory
            worker.terminate();
          break;

          case 'log':
            console.log(e.data.message);

          case 'schedule':
            if (options && options.schedule && typeof options.schedule.do === 'function') {
              var scheduled = options.schedule.do
              scheduled(e.data.message)
            }
          break;
      }
    };

    // Start the worker
    worker.postMessage({action: 'startTraining'});
  },

  // trains an XOR to the network
  XOR: function(options) {
    if (this.network.inputs() != 2 || this.network.outputs() != 1)
      throw new Error("Incompatible network (2 inputs, 1 output)");

    var defaults = {
      iterations: 100000,
      log: false,
      shuffle: true,
      cost: Trainer.cost.MSE
    };

    if (options)
      for (var i in options)
        defaults[i] = options[i];

    return this.train([{
      input: [0, 0],
      output: [0]
    }, {
      input: [1, 0],
      output: [1]
    }, {
      input: [0, 1],
      output: [1]
    }, {
      input: [1, 1],
      output: [0]
    }], defaults);
  },

  // trains the network to pass a Distracted Sequence Recall test
  DSR: function(options) {
    options = options || {};

    var targets = options.targets || [2, 4, 7, 8];
    var distractors = options.distractors || [3, 5, 6, 9];
    var prompts = options.prompts || [0, 1];
    var length = options.length || 24;
    var criterion = options.success || 0.95;
    var iterations = options.iterations || 100000;
    var rate = options.rate || .1;
    var log = options.log || 0;
    var schedule = options.schedule || {};
    var cost = options.cost || this.cost || Trainer.cost.CROSS_ENTROPY;

    var trial, correct, i, j, success;
    trial = correct = i = j = success = 0;
    var error = 1,
      symbols = targets.length + distractors.length + prompts.length;

    var noRepeat = function(range, avoid) {
      var number = Math.random() * range | 0;
      var used = false;
      for (var i in avoid)
        if (number == avoid[i])
          used = true;
      return used ? noRepeat(range, avoid) : number;
    };

    var equal = function(prediction, output) {
      for (var i in prediction)
        if (Math.round(prediction[i]) != output[i])
          return false;
      return true;
    };

    var start = Date.now();

    while (trial < iterations && (success < criterion || trial % 1000 != 0)) {
      // generate sequence
      var sequence = [],
        sequenceLength = length - prompts.length;
      for (i = 0; i < sequenceLength; i++) {
        var any = Math.random() * distractors.length | 0;
        sequence.push(distractors[any]);
      }
      var indexes = [],
        positions = [];
      for (i = 0; i < prompts.length; i++) {
        indexes.push(Math.random() * targets.length | 0);
        positions.push(noRepeat(sequenceLength, positions));
      }
      positions = positions.sort();
      for (i = 0; i < prompts.length; i++) {
        sequence[positions[i]] = targets[indexes[i]];
        sequence.push(prompts[i]);
      }

      //train sequence
      var distractorsCorrect;
      var targetsCorrect = distractorsCorrect = 0;
      error = 0;
      for (i = 0; i < length; i++) {
        // generate input from sequence
        var input = [];
        for (j = 0; j < symbols; j++)
          input[j] = 0;
        input[sequence[i]] = 1;

        // generate target output
        var output = [];
        for (j = 0; j < targets.length; j++)
          output[j] = 0;

        if (i >= sequenceLength) {
          var index = i - sequenceLength;
          output[indexes[index]] = 1;
        }

        // check result
        var prediction = this.network.activate(input);

        if (equal(prediction, output))
          if (i < sequenceLength)
            distractorsCorrect++;
          else
            targetsCorrect++;
        else {
          this.network.propagate(rate, output);
        }

        error += cost(output, prediction);

        if (distractorsCorrect + targetsCorrect == length)
          correct++;
      }

      // calculate error
      if (trial % 1000 == 0)
        correct = 0;
      trial++;
      var divideError = trial % 1000;
      divideError = divideError == 0 ? 1000 : divideError;
      success = correct / divideError;
      error /= length;

      // log
      if (log && trial % log == 0)
        console.log("iterations:", trial, " success:", success, " correct:",
          correct, " time:", Date.now() - start, " error:", error);
      if (schedule.do && schedule.every && trial % schedule.every == 0)
        schedule.do({
          iterations: trial,
          success: success,
          error: error,
          time: Date.now() - start,
          correct: correct
        });
    }

    return {
      iterations: trial,
      success: success,
      error: error,
      time: Date.now() - start
    }
  },

  // train the network to learn an Embeded Reber Grammar
  ERG: function(options) {

    options = options || {};
    var iterations = options.iterations || 150000;
    var criterion = options.error || .05;
    var rate = options.rate || .1;
    var log = options.log || 500;
    var cost = options.cost || this.cost || Trainer.cost.CROSS_ENTROPY;

    // gramar node
    var Node = function() {
      this.paths = [];
    };
    Node.prototype = {
      connect: function(node, value) {
        this.paths.push({
          node: node,
          value: value
        });
        return this;
      },
      any: function() {
        if (this.paths.length == 0)
          return false;
        var index = Math.random() * this.paths.length | 0;
        return this.paths[index];
      },
      test: function(value) {
        for (var i in this.paths)
          if (this.paths[i].value == value)
            return this.paths[i];
        return false;
      }
    };

    var reberGrammar = function() {

      // build a reber grammar
      var output = new Node();
      var n1 = (new Node()).connect(output, "E");
      var n2 = (new Node()).connect(n1, "S");
      var n3 = (new Node()).connect(n1, "V").connect(n2, "P");
      var n4 = (new Node()).connect(n2, "X");
      n4.connect(n4, "S");
      var n5 = (new Node()).connect(n3, "V");
      n5.connect(n5, "T");
      n2.connect(n5, "X");
      var n6 = (new Node()).connect(n4, "T").connect(n5, "P");
      var input = (new Node()).connect(n6, "B");

      return {
        input: input,
        output: output
      }
    };

    // build an embeded reber grammar
    var embededReberGrammar = function() {
      var reber1 = reberGrammar();
      var reber2 = reberGrammar();

      var output = new Node();
      var n1 = (new Node).connect(output, "E");
      reber1.output.connect(n1, "T");
      reber2.output.connect(n1, "P");
      var n2 = (new Node).connect(reber1.input, "P").connect(reber2.input,
        "T");
      var input = (new Node).connect(n2, "B");

      return {
        input: input,
        output: output
      }

    };

    // generate an ERG sequence
    var generate = function() {
      var node = embededReberGrammar().input;
      var next = node.any();
      var str = "";
      while (next) {
        str += next.value;
        next = next.node.any();
      }
      return str;
    };

    // test if a string matches an embeded reber grammar
    var test = function(str) {
      var node = embededReberGrammar().input;
      var i = 0;
      var ch = str.charAt(i);
      while (i < str.length) {
        var next = node.test(ch);
        if (!next)
          return false;
        node = next.node;
        ch = str.charAt(++i);
      }
      return true;
    };

    // helper to check if the output and the target vectors match
    var different = function(array1, array2) {
      var max1 = 0;
      var i1 = -1;
      var max2 = 0;
      var i2 = -1;
      for (var i in array1) {
        if (array1[i] > max1) {
          max1 = array1[i];
          i1 = i;
        }
        if (array2[i] > max2) {
          max2 = array2[i];
          i2 = i;
        }
      }

      return i1 != i2;
    };

    var iteration = 0;
    var error = 1;
    var table = {
      "B": 0,
      "P": 1,
      "T": 2,
      "X": 3,
      "S": 4,
      "E": 5
    };

    var start = Date.now();
    while (iteration < iterations && error > criterion) {
      var i = 0;
      error = 0;

      // ERG sequence to learn
      var sequence = generate();

      // input
      var read = sequence.charAt(i);
      // target
      var predict = sequence.charAt(i + 1);

      // train
      while (i < sequence.length - 1) {
        var input = [];
        var target = [];
        for (var j = 0; j < 6; j++) {
          input[j] = 0;
          target[j] = 0;
        }
        input[table[read]] = 1;
        target[table[predict]] = 1;

        var output = this.network.activate(input);

        if (different(output, target))
          this.network.propagate(rate, target);

        read = sequence.charAt(++i);
        predict = sequence.charAt(i + 1);

        error += cost(target, output);
      }
      error /= sequence.length;
      iteration++;
      if (iteration % log == 0) {
        console.log("iterations:", iteration, " time:", Date.now() - start,
          " error:", error);
      }
    }

    return {
      iterations: iteration,
      error: error,
      time: Date.now() - start,
      test: test,
      generate: generate
    }
  },

  timingTask: function(options){

    if (this.network.inputs() != 2 || this.network.outputs() != 1)
      throw new Error("Invalid Network: must have 2 inputs and one output");

    if (typeof options == 'undefined')
      options = {};

    // helper
    function getSamples (trainingSize, testSize){

      // sample size
      var size = trainingSize + testSize;

      // generate samples
      var t = 0;
      var set = [];
      for (var i = 0; i < size; i++) {
        set.push({ input: [0,0], output: [0] });
      }
      while(t < size - 20) {
          var n = Math.round(Math.random() * 20);
          set[t].input[0] = 1;
          for (var j = t; j <= t + n; j++){
              set[j].input[1] = n / 20;
              set[j].output[0] = 0.5;
          }
          t += n;
          n = Math.round(Math.random() * 20);
          for (var k = t+1; k <= (t + n) &&  k < size; k++)
              set[k].input[1] = set[t].input[1];
          t += n;
      }

      // separate samples between train and test sets
      var trainingSet = []; var testSet = [];
      for (var l = 0; l < size; l++)
          (l < trainingSize ? trainingSet : testSet).push(set[l]);

      // return samples
      return {
          train: trainingSet,
          test: testSet
      }
    }

    var iterations = options.iterations || 200;
    var error = options.error || .005;
    var rate = options.rate || [.03, .02];
    var log = options.log === false ? false : options.log || 10;
    var cost = options.cost || this.cost || Trainer.cost.MSE;
    var trainingSamples = options.trainSamples || 7000;
    var testSamples = options.trainSamples || 1000;

    // samples for training and testing
    var samples = getSamples(trainingSamples, testSamples);

    // train
    var result = this.train(samples.train, {
      rate: rate,
      log: log,
      iterations: iterations,
      error: error,
      cost: cost
    });

    return {
      train: result,
      test: this.test(samples.test)
    }
  }
};

// Built-in cost functions
Trainer.cost = {
  // Eq. 9
  CROSS_ENTROPY: function(target, output)
  {
    var crossentropy = 0;
    for (var i in output)
      crossentropy -= (target[i] * Math.log(output[i]+1e-15)) + ((1-target[i]) * Math.log((1+1e-15)-output[i])); // +1e-15 is a tiny push away to avoid Math.log(0)
    return crossentropy;
  },
  MSE: function(target, output)
  {
    var mse = 0;
    for (var i = 0; i < output.length; i++)
      mse += Math.pow(target[i] - output[i], 2);
    return mse / output.length;
  },
  BINARY: function(target, output){
    var misses = 0;
    for (var i = 0; i < output.length; i++)
      misses += Math.round(target[i] * 2) != Math.round(output[i] * 2);
    return misses;
  }
}

}).call(this,_dereq_("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},_dereq_("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/synaptic/src/trainer.js","/../../node_modules/synaptic/src")
},{"buffer":13,"rH1JPG":15}]},{},[1])
(1)
});