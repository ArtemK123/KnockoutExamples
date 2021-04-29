import IInputViewModelParams from "./IInputViewModelParams";
import html from "./Input.html";

class InputViewModel {
  public text: KnockoutObservable<string>;

  constructor(params: IInputViewModelParams) {
    this.text = params.text;
  }
}

export default { viewModel: InputViewModel, template: html };