import { ErrorFunction } from "../interfaces/ErrorFunction";

export class Square implements ErrorFunction{
    error(output: number, target: number){
        return 0.5 * Math.pow(output - target, 2)
    }
    der(output: number, target: number){
        return output-target
    }
}