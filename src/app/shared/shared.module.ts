import { CommonModule, UpperCasePipe, LowerCasePipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AwsesomePipe } from "../pipe/awsesome.pipe";
import { HightlightDirective } from "../directive/hightlight.directive";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

/**
 * 共享module
 */
@NgModule({
    imports: [CommonModule, BrowserModule, BrowserAnimationsModule],
    declarations: [AwsesomePipe, HightlightDirective],
    exports: [CommonModule, FormsModule, AwsesomePipe, HightlightDirective, UpperCasePipe, LowerCasePipe]

})
export class SharedModule { }

