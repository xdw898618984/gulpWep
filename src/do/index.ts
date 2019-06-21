import { Type } from "@angular/core"
export interface User {
    id?: string;
    email: string;
    password: string;
    repeat: string;
    address: Address;
}

export interface Address {
    province: string;
    city: string;
    area: string;
    street: string;

}

export class Hero {
    id: number; name: string
}


export class Star {
    constructor(public firstName: string, public lastName: string, public type?: string) {

    }
}

export class Pipes {
    /**
     *
     * @param upper 小写转大写
     * @param lowcase 大写转小写
     * @param title 文本转标题形式
     * @param number 数字转金额
     * @param json 对象转json格式
     * @param currency 数字转金额
     * @param date 日期格式化
     * @param decima 数字转字符串
     * @param slice 从array或者string中截取，创建一个新子集
     * @param percen 数字转百分比字符串
     * @param key 数字转百分比字符串
     * @param depre 数字
     * @param depredec 数字
     * @param depredate 数字
     * @param deprecurrency 数字
     */
    constructor(
        public upper: string,
        public lowcase: string,
        public title: string,
        public number: number,
        public json: Object,
        public currency: string,
        public date: any,
        public decima: any,
        public slice: any,
        public percen: any,
        public key: any,
        public depre: any,
        public depredec: any,
        public depredate: any,
        public deprecurrency: any,

    ) {

    }
}

export class AdItem {
    constructor(public component: Type<any>, public data: any) { }
}

export interface AdComponent {
    data: any

}
