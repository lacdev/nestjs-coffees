import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

/* Creating a class called Event that implements the EventType interface. */
//

@Index(['name', 'type'])
@Entity()
export class Event {
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
