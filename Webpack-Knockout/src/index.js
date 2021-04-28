import ko from 'knockout';
import ComponentRegistration from "./ComponentRegistration";

function main() {
  new ComponentRegistration().registerBindings();
  document.body.appendChild(document.createElement("hello-world"));
  ko.applyBindings();
}

main();