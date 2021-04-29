define(["tools/knockout.js"], (ko) => {
  ko.components.register("input-component", {
    viewModel: { require: "InputComponent/InputViewModel.js" },
    template: { require: "text!InputComponent/Input.html" }
  });
})