import { CommonModule } from "@angular/common"
import { Component, OnInit } from "@angular/core"
import { City, CityControllerService } from "@app/apis/city"
import { Product, ProductControllerService } from "@app/apis/products"
import { Toaster } from "@app/utils/toaster"
import { AppLayoutComponent } from "../../layouts/app-layout/app-layout.component"
import { IonButton } from "@ionic/angular/standalone"

@Component({
    selector: "app-home-page",
    standalone: true,
    imports: [IonButton, AppLayoutComponent, CommonModule],
    templateUrl: "./home-page.component.html",
    styleUrl: "./home-page.component.scss",
})
export class HomePageComponent implements OnInit {
    cities: City[] = []
    products: Product[] = []

    constructor(
        private cityService: CityControllerService,
        private productService: ProductControllerService,
        private toaster: Toaster
    ) {}

    ngOnInit() {
        this.cityService.getAll().subscribe({
            next: (data: City[]) => {
                this.cities = data
                // this.toaster.success("Cities succesfully retrived")
            },
            error: (error: any) => {
                console.log(error)
            },
        })

        this.productService.getAll().subscribe({
            next: (data: Product[]) => {
                this.products = data
            },
        })
    }
}
