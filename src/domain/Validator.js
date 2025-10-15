class Validator {
  validate(numbers) {
    numbers.forEach((number) => {
      if (Number.isNaN(number)) throw new Error("유효하지 않은 숫자입니다.");
      if (number < 0) throw new Error("음수는 입력할 수 없습니다.");
    });
  }
}
