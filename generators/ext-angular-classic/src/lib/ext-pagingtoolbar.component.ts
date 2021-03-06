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
export class pagingtoolbarMetaData {
  public static XTYPE: string = 'pagingtoolbar';
  public static PROPERTIESOBJECT: any = {
    "actions": "Object",
    "activeChildTabIndex": "Number",
    "activeCounter": "Number",
    "activeItem": "String/Number",
    "afterPageText": "String",
    "alignOnScroll": "Boolean",
    "alignTarget": "String",
    "allowFocusingDisabledChildren": "Boolean",
    "alwaysOnTop": "Boolean/Number",
    "anchor": "String",
    "anchorSize": "Number/Object",
    "animateShadow": "Boolean",
    "ariaAttributes": "Object",
    "ariaDescribedBy": "String",
    "ariaLabel": "String",
    "ariaLabelledBy": "String",
    "autoDestroy": "Boolean",
    "autoEl": "String/Object",
    "autoRender": "Boolean/String/HTMLElement/Ext.dom.Element",
    "autoScroll": "Boolean",
    "autoShow": "Boolean",
    "baseCls": "String",
    "beforePageText": "String",
    "bind": "Object/String",
    "border": "Number/String/Boolean",
    "bubbleEvents": "String[]",
    "childEls": "Object/String[]/Object[]",
    "cls": "String/String[]",
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
    "defaultButtonUI": "String",
    "defaultFieldUI": "String",
    "defaultFocus": "String",
    "defaultFooterButtonUI": "String",
    "defaultFooterFieldUI": "String",
    "defaultListenerScope": "Boolean",
    "defaults": "Object/Function",
    "defaultType": "String",
    "detachOnRemove": "Boolean",
    "disabled": "Boolean",
    "disabledCls": "String",
    "displayInfo": "Boolean",
    "displayMsg": "String",
    "dock": "'top'/'bottom'/'left'/'right'",
    "draggable": "Boolean/Object",
    "emptyMsg": "String",
    "enableOverflow": "Boolean",
    "firstText": "String",
    "fixed": "Boolean",
    "flex": "Number",
    "floating": "Boolean",
    "focusableContainer": "Boolean",
    "focusCls": "String",
    "focusOnToFront": "Boolean",
    "formBind": "Boolean",
    "frame": "Boolean",
    "height": "Number|String",
    "hidden": "Boolean",
    "hideMode": "String",
    "html": "String/Object",
    "id": "String",
    "inactiveChildTabIndex": "Number",
    "inputItemWidth": "Number",
    "itemId": "String",
    "items": "Object/Object[]",
    "keyMap": "Object",
    "keyMapEnabled": "Boolean",
    "keyMapTarget": "String",
    "lastText": "String",
    "layout": "Ext.enums.Layout/Object",
    "liquidLayout": "Boolean",
    "listeners": "Object",
    "liveDrag": "Boolean",
    "loader": "Ext.ComponentLoader/Object",
    "margin": "Number/String",
    "maskDefaults": "Object",
    "maskElement": "String",
    "maxHeight": "Number",
    "maxWidth": "Number",
    "minHeight": "Number",
    "minWidth": "Number",
    "modal": "Boolean",
    "modelValidation": "Boolean",
    "nameable": "Boolean",
    "nameHolder": "Boolean",
    "nextText": "String",
    "overCls": "String",
    "overflowHandler": "String",
    "overflowX": "String",
    "overflowY": "String",
    "padding": "Number/String",
    "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
    "prependButtons": "Boolean",
    "prevText": "String",
    "publishes": "String/String[]/Object",
    "reference": "String",
    "referenceHolder": "Boolean",
    "refreshText": "String",
    "region": "'north'/'south'/'east'/'west'/'center'",
    "renderConfig": "Object",
    "renderData": "Object",
    "renderSelectors": "Object",
    "renderTo": "String/HTMLElement/Ext.dom.Element",
    "renderTpl": "Ext.XTemplate/String/String[]",
    "resetFocusPosition": "Boolean",
    "resizable": "Boolean/Object",
    "resizeHandles": "String",
    "saveDelay": "Number",
    "scrollable": "Boolean/String/Object",
    "session": "Boolean/Object/Ext.data.Session",
    "shadow": "String/Boolean",
    "shadowOffset": "Number",
    "shareableName": "Boolean",
    "shim": "Boolean",
    "shrinkWrap": "Boolean/Number",
    "stateEvents": "String[]",
    "stateful": "Boolean/Object",
    "stateId": "String",
    "store": "Ext.data.Store/String",
    "style": "String/Object",
    "suspendLayout": "Boolean",
    "tabGuard": "Boolean",
    "tabIndex": "Number",
    "toFrontOnShow": "Boolean",
    "touchAction": "Object",
    "tpl": "Ext.XTemplate/Ext.Template/String/String[]",
    "tplWriteMode": "String",
    "trackMenus": "Boolean",
    "twoWayBindable": "String/String[]/Object",
    "ui": "String",
    "uiCls": "String[]",
    "userCls": "String/String[]",
    "vertical": "Boolean",
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
    'actions',
    'activeChildTabIndex',
    'activeCounter',
    'activeItem',
    'afterPageText',
    'alignOnScroll',
    'alignTarget',
    'allowFocusingDisabledChildren',
    'alwaysOnTop',
    'anchor',
    'anchorSize',
    'animateShadow',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'autoDestroy',
    'autoEl',
    'autoRender',
    'autoScroll',
    'autoShow',
    'baseCls',
    'beforePageText',
    'bind',
    'border',
    'bubbleEvents',
    'childEls',
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
    'defaultButtonUI',
    'defaultFieldUI',
    'defaultFocus',
    'defaultFooterButtonUI',
    'defaultFooterFieldUI',
    'defaultListenerScope',
    'defaults',
    'defaultType',
    'detachOnRemove',
    'disabled',
    'disabledCls',
    'displayInfo',
    'displayMsg',
    'dock',
    'draggable',
    'emptyMsg',
    'enableOverflow',
    'firstText',
    'fixed',
    'flex',
    'floating',
    'focusableContainer',
    'focusCls',
    'focusOnToFront',
    'formBind',
    'frame',
    'height',
    'hidden',
    'hideMode',
    'html',
    'id',
    'inactiveChildTabIndex',
    'inputItemWidth',
    'itemId',
    'items',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'lastText',
    'layout',
    'liquidLayout',
    'listeners',
    'liveDrag',
    'loader',
    'margin',
    'maskDefaults',
    'maskElement',
    'maxHeight',
    'maxWidth',
    'minHeight',
    'minWidth',
    'modal',
    'modelValidation',
    'nameable',
    'nameHolder',
    'nextText',
    'overCls',
    'overflowHandler',
    'overflowX',
    'overflowY',
    'padding',
    'plugins',
    'prependButtons',
    'prevText',
    'publishes',
    'reference',
    'referenceHolder',
    'refreshText',
    'region',
    'renderConfig',
    'renderData',
    'renderSelectors',
    'renderTo',
    'renderTpl',
    'resetFocusPosition',
    'resizable',
    'resizeHandles',
    'saveDelay',
    'scrollable',
    'session',
    'shadow',
    'shadowOffset',
    'shareableName',
    'shim',
    'shrinkWrap',
    'stateEvents',
    'stateful',
    'stateId',
    'store',
    'style',
    'suspendLayout',
    'tabGuard',
    'tabIndex',
    'toFrontOnShow',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'trackMenus',
    'twoWayBindable',
    'ui',
    'uiCls',
    'userCls',
    'vertical',
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
		{name:'activate',parameters:'pagingtoolbar'},
		{name:'add',parameters:'pagingtoolbar,component,index'},
		{name:'added',parameters:'pagingtoolbar,container,pos'},
		{name:'afterlayout',parameters:'pagingtoolbar,layout'},
		{name:'afterlayoutanimation',parameters:'pagingtoolbar'},
		{name:'afterrender',parameters:'pagingtoolbar'},
		{name:'beforeactivate',parameters:'pagingtoolbar'},
		{name:'beforeadd',parameters:'pagingtoolbar,component,index'},
		{name:'beforechange',parameters:'pagingtoolbar,page'},
		{name:'beforedeactivate',parameters:'pagingtoolbar'},
		{name:'beforedestroy',parameters:'pagingtoolbar'},
		{name:'beforehide',parameters:'pagingtoolbar'},
		{name:'beforeremove',parameters:'pagingtoolbar,component'},
		{name:'beforerender',parameters:'pagingtoolbar'},
		{name:'beforeshow',parameters:'pagingtoolbar'},
		{name:'beforestaterestore',parameters:'pagingtoolbar,state'},
		{name:'beforestatesave',parameters:'pagingtoolbar,state'},
		{name:'blur',parameters:'pagingtoolbar,event'},
		{name:'boxready',parameters:'pagingtoolbar,width,height'},
		{name:'change',parameters:'pagingtoolbar,pageData'},
		{name:'childmove',parameters:'pagingtoolbar,component,prevIndex,newIndex'},
		{name:'deactivate',parameters:'pagingtoolbar'},
		{name:'destroy',parameters:'pagingtoolbar'},
		{name:'disable',parameters:'pagingtoolbar'},
		{name:'enable',parameters:'pagingtoolbar'},
		{name:'focus',parameters:'pagingtoolbar,event'},
		{name:'focusenter',parameters:'pagingtoolbar,event'},
		{name:'focusleave',parameters:'pagingtoolbar,event'},
		{name:'hide',parameters:'pagingtoolbar'},
		{name:'move',parameters:'pagingtoolbar,x,y'},
		{name:'overflowchange',parameters:'lastHiddenCount,hiddenCount,hiddenItems'},
		{name:'remove',parameters:'pagingtoolbar,component'},
		{name:'removed',parameters:'pagingtoolbar,ownerCt'},
		{name:'render',parameters:'pagingtoolbar'},
		{name:'resize',parameters:'pagingtoolbar,width,height,oldWidth,oldHeight'},
		{name:'show',parameters:'pagingtoolbar'},
		{name:'staterestore',parameters:'pagingtoolbar,state'},
		{name:'statesave',parameters:'pagingtoolbar,state'},
		{name:'ready',parameters:''}
];
  public static EVENTNAMES: string[] = [
		'activate',
		'add',
		'added',
		'afterlayout',
		'afterlayoutanimation',
		'afterrender',
		'beforeactivate',
		'beforeadd',
		'beforechange',
		'beforedeactivate',
		'beforedestroy',
		'beforehide',
		'beforeremove',
		'beforerender',
		'beforeshow',
		'beforestaterestore',
		'beforestatesave',
		'blur',
		'boxready',
		'change',
		'childmove',
		'deactivate',
		'destroy',
		'disable',
		'enable',
		'focus',
		'focusenter',
		'focusleave',
		'hide',
		'move',
		'overflowchange',
		'remove',
		'removed',
		'render',
		'resize',
		'show',
		'staterestore',
		'statesave',
		'ready'
];
}
@Component({
  selector: 'pagingtoolbar', 
  inputs: pagingtoolbarMetaData.PROPERTIES,
  outputs: pagingtoolbarMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtPagingtoolbarComponent)}],
  template: '<ng-template #dynamic></ng-template>'
})
export class ExtPagingtoolbarComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(eRef:ElementRef) {super(eRef,pagingtoolbarMetaData)}
  public ngOnInit() {this.baseOnInit(pagingtoolbarMetaData)}
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
  public ngAfterContentInit() {
    this.baseAfterContentInit()
    this['ready'].emit(this)
    }
}