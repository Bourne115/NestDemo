import { Entity, Column, UpdateDateColumn, ObjectIdColumn } from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn()
  id?: number;

  @Column({ default: null })
  name: string;

  @Column({ length: 200, type: 'text'})
  email: string

  @Column({ length: 200, type: 'text'})
  password: string
}