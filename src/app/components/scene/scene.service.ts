import { SceneModel } from '../../entities/scene/scene.model';
import { Pglyt } from '../../entities/scene/scene.entity';
import { Injectable } from 'koa-route-decors';
import { TreeList } from '../../utils/tree';
@Injectable()
export class SceneService {
  constructor(private sceneModel: SceneModel) { }

  async getTree(id: string) {
    const user = await this.sceneModel.findBySceneId(id);
    // 组装成树
    const treeList: TreeList = new TreeList("pluid", "ppluid")
    treeList.addList(user);
    const tree = treeList.getTree();
    return tree
  }

  async create(tpluid: string, ppluid: string, lnm: string) {
    const pglyt = new Pglyt();
    pglyt.tpluid = tpluid;
    pglyt.ppluid = ppluid;
    pglyt.lnm = lnm;
    return await this.sceneModel.create(pglyt);

  }
  async upDateAll(list: Array<any>) {
    // 批量同步
    for (let i = 0; i < list.length; i++) {
      const data = list[i];
      console.log(data);
      await this.sceneModel.upDate( { pluid: data.pluid },data)
    }
    return "成功"
  }

}
