// 定义食物类Food
class Food {
  // 定义一个属性表示食物对应的元素
  element: HTMLElement

  constructor() {
    // !表示该元素一定存在
    this.element = document.getElementById('food')!
  }

  // 定义一个获取食物X轴坐标的方法
  get X() {
    return this.element.offsetLeft
  }

  // 定义一个获取食物Y轴坐标的方法
  get Y() {
    return this.element.offsetTop
  }

  // 修改食物的位置
  change() {
    let top = Math.round(Math.random() * 29) * 10
    let left = Math.round(Math.random() * 29) * 10

    this.element.style.left = left + 'px'
    this.element.style.top = top + 'px'
  }
}

export default Food