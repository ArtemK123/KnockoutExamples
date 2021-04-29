import * as ko from 'knockout';

import HelloWorldComponent from "./HelloWorldComponent/HelloWorldComponent";
import InputComponent from "./InputComponent/InputComponent";

class ComponentRegistration {
  registerBindings() {
    ko.components.register('input-component', InputComponent);
    ko.components.register('hello-world', HelloWorldComponent);
  }
}

export default ComponentRegistration;