import { Component } from "@angular/core"
import { TestMenuComponent } from "../test-menu/test-menu.component"

@Component({
    selector: "app-header",
    standalone: true,
    imports: [TestMenuComponent],
    templateUrl: "./header.component.html",
    styleUrl: "./header.component.scss",
})
export class HeaderComponent {}
