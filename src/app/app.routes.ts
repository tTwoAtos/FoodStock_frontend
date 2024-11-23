import { Routes } from "@angular/router"
import { HomePageComponent } from "./pages/home-page/home-page.component"
import { CommunityPageComponent } from "./pages/community-page/community-page.component"

export const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomePageComponent },
    { path: "community", component: CommunityPageComponent },
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
