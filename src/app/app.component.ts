import { Component } from "@angular/core"
import { IonicModule } from "@ionic/angular"

@Component({
    selector: "app-root",
    standalone: true,
    imports: [IonicModule],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss",
})
export class AppComponent {
    title = "FoodStock"
}
