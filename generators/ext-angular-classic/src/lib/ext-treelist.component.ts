import {
  Output,
  OnInit,
  AfterContentInit,
  OnChanges,
  Component,
  ElementRef,
  forwardRef
} from '@angular/core';
import { base } from './base';
export class treelistMetaData {
  public static XTYPE: string = 'treelist';
  public static PROPERTIESOBJECT: any = {
    "ariaAttributes": "Object",
    "ariaDescribedBy": "String",
    "ariaLabel": "String",
    "ariaLabelledBy": "String",
    "bind": "Object/String",
    "border": "Boolean",
    "cls": "String/String[]",
    "controller": "String/Object/Ext.app.ViewController",
    "defaultListenerScope": "Boolean",
    "defaults": "Object",
    "disabled": "Boolean",
    "eventHandlers": "Object",
    "expanderFirst": "Boolean",
    "expanderOnly": "Boolean",
    "floatLeafItems": "Boolean",
    "focusCls": "String",
    "height": "Number/String",
    "hidden": "Boolean",
    "hideMode": "'clip'/'display'/'offsets'/'opacity'/'visibility'",
    "highlightPath": "Boolean",
    "instanceCls": "String/String[]",
    "itemRipple": "Boolean/Object",
    "keyMap": "Object",
    "keyMapEnabled": "Boolean",
    "keyMapTarget": "String",
    "listeners": "Object",
    "micro": "Boolean",
    "name": "String",
    "nameable": "Boolean",
    "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
    "publishes": "String/String[]/Object",
    "reference": "String",
    "renderTo": "Ext.Element",
    "ripple": "Boolean/Object/String",
    "selection": "Ext.data.TreeModel/Number/String",
    "selectOnExpander": "Boolean",
    "session": "Boolean/Object/Ext.data.Session",
    "shareableName": "Boolean",
    "singleExpand": "Boolean",
    "store": "String/Object/Ext.data.TreeStore",
    "style": "String/Object",
    "touchAction": "Object",
    "twoWayBindable": "String/String[]/Object",
    "ui": "String/String[]",
    "userCls": "String/String[]",
    "viewModel": "String/Object/Ext.app.ViewModel",
    "width": "Number/String",
    "platformConfig": "Object",
    "responsiveConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",
};
  public static PROPERTIES: string[] = [
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'bind',
    'border',
    'cls',
    'controller',
    'defaultListenerScope',
    'defaults',
    'disabled',
    'eventHandlers',
    'expanderFirst',
    'expanderOnly',
    'floatLeafItems',
    'focusCls',
    'height',
    'hidden',
    'hideMode',
    'highlightPath',
    'instanceCls',
    'itemRipple',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'listeners',
    'micro',
    'name',
    'nameable',
    'plugins',
    'publishes',
    'reference',
    'renderTo',
    'ripple',
    'selection',
    'selectOnExpander',
    'session',
    'shareableName',
    'singleExpand',
    'store',
    'style',
    'touchAction',
    'twoWayBindable',
    'ui',
    'userCls',
    'viewModel',
    'width',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
  public static EVENTS: any[] = [
		{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'blur',parameters:'treelist,event'},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'focus',parameters:'treelist,event'},
		{name:'focusenter',parameters:'treelist,event'},
		{name:'focusleave',parameters:'treelist,event'},
		{name:'heightchange',parameters:'sender,value,oldValue'},
		{name:'hiddenchange',parameters:'sender,value,oldValue'},
		{name:'itemclick',parameters:'sender,info'},
		{name:'selectionchange',parameters:'treelist,record'},
		{name:'widthchange',parameters:'sender,value,oldValue'},
		{name:'ready',parameters:''}
];
  public static EVENTNAMES: string[] = [
		'beforedisabledchange',
		'beforeheightchange',
		'beforehiddenchange',
		'beforewidthchange',
		'blur',
		'disabledchange',
		'focus',
		'focusenter',
		'focusleave',
		'heightchange',
		'hiddenchange',
		'itemclick',
		'selectionchange',
		'widthchange',
		'ready'
];
}
@Component({
  selector: 'treelist', 
  inputs: treelistMetaData.PROPERTIES,
  outputs: treelistMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtTreelistComponent)}],
  template: '<ng-template #dynamic></ng-template>'
})
export class ExtTreelistComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(eRef:ElementRef) {super(eRef,treelistMetaData)}
  public ngOnInit() {this.baseOnInit(treelistMetaData)}
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
  public ngAfterContentInit() {
    this.baseAfterContentInit()
    this['ready'].emit(this)
    }
}