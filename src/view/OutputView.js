import { Console } from "@woowacourse/mission-utils";
import { ERROR_PREFIX, RESULT_MESSAGE } from "../constants/messages.js";

class OutputView {
  printResult(result) {
    Console.print(`${RESULT_MESSAGE} ${result}`);
  }

  printError(errorMessage) {
    Console.print(`${ERROR_PREFIX} ${errorMessage}`);
  }
}

export default OutputView;
