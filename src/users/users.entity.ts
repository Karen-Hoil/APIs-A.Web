import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;
  @Column()
  username: string;
  @Column()
  password: string;

//   @Column({ default: true })
//   username: boolean;

}