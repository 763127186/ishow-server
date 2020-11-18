import {SceneModel} from '../../entities/scene/scene.model';
import {Injectable} from 'koa-route-decors';

@Injectable()
export class SceneService {
  constructor(private sceneModel: SceneModel) {}

  async getTree(id: string) {
    const user = await this.sceneModel.findBySceneId(id);
    // 组装成树
    return user;
  }

}
