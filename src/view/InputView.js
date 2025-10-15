import { Console } from "@woowacourse/mission-utils";

class InputView {
  async promptUser() {
    const input = await Console.readLineAsync("덧셈할 문자를 입력해주세요.\n");
    return input;
  }
}

export default InputView;
