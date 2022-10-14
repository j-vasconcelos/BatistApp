import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { ButtonComponent } from "./button/button.component";
import { FormOnlineComponent } from "./form-online/form-online.component";
import { FormPresencialComponent } from "./form-presencial/form-presencial.component";
import { InputComponent } from "./input/input.component";
import { TextareaComponent } from "./textarea/textarea.component";

@NgModule({
    declarations: [InputComponent, ButtonComponent,TextareaComponent,FormPresencialComponent,FormOnlineComponent],
    imports: [CommonModule, IonicModule],
    exports: [InputComponent, ButtonComponent,TextareaComponent,FormPresencialComponent,FormOnlineComponent]
})
export class SharedModule {}