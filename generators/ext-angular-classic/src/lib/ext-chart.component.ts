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
export class chartMetaData {
  public static XTYPE: string = 'chart';
  public static PROPERTIESOBJECT: any = {
    "actions": "Object",
    "activeChildTabIndex": "Number",
    "activeCounter": "Number",
    "activeItem": "String/Number",
    "alignOnScroll": "Boolean",
    "alignTarget": "String",
    "allowFocusingDisabledChildren": "Boolean",
    "alwaysOnTop": "Boolean/Number",
    "anchor": "String",
    "anchorSize": "Number/Object",
    "animateShadow": "Boolean",
    "animation": "Boolean/Object",
    "animCollapse": "Boolean/Number",
    "ariaAttributes": "Object",
    "ariaDescribedBy": "String",
    "ariaLabel": "String",
    "ariaLabelledBy": "String",
    "autoDestroy": "Boolean",
    "autoEl": "String/Object",
    "autoRender": "Boolean/String/HTMLElement/Ext.dom.Element",
    "autoScroll": "Boolean",
    "autoShow": "Boolean",
    "axes": "Ext.chart.axis.Axis/Array/Object",
    "background": "Object",
    "baseCls": "String",
    "bbar": "Object/Object[]",
    "bind": "Object/String",
    "bodyBorder": "Boolean",
    "bodyCls": "String/String[]",
    "bodyPadding": "Number/String",
    "bodyStyle": "String/Object/Function",
    "border": "Boolean",
    "bubbleEvents": "String[]",
    "buttonAlign": "String",
    "buttons": "Object[]",
    "captions": "Object",
    "childEls": "Object/String[]/Object[]",
    "closable": "Boolean",
    "closeAction": "String",
    "closeToolText": "String",
    "cls": "String/String[]",
    "collapsed": "Boolean",
    "collapsedCls": "String",
    "collapseDirection": "String",
    "collapseFirst": "Boolean",
    "collapseMode": "String",
    "collapseToolText": "String",
    "collapsible": "Boolean",
    "colors": "Array",
    "columnWidth": "Number",
    "componentCls": "String",
    "componentLayout": "String/Object",
    "constrain": "Boolean",
    "constrainHeader": "Boolean",
    "constraintInsets": "Object/String",
    "constrainTo": "Ext.util.Region/Ext.dom.Element",
    "contentEl": "String",
    "controller": "String/Object/Ext.app.ViewController",
    "data": "Object",
    "defaultAlign": "String",
    "defaultButton": "String",
    "defaultButtonTarget": "String",
    "defaultDockWeights": "Object",
    "defaultFocus": "String",
    "defaultListenerScope": "Boolean",
    "defaults": "Object/Function",
    "defaultType": "String",
    "detachOnRemove": "Boolean",
    "disabled": "Boolean",
    "disabledCls": "String",
    "dock": "'top'/'bottom'/'left'/'right'",
    "dockedItems": "Object/Object[]",
    "downloadServerUrl": "String",
    "draggable": "Boolean/Object",
    "engine": "String",
    "expandToolText": "String",
    "fbar": "Object/Object[]",
    "fixed": "Boolean",
    "flex": "Number",
    "flipXY": "Boolean",
    "floatable": "Boolean",
    "floating": "Boolean",
    "focusableContainer": "Boolean",
    "focusCls": "String",
    "focusOnToFront": "Boolean",
    "formBind": "Boolean",
    "frame": "Boolean",
    "frameHeader": "Boolean",
    "glyph": "Number/String",
    "gradients": "Object[]",
    "header": "Boolean/Object",
    "headerOverCls": "String",
    "headerPosition": "'top'/'bottom'/'left'/'right'",
    "height": "Number|String",
    "hidden": "Boolean",
    "hideCollapseTool": "Boolean",
    "hideMode": "String",
    "highlightItem": "Object",
    "html": "String/Object",
    "icon": "String",
    "iconAlign": "'top'/'right'/'bottom'/'left'",
    "iconCls": "String",
    "id": "String",
    "inactiveChildTabIndex": "Number",
    "innerPadding": "Object",
    "insetPadding": "Object/Number/String",
    "interactions": "Array",
    "itemId": "String",
    "items": "Object/Object[]",
    "keyMap": "Object",
    "keyMapEnabled": "Boolean",
    "keyMapTarget": "String",
    "layout": "Ext.enums.Layout/Object",
    "lbar": "Object/Object[]",
    "legend": "Ext.chart.legend.Legend/Ext.chart.legend.SpriteLegend/Boolean",
    "liquidLayout": "Boolean",
    "listeners": "Object",
    "liveDrag": "Boolean",
    "loader": "Ext.ComponentLoader/Object",
    "mainRect": "any",
    "maintainTitlePosition": "Boolean",
    "manageHeight": "Boolean",
    "margin": "Number/String",
    "maskDefaults": "Object",
    "maskElement": "String",
    "maxHeight": "Number",
    "maxWidth": "Number",
    "minButtonWidth": "Number",
    "minHeight": "Number",
    "minWidth": "Number",
    "modal": "Boolean",
    "modelValidation": "Boolean",
    "nameable": "Boolean",
    "nameHolder": "Boolean",
    "overCls": "String",
    "overflowX": "String",
    "overflowY": "String",
    "overlapHeader": "Boolean",
    "padding": "Number/String",
    "placeholder": "Ext.Component/Object",
    "placeholderCollapseHideMode": "Number",
    "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
    "preventHeader": "Boolean",
    "previewAltText": "String",
    "previewTitleText": "String",
    "publishes": "String/String[]/Object",
    "rbar": "Object/Object[]",
    "reference": "String",
    "referenceHolder": "Boolean",
    "region": "'north'/'south'/'east'/'west'/'center'",
    "renderConfig": "Object",
    "renderData": "Object",
    "renderSelectors": "Object",
    "renderTo": "String/HTMLElement/Ext.dom.Element",
    "renderTpl": "Ext.XTemplate/String/String[]",
    "resetFocusPosition": "Boolean",
    "resizable": "Boolean/Object",
    "resizeHandler": "any",
    "resizeHandles": "String",
    "saveDelay": "Number",
    "scrollable": "Boolean/String/Object",
    "series": "Ext.chart.series.Series/Array",
    "session": "Boolean/Object/Ext.data.Session",
    "shadow": "String/Boolean",
    "shadowOffset": "Number",
    "shareableName": "Boolean",
    "shim": "Boolean",
    "shrinkWrap": "Boolean/Number",
    "shrinkWrapDock": "Boolean/Number",
    "simpleDrag": "Boolean",
    "sprites": "Object[]",
    "stateEvents": "String[]",
    "stateful": "Boolean/Object",
    "stateId": "String",
    "store": "Ext.data.Store/String/Object",
    "style": "Object",
    "surfaceZIndexes": "Object",
    "suspendLayout": "Boolean",
    "tabGuard": "Boolean",
    "tabIndex": "Number",
    "tbar": "Object/Object[]",
    "theme": "String",
    "title": "String/Ext.panel.Title",
    "titleAlign": "'left'/'center'/'right'",
    "titleCollapse": "Boolean",
    "titlePosition": "Number",
    "titleRotation": "'default'/0/1/2",
    "toFrontOnShow": "Boolean",
    "tools": "Object[]/Ext.panel.Tool[]",
    "touchAction": "Object",
    "tpl": "Ext.XTemplate/Ext.Template/String/String[]",
    "tplWriteMode": "String",
    "twoWayBindable": "String/String[]/Object",
    "ui": "String",
    "uiCls": "String[]",
    "userCls": "String/String[]",
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
    'alignOnScroll',
    'alignTarget',
    'allowFocusingDisabledChildren',
    'alwaysOnTop',
    'anchor',
    'anchorSize',
    'animateShadow',
    'animation',
    'animCollapse',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'autoDestroy',
    'autoEl',
    'autoRender',
    'autoScroll',
    'autoShow',
    'axes',
    'background',
    'baseCls',
    'bbar',
    'bind',
    'bodyBorder',
    'bodyCls',
    'bodyPadding',
    'bodyStyle',
    'border',
    'bubbleEvents',
    'buttonAlign',
    'buttons',
    'captions',
    'childEls',
    'closable',
    'closeAction',
    'closeToolText',
    'cls',
    'collapsed',
    'collapsedCls',
    'collapseDirection',
    'collapseFirst',
    'collapseMode',
    'collapseToolText',
    'collapsible',
    'colors',
    'columnWidth',
    'componentCls',
    'componentLayout',
    'constrain',
    'constrainHeader',
    'constraintInsets',
    'constrainTo',
    'contentEl',
    'controller',
    'data',
    'defaultAlign',
    'defaultButton',
    'defaultButtonTarget',
    'defaultDockWeights',
    'defaultFocus',
    'defaultListenerScope',
    'defaults',
    'defaultType',
    'detachOnRemove',
    'disabled',
    'disabledCls',
    'dock',
    'dockedItems',
    'downloadServerUrl',
    'draggable',
    'engine',
    'expandToolText',
    'fbar',
    'fixed',
    'flex',
    'flipXY',
    'floatable',
    'floating',
    'focusableContainer',
    'focusCls',
    'focusOnToFront',
    'formBind',
    'frame',
    'frameHeader',
    'glyph',
    'gradients',
    'header',
    'headerOverCls',
    'headerPosition',
    'height',
    'hidden',
    'hideCollapseTool',
    'hideMode',
    'highlightItem',
    'html',
    'icon',
    'iconAlign',
    'iconCls',
    'id',
    'inactiveChildTabIndex',
    'innerPadding',
    'insetPadding',
    'interactions',
    'itemId',
    'items',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'layout',
    'lbar',
    'legend',
    'liquidLayout',
    'listeners',
    'liveDrag',
    'loader',
    'mainRect',
    'maintainTitlePosition',
    'manageHeight',
    'margin',
    'maskDefaults',
    'maskElement',
    'maxHeight',
    'maxWidth',
    'minButtonWidth',
    'minHeight',
    'minWidth',
    'modal',
    'modelValidation',
    'nameable',
    'nameHolder',
    'overCls',
    'overflowX',
    'overflowY',
    'overlapHeader',
    'padding',
    'placeholder',
    'placeholderCollapseHideMode',
    'plugins',
    'preventHeader',
    'previewAltText',
    'previewTitleText',
    'publishes',
    'rbar',
    'reference',
    'referenceHolder',
    'region',
    'renderConfig',
    'renderData',
    'renderSelectors',
    'renderTo',
    'renderTpl',
    'resetFocusPosition',
    'resizable',
    'resizeHandler',
    'resizeHandles',
    'saveDelay',
    'scrollable',
    'series',
    'session',
    'shadow',
    'shadowOffset',
    'shareableName',
    'shim',
    'shrinkWrap',
    'shrinkWrapDock',
    'simpleDrag',
    'sprites',
    'stateEvents',
    'stateful',
    'stateId',
    'store',
    'style',
    'surfaceZIndexes',
    'suspendLayout',
    'tabGuard',
    'tabIndex',
    'tbar',
    'theme',
    'title',
    'titleAlign',
    'titleCollapse',
    'titlePosition',
    'titleRotation',
    'toFrontOnShow',
    'tools',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'twoWayBindable',
    'ui',
    'uiCls',
    'userCls',
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
		{name:'activate',parameters:'cartesian'},
		{name:'add',parameters:'cartesian,component,index'},
		{name:'added',parameters:'cartesian,container,pos'},
		{name:'afterlayout',parameters:'cartesian,layout'},
		{name:'afterlayoutanimation',parameters:'cartesian'},
		{name:'afterrender',parameters:'cartesian'},
		{name:'beforeactivate',parameters:'cartesian'},
		{name:'beforeadd',parameters:'cartesian,component,index'},
		{name:'beforeclose',parameters:'panel'},
		{name:'beforecollapse',parameters:'p,direction,animate'},
		{name:'beforedeactivate',parameters:'cartesian'},
		{name:'beforedestroy',parameters:'cartesian'},
		{name:'beforeexpand',parameters:'p,animate'},
		{name:'beforehide',parameters:'cartesian'},
		{name:'beforerefresh',parameters:'cartesian'},
		{name:'beforeremove',parameters:'cartesian,component'},
		{name:'beforerender',parameters:'cartesian'},
		{name:'beforeshow',parameters:'cartesian'},
		{name:'beforestaterestore',parameters:'cartesian,state'},
		{name:'beforestatesave',parameters:'cartesian,state'},
		{name:'blur',parameters:'cartesian,event'},
		{name:'bodyresize',parameters:'size'},
		{name:'boxready',parameters:'cartesian,width,height'},
		{name:'childmove',parameters:'cartesian,component,prevIndex,newIndex'},
		{name:'close',parameters:'panel'},
		{name:'collapse',parameters:'p'},
		{name:'deactivate',parameters:'cartesian'},
		{name:'destroy',parameters:'cartesian'},
		{name:'disable',parameters:'cartesian'},
		{name:'dockedadd',parameters:'cartesian,component,index'},
		{name:'dockedremove',parameters:'cartesian,component'},
		{name:'enable',parameters:'cartesian'},
		{name:'expand',parameters:'p'},
		{name:'float',parameters:''},
		{name:'focus',parameters:'cartesian,event'},
		{name:'focusenter',parameters:'cartesian,event'},
		{name:'focusleave',parameters:'cartesian,event'},
		{name:'glyphchange',parameters:'cartesian,newGlyph,oldGlyph'},
		{name:'hide',parameters:'cartesian'},
		{name:'iconalignchange',parameters:'cartesian,newIconAlign,oldIconAlign'},
		{name:'iconchange',parameters:'cartesian,newIcon,oldIcon'},
		{name:'iconclschange',parameters:'cartesian,newIconCls,oldIconCls'},
		{name:'itemclick',parameters:'chart,item,event'},
		{name:'itemdblclick',parameters:'chart,item,event'},
		{name:'itemhighlight',parameters:'cartesian,newItem,oldItem'},
		{name:'itemhighlightchange',parameters:'cartesian,newItem,oldItem'},
		{name:'itemmousedown',parameters:'chart,item,event'},
		{name:'itemmousemove',parameters:'chart,item,event'},
		{name:'itemmouseout',parameters:'chart,item,event'},
		{name:'itemmouseover',parameters:'chart,item,event'},
		{name:'itemmouseup',parameters:'chart,item,event'},
		{name:'itemtap',parameters:'chart,item,event'},
		{name:'layout',parameters:'cartesian'},
		{name:'move',parameters:'cartesian,x,y'},
		{name:'redraw',parameters:'cartesian'},
		{name:'refresh',parameters:'cartesian'},
		{name:'remove',parameters:'cartesian,component'},
		{name:'removed',parameters:'cartesian,ownerCt'},
		{name:'render',parameters:'cartesian'},
		{name:'resize',parameters:'cartesian,width,height,oldWidth,oldHeight'},
		{name:'show',parameters:'cartesian'},
		{name:'spriteclick',parameters:'sprite,event'},
		{name:'spritedblclick',parameters:'sprite,event'},
		{name:'spritemousedown',parameters:'sprite,event'},
		{name:'spritemousemove',parameters:'sprite,event'},
		{name:'spritemouseout',parameters:'sprite,event'},
		{name:'spritemouseover',parameters:'sprite,event'},
		{name:'spritemouseup',parameters:'sprite,event'},
		{name:'spritetap',parameters:'sprite,event'},
		{name:'staterestore',parameters:'cartesian,state'},
		{name:'statesave',parameters:'cartesian,state'},
		{name:'storechange',parameters:'chart,newStore,oldStore'},
		{name:'titlealignchange',parameters:'cartesian,newTitleAlign,oldTitleAlign'},
		{name:'titlechange',parameters:'cartesian,newTitle,oldTitle'},
		{name:'titlepositionchange',parameters:'cartesian,newTitlePosition,oldTitlePosition'},
		{name:'titlerotationchange',parameters:'cartesian,newTitleRotation,oldTitleRotation'},
		{name:'unfloat',parameters:''},
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
		'beforeclose',
		'beforecollapse',
		'beforedeactivate',
		'beforedestroy',
		'beforeexpand',
		'beforehide',
		'beforerefresh',
		'beforeremove',
		'beforerender',
		'beforeshow',
		'beforestaterestore',
		'beforestatesave',
		'blur',
		'bodyresize',
		'boxready',
		'childmove',
		'close',
		'collapse',
		'deactivate',
		'destroy',
		'disable',
		'dockedadd',
		'dockedremove',
		'enable',
		'expand',
		'float',
		'focus',
		'focusenter',
		'focusleave',
		'glyphchange',
		'hide',
		'iconalignchange',
		'iconchange',
		'iconclschange',
		'itemclick',
		'itemdblclick',
		'itemhighlight',
		'itemhighlightchange',
		'itemmousedown',
		'itemmousemove',
		'itemmouseout',
		'itemmouseover',
		'itemmouseup',
		'itemtap',
		'layout',
		'move',
		'redraw',
		'refresh',
		'remove',
		'removed',
		'render',
		'resize',
		'show',
		'spriteclick',
		'spritedblclick',
		'spritemousedown',
		'spritemousemove',
		'spritemouseout',
		'spritemouseover',
		'spritemouseup',
		'spritetap',
		'staterestore',
		'statesave',
		'storechange',
		'titlealignchange',
		'titlechange',
		'titlepositionchange',
		'titlerotationchange',
		'unfloat',
		'ready'
];
}
@Component({
  selector: 'chart', 
  inputs: chartMetaData.PROPERTIES,
  outputs: chartMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtChartComponent)}],
  template: '<ng-template #dynamic></ng-template>'
})
export class ExtChartComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(eRef:ElementRef) {super(eRef,chartMetaData)}
  public ngOnInit() {this.baseOnInit(chartMetaData)}
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
  public ngAfterContentInit() {
    this.baseAfterContentInit()
    this['ready'].emit(this)
    }
}