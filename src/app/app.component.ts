import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 route;
  constructor(private router: Router ) {
    router.events.subscribe((url:any) =>
   this.route = router.url);
}

currentRoute(val) {
  if (val==this.route || (val=="/home" && this.route =="/")) {
    return "active";
  } else {
    return "inactive";
  }
}

  title = "Jonathan Stein's Studio";
}
