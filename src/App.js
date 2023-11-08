class App {
  async play() {
    const amount = await this.getPurchaseAmount();

  }

  async getPurchaseAmount() {
    return await Console.readLineAsync(`구입금액을 입력해 주세요.\n`);
  }

}

export default App;
