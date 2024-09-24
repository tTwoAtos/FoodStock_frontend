import { Routes } from "@angular/router"
import { HomePageComponent } from "./pages/home-page/home-page.component"

export const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomePageComponent },
    // {
    //     path: "login",
    //     title: "Connexion",
    //     component: LoginFormComponent,
    // },
    // {
    //     path: "",
    //     canActivate: [AuthGuard],
    //     children: [
    //         {
    //             path: "login",
    //             title: "Connexion | AMAC",
    //             component: LoginFormComponent,
    //         },
    //     ],
    // },
]
