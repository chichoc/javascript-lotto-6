class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (numbers.some((num) => num < 1 || 45 < num))
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
