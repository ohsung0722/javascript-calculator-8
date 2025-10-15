import { Console } from "@woowacourse/mission-utils";

class OutputView {
  printResult(result) {
    Console.print(`결과: ${result}`);
  }

  printError(errorMessage) {
    Console.print(`[ERROR] ${errorMessage}`);
  }
}

export default OutputView;
