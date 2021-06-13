import { Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class RomanService {
  private static readonly arabToRoman: Array<Array<any>> = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ];

  validateInput(arab: number): void {
    const isWithinTheRange: boolean = arab >= 1 && arab <= 3999;
    const isInteger: boolean = Number.isInteger(arab);

    if (!isWithinTheRange || !isInteger)
      throw new BadRequestException('The input must be within 1 and 3,999.');
  }

  fromArab(arab: number): string {
    const arabToRoman: Array<Array<any>> = RomanService.arabToRoman;

    if (arab === 0) return '';

    for (let i = 0; i < arabToRoman.length; i++) {
      if (arab >= arabToRoman[i][0])
        return arabToRoman[i][1] + this.fromArab(arab - arabToRoman[i][0]);
    }
  }
}
