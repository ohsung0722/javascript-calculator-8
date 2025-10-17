import { ERROR_DELIMITER } from "../constants/messages.js";
import {
  CUSOM_DELIMITER_END,
  CUSTOM_DELIMITER_END_LENGTH,
  CUSTOM_DELIMITER_PREFIX,
  CUSTOM_DELIMITER_PREFIX_LENGTH,
  DELIMITER,
  EMPTY_CUSTOM_DELIMITER,
  INVALID_DELIMITER_INDEX,
} from "../constants/parser.js";

class Parser {
  parse(input) {
    const { delimiter, body } = this.#buildDelimiter(input);
    return body.split(delimiter).map(Number);
  }

  //구분자와 body 관리
  #buildDelimiter(input) {
    let delimiter = DELIMITER;
    let body = input;

    if (input.startsWith(CUSTOM_DELIMITER_PREFIX)) {
      const { delimiterPart, bodyPart } = this.#parseCustomDelimiter(input);
      delimiter = new RegExp(`${delimiterPart}|,|:`);
      body = bodyPart;
    }

    return { delimiter, body };
  }

  //커스텀 구분자 추출
  #parseCustomDelimiter(input) {
    const delimiterEnd = input.indexOf(CUSOM_DELIMITER_END);
    const isInvalidCustomDelimiter =
      delimiterEnd === INVALID_DELIMITER_INDEX ||
      delimiterEnd === EMPTY_CUSTOM_DELIMITER;

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
