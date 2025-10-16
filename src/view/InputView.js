import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/messages.js";

class InputView {
  async promptUser() {
    const input = await Console.readLineAsync(INPUT_MESSAGE);
    return input;
  }
}

export default InputView;
