"use strict";

/**
 * Validator class.
 */
class Validator {
    /**
     * Validator constructor.
     */
    constructor() {
        this.reset();
    }

    /**
     * Reset validator to it's initial state.
     *
     * @return {Validator}
     */
    reset() {
        this._rules = [];
        return this;
    }

    /**
     * Add validation rule.
     *
     * @param {function} validate
     * @param {string} message
     * @return {Validator}
     */
    add(validate, message) {
        const rule = {validate, message};
        this._rules.push(rule);
        return this;
    }

    /**
     * Validate attributes.
     *
     * @return {Validator}
     * @throws {TypeError}
     */
    validate() {
        this._rules.forEach((rule) => {
            if (!rule.validate()) {
                throw new TypeError(rule.message);
            }
        });
        return this.reset();
    }
}

module.exports = Validator;
