/// <reference path="../jqwidgets.d.ts" />
import { EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
export declare class jqxToggleButtonComponent implements OnChanges {
    attrDisabled: boolean;
    attrImgSrc: string;
    attrImgWidth: number | string;
    attrImgHeight: number | string;
    attrImgPosition: any;
    attrRoundedCorners: any;
    attrRtl: boolean;
    attrTextPosition: any;
    attrTextImageRelation: any;
    attrTheme: string;
    attrTemplate: any;
    attrToggled: boolean;
    attrValue: string;
    attrWidth: string | number;
    attrHeight: string | number;
    autoCreate: boolean;
    properties: string[];
    host: any;
    elementRef: ElementRef;
    widgetObject: jqwidgets.jqxToggleButton;
    constructor(containerElement: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): boolean;
    arraysEqual(attrValue: any, hostValue: any): boolean;
    manageAttributes(): any;
    moveClasses(parentEl: HTMLElement, childEl: HTMLElement): void;
    moveStyles(parentEl: HTMLElement, childEl: HTMLElement): void;
    createComponent(options?: any): void;
    createWidget(options?: any): void;
    __updateRect__(): void;
    setOptions(options: any): void;
    disabled(arg?: boolean): any;
    height(arg?: number | string): any;
    imgSrc(arg?: string): any;
    imgWidth(arg?: number | string): any;
    imgHeight(arg?: number | string): any;
    imgPosition(arg?: string): any;
    roundedCorners(arg?: string): any;
    rtl(arg?: boolean): any;
    textPosition(arg?: string): any;
    textImageRelation(arg?: string): any;
    theme(arg?: string): any;
    template(arg?: string): any;
    toggled(arg?: boolean): any;
    width(arg?: string | number): any;
    value(arg?: string): any;
    check(): void;
    destroy(): void;
    focus(): void;
    render(): void;
    toggle(): void;
    unCheck(): void;
    val(value?: string): any;
    onClick: EventEmitter<{}>;
    __wireEvents__(): void;
}