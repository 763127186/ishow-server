import {ConnectionOptions} from 'typeorm';

export const db: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'test01_user',
  database: 'test1',
  logging: true,
  password: "123456",
  synchronize: false,//自动创建表
  entities: ['src/**/*.entity.ts']
};
