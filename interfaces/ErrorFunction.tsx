//Contract to determine the loss of a given weight
export interface ErrorFunction {
    error: (output: number, target: number) => number;
    der: (output: number, target: number) => number;
  }