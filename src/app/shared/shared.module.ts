import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AwsesomePipe } from "../pipe/awsesome.pipe";
import { HightlightDirective } from "../directive/hightlight.directive";
/**
 * 共享module
 */
@NgModule({
    imports: [CommonModule],
    declarations: [AwsesomePipe, HightlightDirective],
    exports: [CommonModule, FormsModule, AwsesomePipe, HightlightDirective]

})
export class SharedModule { }

