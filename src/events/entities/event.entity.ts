import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

/* Creating a class called Event that implements the EventType interface. */
export interface EventType {
  id: number;
  type: string;
  name: string;
  payload: Record<string, any>;
}

@Index(['name', 'type'])
@Entity()
export class Event implements EventType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Index()
  @Column()
  name: string;

  @Column('json')
  payload: Record<string, any>;
}
