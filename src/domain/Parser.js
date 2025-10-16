import { ERROR_DELIMITER } from "../constants/messages.js";
import {
  CUSOM_DELIMITER_END,
  CUSTOM_DELIMITER_END_LENGTH,
  CUSTOM_DELIMITER_PREFIX,
  CUSTOM_DELIMITER_PREFIX_LENGTH,
  DELIMITER,
} from "../constants/parser.js";

class Parser {
  parse(input) {
    let delimiter = DELIMITER;

    if (input.startsWith(CUSTOM_DELIMITER_PREFIX)) {
      const { delimiterPart, bodyPart } = this.#isCustomDelimiter(input);
      delimiter = new RegExp(`${delimiterPart}|,|:`);
      input = bodyPart;
    }

    return input.split(delimiter).map(Number);
  }

  #isCustomDelimiter(input) {
    const delimiterEnd = input.indexOf(CUSOM_DELIMITER_END);

    if (delimiterEnd === -1) {
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
