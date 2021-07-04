export interface RegularizationFunction {
    output: (weight: number) => number;
    der: (weight: number) => number;
  }