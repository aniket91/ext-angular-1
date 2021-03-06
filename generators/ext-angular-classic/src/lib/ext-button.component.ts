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
export class buttonMetaData {
  public static XTYPE: string = 'button';
  public static PROPERTIESOBJECT: any = {
    "activeCounter": "Number",
    "alignOnScroll": "Boolean",
    "alignTarget": "String",
    "allowDepress": "Boolean",
    "alwaysOnTop": "Boolean/Number",
    "anchor": "String",
    "animateShadow": "Boolean",
    "ariaAttributes": "Object",
    "ariaDescribedBy": "String",
    "ariaLabel": "String",
    "ariaLabelledBy": "String",
    "arrowAlign": "String",
    "arrowCls": "String",
    "arrowVisible": "Boolean",
    "autoEl": "String/Object",
    "autoRender": "Boolean/String/HTMLElement/Ext.dom.Element",
    "autoScroll": "Boolean",
    "autoShow": "Boolean",
    "baseCls": "String",
    "baseParams": "Object",
    "bind": "Object/String",
    "border": "Number/String/Boolean",
    "childEls": "Object/String[]/Object[]",
    "clickEvent": "String",
    "cls": "String",
    "columnWidth": "Number",
    "componentCls": "String",
    "componentLayout": "String/Object",
    "constrain": "Boolean",
    "constraintInsets": "Object/String",
    "constrainTo": "Ext.util.Region/Ext.dom.Element",
    "contentEl": "String",
    "controller": "String/Object/Ext.app.ViewController",
    "data": "Object",
    "defaultAlign": "String",
    "defaultListenerScope": "Boolean",
    "destroyMenu": "Boolean",
    "disabled": "Boolean",
    "disabledCls": "String",
    "dock": "'top'/'bottom'/'left'/'right'",
    "draggable": "Boolean/Object",
    "enableToggle": "Boolean",
    "fixed": "Boolean",
    "flex": "Number",
    "floating": "Boolean",
    "focusCls": "String",
    "focusOnToFront": "Boolean",
    "formBind": "Boolean",
    "frame": "Boolean",
    "glyph": "Number/String",
    "handleMouseEvents": "Boolean",
    "handler": "Function/String",
    "height": "Number|String",
    "hidden": "Boolean",
    "hideMode": "String",
    "href": "String",
    "hrefTarget": "String",
    "html": "String/Object",
    "icon": "String",
    "iconAlign": "String",
    "iconCls": "String",
    "id": "String",
    "itemId": "String",
    "keyMap": "Object",
    "keyMapEnabled": "Boolean",
    "keyMapTarget": "String",
    "liquidLayout": "Boolean",
    "listeners": "Object",
    "liveDrag": "Boolean",
    "loader": "Ext.ComponentLoader/Object",
    "margin": "Number/String",
    "maskDefaults": "Object",
    "maskElement": "String",
    "maxHeight": "Number",
    "maxWidth": "Number",
    "menu": "Ext.menu.Menu/String/Object",
    "menuAlign": "String",
    "minHeight": "Number",
    "minWidth": "Number",
    "modal": "Boolean",
    "modelValidation": "Boolean",
    "nameable": "Boolean",
    "overCls": "String",
    "overflowText": "String",
    "overflowX": "String",
    "overflowY": "String",
    "padding": "Number/String",
    "params": "Object",
    "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
    "pressed": "Boolean",
    "preventDefault": "Boolean",
    "publishes": "String/String[]/Object",
    "reference": "String",
    "region": "'north'/'south'/'east'/'west'/'center'",
    "renderConfig": "Object",
    "renderData": "Object",
    "renderSelectors": "Object",
    "renderTo": "String/HTMLElement/Ext.dom.Element",
    "renderTpl": "Ext.XTemplate/String/String[]",
    "repeat": "Boolean/Object",
    "resizable": "Boolean/Object",
    "resizeHandles": "String",
    "saveDelay": "Number",
    "scale": "'small'/'medium'/'large'",
    "scope": "Object",
    "scrollable": "Boolean/String/Object",
    "session": "Boolean/Object/Ext.data.Session",
    "shadow": "String/Boolean",
    "shadowOffset": "Number",
    "shareableName": "Boolean",
    "shim": "Boolean",
    "showEmptyMenu": "Boolean",
    "shrinkWrap": "Boolean/Number",
    "stateEvents": "String[]",
    "stateful": "Boolean/Object",
    "stateId": "String",
    "style": "String/Object",
    "tabIndex": "Number",
    "text": "String",
    "textAlign": "String",
    "toFrontOnShow": "Boolean",
    "toggleGroup": "String",
    "toggleHandler": "Function/String",
    "tooltip": "String/Object",
    "tooltipType": "String",
    "touchAction": "Object",
    "tpl": "Ext.XTemplate/Ext.Template/String/String[]",
    "tplWriteMode": "String",
    "twoWayBindable": "String/String[]/Object",
    "ui": "String",
    "uiCls": "String[]",
    "userCls": "String/String[]",
    "value": "String/Number",
    "viewModel": "String/Object/Ext.app.ViewModel",
    "weight": "Number",
    "width": "Number|String",
    "xtype": "Ext.enums.Widget",
    "platformConfig": "Object",
    "responsiveConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",
};
  public static PROPERTIES: string[] = [
    'activeCounter',
    'alignOnScroll',
    'alignTarget',
    'allowDepress',
    'alwaysOnTop',
    'anchor',
    'animateShadow',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'arrowAlign',
    'arrowCls',
    'arrowVisible',
    'autoEl',
    'autoRender',
    'autoScroll',
    'autoShow',
    'baseCls',
    'baseParams',
    'bind',
    'border',
    'childEls',
    'clickEvent',
    'cls',
    'columnWidth',
    'componentCls',
    'componentLayout',
    'constrain',
    'constraintInsets',
    'constrainTo',
    'contentEl',
    'controller',
    'data',
    'defaultAlign',
    'defaultListenerScope',
    'destroyMenu',
    'disabled',
    'disabledCls',
    'dock',
    'draggable',
    'enableToggle',
    'fixed',
    'flex',
    'floating',
    'focusCls',
    'focusOnToFront',
    'formBind',
    'frame',
    'glyph',
    'handleMouseEvents',
    'handler',
    'height',
    'hidden',
    'hideMode',
    'href',
    'hrefTarget',
    'html',
    'icon',
    'iconAlign',
    'iconCls',
    'id',
    'itemId',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'liquidLayout',
    'listeners',
    'liveDrag',
    'loader',
    'margin',
    'maskDefaults',
    'maskElement',
    'maxHeight',
    'maxWidth',
    'menu',
    'menuAlign',
    'minHeight',
    'minWidth',
    'modal',
    'modelValidation',
    'nameable',
    'overCls',
    'overflowText',
    'overflowX',
    'overflowY',
    'padding',
    'params',
    'plugins',
    'pressed',
    'preventDefault',
    'publishes',
    'reference',
    'region',
    'renderConfig',
    'renderData',
    'renderSelectors',
    'renderTo',
    'renderTpl',
    'repeat',
    'resizable',
    'resizeHandles',
    'saveDelay',
    'scale',
    'scope',
    'scrollable',
    'session',
    'shadow',
    'shadowOffset',
    'shareableName',
    'shim',
    'showEmptyMenu',
    'shrinkWrap',
    'stateEvents',
    'stateful',
    'stateId',
    'style',
    'tabIndex',
    'text',
    'textAlign',
    'toFrontOnShow',
    'toggleGroup',
    'toggleHandler',
    'tooltip',
    'tooltipType',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'twoWayBindable',
    'ui',
    'uiCls',
    'userCls',
    'value',
    'viewModel',
    'weight',
    'width',
    'xtype',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
  public static EVENTS: any[] = [
		{name:'activate',parameters:'button'},
		{name:'added',parameters:'button,container,pos'},
		{name:'afterlayoutanimation',parameters:'button'},
		{name:'afterrender',parameters:'button'},
		{name:'beforeactivate',parameters:'button'},
		{name:'beforedeactivate',parameters:'button'},
		{name:'beforedestroy',parameters:'button'},
		{name:'beforehide',parameters:'button'},
		{name:'beforerender',parameters:'button'},
		{name:'beforeshow',parameters:'button'},
		{name:'beforestaterestore',parameters:'button,state'},
		{name:'beforestatesave',parameters:'button,state'},
		{name:'beforetoggle',parameters:'button,pressed'},
		{name:'blur',parameters:'button,event'},
		{name:'boxready',parameters:'button,width,height'},
		{name:'click',parameters:'button,e'},
		{name:'deactivate',parameters:'button'},
		{name:'destroy',parameters:'button'},
		{name:'disable',parameters:'button'},
		{name:'enable',parameters:'button'},
		{name:'focus',parameters:'button,event'},
		{name:'focusenter',parameters:'button,event'},
		{name:'focusleave',parameters:'button,event'},
		{name:'glyphchange',parameters:'button,newGlyph,oldGlyph'},
		{name:'hide',parameters:'button'},
		{name:'iconchange',parameters:'button,oldIcon,newIcon'},
		{name:'menuhide',parameters:'button,menu'},
		{name:'menushow',parameters:'button,menu'},
		{name:'menutriggerout',parameters:'button,menu,e'},
		{name:'menutriggerover',parameters:'button,menu,e'},
		{name:'mouseout',parameters:'button,e'},
		{name:'mouseover',parameters:'button,e'},
		{name:'move',parameters:'button,x,y'},
		{name:'removed',parameters:'button,ownerCt'},
		{name:'render',parameters:'button'},
		{name:'resize',parameters:'button,width,height,oldWidth,oldHeight'},
		{name:'show',parameters:'button'},
		{name:'staterestore',parameters:'button,state'},
		{name:'statesave',parameters:'button,state'},
		{name:'textchange',parameters:'button,oldText,newText'},
		{name:'toggle',parameters:'button,pressed'},
		{name:'ready',parameters:''}
];
  public static EVENTNAMES: string[] = [
		'activate',
		'added',
		'afterlayoutanimation',
		'afterrender',
		'beforeactivate',
		'beforedeactivate',
		'beforedestroy',
		'beforehide',
		'beforerender',
		'beforeshow',
		'beforestaterestore',
		'beforestatesave',
		'beforetoggle',
		'blur',
		'boxready',
		'click',
		'deactivate',
		'destroy',
		'disable',
		'enable',
		'focus',
		'focusenter',
		'focusleave',
		'glyphchange',
		'hide',
		'iconchange',
		'menuhide',
		'menushow',
		'menutriggerout',
		'menutriggerover',
		'mouseout',
		'mouseover',
		'move',
		'removed',
		'render',
		'resize',
		'show',
		'staterestore',
		'statesave',
		'textchange',
		'toggle',
		'ready'
];
}
@Component({
  selector: 'button', 
  inputs: buttonMetaData.PROPERTIES,
  outputs: buttonMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtButtonComponent)}],
  template: '<ng-template #dynamic></ng-template>'
})
export class ExtButtonComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(eRef:ElementRef) {super(eRef,buttonMetaData)}
  public ngOnInit() {this.baseOnInit(buttonMetaData)}
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
  public ngAfterContentInit() {
    this.baseAfterContentInit()
    this['ready'].emit(this)
    }
}