/**
 * @description 页面部件表
 */
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm';

@Entity()
export class Pglyt {

  @PrimaryGeneratedColumn()
  pluid!: number;

  @Column()
  ppluid!: string;

  @Column()
  tpluid!: string;

  @Column()
  lnm!: string;

  @Column("jsonb")
  nprp!: object;

  @Column("jsonb")
  pnprp!: object;

  @Column()
  ord!: number;

  @CreateDateColumn()
  crdt!: Date;

  @UpdateDateColumn()
  modt!: Date;
}
