import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'src/events/entities/event.entity';
import { COFFEE_BRANDS } from './coffees.constants';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';

/* When registering entities, we use the forFeature module.
For the main app module we use the forRoot method. */

class MockCoffeesService {} //Value Based Provider
@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    {
      provide: COFFEE_BRANDS,
      useValue: ['buddy brew', 'nescafe'],
    },
  ],
  // providers: [{provide: CoffeesService, useValue: new MockCoffeesService()}]
  exports: [CoffeesService],
})
export class CoffeesModule {}

/* 
{
  provide: CoffeesService,
  useClass: CoffeeService
}
*/
