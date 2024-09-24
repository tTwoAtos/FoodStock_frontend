import { ComponentFixture, TestBed } from "@angular/core/testing"

import { MenuDrawerComponent } from "./menu-drawer.component"

describe("MenuDrawerComponent", () => {
    let component: MenuDrawerComponent
    let fixture: ComponentFixture<MenuDrawerComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MenuDrawerComponent],
        }).compileComponents()

        fixture = TestBed.createComponent(MenuDrawerComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it("should create", () => {
        expect(component).toBeTruthy()
    })
})
