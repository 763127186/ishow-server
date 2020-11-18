/**
 * @description 页面部件表
 */
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm';

@Entity()
export class Pgdfn {
  @PrimaryGeneratedColumn()
  ppdid!: number;

  @Column()
  pguid!: string;

  @Column()
  ptuid!: string;

  @Column()
  pptuid!: string;

  @Column()
  ptnm!: string;

  @Column()
  ppdtp!: number;

  @Column()
  appuid!: string;

  @Column()
  pluid!: string;

  @Column()
  library!: string;

  @Column()
  url!: string;

  @Column("jsonb")
  pmdfmt!: object;

  @Column()
  pcuid!: string;

  @Column("jsonb")
  init!: object;

  @Column("jsonb")
  globalactive!: object;

  @Column("jsonb")
  partmap!: object;

  @Column("jsonb")
  activelist!: object;

  @Column("jsonb")
  service!: object;

  @Column("text")
  script!: string;

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
