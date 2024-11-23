import { Component } from "@angular/core"
import {
    IonCol,
    IonGrid,
    IonButton,
    IonRow,
    IonIcon,
} from "@ionic/angular/standalone"

import { addIcons } from "ionicons"
import { people, scan, basket } from "ionicons/icons"

@Component({
    selector: "app-footer",
    standalone: true,
    imports: [IonIcon, IonRow, IonButton, IonGrid, IonCol],
    templateUrl: "./footer.component.html",
    styleUrl: "./footer.component.scss",
})
export class FooterComponent {
    constructor() {
        addIcons({ people, scan, basket })
    }
}
