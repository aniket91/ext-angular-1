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
export class treepanelMetaData {
  public static XTYPE: string = 'treepanel';
  public static PROPERTIESOBJECT: any = {
    "actions": "Object",
    "activeChildTabIndex": "Number",
    "activeCounter": "Number",
    "activeItem": "String/Number",
    "alignOnScroll": "Boolean",
    "alignTarget": "String",
    "allowDeselect": "Boolean",
    "allowFocusingDisabledChildren": "Boolean",
    "alwaysOnTop": "Boolean/Number",
    "anchor": "String",
    "anchorSize": "Number/Object",
    "animate": "Boolean",
    "animateShadow": "Boolean",
    "animCollapse": "Boolean/Number",
    "ariaAttributes": "Object",
    "ariaDescribedBy": "String",
    "ariaLabel": "String",
    "ariaLabelledBy": "String",
    "autoDestroy": "Boolean",
    "autoEl": "String/Object",
    "autoLoad": "Boolean",
    "autoRender": "Boolean/String/HTMLElement/Ext.dom.Element",
    "autoScroll": "Boolean",
    "autoShow": "Boolean",
    "baseCls": "String",
    "bbar": "Object/Object[]",
    "bind": "Object/String",
    "bodyBorder": "Boolean",
    "bodyCls": "String/String[]",
    "bodyPadding": "Number/String",
    "bodyStyle": "String/Object/Function",
    "border": "Boolean",
    "bubbleEvents": "String[]",
    "bufferedRenderer": "Boolean",
    "buttonAlign": "String",
    "buttons": "Object[]",
    "checkPropagation": "String",
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
    "columnLines": "Boolean",
    "columns": "Ext.grid.column.Column[]/Object",
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
    "deferRowRender": "Boolean",
    "detachOnRemove": "Boolean",
    "disabled": "Boolean",
    "disabledCls": "String",
    "disableSelection": "Boolean",
    "displayField": "String",
    "dock": "'top'/'bottom'/'left'/'right'",
    "dockedItems": "Object/Object[]",
    "draggable": "Boolean/Object",
    "emptyText": "String",
    "enableColumnHide": "Boolean",
    "enableColumnMove": "Boolean",
    "enableColumnResize": "Boolean",
    "enableLocking": "Boolean",
    "expandToolText": "String",
    "fbar": "Object/Object[]",
    "features": "Ext.grid.feature.Feature[]/Object[]/Ext.enums.Feature[]",
    "fixed": "Boolean",
    "flex": "Number",
    "floatable": "Boolean",
    "floating": "Boolean",
    "focusableContainer": "Boolean",
    "focusCls": "String",
    "focused": "Ext.grid.CellContext/Ext.data.Model/Number",
    "focusOnToFront": "Boolean",
    "folderSort": "Boolean",
    "forceFit": "Boolean",
    "formBind": "Boolean",
    "frame": "Boolean",
    "frameHeader": "Boolean",
    "glyph": "Number/String",
    "header": "Boolean/Object",
    "headerBorders": "Boolean",
    "headerOverCls": "String",
    "headerPosition": "'top'/'bottom'/'left'/'right'",
    "height": "Number|String",
    "hidden": "Boolean",
    "hideCollapseTool": "Boolean",
    "hideHeaders": "Boolean",
    "hideMode": "String",
    "html": "String/Object",
    "icon": "String",
    "iconAlign": "'top'/'right'/'bottom'/'left'",
    "iconCls": "String",
    "id": "String",
    "inactiveChildTabIndex": "Number",
    "itemId": "String",
    "items": "Object/Object[]",
    "keyMap": "Object",
    "keyMapEnabled": "Boolean",
    "keyMapTarget": "String",
    "layout": "Ext.enums.Layout/Object",
    "lbar": "Object/Object[]",
    "leadingBufferZone": "Number",
    "lines": "Boolean",
    "liquidLayout": "Boolean",
    "listeners": "Object",
    "liveDrag": "Boolean",
    "loader": "Ext.ComponentLoader/Object",
    "lockedGridConfig": "Object",
    "lockedViewConfig": "Object",
    "lockText": "String",
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
    "multiColumnSort": "Boolean",
    "multiSelect": "Boolean",
    "nameable": "Boolean",
    "nameHolder": "Boolean",
    "normalGridConfig": "Object",
    "normalViewConfig": "Object",
    "numFromEdge": "Number",
    "overCls": "String",
    "overflowX": "String",
    "overflowY": "String",
    "overlapHeader": "Boolean",
    "padding": "Number/String",
    "placeholder": "Ext.Component/Object",
    "placeholderCollapseHideMode": "Number",
    "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
    "preciseHeight": "Boolean",
    "preventHeader": "Boolean",
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
    "reserveScrollbar": "Boolean",
    "resetFocusPosition": "Boolean",
    "resizable": "Boolean/Object",
    "resizeHandles": "String",
    "root": "Ext.data.Model/Ext.data.TreeModel/Object",
    "rootVisible": "Boolean",
    "rowLines": "Boolean",
    "rowViewModel": "String/Object",
    "saveDelay": "Number",
    "scroll": "String/Boolean",
    "scrollable": "Boolean/String/Object",
    "sealedColumns": "Boolean",
    "selection": "Ext.data.Model",
    "selModel": "Ext.selection.Model/Object/String",
    "selType": "String",
    "session": "Boolean/Object/Ext.data.Session",
    "shadow": "String/Boolean",
    "shadowOffset": "Number",
    "shareableName": "Boolean",
    "shim": "Boolean",
    "shrinkWrap": "Boolean/Number",
    "shrinkWrapDock": "Boolean/Number",
    "simpleDrag": "Boolean",
    "simpleSelect": "Boolean",
    "singleExpand": "Boolean",
    "sortableColumns": "Boolean",
    "split": "Boolean/Object",
    "stateEvents": "String[]",
    "stateful": "Boolean/Object",
    "stateId": "String",
    "store": "Ext.data.TreeStore",
    "style": "String/Object",
    "subGridXType": "String",
    "suspendLayout": "Boolean",
    "syncRowHeight": "Boolean",
    "tabGuard": "Boolean",
    "tabIndex": "Number",
    "tbar": "Object/Object[]",
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
    "trailingBufferZone": "Number",
    "twoWayBindable": "String/String[]/Object",
    "ui": "String",
    "uiCls": "String[]",
    "unlockText": "String",
    "useArrows": "Boolean",
    "userCls": "String/String[]",
    "variableRowHeight": "Boolean",
    "view": "Ext.view.Table",
    "viewConfig": "Object",
    "viewModel": "String/Object/Ext.app.ViewModel",
    "viewType": "String",
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
    'allowDeselect',
    'allowFocusingDisabledChildren',
    'alwaysOnTop',
    'anchor',
    'anchorSize',
    'animate',
    'animateShadow',
    'animCollapse',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'autoDestroy',
    'autoEl',
    'autoLoad',
    'autoRender',
    'autoScroll',
    'autoShow',
    'baseCls',
    'bbar',
    'bind',
    'bodyBorder',
    'bodyCls',
    'bodyPadding',
    'bodyStyle',
    'border',
    'bubbleEvents',
    'bufferedRenderer',
    'buttonAlign',
    'buttons',
    'checkPropagation',
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
    'columnLines',
    'columns',
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
    'deferRowRender',
    'detachOnRemove',
    'disabled',
    'disabledCls',
    'disableSelection',
    'displayField',
    'dock',
    'dockedItems',
    'draggable',
    'emptyText',
    'enableColumnHide',
    'enableColumnMove',
    'enableColumnResize',
    'enableLocking',
    'expandToolText',
    'fbar',
    'features',
    'fixed',
    'flex',
    'floatable',
    'floating',
    'focusableContainer',
    'focusCls',
    'focused',
    'focusOnToFront',
    'folderSort',
    'forceFit',
    'formBind',
    'frame',
    'frameHeader',
    'glyph',
    'header',
    'headerBorders',
    'headerOverCls',
    'headerPosition',
    'height',
    'hidden',
    'hideCollapseTool',
    'hideHeaders',
    'hideMode',
    'html',
    'icon',
    'iconAlign',
    'iconCls',
    'id',
    'inactiveChildTabIndex',
    'itemId',
    'items',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'layout',
    'lbar',
    'leadingBufferZone',
    'lines',
    'liquidLayout',
    'listeners',
    'liveDrag',
    'loader',
    'lockedGridConfig',
    'lockedViewConfig',
    'lockText',
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
    'multiColumnSort',
    'multiSelect',
    'nameable',
    'nameHolder',
    'normalGridConfig',
    'normalViewConfig',
    'numFromEdge',
    'overCls',
    'overflowX',
    'overflowY',
    'overlapHeader',
    'padding',
    'placeholder',
    'placeholderCollapseHideMode',
    'plugins',
    'preciseHeight',
    'preventHeader',
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
    'reserveScrollbar',
    'resetFocusPosition',
    'resizable',
    'resizeHandles',
    'root',
    'rootVisible',
    'rowLines',
    'rowViewModel',
    'saveDelay',
    'scroll',
    'scrollable',
    'sealedColumns',
    'selection',
    'selModel',
    'selType',
    'session',
    'shadow',
    'shadowOffset',
    'shareableName',
    'shim',
    'shrinkWrap',
    'shrinkWrapDock',
    'simpleDrag',
    'simpleSelect',
    'singleExpand',
    'sortableColumns',
    'split',
    'stateEvents',
    'stateful',
    'stateId',
    'store',
    'style',
    'subGridXType',
    'suspendLayout',
    'syncRowHeight',
    'tabGuard',
    'tabIndex',
    'tbar',
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
    'trailingBufferZone',
    'twoWayBindable',
    'ui',
    'uiCls',
    'unlockText',
    'useArrows',
    'userCls',
    'variableRowHeight',
    'view',
    'viewConfig',
    'viewModel',
    'viewType',
    'weight',
    'width',
    'xtype',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
  public static EVENTS: any[] = [
		{name:'activate',parameters:'treepanel'},
		{name:'add',parameters:'treepanel,component,index'},
		{name:'added',parameters:'treepanel,container,pos'},
		{name:'afteritemcollapse',parameters:'node,index,item'},
		{name:'afteritemexpand',parameters:'node,index,item'},
		{name:'afterlayout',parameters:'treepanel,layout'},
		{name:'afterlayoutanimation',parameters:'treepanel'},
		{name:'afterrender',parameters:'treepanel'},
		{name:'beforeactivate',parameters:'treepanel'},
		{name:'beforeadd',parameters:'treepanel,component,index'},
		{name:'beforecellclick',parameters:'treepanel,td,cellIndex,record,tr,rowIndex,e'},
		{name:'beforecellcontextmenu',parameters:'treepanel,td,cellIndex,record,tr,rowIndex,e'},
		{name:'beforecelldblclick',parameters:'treepanel,td,cellIndex,record,tr,rowIndex,e'},
		{name:'beforecellkeydown',parameters:'treepanel,td,cellIndex,record,tr,rowIndex,e'},
		{name:'beforecellmousedown',parameters:'treepanel,td,cellIndex,record,tr,rowIndex,e'},
		{name:'beforecellmouseup',parameters:'treepanel,td,cellIndex,record,tr,rowIndex,e'},
		{name:'beforecheckchange',parameters:'node,checked,e'},
		{name:'beforeclose',parameters:'panel'},
		{name:'beforecollapse',parameters:'p,direction,animate'},
		{name:'beforecontainerclick',parameters:'treepanel,e'},
		{name:'beforecontainercontextmenu',parameters:'treepanel,e'},
		{name:'beforecontainerdblclick',parameters:'treepanel,e'},
		{name:'beforecontainerkeydown',parameters:'treepanel,e'},
		{name:'beforecontainerkeypress',parameters:'treepanel,e'},
		{name:'beforecontainerkeyup',parameters:'treepanel,e'},
		{name:'beforecontainermousedown',parameters:'treepanel,e'},
		{name:'beforecontainermouseout',parameters:'treepanel,e'},
		{name:'beforecontainermouseover',parameters:'treepanel,e'},
		{name:'beforecontainermouseup',parameters:'treepanel,e'},
		{name:'beforedeactivate',parameters:'treepanel'},
		{name:'beforedeselect',parameters:'treepanel,record,index'},
		{name:'beforedestroy',parameters:'treepanel'},
		{name:'beforeexpand',parameters:'p,animate'},
		{name:'beforehide',parameters:'treepanel'},
		{name:'beforeitemappend',parameters:'treepanel,node'},
		{name:'beforeitemclick',parameters:'treepanel,record,item,index,e'},
		{name:'beforeitemcollapse',parameters:'treepanel'},
		{name:'beforeitemcontextmenu',parameters:'treepanel,record,item,index,e'},
		{name:'beforeitemdblclick',parameters:'treepanel,record,item,index,e'},
		{name:'beforeitemexpand',parameters:'treepanel'},
		{name:'beforeiteminsert',parameters:'treepanel,node,refNode'},
		{name:'beforeitemkeydown',parameters:'treepanel,record,item,index,e'},
		{name:'beforeitemkeypress',parameters:'treepanel,record,item,index,e'},
		{name:'beforeitemkeyup',parameters:'treepanel,record,item,index,e'},
		{name:'beforeitemlongpress',parameters:'treepanel,record,item,index,e'},
		{name:'beforeitemmousedown',parameters:'treepanel,record,item,index,e'},
		{name:'beforeitemmouseenter',parameters:'treepanel,record,item,index,e'},
		{name:'beforeitemmouseleave',parameters:'treepanel,record,item,index,e'},
		{name:'beforeitemmouseup',parameters:'treepanel,record,item,index,e'},
		{name:'beforeitemmove',parameters:'treepanel,oldParent,newParent,index'},
		{name:'beforeitemremove',parameters:'treepanel,node,isMove'},
		{name:'beforeload',parameters:'store,operation'},
		{name:'beforeremove',parameters:'treepanel,component'},
		{name:'beforerender',parameters:'treepanel'},
		{name:'beforerowbodyclick',parameters:'view,rowBodyEl,e'},
		{name:'beforerowbodycontextmenu',parameters:'view,rowBodyEl,e'},
		{name:'beforerowbodydblclick',parameters:'view,rowBodyEl,e'},
		{name:'beforerowbodykeydown',parameters:'view,rowBodyEl,e'},
		{name:'beforerowbodykeypress',parameters:'view,rowBodyEl,e'},
		{name:'beforerowbodykeyup',parameters:'view,rowBodyEl,e'},
		{name:'beforerowbodylongpress',parameters:'view,rowBodyEl,e'},
		{name:'beforerowbodymousedown',parameters:'view,rowBodyEl,e'},
		{name:'beforerowbodymouseup',parameters:'view,rowBodyEl,e'},
		{name:'beforerowexit',parameters:'treepanel,keyEvent,prevRow,nextRow,forward'},
		{name:'beforeselect',parameters:'treepanel,record,index'},
		{name:'beforeselectionextend',parameters:'grid,An,extension'},
		{name:'beforeshow',parameters:'treepanel'},
		{name:'beforestaterestore',parameters:'treepanel,state'},
		{name:'beforestatesave',parameters:'treepanel,state'},
		{name:'blur',parameters:'treepanel,event'},
		{name:'boxready',parameters:'treepanel,width,height'},
		{name:'cellclick',parameters:'treepanel,td,cellIndex,record,tr,rowIndex,e'},
		{name:'cellcontextmenu',parameters:'treepanel,td,cellIndex,record,tr,rowIndex,e'},
		{name:'celldblclick',parameters:'treepanel,td,cellIndex,record,tr,rowIndex,e'},
		{name:'cellkeydown',parameters:'treepanel,td,cellIndex,record,tr,rowIndex,e'},
		{name:'cellmousedown',parameters:'treepanel,td,cellIndex,record,tr,rowIndex,e'},
		{name:'cellmouseup',parameters:'treepanel,td,cellIndex,record,tr,rowIndex,e'},
		{name:'checkchange',parameters:'node,checked,e'},
		{name:'childmove',parameters:'treepanel,component,prevIndex,newIndex'},
		{name:'close',parameters:'panel'},
		{name:'collapse',parameters:'p'},
		{name:'columnhide',parameters:'ct,column'},
		{name:'columnmove',parameters:'ct,column,fromIdx,toIdx'},
		{name:'columnresize',parameters:'ct,column,width'},
		{name:'columnschanged',parameters:'ct'},
		{name:'columnshow',parameters:'ct,column'},
		{name:'containerclick',parameters:'treepanel,e'},
		{name:'containercontextmenu',parameters:'treepanel,e'},
		{name:'containerdblclick',parameters:'treepanel,e'},
		{name:'containerkeydown',parameters:'treepanel,e'},
		{name:'containerkeypress',parameters:'treepanel,e'},
		{name:'containerkeyup',parameters:'treepanel,e'},
		{name:'containermousedown',parameters:'treepanel,e'},
		{name:'containermouseout',parameters:'treepanel,e'},
		{name:'containermouseover',parameters:'treepanel,e'},
		{name:'containermouseup',parameters:'treepanel,e'},
		{name:'deactivate',parameters:'treepanel'},
		{name:'deselect',parameters:'treepanel,record,index'},
		{name:'destroy',parameters:'treepanel'},
		{name:'disable',parameters:'treepanel'},
		{name:'dockedadd',parameters:'treepanel,component,index'},
		{name:'dockedremove',parameters:'treepanel,component'},
		{name:'enable',parameters:'treepanel'},
		{name:'expand',parameters:'p'},
		{name:'filteractivate',parameters:'treepanel,column'},
		{name:'filterchange',parameters:'store,filters'},
		{name:'filterdeactivate',parameters:'treepanel,column'},
		{name:'float',parameters:''},
		{name:'focus',parameters:'treepanel,event'},
		{name:'focusenter',parameters:'treepanel,event'},
		{name:'focusleave',parameters:'treepanel,event'},
		{name:'glyphchange',parameters:'treepanel,newGlyph,oldGlyph'},
		{name:'groupchange',parameters:'store,grouper'},
		{name:'headerclick',parameters:'ct,column,e,t'},
		{name:'headercontextmenu',parameters:'ct,column,e,t'},
		{name:'headermenucreate',parameters:'grid,menu,headerCt'},
		{name:'headertriggerclick',parameters:'ct,column,e,t'},
		{name:'hide',parameters:'treepanel'},
		{name:'iconalignchange',parameters:'treepanel,newIconAlign,oldIconAlign'},
		{name:'iconchange',parameters:'treepanel,newIcon,oldIcon'},
		{name:'iconclschange',parameters:'treepanel,newIconCls,oldIconCls'},
		{name:'itemappend',parameters:'treepanel,node,index'},
		{name:'itemclick',parameters:'treepanel,record,item,index,e'},
		{name:'itemcollapse',parameters:'treepanel'},
		{name:'itemcontextmenu',parameters:'treepanel,record,item,index,e'},
		{name:'itemdblclick',parameters:'treepanel,record,item,index,e'},
		{name:'itemexpand',parameters:'treepanel'},
		{name:'iteminsert',parameters:'treepanel,node,refNode'},
		{name:'itemkeydown',parameters:'treepanel,record,item,index,e'},
		{name:'itemkeypress',parameters:'treepanel,record,item,index,e'},
		{name:'itemkeyup',parameters:'treepanel,record,item,index,e'},
		{name:'itemlongpress',parameters:'treepanel,record,item,index,e'},
		{name:'itemmousedown',parameters:'treepanel,record,item,index,e'},
		{name:'itemmouseenter',parameters:'treepanel,record,item,index,e'},
		{name:'itemmouseleave',parameters:'treepanel,record,item,index,e'},
		{name:'itemmouseup',parameters:'treepanel,record,item,index,e'},
		{name:'itemmove',parameters:'treepanel,oldParent,newParent,index'},
		{name:'itemremove',parameters:'treepanel,node,isMove,context'},
		{name:'load',parameters:'treepanel,records,successful,operation,node'},
		{name:'lockcolumn',parameters:'treepanel,column'},
		{name:'move',parameters:'treepanel,x,y'},
		{name:'processcolumns',parameters:'lockedColumns,normalColumns'},
		{name:'remove',parameters:'treepanel,component'},
		{name:'removed',parameters:'treepanel,ownerCt'},
		{name:'render',parameters:'treepanel'},
		{name:'resize',parameters:'treepanel,width,height,oldWidth,oldHeight'},
		{name:'rowbodyclick',parameters:'view,rowBodyEl,e'},
		{name:'rowbodycontextmenu',parameters:'view,rowBodyEl,e'},
		{name:'rowbodydblclick',parameters:'view,rowBodyEl,e'},
		{name:'rowbodykeydown',parameters:'view,rowBodyEl,e'},
		{name:'rowbodykeypress',parameters:'view,rowBodyEl,e'},
		{name:'rowbodykeyup',parameters:'view,rowBodyEl,e'},
		{name:'rowbodylongpress',parameters:'view,rowBodyEl,e'},
		{name:'rowbodymousedown',parameters:'view,rowBodyEl,e'},
		{name:'rowbodymouseup',parameters:'view,rowBodyEl,e'},
		{name:'rowclick',parameters:'treepanel,record,element,rowIndex,e'},
		{name:'rowcontextmenu',parameters:'treepanel,record,tr,rowIndex,e'},
		{name:'rowdblclick',parameters:'treepanel,record,element,rowIndex,e'},
		{name:'rowkeydown',parameters:'treepanel,record,element,rowIndex,e'},
		{name:'rowmousedown',parameters:'treepanel,record,tr,rowIndex,e'},
		{name:'rowmouseup',parameters:'treepanel,record,element,rowIndex,e'},
		{name:'select',parameters:'treepanel,record,index'},
		{name:'selectionchange',parameters:'treepanel,selected'},
		{name:'selectionextenderdrag',parameters:'grid,An,extension'},
		{name:'show',parameters:'treepanel'},
		{name:'sortchange',parameters:'ct,column,direction'},
		{name:'staterestore',parameters:'treepanel,state'},
		{name:'statesave',parameters:'treepanel,state'},
		{name:'titlealignchange',parameters:'treepanel,newTitleAlign,oldTitleAlign'},
		{name:'titlechange',parameters:'treepanel,newTitle,oldTitle'},
		{name:'titlepositionchange',parameters:'treepanel,newTitlePosition,oldTitlePosition'},
		{name:'titlerotationchange',parameters:'treepanel,newTitleRotation,oldTitleRotation'},
		{name:'unfloat',parameters:''},
		{name:'unlockcolumn',parameters:'treepanel,column'},
		{name:'viewready',parameters:'treepanel'},
		{name:'ready',parameters:''}
];
  public static EVENTNAMES: string[] = [
		'activate',
		'add',
		'added',
		'afteritemcollapse',
		'afteritemexpand',
		'afterlayout',
		'afterlayoutanimation',
		'afterrender',
		'beforeactivate',
		'beforeadd',
		'beforecellclick',
		'beforecellcontextmenu',
		'beforecelldblclick',
		'beforecellkeydown',
		'beforecellmousedown',
		'beforecellmouseup',
		'beforecheckchange',
		'beforeclose',
		'beforecollapse',
		'beforecontainerclick',
		'beforecontainercontextmenu',
		'beforecontainerdblclick',
		'beforecontainerkeydown',
		'beforecontainerkeypress',
		'beforecontainerkeyup',
		'beforecontainermousedown',
		'beforecontainermouseout',
		'beforecontainermouseover',
		'beforecontainermouseup',
		'beforedeactivate',
		'beforedeselect',
		'beforedestroy',
		'beforeexpand',
		'beforehide',
		'beforeitemappend',
		'beforeitemclick',
		'beforeitemcollapse',
		'beforeitemcontextmenu',
		'beforeitemdblclick',
		'beforeitemexpand',
		'beforeiteminsert',
		'beforeitemkeydown',
		'beforeitemkeypress',
		'beforeitemkeyup',
		'beforeitemlongpress',
		'beforeitemmousedown',
		'beforeitemmouseenter',
		'beforeitemmouseleave',
		'beforeitemmouseup',
		'beforeitemmove',
		'beforeitemremove',
		'beforeload',
		'beforeremove',
		'beforerender',
		'beforerowbodyclick',
		'beforerowbodycontextmenu',
		'beforerowbodydblclick',
		'beforerowbodykeydown',
		'beforerowbodykeypress',
		'beforerowbodykeyup',
		'beforerowbodylongpress',
		'beforerowbodymousedown',
		'beforerowbodymouseup',
		'beforerowexit',
		'beforeselect',
		'beforeselectionextend',
		'beforeshow',
		'beforestaterestore',
		'beforestatesave',
		'blur',
		'boxready',
		'cellclick',
		'cellcontextmenu',
		'celldblclick',
		'cellkeydown',
		'cellmousedown',
		'cellmouseup',
		'checkchange',
		'childmove',
		'close',
		'collapse',
		'columnhide',
		'columnmove',
		'columnresize',
		'columnschanged',
		'columnshow',
		'containerclick',
		'containercontextmenu',
		'containerdblclick',
		'containerkeydown',
		'containerkeypress',
		'containerkeyup',
		'containermousedown',
		'containermouseout',
		'containermouseover',
		'containermouseup',
		'deactivate',
		'deselect',
		'destroy',
		'disable',
		'dockedadd',
		'dockedremove',
		'enable',
		'expand',
		'filteractivate',
		'filterchange',
		'filterdeactivate',
		'float',
		'focus',
		'focusenter',
		'focusleave',
		'glyphchange',
		'groupchange',
		'headerclick',
		'headercontextmenu',
		'headermenucreate',
		'headertriggerclick',
		'hide',
		'iconalignchange',
		'iconchange',
		'iconclschange',
		'itemappend',
		'itemclick',
		'itemcollapse',
		'itemcontextmenu',
		'itemdblclick',
		'itemexpand',
		'iteminsert',
		'itemkeydown',
		'itemkeypress',
		'itemkeyup',
		'itemlongpress',
		'itemmousedown',
		'itemmouseenter',
		'itemmouseleave',
		'itemmouseup',
		'itemmove',
		'itemremove',
		'load',
		'lockcolumn',
		'move',
		'processcolumns',
		'remove',
		'removed',
		'render',
		'resize',
		'rowbodyclick',
		'rowbodycontextmenu',
		'rowbodydblclick',
		'rowbodykeydown',
		'rowbodykeypress',
		'rowbodykeyup',
		'rowbodylongpress',
		'rowbodymousedown',
		'rowbodymouseup',
		'rowclick',
		'rowcontextmenu',
		'rowdblclick',
		'rowkeydown',
		'rowmousedown',
		'rowmouseup',
		'select',
		'selectionchange',
		'selectionextenderdrag',
		'show',
		'sortchange',
		'staterestore',
		'statesave',
		'titlealignchange',
		'titlechange',
		'titlepositionchange',
		'titlerotationchange',
		'unfloat',
		'unlockcolumn',
		'viewready',
		'ready'
];
}
@Component({
  selector: 'treepanel', 
  inputs: treepanelMetaData.PROPERTIES,
  outputs: treepanelMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtTreepanelComponent)}],
  template: '<ng-template #dynamic></ng-template>'
})
export class ExtTreepanelComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(eRef:ElementRef) {super(eRef,treepanelMetaData)}
  public ngOnInit() {this.baseOnInit(treepanelMetaData)}
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
  public ngAfterContentInit() {
    this.baseAfterContentInit()
    this['ready'].emit(this)
    }
}