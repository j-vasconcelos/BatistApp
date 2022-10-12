import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { ButtonComponent } from "./button/button.component";
import { InputComponent } from "./input/input.component";

@NgModule({
    declarations: [InputComponent, ButtonComponent],
    imports: [CommonModule, IonicModule],
    exports: [InputComponent, ButtonComponent]
})
export class SharedModule {}