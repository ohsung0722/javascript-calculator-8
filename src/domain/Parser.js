import IOFactory from "../factory/IOFactory";

class Parser {
  parse(input) {
    let delimiter = /,|:/;

    if (input.startsWith("//")) {
      const { delimiterPart, bodyPart } = this.#isCustomDelimiter(input);
      delimiter = new RegExp(delimiterPart);
      input = bodyPart;
    }

    return input.split(delimiter).map(Number);
  }

  #isCustomDelimiter(input) {
    const delimiterEnd = input.indexOf("\n");

    if (delimiterEnd === -1) {
      throw new Error("커스텀 구분자 형식이 잘못되었습니다.");
    }

    const delimiterPart = input.slice(2, delimiterEnd);
    const bodyPart = input.slice(delimiterEnd + 1);

    return { delimiterPart, bodyPart };
  }
}

export default Parser;
