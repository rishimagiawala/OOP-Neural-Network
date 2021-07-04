import { ActivationFunction } from "./interfaces/ActivationFunction";
import { Link } from "./Link";

export class Neuron {
  id: string 
  //Array of Links used for Input
  inputLinks: Link[] = [];
  outputLinks: Link[] =[]

  //Activation function that is called on this neuron.
  activation: ActivationFunction
  
  //Here you could include a bias in your Neuron
  bias = .5
 
  constructor(id: string, activation: ActivationFunction) {
    this.id = id;
    this.activation = activation;
    
  }
 
  }
  