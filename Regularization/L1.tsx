import { RegularizationFunction } from "../interfaces/RegularizationFunction";

//This function is not complete, but in practice you would add this: cost = loss + (regulatiaztion term), to account for overfitting.
export class L1 implements RegularizationFunction{
    output: (weight: number) => number;
    der: (weight: number) => number;
    
}