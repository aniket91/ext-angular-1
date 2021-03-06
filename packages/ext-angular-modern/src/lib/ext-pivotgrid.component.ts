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
export class pivotgridMetaData {
  public static XTYPE: string = 'pivotgrid';
  public static PROPERTIESOBJECT: any = {
    "activeChildTabIndex": "Number",
    "activeItem": "Ext.Component/Object/String/Number",
    "allowFocusingDisabledChildren": "Boolean",
    "alwaysOnTop": "Boolean/Number",
    "ariaAttributes": "Object",
    "ariaDescribedBy": "String",
    "ariaLabel": "String",
    "ariaLabelledBy": "String",
    "associatedData": "Boolean/Object",
    "autoDestroy": "Boolean",
    "autoSize": "Boolean",
    "axisLock": "Boolean",
    "bind": "Object/String",
    "border": "Boolean",
    "bottom": "Number/String",
    "bufferSize": "Number",
    "cardSwitchAnimation": "String/Object/Boolean",
    "centered": "Boolean",
    "cls": "String/String[]",
    "clsGrandTotal": "String",
    "clsGroupTotal": "String",
    "columnLines": "Boolean",
    "columnMenu": "Object",
    "columnResize": "Boolean",
    "columns": "Ext.grid.column.Column[]",
    "columnsMenuItem": "Ext.grid.menu.Columns",
    "constrainAlign": "String/Ext.util.Region/Ext.dom.Element",
    "contentEl": "Ext.dom.Element/HTMLElement/String",
    "control": "Object",
    "controller": "String/Object/Ext.app.ViewController",
    "data": "Object",
    "defaultFocus": "String",
    "defaultListenerScope": "Boolean",
    "defaults": "Object",
    "defaultType": "Ext.enums.Widget",
    "deferEmptyText": "Boolean",
    "deselectOnContainerClick": "Boolean",
    "disabled": "Boolean",
    "disableSelection": "Boolean",
    "disclosureProperty": "String",
    "displayed": "Boolean",
    "docked": "String",
    "draggable": "Boolean/Object/Ext.drag.Source",
    "emptyItemText": "String",
    "emptyState": "Boolean",
    "emptyText": "String/Boolean",
    "emptyTextDefaults": "Object/Ext.Component",
    "emptyTextProperty": "String",
    "enableColumnSort": "Boolean",
    "enableLoadMask": "Boolean",
    "enableTextSelection": "Boolean",
    "enterAnimation": "String/Mixed",
    "eventHandlers": "Object",
    "exitAnimation": "String/Mixed",
    "flex": "Number/String/Object",
    "floated": "Boolean",
    "focusableContainer": "Boolean",
    "focusCls": "String",
    "fullscreen": "Boolean",
    "grouped": "Boolean",
    "groupFooter": "Object/Ext.dataview.ItemHeader",
    "groupHeader": "Object/Ext.dataview.ItemHeader",
    "height": "Number/String",
    "hidden": "Boolean",
    "hideAnimation": "String/Mixed",
    "hideHeaders": "Boolean",
    "hideMode": "'clip'/'display'/'offsets'/'opacity'/'visibility'",
    "hideOnMaskTap": "Boolean",
    "hideScrollbar": "Boolean",
    "horizontalOverflow": "any",
    "html": "String/Ext.dom.Element/HTMLElement",
    "id": "String",
    "inactiveChildTabIndex": "Number",
    "indexBar": "Boolean/Object/Ext.dataview.IndexBar",
    "infinite": "Boolean",
    "inline": "Boolean/Object",
    "innerCls": "String",
    "innerCtHeight": "any",
    "innerWidth": "any",
    "instanceCls": "String/String[]",
    "itemButtonMode": "boolean",
    "itemCls": "String",
    "itemConfig": "Object/Ext.grid.Row",
    "itemContentCls": "String",
    "itemDataMap": "Object",
    "itemId": "String",
    "itemInnerCls": "String",
    "itemRipple": "Boolean/Object",
    "items": "Array/Object",
    "itemsFocusable": "any",
    "itemTpl": "String/String[]/Ext.XTemplate",
    "keyMap": "Object",
    "keyMapEnabled": "Boolean",
    "keyMapTarget": "String",
    "layout": "Object/String",
    "left": "Number/String",
    "leftAxisCellConfig": "Object",
    "listeners": "Object",
    "loadingHeight": "Number",
    "loadingText": "String/Boolean",
    "maintainChildNodes": "Boolean",
    "manageBorders": "Boolean",
    "margin": "Number/String",
    "markDirty": "Boolean",
    "masked": "Boolean/String/Object/Ext.Mask/Ext.LoadMask",
    "matrix": "Ext.pivot.matrix.Base",
    "maxHeight": "Number/String",
    "maxItemCache": "Number",
    "maxWidth": "Number/String",
    "minHeight": "Number/String",
    "minimumBufferDistance": "Number",
    "minWidth": "Number/String",
    "modal": "Boolean",
    "modelValidation": "Boolean",
    "multiColumnSort": "Boolean",
    "name": "String",
    "nameable": "Boolean",
    "nameHolder": "Boolean",
    "onItemDisclosure": "Boolean/Function/String/Object",
    "padding": "Number/String",
    "pinFooters": "Boolean",
    "pinHeaders": "Boolean",
    "pinnedFooter": "Object",
    "pinnedFooterHeight": "any",
    "pinnedHeader": "Object",
    "pinnedHeaderHeight": "any",
    "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
    "pressedDelay": "Number",
    "preventSelectionOnDisclose": "Boolean",
    "preventSelectionOnTool": "Boolean",
    "publishes": "String/String[]/Object",
    "record": "any",
    "reference": "String",
    "referenceHolder": "Boolean",
    "relative": "Boolean",
    "renderTo": "Ext.dom.Element",
    "reserveScrollbar": "Boolean",
    "resetFocusPosition": "Boolean",
    "right": "Number/String",
    "ripple": "Boolean/Object/String",
    "rowLines": "Boolean",
    "rowNumbers": "Boolean/Object",
    "scrollable": "Boolean/String/Object",
    "scrollDock": "'start'/'emd'",
    "scrollToTopOnRefresh": "Boolean",
    "selectable": "Ext.grid.selection.Model",
    "selection": "Ext.data.Model",
    "selfAlign": "String",
    "session": "Boolean/Object/Ext.data.Session",
    "shadow": "Boolean",
    "shareableName": "Boolean",
    "shim": "Boolean",
    "showAnimation": "String/Mixed",
    "sortable": "Boolean",
    "startColGroupsCollapsed": "Boolean",
    "startRowGroupsCollapsed": "Boolean",
    "stateful": "Boolean/Object/String[]",
    "statefulDefaults": "Object/String[]",
    "stateId": "String",
    "store": "Ext.data.Store/Object",
    "striped": "Boolean",
    "style": "String/Object",
    "tabIndex": "Number",
    "title": "String",
    "titleBar": "Object",
    "toFrontOnShow": "Boolean",
    "tooltip": "String/Object",
    "top": "Number/String",
    "topAxisCellConfig": "Object",
    "topRenderedIndex": "any",
    "touchAction": "Object",
    "tpl": "String/String[]/Ext.Template/Ext.XTemplate[]",
    "tplWriteMode": "String",
    "translatable": "Object",
    "triggerCtEvent": "'tap'/'singletap'",
    "triggerEvent": "'childtap'/'childsingletap'/'childdoubletap'/'childswipe'/'childtaphold'/'childlongpress'",
    "twoWayBindable": "String/String[]/Object",
    "ui": "String/String[]",
    "userCls": "String/String[]",
    "userSelectable": "Boolean/String/Object",
    "useSimpleItems": "Boolean",
    "variableHeights": "Boolean",
    "verticalOverflow": "Boolean",
    "viewModel": "String/Object/Ext.app.ViewModel",
    "visibleHeight": "Number",
    "visibleLeft": "any",
    "visibleTop": "Number",
    "visibleWidth": "any",
    "weight": "Number",
    "weighted": "Boolean",
    "width": "Number/String",
    "x": "Number",
    "xtype": "String",
    "y": "Number",
    "zIndex": "Number",
    "platformConfig": "Object",
    "responsiveConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",
};
  public static PROPERTIES: string[] = [
    'activeChildTabIndex',
    'activeItem',
    'allowFocusingDisabledChildren',
    'alwaysOnTop',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'associatedData',
    'autoDestroy',
    'autoSize',
    'axisLock',
    'bind',
    'border',
    'bottom',
    'bufferSize',
    'cardSwitchAnimation',
    'centered',
    'cls',
    'clsGrandTotal',
    'clsGroupTotal',
    'columnLines',
    'columnMenu',
    'columnResize',
    'columns',
    'columnsMenuItem',
    'constrainAlign',
    'contentEl',
    'control',
    'controller',
    'data',
    'defaultFocus',
    'defaultListenerScope',
    'defaults',
    'defaultType',
    'deferEmptyText',
    'deselectOnContainerClick',
    'disabled',
    'disableSelection',
    'disclosureProperty',
    'displayed',
    'docked',
    'draggable',
    'emptyItemText',
    'emptyState',
    'emptyText',
    'emptyTextDefaults',
    'emptyTextProperty',
    'enableColumnSort',
    'enableLoadMask',
    'enableTextSelection',
    'enterAnimation',
    'eventHandlers',
    'exitAnimation',
    'flex',
    'floated',
    'focusableContainer',
    'focusCls',
    'fullscreen',
    'grouped',
    'groupFooter',
    'groupHeader',
    'height',
    'hidden',
    'hideAnimation',
    'hideHeaders',
    'hideMode',
    'hideOnMaskTap',
    'hideScrollbar',
    'horizontalOverflow',
    'html',
    'id',
    'inactiveChildTabIndex',
    'indexBar',
    'infinite',
    'inline',
    'innerCls',
    'innerCtHeight',
    'innerWidth',
    'instanceCls',
    'itemButtonMode',
    'itemCls',
    'itemConfig',
    'itemContentCls',
    'itemDataMap',
    'itemId',
    'itemInnerCls',
    'itemRipple',
    'items',
    'itemsFocusable',
    'itemTpl',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'layout',
    'left',
    'leftAxisCellConfig',
    'listeners',
    'loadingHeight',
    'loadingText',
    'maintainChildNodes',
    'manageBorders',
    'margin',
    'markDirty',
    'masked',
    'matrix',
    'maxHeight',
    'maxItemCache',
    'maxWidth',
    'minHeight',
    'minimumBufferDistance',
    'minWidth',
    'modal',
    'modelValidation',
    'multiColumnSort',
    'name',
    'nameable',
    'nameHolder',
    'onItemDisclosure',
    'padding',
    'pinFooters',
    'pinHeaders',
    'pinnedFooter',
    'pinnedFooterHeight',
    'pinnedHeader',
    'pinnedHeaderHeight',
    'plugins',
    'pressedDelay',
    'preventSelectionOnDisclose',
    'preventSelectionOnTool',
    'publishes',
    'record',
    'reference',
    'referenceHolder',
    'relative',
    'renderTo',
    'reserveScrollbar',
    'resetFocusPosition',
    'right',
    'ripple',
    'rowLines',
    'rowNumbers',
    'scrollable',
    'scrollDock',
    'scrollToTopOnRefresh',
    'selectable',
    'selection',
    'selfAlign',
    'session',
    'shadow',
    'shareableName',
    'shim',
    'showAnimation',
    'sortable',
    'startColGroupsCollapsed',
    'startRowGroupsCollapsed',
    'stateful',
    'statefulDefaults',
    'stateId',
    'store',
    'striped',
    'style',
    'tabIndex',
    'title',
    'titleBar',
    'toFrontOnShow',
    'tooltip',
    'top',
    'topAxisCellConfig',
    'topRenderedIndex',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'translatable',
    'triggerCtEvent',
    'triggerEvent',
    'twoWayBindable',
    'ui',
    'userCls',
    'userSelectable',
    'useSimpleItems',
    'variableHeights',
    'verticalOverflow',
    'viewModel',
    'visibleHeight',
    'visibleLeft',
    'visibleTop',
    'visibleWidth',
    'weight',
    'weighted',
    'width',
    'x',
    'xtype',
    'y',
    'zIndex',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
  public static EVENTS: any[] = [
		{name:'activate',parameters:'newActiveItem,pivotgrid,oldActiveItem'},
		{name:'activeItemchange',parameters:'sender,value,oldValue'},
		{name:'add',parameters:''},
		{name:'added',parameters:'sender,container,index'},
		{name:'beforeactiveItemchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehide',parameters:'sender'},
		{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeselectionextend',parameters:'grid,An,extension'},
		{name:'beforeshow',parameters:'sender'},
		{name:'beforestorechange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforetofront',parameters:'pivotgrid'},
		{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'blur',parameters:'pivotgrid,event'},
		{name:'bottomchange',parameters:'sender,value,oldValue'},
		{name:'cellselection',parameters:'grid,selection'},
		{name:'centeredchange',parameters:'sender,value,oldValue'},
		{name:'childdoubletap',parameters:'pivotgrid,location'},
		{name:'childlongpress',parameters:'pivotgrid,location'},
		{name:'childmouseenter',parameters:'pivotgrid,location'},
		{name:'childmouseleave',parameters:'pivotgrid,location'},
		{name:'childsingletap',parameters:'pivotgrid,location'},
		{name:'childtap',parameters:'pivotgrid,location'},
		{name:'childtaphold',parameters:'pivotgrid,location'},
		{name:'childtouchcancel',parameters:'pivotgrid,location'},
		{name:'childtouchend',parameters:'pivotgrid,location'},
		{name:'childtouchmove',parameters:'pivotgrid,location'},
		{name:'childtouchstart',parameters:'pivotgrid,location'},
		{name:'columnadd',parameters:'pivotgrid,column,index'},
		{name:'columnhide',parameters:'pivotgrid,column'},
		{name:'columnmenucreated',parameters:'grid,column,menu'},
		{name:'columnmove',parameters:'pivotgrid,column,fromIndex,toIndex'},
		{name:'columnremove',parameters:'pivotgrid,column'},
		{name:'columnresize',parameters:'pivotgrid,column,width'},
		{name:'columnselection',parameters:'grid,selection'},
		{name:'columnshow',parameters:'pivotgrid,column'},
		{name:'columnsort',parameters:'pivotgrid,column,direction'},
		{name:'deactivate',parameters:'oldActiveItem,pivotgrid,newActiveItem'},
		{name:'deselect',parameters:'pivotgrid,records'},
		{name:'destroy',parameters:''},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'disclose',parameters:'list,record,target,index,event'},
		{name:'dockedchange',parameters:'sender,value,oldValue'},
		{name:'erased',parameters:'sender'},
		{name:'floatingchange',parameters:'sender,positioned'},
		{name:'focus',parameters:'pivotgrid,event'},
		{name:'focusenter',parameters:'pivotgrid,event'},
		{name:'focusleave',parameters:'pivotgrid,event'},
		{name:'fullscreen',parameters:'sender'},
		{name:'heightchange',parameters:'sender,value,oldValue'},
		{name:'hiddenchange',parameters:'sender,value,oldValue'},
		{name:'hide',parameters:'sender'},
		{name:'initialize',parameters:'sender'},
		{name:'itemaction',parameters:'pivotgrid,index,record,action'},
		{name:'itemdoubletap',parameters:'pivotgrid,index,target,record,e'},
		{name:'itemlongpress',parameters:'pivotgrid,index,target,record,e'},
		{name:'itemmouseenter',parameters:'pivotgrid,index,target,record,e'},
		{name:'itemmouseleave',parameters:'pivotgrid,index,target,record,e'},
		{name:'itemsingletap',parameters:'pivotgrid,index,target,record,e'},
		{name:'itemswipe',parameters:'pivotgrid,index,target,record,e'},
		{name:'itemtap',parameters:'pivotgrid,index,target,record,e'},
		{name:'itemtaphold',parameters:'pivotgrid,index,target,record,e'},
		{name:'itemtouchcancel',parameters:'pivotgrid,index,target,record,e'},
		{name:'itemtouchend',parameters:'pivotgrid,index,target,record,e'},
		{name:'itemtouchmove',parameters:'pivotgrid,index,target,record,e'},
		{name:'itemtouchstart',parameters:'pivotgrid,index,target,record,e'},
		{name:'leftchange',parameters:'sender,value,oldValue'},
		{name:'maxHeightchange',parameters:'sender,value,oldValue'},
		{name:'maxWidthchange',parameters:'sender,value,oldValue'},
		{name:'minHeightchange',parameters:'sender,value,oldValue'},
		{name:'minWidthchange',parameters:'sender,value,oldValue'},
		{name:'move',parameters:''},
		{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
		{name:'navigate',parameters:'pivotgrid,to,from'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'sender,element'},
		{name:'pivotbeforereconfigure',parameters:'matrix,config'},
		{name:'pivotbeforerequest',parameters:'matrix,params'},
		{name:'pivotbuildtotals',parameters:'matrix,totals'},
		{name:'pivotcolumnsbuilt',parameters:'matrix,columns'},
		{name:'pivotdone',parameters:'matrix'},
		{name:'pivotgroupcelldoubletap',parameters:'params,e'},
		{name:'pivotgroupcelltap',parameters:'params,e'},
		{name:'pivotgroupcelltaphold',parameters:'params,e'},
		{name:'pivotgroupcollapse',parameters:'matrix,type,group'},
		{name:'pivotgroupdoubletap',parameters:'params,e'},
		{name:'pivotgroupexpand',parameters:'matrix,type,group'},
		{name:'pivotgrouptap',parameters:'params,e'},
		{name:'pivotgrouptaphold',parameters:'params,e'},
		{name:'pivotitemcelldoubletap',parameters:'params,e'},
		{name:'pivotitemcelltap',parameters:'params,e'},
		{name:'pivotitemcelltaphold',parameters:'params,e'},
		{name:'pivotitemdoubletap',parameters:'params,e'},
		{name:'pivotitemtap',parameters:'params,e'},
		{name:'pivotitemtaphold',parameters:'params,e'},
		{name:'pivotmodelbuilt',parameters:'matrix,model'},
		{name:'pivotprogress',parameters:'matrix,index,total'},
		{name:'pivotreconfigure',parameters:'matrix,config'},
		{name:'pivotrecordbuilt',parameters:'matrix,record'},
		{name:'pivotrequestexception',parameters:'matrix,response'},
		{name:'pivotstart',parameters:'matrix'},
		{name:'pivotstorebuilt',parameters:'matrix,store'},
		{name:'pivottotalcelldoubletap',parameters:'params,e'},
		{name:'pivottotalcelltap',parameters:'params,e'},
		{name:'pivottotalcelltaphold',parameters:'params,e'},
		{name:'pivottotaldoubletap',parameters:'params,e'},
		{name:'pivottotaltap',parameters:'params,e'},
		{name:'pivottotaltaphold',parameters:'params,e'},
		{name:'positionedchange',parameters:'sender,positioned'},
		{name:'refresh',parameters:'pivotgrid'},
		{name:'remove',parameters:''},
		{name:'removed',parameters:'sender,container,index'},
		{name:'renderedchange',parameters:'pivotgrid,item,rendered'},
		{name:'resize',parameters:'element,info'},
		{name:'rightchange',parameters:'sender,value,oldValue'},
		{name:'scrollablechange',parameters:'sender,value,oldValue'},
		{name:'select',parameters:'pivotgrid,selected'},
		{name:'selectionextenderdrag',parameters:'grid,An,extension'},
		{name:'show',parameters:'sender'},
		{name:'storechange',parameters:'sender,value,oldValue'},
		{name:'tofront',parameters:'pivotgrid'},
		{name:'topchange',parameters:'sender,value,oldValue'},
		{name:'updatedata',parameters:'sender,newData'},
		{name:'widthchange',parameters:'sender,value,oldValue'},
		{name:'ready',parameters:''}
];
  public static EVENTNAMES: string[] = [
		'activate',
		'activeItemchange',
		'add',
		'added',
		'beforeactiveItemchange',
		'beforebottomchange',
		'beforecenteredchange',
		'beforedisabledchange',
		'beforedockedchange',
		'beforeheightchange',
		'beforehiddenchange',
		'beforehide',
		'beforeleftchange',
		'beforemaxHeightchange',
		'beforemaxWidthchange',
		'beforeminHeightchange',
		'beforeminWidthchange',
		'beforeorientationchange',
		'beforerightchange',
		'beforescrollablechange',
		'beforeselectionextend',
		'beforeshow',
		'beforestorechange',
		'beforetofront',
		'beforetopchange',
		'beforewidthchange',
		'blur',
		'bottomchange',
		'cellselection',
		'centeredchange',
		'childdoubletap',
		'childlongpress',
		'childmouseenter',
		'childmouseleave',
		'childsingletap',
		'childtap',
		'childtaphold',
		'childtouchcancel',
		'childtouchend',
		'childtouchmove',
		'childtouchstart',
		'columnadd',
		'columnhide',
		'columnmenucreated',
		'columnmove',
		'columnremove',
		'columnresize',
		'columnselection',
		'columnshow',
		'columnsort',
		'deactivate',
		'deselect',
		'destroy',
		'disabledchange',
		'disclose',
		'dockedchange',
		'erased',
		'floatingchange',
		'focus',
		'focusenter',
		'focusleave',
		'fullscreen',
		'heightchange',
		'hiddenchange',
		'hide',
		'initialize',
		'itemaction',
		'itemdoubletap',
		'itemlongpress',
		'itemmouseenter',
		'itemmouseleave',
		'itemsingletap',
		'itemswipe',
		'itemtap',
		'itemtaphold',
		'itemtouchcancel',
		'itemtouchend',
		'itemtouchmove',
		'itemtouchstart',
		'leftchange',
		'maxHeightchange',
		'maxWidthchange',
		'minHeightchange',
		'minWidthchange',
		'move',
		'moved',
		'navigate',
		'orientationchange',
		'painted',
		'pivotbeforereconfigure',
		'pivotbeforerequest',
		'pivotbuildtotals',
		'pivotcolumnsbuilt',
		'pivotdone',
		'pivotgroupcelldoubletap',
		'pivotgroupcelltap',
		'pivotgroupcelltaphold',
		'pivotgroupcollapse',
		'pivotgroupdoubletap',
		'pivotgroupexpand',
		'pivotgrouptap',
		'pivotgrouptaphold',
		'pivotitemcelldoubletap',
		'pivotitemcelltap',
		'pivotitemcelltaphold',
		'pivotitemdoubletap',
		'pivotitemtap',
		'pivotitemtaphold',
		'pivotmodelbuilt',
		'pivotprogress',
		'pivotreconfigure',
		'pivotrecordbuilt',
		'pivotrequestexception',
		'pivotstart',
		'pivotstorebuilt',
		'pivottotalcelldoubletap',
		'pivottotalcelltap',
		'pivottotalcelltaphold',
		'pivottotaldoubletap',
		'pivottotaltap',
		'pivottotaltaphold',
		'positionedchange',
		'refresh',
		'remove',
		'removed',
		'renderedchange',
		'resize',
		'rightchange',
		'scrollablechange',
		'select',
		'selectionextenderdrag',
		'show',
		'storechange',
		'tofront',
		'topchange',
		'updatedata',
		'widthchange',
		'ready'
];
}
@Component({
  selector: 'pivotgrid', 
  inputs: pivotgridMetaData.PROPERTIES,
  outputs: pivotgridMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtPivotgridComponent)}],
  template: '<ng-template #dynamic></ng-template>'
})
export class ExtPivotgridComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(eRef:ElementRef) {super(eRef,pivotgridMetaData)}
  public ngOnInit() {this.baseOnInit(pivotgridMetaData)}
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
  public ngAfterContentInit() {
    this.baseAfterContentInit()
    this['ready'].emit(this)
    }
}