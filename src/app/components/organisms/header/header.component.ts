import { Component, Input } from "@angular/core"
import { IonIcon, IonButton } from "@ionic/angular/standalone";

import { addIcons } from 'ionicons';
import { person, caretBack } from 'ionicons/icons';

@Component({
    selector: "app-header",
    standalone: true,
    imports: [IonButton, IonIcon],
    templateUrl: "./header.component.html",
    styleUrl: "./header.component.scss",
})
export class HeaderComponent {
    constructor() {
        addIcons({ person, caretBack });
    }
    path = ""
    title = "Mes Communautées"



}

