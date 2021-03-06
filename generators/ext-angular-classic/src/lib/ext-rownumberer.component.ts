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
export class rownumbererMetaData {
  public static XTYPE: string = 'rownumberer';
  public static PROPERTIESOBJECT: any = {
    "actions": "Object",
    "activeChildTabIndex": "Number",
    "activeCounter": "Number",
    "activeItem": "String/Number",
    "align": "'start'/'center'/'end'",
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
    "bind": "Object/String",
    "border": "Number/String/Boolean",
    "bubbleEvents": "String[]",
    "cellFocusable": "Boolean",
    "cellWrap": "Boolean",
    "childEls": "Object/String[]/Object[]",
    "cls": "String/String[]",
    "columns": "Object[]",
    "columnsText": "String",
    "columnWidth": "Number",
    "componentCls": "String",
    "componentLayout": "String/Object",
    "constrain": "Boolean",
    "constraintInsets": "Object/String",
    "constrainTo": "Ext.util.Region/Ext.dom.Element",
    "contentEl": "String",
    "controller": "String/Object/Ext.app.ViewController",
    "data": "Object",
    "dataIndex": "String",
    "defaultAlign": "String",
    "defaultFocus": "String",
    "defaultListenerScope": "Boolean",
    "defaults": "Object/Function",
    "defaultType": "String",
    "defaultWidth": "Number",
    "detachOnRemove": "Boolean",
    "dirtyText": "String",
    "disabled": "Boolean",
    "disabledCls": "String",
    "dock": "'top'/'bottom'/'left'/'right'",
    "draggable": "Boolean",
    "editor": "Object/String",
    "editRenderer": "Function/String",
    "emptyCellText": "String",
    "enableColumnHide": "Boolean",
    "enableTextSelection": "Boolean",
    "exportRenderer": "Boolean/Function/String",
    "exportStyle": "Ext.exporter.file.Style/Ext.exporter.file.Style[]",
    "exportSummaryRenderer": "Boolean/Function/String",
    "field": "Object/String",
    "fixed": "Boolean",
    "flex": "Number",
    "floating": "Boolean",
    "focusableContainer": "Boolean",
    "focusCls": "String",
    "focusOnToFront": "Boolean",
    "formatter": "String",
    "formBind": "Boolean",
    "frame": "Boolean",
    "groupable": "Boolean",
    "header": "String",
    "headerWrap": "Boolean",
    "height": "Number|String",
    "hidden": "Boolean",
    "hideable": "Boolean",
    "hideMode": "String",
    "html": "String/Object",
    "id": "String",
    "ignoreExport": "Boolean",
    "inactiveChildTabIndex": "Number",
    "itemId": "String",
    "items": "Object/Object[]",
    "keyMap": "Object",
    "keyMapEnabled": "Boolean",
    "keyMapTarget": "String",
    "layout": "Ext.enums.Layout/Object",
    "liquidLayout": "Boolean",
    "listeners": "Object",
    "liveDrag": "Boolean",
    "loader": "Ext.ComponentLoader/Object",
    "lockable": "Boolean",
    "locked": "Boolean",
    "margin": "Number/String",
    "maskDefaults": "Object",
    "maskElement": "String",
    "maxHeight": "Number",
    "maxWidth": "Number",
    "menuDisabled": "Boolean",
    "menuText": "String",
    "minHeight": "Number",
    "minWidth": "Number",
    "modal": "Boolean",
    "modelValidation": "Boolean",
    "nameable": "Boolean",
    "nameHolder": "Boolean",
    "overCls": "String",
    "overflowX": "String",
    "overflowY": "String",
    "padding": "Number/String",
    "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
    "producesHTML": "Boolean",
    "publishes": "String/String[]/Object",
    "reference": "String",
    "referenceHolder": "Boolean",
    "region": "'north'/'south'/'east'/'west'/'center'",
    "renderConfig": "Object",
    "renderData": "Object",
    "renderer": "Function/String",
    "renderSelectors": "Object",
    "renderTo": "String/HTMLElement/Ext.dom.Element",
    "renderTpl": "Ext.XTemplate/String/String[]",
    "resetFocusPosition": "Boolean",
    "resizable": "Boolean",
    "resizeHandles": "String",
    "saveDelay": "Number",
    "scope": "Object",
    "scrollable": "Boolean/String/Object",
    "sealed": "Boolean",
    "session": "Boolean/Object/Ext.data.Session",
    "shadow": "String/Boolean",
    "shadowOffset": "Number",
    "shareableName": "Boolean",
    "shim": "Boolean",
    "shrinkWrap": "Boolean/Number",
    "sortable": "Boolean",
    "sortAscText": "String",
    "sortClearText": "String",
    "sortDescText": "String",
    "sorter": "Function/String/Object/Ext.util.Sorter",
    "stateEvents": "String[]",
    "stateful": "Boolean/Object",
    "stateId": "String",
    "style": "String/Object",
    "summaryRenderer": "Function/String",
    "suspendLayout": "Boolean",
    "tabGuard": "Boolean",
    "tabIndex": "Number",
    "tdCls": "String",
    "text": "String",
    "toFrontOnShow": "Boolean",
    "tooltip": "String",
    "tooltipType": "String",
    "touchAction": "Object",
    "tpl": "Ext.XTemplate/Ext.Template/String/String[]",
    "tplWriteMode": "String",
    "twoWayBindable": "String/String[]/Object",
    "ui": "String",
    "uiCls": "String[]",
    "updater": "Function/String",
    "userCls": "String/String[]",
    "variableRowHeight": "Boolean",
    "viewModel": "String/Object/Ext.app.ViewModel",
    "weight": "Number",
    "width": "Number",
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
    'align',
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
    'bind',
    'border',
    'bubbleEvents',
    'cellFocusable',
    'cellWrap',
    'childEls',
    'cls',
    'columns',
    'columnsText',
    'columnWidth',
    'componentCls',
    'componentLayout',
    'constrain',
    'constraintInsets',
    'constrainTo',
    'contentEl',
    'controller',
    'data',
    'dataIndex',
    'defaultAlign',
    'defaultFocus',
    'defaultListenerScope',
    'defaults',
    'defaultType',
    'defaultWidth',
    'detachOnRemove',
    'dirtyText',
    'disabled',
    'disabledCls',
    'dock',
    'draggable',
    'editor',
    'editRenderer',
    'emptyCellText',
    'enableColumnHide',
    'enableTextSelection',
    'exportRenderer',
    'exportStyle',
    'exportSummaryRenderer',
    'field',
    'fixed',
    'flex',
    'floating',
    'focusableContainer',
    'focusCls',
    'focusOnToFront',
    'formatter',
    'formBind',
    'frame',
    'groupable',
    'header',
    'headerWrap',
    'height',
    'hidden',
    'hideable',
    'hideMode',
    'html',
    'id',
    'ignoreExport',
    'inactiveChildTabIndex',
    'itemId',
    'items',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'layout',
    'liquidLayout',
    'listeners',
    'liveDrag',
    'loader',
    'lockable',
    'locked',
    'margin',
    'maskDefaults',
    'maskElement',
    'maxHeight',
    'maxWidth',
    'menuDisabled',
    'menuText',
    'minHeight',
    'minWidth',
    'modal',
    'modelValidation',
    'nameable',
    'nameHolder',
    'overCls',
    'overflowX',
    'overflowY',
    'padding',
    'plugins',
    'producesHTML',
    'publishes',
    'reference',
    'referenceHolder',
    'region',
    'renderConfig',
    'renderData',
    'renderer',
    'renderSelectors',
    'renderTo',
    'renderTpl',
    'resetFocusPosition',
    'resizable',
    'resizeHandles',
    'saveDelay',
    'scope',
    'scrollable',
    'sealed',
    'session',
    'shadow',
    'shadowOffset',
    'shareableName',
    'shim',
    'shrinkWrap',
    'sortable',
    'sortAscText',
    'sortClearText',
    'sortDescText',
    'sorter',
    'stateEvents',
    'stateful',
    'stateId',
    'style',
    'summaryRenderer',
    'suspendLayout',
    'tabGuard',
    'tabIndex',
    'tdCls',
    'text',
    'toFrontOnShow',
    'tooltip',
    'tooltipType',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'twoWayBindable',
    'ui',
    'uiCls',
    'updater',
    'userCls',
    'variableRowHeight',
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
		{name:'activate',parameters:'rownumberer'},
		{name:'add',parameters:'rownumberer,component,index'},
		{name:'added',parameters:'rownumberer,container,pos'},
		{name:'afterlayout',parameters:'rownumberer,layout'},
		{name:'afterlayoutanimation',parameters:'rownumberer'},
		{name:'afterrender',parameters:'rownumberer'},
		{name:'beforeactivate',parameters:'rownumberer'},
		{name:'beforeadd',parameters:'rownumberer,component,index'},
		{name:'beforedeactivate',parameters:'rownumberer'},
		{name:'beforedestroy',parameters:'rownumberer'},
		{name:'beforehide',parameters:'rownumberer'},
		{name:'beforeremove',parameters:'rownumberer,component'},
		{name:'beforerender',parameters:'rownumberer'},
		{name:'beforeshow',parameters:'rownumberer'},
		{name:'beforestaterestore',parameters:'rownumberer,state'},
		{name:'beforestatesave',parameters:'rownumberer,state'},
		{name:'blur',parameters:'rownumberer,event'},
		{name:'boxready',parameters:'rownumberer,width,height'},
		{name:'childmove',parameters:'rownumberer,component,prevIndex,newIndex'},
		{name:'columnhide',parameters:'ct,column'},
		{name:'columnmove',parameters:'ct,column,fromIdx,toIdx'},
		{name:'columnresize',parameters:'ct,column,width'},
		{name:'columnschanged',parameters:'ct'},
		{name:'columnshow',parameters:'ct,column'},
		{name:'deactivate',parameters:'rownumberer'},
		{name:'destroy',parameters:'rownumberer'},
		{name:'disable',parameters:'rownumberer'},
		{name:'enable',parameters:'rownumberer'},
		{name:'focus',parameters:'rownumberer,event'},
		{name:'focusenter',parameters:'rownumberer,event'},
		{name:'focusleave',parameters:'rownumberer,event'},
		{name:'headerclick',parameters:'ct,column,e,t'},
		{name:'headercontextmenu',parameters:'ct,column,e,t'},
		{name:'headertriggerclick',parameters:'ct,column,e,t'},
		{name:'hide',parameters:'rownumberer'},
		{name:'menucreate',parameters:'ct,menu'},
		{name:'move',parameters:'rownumberer,x,y'},
		{name:'remove',parameters:'rownumberer,component'},
		{name:'removed',parameters:'rownumberer,ownerCt'},
		{name:'render',parameters:'rownumberer'},
		{name:'resize',parameters:'rownumberer,width,height,oldWidth,oldHeight'},
		{name:'show',parameters:'rownumberer'},
		{name:'sortchange',parameters:'ct,column,direction'},
		{name:'staterestore',parameters:'rownumberer,state'},
		{name:'statesave',parameters:'rownumberer,state'},
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
		'childmove',
		'columnhide',
		'columnmove',
		'columnresize',
		'columnschanged',
		'columnshow',
		'deactivate',
		'destroy',
		'disable',
		'enable',
		'focus',
		'focusenter',
		'focusleave',
		'headerclick',
		'headercontextmenu',
		'headertriggerclick',
		'hide',
		'menucreate',
		'move',
		'remove',
		'removed',
		'render',
		'resize',
		'show',
		'sortchange',
		'staterestore',
		'statesave',
		'ready'
];
}
@Component({
  selector: 'rownumberer', 
  inputs: rownumbererMetaData.PROPERTIES,
  outputs: rownumbererMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtRownumbererComponent)}],
  template: '<ng-template #dynamic></ng-template>'
})
export class ExtRownumbererComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(eRef:ElementRef) {super(eRef,rownumbererMetaData)}
  public ngOnInit() {this.baseOnInit(rownumbererMetaData)}
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
  public ngAfterContentInit() {
    this.baseAfterContentInit()
    this['ready'].emit(this)
    }
}