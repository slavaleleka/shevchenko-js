export default class Recognizer {
  /**
   * @param {Array<RecognizerRule>} rules
   */
  constructor(rules) {
    this._rules = rules;
    this.recognize = this.recognize.bind(this);
  }

  /**
   * Recognize the part of speech of the word.
   *
   * @param {string} word
   * @param {Gender} gender
   * @returns {string|null} - Recognized part of speech or null if no applicable rule was found.
   */
  recognize(word, gender) {
    const rule = this._rules.find((rule) => rule.isApplicable(word, gender));
    if (rule == null) {
      return null;
    }
    return rule.recognize(word, gender);
  }
}
