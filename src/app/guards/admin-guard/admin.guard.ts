import { inject } from "@angular/core"
import { CanActivateFn, Router } from "@angular/router"
import { AuthService } from "../../services/auth-services/auth.service"

export const adminGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService)
    const router = inject(Router)

    if (authService.isAdmin()) {
        return true
    } else {
        return router.createUrlTree(["/home"])
    }
}
