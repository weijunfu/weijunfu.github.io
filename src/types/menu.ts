/**
 * 菜单元数据
 */
export interface MenuMeta {
  title: string;
  icon?: string;
  hidden?: boolean; // 是否隐藏在菜单中
  order: number;   // 排序
}

/**
 * 菜单
 */
export interface Menu {
  path: string
  name: string
  icon?: string
  seq: number,
  unfold?: boolean,
  children: Menu[]
}