export interface ActivationFunction {
  //Basic interface that any Activation Function(Sigmoid, RelU, etc should implement for consistency)

    //Activation function
    output: (input: number) => number;

    //Activation function's derivative
  
   der: (input: number) => number;
  }