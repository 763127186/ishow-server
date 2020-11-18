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

  async findBySceneId(id: string) {
    const result = await this.repository.find({tpluid:id});
    return result;
  }

}
