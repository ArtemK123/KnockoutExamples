define(["tools/knockout.js"], (ko) => {
  ko.components.register("hello-world", {
    viewModel: { require: "HelloWorldComponent/HelloWorldViewModel.js" },
    template: { require: "text!HelloWorldComponent/HelloWorld.html" }
  });
})