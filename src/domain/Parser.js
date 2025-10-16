import { ERROR_DELIMITER } from "../constants/messages.js";
import {
  CUSOM_DELIMITER_END,
  CUSTOM_DELIMITER_END_LENGTH,
  CUSTOM_DELIMITER_PREFIX,
  CUSTOM_DELIMITER_PREFIX_LENGTH,
  DELIMITER,
  INVALID_DELIMITER_INDEX,
} from "../constants/parser.js";

class Parser {
  parse(input) {
    let delimiter = DELIMITER;

    if (input.startsWith(CUSTOM_DELIMITER_PREFIX)) {
      const { delimiterPart, bodyPart } = this.#parseCustomDelimiter(input);
      delimiter = new RegExp(`${delimiterPart}|,|:`);
      input = bodyPart;
    }

    return input.split(delimiter).map(Number);
  }

  #parseCustomDelimiter(input) {
    const delimiterEnd = input.indexOf(CUSOM_DELIMITER_END);
    const isInvalidCustomDelimiter = delimiterEnd === INVALID_DELIMITER_INDEX;

    if (isInvalidCustomDelimiter) {
      throw new Error(ERROR_DELIMITER);
    }

    const delimiterPart = input.slice(
      CUSTOM_DELIMITER_PREFIX_LENGTH,
      delimiterEnd
    );
    const bodyPart = input.slice(delimiterEnd + CUSTOM_DELIMITER_END_LENGTH);

    return { delimiterPart, bodyPart };
  }
}

export default Parser;
