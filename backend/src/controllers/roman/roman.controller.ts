import { Controller, Get, Query } from '@nestjs/common';
import { RomanService } from '../../services/roman/roman.service';

@Controller('roman')
export class RomanController {
    constructor(private readonly romanService: RomanService) {}

    @Get()
    fromArab(@Query('fromArab') arab: number): string {
        this.romanService.validateInput(Number(arab));
        
        return this.romanService.fromArab(arab);
    }
}
