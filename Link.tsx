/**
   * Class to define the "links" within a neural network that connects neurons from different layers.
   * Defines:
   * Source Neuron   
   * Target Neuron
   */

import { Neuron } from "./Neuron";

export class Link{

   source: Neuron
   target: Neuron
   id: String
   //When a Link is initialized, we will initially set a random number to the weight variable
   weight = Math.random();

   constructor(source: Neuron, target: Neuron) {
    this.id = source.id + "-" + target.id;
    this.source = source;
    this.target = target
}

}