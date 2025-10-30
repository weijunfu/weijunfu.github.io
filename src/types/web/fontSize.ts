
export type FontSizeType = 'Small' | 'Medium' | 'Large' | 'Extreme'

/**
 * 字体大小卡片对象
 */
export interface IFontSizeCard {
  id: string
  /** 类型  */
  type: FontSizeType
  /** 字体大小（文本）  */
  size: string
  /** 场景  */
  scene: string,
  /** 字体大小 */
  fontSize: string
}


export const defaultFontSizeCard: IFontSizeCard = {
  id: '', type: 'Medium', size: '', scene: '', fontSize: ''
}