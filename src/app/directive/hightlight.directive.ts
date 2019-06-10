import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[hightlight],input ,h2'
})
export class HightlightDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'skyblue';
    console.log(`使用的是指令，背景颜色是：${el.nativeElement.tagName}`);

  }

}
