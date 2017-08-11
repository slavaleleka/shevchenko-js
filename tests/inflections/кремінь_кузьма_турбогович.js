const assert = require("assert");
const testInflections = require("../helpers").testInflections;

const person = {
    gender: "male",
    lastName: "кремінь",
    firstName: "кузьма",
    middleName: "турбогович"
};

const validResults = {
    nominative: {
        lastName: "кремінь",
        firstName: "кузьма",
        middleName: "турбогович"
    },
    genitive: {
        lastName: "кременя",
        firstName: "кузьми",
        middleName: "турбоговича"
    },
    dative: {
        lastName: "кременю",
        firstName: "кузьмі",
        middleName: "турбоговичу"
    },
    accusative: {
        lastName: "кременя",
        firstName: "кузьму",
        middleName: "турбоговича"
    },
    ablative: {
        lastName: "кременем",
        firstName: "кузьмою",
        middleName: "турбоговичем"
    },
    locative: {
        lastName: "кремені",
        firstName: "кузьмі",
        middleName: "турбоговичу"
    },
    vocative: {
        lastName: "кременю",
        firstName: "кузьмо",
        middleName: "турбоговичу"
    }
};

testInflections(person, validResults);
