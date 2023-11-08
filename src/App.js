import { Random, Console } from '@woowacourse/mission-utils';
class App {
  async play() {
    const amount = await this.getPurchaseAmount();

    const count = this.calculateQuantity(amount);
    Console.print(`\n${count}개를 구매했습니다.`);
    this.createLotto(count);
  }

  async getPurchaseAmount() {
    return await Console.readLineAsync(`구입금액을 입력해 주세요.\n`);
  }

  calculateQuantity(amount) {
    if (amount % 1000) throw new Error('[ERROR] 구입 금액이 잘못된 형식입니다.');
    return amount / 1000;
  }

  createLotto(num) {
    for (let i = 0; i < num; i++) {
      const newLotto = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      Console.print(newLotto);
      this.lottos.push(newLotto);
    }
  }
}

export default App;
