class ScorePanel {
  score = 0
  level = 1

  scoreElm: HTMLElement
  levelElm: HTMLElement

  maxLevel: number
  upScore: number

  constructor(maxLevel: number = 10, upScore: number = 1) {
    this.scoreElm = document.getElementById('score')!
    this.levelElm = document.getElementById('level')!
    this.maxLevel = maxLevel
    this.upScore = upScore
  }

  // 加分方法
  addScore() {
    this.scoreElm.innerHTML = ++this.score + ''
    // 判断分数是多少
    if (this.score % this.upScore === 0) {
      this.levelUp()
    }
  }

  // 等级提升
  levelUp() {
    if (this.level < this.maxLevel) {
      this.levelElm.innerHTML = ++this.level + ''
    }
  }
}

export default ScorePanel