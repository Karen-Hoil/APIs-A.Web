import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users'})

export class User {
  @PrimaryGeneratedColumn()
  PkUser: number;

  @Column()
  UserName: string;

  @Column()
  password: string;

  @Column({type: 'datetime', default:() => 'CURRENT_TIMESTAMP' })
  Create: Date

//   @Column({ default: true })
//   username: boolean;

}