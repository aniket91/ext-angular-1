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
export class calendar_eventMetaData {
  public static XTYPE: string = 'calendar-event';
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
    "defaultTitle": "String",
    "disabled": "Boolean",
    "endDate": "Date",
    "eventHandlers": "Object",
    "focusCls": "String",
    "height": "Number/String",
    "hidden": "Boolean",
    "hideMode": "'clip'/'display'/'offsets'/'opacity'/'visibility'",
    "instanceCls": "String/String[]",
    "keyMap": "Object",
    "keyMapEnabled": "Boolean",
    "keyMapTarget": "String",
    "listeners": "Object",
    "mode": "String",
    "model": "Ext.calendar.model.EventBase",
    "name": "String",
    "nameable": "Boolean",
    "palette": "Ext.calendar.theme.Palette",
    "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
    "publishes": "String/String[]/Object",
    "reference": "String",
    "renderTo": "Ext.Element",
    "resize": "Boolean",
    "ripple": "Boolean/Object/String",
    "session": "Boolean/Object/Ext.data.Session",
    "shareableName": "Boolean",
    "startDate": "Date",
    "style": "String/Object",
    "timeFormat": "String",
    "title": "String",
    "touchAction": "Object",
    "twoWayBindable": "String/String[]/Object",
    "ui": "String/String[]",
    "userCls": "String/String[]",
    "view": "Ext.calendar.view.Base",
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
    'defaultTitle',
    'disabled',
    'endDate',
    'eventHandlers',
    'focusCls',
    'height',
    'hidden',
    'hideMode',
    'instanceCls',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'listeners',
    'mode',
    'model',
    'name',
    'nameable',
    'palette',
    'plugins',
    'publishes',
    'reference',
    'renderTo',
    'resize',
    'ripple',
    'session',
    'shareableName',
    'startDate',
    'style',
    'timeFormat',
    'title',
    'touchAction',
    'twoWayBindable',
    'ui',
    'userCls',
    'view',
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
		{name:'blur',parameters:'calendar-event,event'},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'focus',parameters:'calendar-event,event'},
		{name:'focusenter',parameters:'calendar-event,event'},
		{name:'focusleave',parameters:'calendar-event,event'},
		{name:'heightchange',parameters:'sender,value,oldValue'},
		{name:'hiddenchange',parameters:'sender,value,oldValue'},
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
		'widthchange',
		'ready'
];
}
@Component({
  selector: 'calendar-event', 
  inputs: calendar_eventMetaData.PROPERTIES,
  outputs: calendar_eventMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtCalendar_eventComponent)}],
  template: '<ng-template #dynamic></ng-template>'
})
export class ExtCalendar_eventComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(eRef:ElementRef) {super(eRef,calendar_eventMetaData)}
  public ngOnInit() {this.baseOnInit(calendar_eventMetaData)}
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
  public ngAfterContentInit() {
    this.baseAfterContentInit()
    this['ready'].emit(this)
    }
}