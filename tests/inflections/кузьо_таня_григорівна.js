var assert = require("assert");
var testInflections = require("../helpers").testInflections;

describe("inflection кузьо таня григорівна", function () {

    var person = {
        gender: "female",
        lastName: "кузьо",
        firstName: "таня",
        middleName: "григорівна"
    };

    var validResults = {
        nominative: {
            lastName: "кузьо",
            firstName: "таня",
            middleName: "григорівна"
        },
        genitive: {
            lastName: "кузьо",
            firstName: "тані",
            middleName: "григорівни"
        },
        dative: {
            lastName: "кузьо",
            firstName: "тані",
            middleName: "григорівні"
        },
        accusative: {
            lastName: "кузьо",
            firstName: "таню",
            middleName: "григорівну"
        },
        ablative: {
            lastName: "кузьо",
            firstName: "танею",
            middleName: "григорівною"
        },
        locative: {
            lastName: "кузьо",
            firstName: "тані",
            middleName: "григорівні"
        },
        vocative: {
            lastName: "кузьо",
            firstName: "таню",
            middleName: "григорівно"
        }
    };

    testInflections(person, validResults);

});
