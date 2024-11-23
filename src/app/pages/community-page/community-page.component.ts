import { Component } from "@angular/core"
import { AppLayoutComponent } from "../../layouts/app-layout/app-layout.component"
import {
    IonList,
    IonItem,
    IonBadge,
    IonButton,
    IonIcon,
    IonReorderGroup,
    IonReorder,
    IonGrid,
    IonRow,
    IonCol,
} from "@ionic/angular/standalone"
import { CommonModule } from "@angular/common"

import { addIcons } from "ionicons"
import { caretForward, menu } from "ionicons/icons"

@Component({
    selector: "app-community-page",
    standalone: true,
    imports: [
        IonCol,
        IonRow,
        IonGrid,
        CommonModule,
        IonReorder,
        IonReorderGroup,
        IonIcon,
        IonButton,
        IonBadge,
        IonItem,
        IonList,
        AppLayoutComponent,
    ],
    templateUrl: "./community-page.component.html",
    styleUrl: "./community-page.component.scss",
})
export class CommunityPageComponent {
    constructor() {
        addIcons({ menu, caretForward })
    }

    public name = "Aprentis"
    public nbProducts = 45

    public communities = []
}
