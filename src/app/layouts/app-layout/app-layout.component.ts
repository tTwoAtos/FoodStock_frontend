import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"
import { RouterOutlet } from "@angular/router"
import { FooterComponent } from "@app/components/organisms/footer/footer.component"
import { HeaderComponent } from "@app/components/organisms/header/header.component"

@Component({
    selector: "app-layout",
    standalone: true,
    imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
    templateUrl: "./app-layout.component.html",
    styleUrl: "./app-layout.component.scss",
})
export class AppLayoutComponent {}
