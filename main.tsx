import { RegularizationFunction } from "./interfaces/RegularizationFunction";
import { ActivationFunction } from "./interfaces/ActivationFunction";

/**
 * Here is the main buildNN function that will create the NN based on the parameters you pass it
 * This includes: the Activation Function, Regularization Function, etc
 * @Param shape Ex. [1 2, 3, 1] defines the nodes in each layer.
   */
function buildNN(activation: ActivationFunction, regularization: RegularizationFunction, outputActivation: ActivationFunction, shape: []){
var numLayers = shape.length

//Here I am going to use psuedocode because coding the actual functionality would take a while

//In theory however:
/**
 * FOR EACH LAYER in Shape:
 * VAR OutputLayer = Shape[numLayers - 1]
 * VAR InputLayer = Shape[0]
 * VAr 
 * @Param shape Ex. [1 2, 3, 1] defines the nodes in each layer.
   */
}