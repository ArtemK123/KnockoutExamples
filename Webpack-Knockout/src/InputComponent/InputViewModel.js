import html from "./Input.html";

class InputViewModel {
  constructor(params) {
    this.text = params.text;
  }
}

export default { viewModel: InputViewModel, template: html };