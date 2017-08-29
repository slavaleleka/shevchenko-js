"use strict";

const fs = require("fs");
const assert = require("assert");
const pos = require("../dist/module/pos");
const NeuralNetwork = require("../dist/module/pos/neural-network");

describe("#pos_nn_a_ya learning rate", function () {
    it("should have learning rate value >= 0.95", function () {
        const nn = new NeuralNetwork(require("../nn/pos-a-ya/data/structure.json"));
        const predictions = require("../nn/pos-a-ya/data/samples.json")
            .filter((item) => NeuralNetwork.isValidPosName(item.pos))
            .map((item) => item.pos === nn.run(item.value));

        const correctPredictions = predictions.filter((prediction) => prediction);
        const learningRate = correctPredictions.length / predictions.length;

        assert(learningRate >= 0.95, `The learn rate value is too low: ${learningRate}.`);
    });
});
