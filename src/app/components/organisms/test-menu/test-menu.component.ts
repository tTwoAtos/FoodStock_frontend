import { Component } from "@angular/core"
import { RouterOutlet } from "@angular/router"

@Component({
    selector: "app-test-menu",
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: "./test-menu.component.html",
    styleUrl: "./test-menu.component.scss",
})
export class TestMenuComponent {}
