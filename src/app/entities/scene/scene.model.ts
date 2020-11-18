import {Pglyt} from './scene.entity';
import {getRepository, Repository} from 'typeorm';
import {Injectable} from 'koa-route-decors';

@Injectable()
export class SceneModel {
  private repository: Repository<Pglyt>;
  private select: (keyof Pglyt)[] = ['pluid',"lnm"];

  constructor() {
    this.repository = getRepository(Pglyt);
  }
  /**
   * @description 查找业务场景
   * @param id
   */
  async findBySceneId(id: string) {
    const result = await this.repository.find({tpluid:id});
    return result;
  }

  /**
   * 新增业务场景容器
   */
  async create(pglyt: Pglyt) {
    const result = await this.repository.save(pglyt);
    return result;
  }

  async upDate(a:Object,b:Object) {
    const result = await this.repository.update(a,b);
    return result;
  }
}
