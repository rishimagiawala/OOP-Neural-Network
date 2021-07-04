import { ActivationFunction } from "../interfaces/ActivationFunction";

//Here I have included the Relu Activation function, however you can also create other classes for Sigmoid etc - just make sure to implement ActivationFunction for consistency
export class ReluActivation implements ActivationFunction{
   output(input: number){
    return Math.max(0, input)
  }
  der(input: number){
    if(input <= 0){
      return 0
    }
    else{
      return 1
    }
  }
  
  
 
}