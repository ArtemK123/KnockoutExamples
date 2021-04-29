import * as ko from 'knockout';

import HelloWorldComponent from "./HelloWorldComponent/HelloWorldViewModel";
import InputComponent from "./InputComponent/InputViewModel";

class ComponentRegistration {
  registerBindings() {
    ko.components.register('input-component', InputComponent);
    ko.components.register('hello-world', HelloWorldComponent);
  }
}

export default ComponentRegistration;