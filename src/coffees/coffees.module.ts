import { Injectable, Module, Scope } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'src/events/entities/event.entity';
import { Connection } from 'typeorm';
import { COFFEE_BRANDS } from './coffees.constants';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';

/* When registering entities, we use the forFeature module.
For the main app module we use the forRoot method. */

// Factory Pattern syntax

@Injectable()
export class CoffeeBrandFactory {
  create() {
    return ['buddy brew', 'nescafe'];
  }
}

// Class injection syntax

class ConfigService {}
class DevelopmentService {}
class ProductionConfigService {}

// class MockCoffeesService {} //Value Based Provider
@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    // CoffeeBrandFactory, // Factory providers
    // {
    //   provide: ConfigService,
    //   useClass:
    //     process.env.NODE_ENV === 'development'  // Class providers
    //       ? DevelopmentService
    //       : ProductionConfigService,
    // },
    {
      provide: COFFEE_BRANDS,
      useFactory: async (connection: Connection): Promise<string[]> => {
        // const coffeeBrands = await connection.query('SELECT * FROM ...')
        const coffeeBrands = await Promise.resolve(['buddy brew', 'nescafe']);
        console.log('[!] Async Factory');
        return coffeeBrands;
      },
      inject: [Connection],
      // scope: Scope.TRANSIENT,
      // useFactory: () => ['buddy brew', 'nescafe'],
      // inject: [CoffeeBrandFactory] // For Factory providers
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
