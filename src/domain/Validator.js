import {
  ERROR_NAN_NUMBER,
  ERROR_NEGATIVE_NUMBER,
} from "../constants/messages.js";

class Validator {
  validate(numbers) {
    numbers.forEach((number) => {
      if (Number.isNaN(number)) throw new Error(ERROR_NAN_NUMBER);
      if (number < 0) throw new Error(ERROR_NEGATIVE_NUMBER);
    });
  }
}

export default Validator;
