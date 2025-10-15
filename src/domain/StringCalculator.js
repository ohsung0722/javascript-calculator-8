import Parser from "./Parser.js";
import Validator from "./Validator.js";

class StringCalculator {
  constructor() {
    this.parser = new Parser();
    this.validator = new Validator();
  }

  calculate(input) {
    if (input === "") return 0;
    const numbers = this.parser.parse(input);
    this.validator.validate(numbers);

    return numbers.reduce((number1, number2) => number1 + number2);
  }
}

export default StringCalculator;
