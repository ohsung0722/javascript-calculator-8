import InputView from "../view/InputView";
import OutputView from "../view/OutputView";

class IOFactory {
  static createInputView() {
    return new InputView();
  }

  static createOutputView() {
    return new OutputView();
  }
}

export default IOFactory;
