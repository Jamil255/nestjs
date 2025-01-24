import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('song')
export class Song {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
  @Column('varchar', { array: true })
  artist: string[];

  @Column({ type: 'date' })
  releasedDate: Date;

  @Column({ type: 'time' })
  duration: Date;

  @Column({ type: 'text' })
  layrics: string;
}
