/**
 * @description 布局操作
 */
import {Controller, Get, Post} from 'koa-route-decors';
import {Context} from 'koa';
import {SceneService} from './scene.service';

@Controller('/scene')
export class UserController {
  constructor(private sceneService: SceneService) {}
  /**
   * @api {get} /scene/tree
   * @apiGroup scene
   * @apiName 获取场景
   * @apiDescription  获取业务场景
   * @apiVersion 1.0.0
   * @apiParam {string} id - 场景id
   */
  @Get()
  async tree(ctx: Context, next: () => Promise<any>) {
    const {id} = ctx.query;
    const info = await this.sceneService.getTree(id);
    ctx.result = info;
    await next();
  }
/**
   * @api {post} /scene/create
   * @apiGroup scene
   * @apiName 创建容器
   * @apiDescription  创建容器数据
   * @apiVersion 1.0.0
   * @apiParam {string} tpluid - 场景id
   * @apiParam {string} ppluid - 父节点id
   * @apiParam {string} lnm - 节点名称
   */
  @Post()
  async create(ctx: Context, next: () => Promise<any>) {
    const {tpluid,ppluid,lnm} = ctx.request.body;
    const info = await this.sceneService.create(tpluid,ppluid,lnm);
    ctx.result = info;
    await next();
  }

  @Post()
  async upDateAll(ctx: Context, next: () => Promise<any>){
    const list: Array<any> = ctx.request.body;
    ctx.result = await this.sceneService.upDateAll(list);
    await next();
  }
}
