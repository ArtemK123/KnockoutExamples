define(["tools/knockout.js"], function (ko) {
  return function() {
    this.greeting = ko.observable("Hello");
    this.name = ko.observable("World");
    this.appHeading = ko.pureComputed(function() {
      return this.greeting() + ", " + this.name() + "!";
    }, this);
  }
});