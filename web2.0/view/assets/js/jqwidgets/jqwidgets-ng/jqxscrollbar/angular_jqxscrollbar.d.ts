/// <reference path="../jqwidgets.d.ts" />
import { EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
export declare class jqxScrollBarComponent implements OnChanges {
    attrDisabled: boolean;
    attrLargestep: number;
    attrMin: number;
    attrMax: number;
    attrRtl: boolean;
    attrStep: number;
    attrShowButtons: boolean;
    attrThumbMinSize: number;
    attrTheme: string;
    attrVertical: boolean;
    attrValue: number;
    attrWidth: string | number;
    attrHeight: string | number;
    autoCreate: boolean;
    properties: string[];
    host: any;
    elementRef: ElementRef;
    widgetObject: jqwidgets.jqxScrollBar;
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
    height(arg?: string | number): any;
    largestep(arg?: number): any;
    min(arg?: number): any;
    max(arg?: number): any;
    rtl(arg?: boolean): any;
    step(arg?: number): any;
    showButtons(arg?: boolean): any;
    thumbMinSize(arg?: number): any;
    theme(arg?: string): any;
    vertical(arg?: boolean): any;
    value(arg?: number): any;
    width(arg?: string | number): any;
    destroy(): void;
    isScrolling(): boolean;
    setPosition(index: number): void;
    onValueChanged: EventEmitter<{}>;
    __wireEvents__(): void;
}
