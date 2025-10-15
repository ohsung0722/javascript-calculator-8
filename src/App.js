import StringCalculator from "./domain/StringCalculator.js";
import IOFactory from "./factory/IOFactory.js";

class App {
  constructor() {
    this.stringCalculator = new StringCalculator();
  }
  async run() {
    const inputView = IOFactory.createInputView();
    const outputView = IOFactory.createOutputView();

    try {
      const input = await inputView.promptUser();
      const result = this.stringCalculator.calculate(input);
      outputView.printResult(result);
    } catch (error) {
      outputView.printError(error.message);
      throw new Error(`[ERROR] ${error.message}`);
    }
  }
}

export default App;
