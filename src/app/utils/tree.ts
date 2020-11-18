/**
 *
 * @description 处理列表和树的问题
*/


export class TreeList{
  /**
   * 列表数据
   */
  list: Array<any>|null = null;
  idName:string;
  pIdName:string;
  constructor(idName: string="id",pIdName:string="pId") {
    this.idName = idName;
    this.pIdName = pIdName;
  }

  /**
   * 添加一个列表
   */
  addList(list: Array<any>): TreeList{
    this.list = list;
    return this;
  }

  getTree(): Array<any>{
    const list = this.list;
    const idName = this.idName;
    const pIdName = this.pIdName;
      if (!list || !list.length) {
        return []
      }
      let treeListMap:any = {};
      for (let item of list) {
        treeListMap[item[idName]] = item
      }
      for (let i = 0; i < list.length; i++) {
        if (list[i][pIdName] && treeListMap[list[i][pIdName]]) {
          if (!treeListMap[list[i][pIdName]].children) {
            treeListMap[list[i][pIdName]].children = []
          }
          treeListMap[list[i][pIdName]].children.push(list[i]);
          list.splice(i, 1);
          i--
        }
      }
      return list
  }



}
