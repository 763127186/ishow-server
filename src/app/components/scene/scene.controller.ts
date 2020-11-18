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
    console.log(id)
    const info = await this.sceneService.getTree(id);
    ctx.result = info;
    await next();
  }
}
