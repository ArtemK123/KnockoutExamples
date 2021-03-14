const ViewModel = function() {
  this.greeting = ko.observable("Hello");
  this.name = ko.observable("World");
  this.appHeading = ko.pureComputed(function() {
    return this.greeting() + ", " + this.name() + "!";
  }, this);
}

export default ViewModel;