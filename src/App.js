import Lotto from './Lotto.js';
import { Random, Console } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.lottos = [];
  }
  async play() {
    const amount = await this.getPurchaseAmount();

    const count = this.calculateQuantity(amount);
    Console.print(`\n${count}개를 구매했습니다.`);
    this.createLotto(count);

    const array = await this.getWinningNumbers();
    new Lotto(array);

    const bonus = await this.getBonusNumber(array);
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

  async getWinningNumbers() {
    const input = await Console.readLineAsync(`\n당첨 번호를 입력해 주세요.\n`);
    if (!input.includes(',')) throw new Error('[ERROR] 당첨 번호는 쉼표로 구분한 숫자여야 합니다.');
    return input.split(',').map(Number);
  }

  async getBonusNumber(arr) {
    const input = +(await Console.readLineAsync(`\n보너스 번호를 입력해 주세요.\n`));
    if (isNaN(input)) throw new Error('[ERROR] 보너스 번호는 숫자여야 합니다.');
    if (arr.includes(input)) throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.');
    return input;
  }
}

export default App;
