"use strict";

const util = require("../util");

/**
 * Contains a set of methods for words inflection.
 *
 * @type {Object}
 */
const inflector = {};

/**
 * Inflect a value by inflection rule.
 *
 * @param {Object} rule
 * @param {string} caseName
 * @param {string} value
 * @return {string}
 */
inflector.inflectByRule = (rule, caseName, value) => {
    if (typeof rule === "undefined") return value;
    const regexp = rule.regexp.modify;
    const modifiers = rule.cases[caseName][0]; // Retrieve the first group modifiers object by case name.
    return value.replace(new RegExp(regexp, "gm"), (match, ...groups) => {
        let replacement = "";
        const count = util.regexp.countGroups(regexp);
        for (let index = 0; index < count; index++) {
            replacement += inflector.applyGroupModifier(modifiers && modifiers[index], groups[index]);
        }
        return replacement;
    });
};

/**
 * Apply a group modifier to the value.
 *
 * @see inflector.inflectByRule
 *
 * @param {Object} modifier
 * @param {string} value
 * @return {string}
 */
inflector.applyGroupModifier = (modifier, value) => {
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

module.exports = inflector;
