import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { ButtonComponent } from "./button/button.component";
import { InputComponent } from "./input/input.component";
import { TextareaComponent } from "./textarea/textarea.component";

@NgModule({
    declarations: [InputComponent, ButtonComponent,TextareaComponent],
    imports: [CommonModule, IonicModule],
    exports: [InputComponent, ButtonComponent,TextareaComponent]
})
export class SharedModule {}