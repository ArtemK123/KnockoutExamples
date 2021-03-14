const ViewModel = function() {
  this.greeting = ko.observable("Hello");
  this.name = ko.observable("World");
  this.appHeading = ko.pureComputed(function() {
    return this.greeting() + ", " + this.name() + "!";
  }, this);
}

const templateHtml = `
<section>
  <h1 data-bind="text: appHeading"></h1>
  <p>Greeting: <input data-bind="textInput: greeting" /></p>
  <p>Name: <input data-bind="textInput: name" /></p>
</section>
`;

ko.components.register("hello-world", {
  viewModel: ViewModel,
  template: templateHtml
});