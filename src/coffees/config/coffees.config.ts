/* eslint-disable prettier/prettier */
import { registerAs } from '@nestjs/config';

export default registerAs('coffees', () => ({
  foo: 'bar',
}));
