import * as ko from "knockout";

export default class BackendConnectivityViewModel {
  public backendMessage: KnockoutObservable<string>;

  constructor() {
    this.backendMessage = ko.observable<string>("");
    fetch("http://localhost:5000/api/TestApi/GetMessage", { method: "GET"} )
        .then(response => response.text())
        .then(text =>  this.backendMessage(text));
  }
}