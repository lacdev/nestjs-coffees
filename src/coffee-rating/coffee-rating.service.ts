import { Injectable } from '@nestjs/common';
import { CoffeesService } from 'src/coffees/coffees.service';

@Injectable()
export class CoffeeRatingService {
  // Constructor based injection to add the coffe service
  constructor(private readonly coffeesService: CoffeesService) {}
}
