import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Progress Bar';

  //Demo purpose only, Data might come from Api calls/service
  public counts = ["Recieved","In Progress","Ready for Billing",
  "Billed","Order Closed"];
  public orderStatus = "Billed"
}

