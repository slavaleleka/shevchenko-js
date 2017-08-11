const assert = require("assert");
const testInflections = require("../helpers").testInflections;

const person = {
    gender: "male",
    lastName: "кіт",
    firstName: "зоресвіт",
    middleName: "олександрович"
};

const validResults = {
    nominative: {
        lastName: "кіт",
        firstName: "зоресвіт",
        middleName: "олександрович"
    },
    genitive: {
        lastName: "кота",
        firstName: "зоресвіта",
        middleName: "олександровича"
    },
    dative: {
        lastName: "коту",
        firstName: "зоресвіту",
        middleName: "олександровичу"
    },
    accusative: {
        lastName: "кота",
        firstName: "зоресвіта",
        middleName: "олександровича"
    },
    ablative: {
        lastName: "котом",
        firstName: "зоресвітом",
        middleName: "олександровичем"
    },
    locative: {
        lastName: "котові",
        firstName: "зоресвітові",
        middleName: "олександровичу"
    },
    vocative: {
        lastName: "коте",
        firstName: "зоресвіте",
        middleName: "олександровичу"
    }
};

testInflections(person, validResults);
