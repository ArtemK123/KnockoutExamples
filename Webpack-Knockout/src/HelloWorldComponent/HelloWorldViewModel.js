import html from "./HelloWorld.html";
import ko from "knockout";

class HelloWorldViewModel {
  constructor() {
    this.greeting = ko.observable("Hello");
    this.name = ko.observable("World");
    this.appHeading = ko.pureComputed(function() {
      return this.greeting() + ", " + this.name() + "!";
    }, this);
  }
}

export default { viewModel: HelloWorldViewModel, template: html };