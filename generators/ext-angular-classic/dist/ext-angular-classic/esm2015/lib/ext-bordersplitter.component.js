/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
export class bordersplitterMetaData {
}
bordersplitterMetaData.XTYPE = 'bordersplitter';
bordersplitterMetaData.PROPERTIESOBJECT = {
    "activeCounter": "Number",
    "alignOnScroll": "Boolean",
    "alignTarget": "String",
    "alwaysOnTop": "Boolean/Number",
    "anchor": "String",
    "animateShadow": "Boolean",
    "ariaAttributes": "Object",
    "ariaDescribedBy": "String",
    "ariaLabel": "String",
    "ariaLabelledBy": "String",
    "autoEl": "String/Object",
    "autoRender": "Boolean/String/HTMLElement/Ext.dom.Element",
    "autoScroll": "Boolean",
    "autoShow": "Boolean",
    "baseCls": "String",
    "bind": "Object/String",
    "border": "Number/String/Boolean",
    "childEls": "Object/String[]/Object[]",
    "cls": "String/String[]",
    "collapsedCls": "String",
    "collapseOnDblClick": "Boolean",
    "collapseTarget": "String/Ext.panel.Panel",
    "collapsible": "Boolean",
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
    "defaultSplitMax": "Number",
    "defaultSplitMin": "Number",
    "disabled": "Boolean",
    "disabledCls": "String",
    "dock": "'top'/'bottom'/'left'/'right'",
    "draggable": "Boolean/Object",
    "fixed": "Boolean",
    "flex": "Number",
    "floating": "Boolean",
    "focusCls": "String",
    "focusOnToFront": "Boolean",
    "formBind": "Boolean",
    "frame": "Boolean",
    "height": "Number|String",
    "hidden": "Boolean",
    "hideMode": "String",
    "html": "String/Object",
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
    "minHeight": "Number",
    "minWidth": "Number",
    "modal": "Boolean",
    "modelValidation": "Boolean",
    "nameable": "Boolean",
    "overCls": "String",
    "overflowX": "String",
    "overflowY": "String",
    "padding": "Number/String",
    "performCollapse": "Boolean",
    "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
    "publishes": "String/String[]/Object",
    "reference": "String",
    "region": "'north'/'south'/'east'/'west'/'center'",
    "renderConfig": "Object",
    "renderData": "Object",
    "renderSelectors": "Object",
    "renderTo": "String/HTMLElement/Ext.dom.Element",
    "renderTpl": "Ext.XTemplate/String/String[]",
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
    "size": "Number",
    "stateEvents": "String[]",
    "stateful": "Boolean/Object",
    "stateId": "String",
    "style": "String/Object",
    "tabIndex": "Number",
    "toFrontOnShow": "Boolean",
    "touchAction": "Object",
    "tpl": "Ext.XTemplate/Ext.Template/String/String[]",
    "tplWriteMode": "String",
    "tracker": "Object",
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
bordersplitterMetaData.PROPERTIES = [
    'activeCounter',
    'alignOnScroll',
    'alignTarget',
    'alwaysOnTop',
    'anchor',
    'animateShadow',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'autoEl',
    'autoRender',
    'autoScroll',
    'autoShow',
    'baseCls',
    'bind',
    'border',
    'childEls',
    'cls',
    'collapsedCls',
    'collapseOnDblClick',
    'collapseTarget',
    'collapsible',
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
    'defaultSplitMax',
    'defaultSplitMin',
    'disabled',
    'disabledCls',
    'dock',
    'draggable',
    'fixed',
    'flex',
    'floating',
    'focusCls',
    'focusOnToFront',
    'formBind',
    'frame',
    'height',
    'hidden',
    'hideMode',
    'html',
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
    'minHeight',
    'minWidth',
    'modal',
    'modelValidation',
    'nameable',
    'overCls',
    'overflowX',
    'overflowY',
    'padding',
    'performCollapse',
    'plugins',
    'publishes',
    'reference',
    'region',
    'renderConfig',
    'renderData',
    'renderSelectors',
    'renderTo',
    'renderTpl',
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
    'size',
    'stateEvents',
    'stateful',
    'stateId',
    'style',
    'tabIndex',
    'toFrontOnShow',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'tracker',
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
bordersplitterMetaData.EVENTS = [
    { name: 'activate', parameters: 'bordersplitter' },
    { name: 'added', parameters: 'bordersplitter,container,pos' },
    { name: 'afterlayoutanimation', parameters: 'bordersplitter' },
    { name: 'afterrender', parameters: 'bordersplitter' },
    { name: 'beforeactivate', parameters: 'bordersplitter' },
    { name: 'beforedeactivate', parameters: 'bordersplitter' },
    { name: 'beforedestroy', parameters: 'bordersplitter' },
    { name: 'beforehide', parameters: 'bordersplitter' },
    { name: 'beforerender', parameters: 'bordersplitter' },
    { name: 'beforeshow', parameters: 'bordersplitter' },
    { name: 'beforestaterestore', parameters: 'bordersplitter,state' },
    { name: 'beforestatesave', parameters: 'bordersplitter,state' },
    { name: 'blur', parameters: 'bordersplitter,event' },
    { name: 'boxready', parameters: 'bordersplitter,width,height' },
    { name: 'deactivate', parameters: 'bordersplitter' },
    { name: 'destroy', parameters: 'bordersplitter' },
    { name: 'disable', parameters: 'bordersplitter' },
    { name: 'enable', parameters: 'bordersplitter' },
    { name: 'focus', parameters: 'bordersplitter,event' },
    { name: 'focusenter', parameters: 'bordersplitter,event' },
    { name: 'focusleave', parameters: 'bordersplitter,event' },
    { name: 'hide', parameters: 'bordersplitter' },
    { name: 'move', parameters: 'bordersplitter,x,y' },
    { name: 'removed', parameters: 'bordersplitter,ownerCt' },
    { name: 'render', parameters: 'bordersplitter' },
    { name: 'resize', parameters: 'bordersplitter,width,height,oldWidth,oldHeight' },
    { name: 'show', parameters: 'bordersplitter' },
    { name: 'staterestore', parameters: 'bordersplitter,state' },
    { name: 'statesave', parameters: 'bordersplitter,state' },
    { name: 'ready', parameters: '' }
];
bordersplitterMetaData.EVENTNAMES = [
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
    'blur',
    'boxready',
    'deactivate',
    'destroy',
    'disable',
    'enable',
    'focus',
    'focusenter',
    'focusleave',
    'hide',
    'move',
    'removed',
    'render',
    'resize',
    'show',
    'staterestore',
    'statesave',
    'ready'
];
if (false) {
    /** @type {?} */
    bordersplitterMetaData.XTYPE;
    /** @type {?} */
    bordersplitterMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    bordersplitterMetaData.PROPERTIES;
    /** @type {?} */
    bordersplitterMetaData.EVENTS;
    /** @type {?} */
    bordersplitterMetaData.EVENTNAMES;
}
export class ExtBordersplitterComponent extends base {
    /**
     * @param {?} eRef
     */
    constructor(eRef) { super(eRef, bordersplitterMetaData); }
    /**
     * @return {?}
     */
    ngOnInit() { this.baseOnInit(bordersplitterMetaData); }
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    }
}
ExtBordersplitterComponent.decorators = [
    { type: Component, args: [{
                selector: 'bordersplitter',
                inputs: bordersplitterMetaData.PROPERTIES,
                outputs: bordersplitterMetaData.EVENTNAMES,
                providers: [{ provide: base, useExisting: forwardRef(() => ExtBordersplitterComponent) }],
                template: '<ng-template #dynamic></ng-template>'
            }] }
];
/** @nocollapse */
ExtBordersplitterComponent.ctorParameters = () => [
    { type: ElementRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWJvcmRlcnNwbGl0dGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItY2xhc3NpYy8iLCJzb3VyY2VzIjpbImxpYi9leHQtYm9yZGVyc3BsaXR0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBS0wsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM5QixNQUFNLE9BQU8sc0JBQXNCOztBQUNuQiw0QkFBSyxHQUFXLGdCQUFnQixDQUFDO0FBQ2pDLHVDQUFnQixHQUFRO0lBQ3BDLGVBQWUsRUFBRSxRQUFRO0lBQ3pCLGVBQWUsRUFBRSxTQUFTO0lBQzFCLGFBQWEsRUFBRSxRQUFRO0lBQ3ZCLGFBQWEsRUFBRSxnQkFBZ0I7SUFDL0IsUUFBUSxFQUFFLFFBQVE7SUFDbEIsZUFBZSxFQUFFLFNBQVM7SUFDMUIsZ0JBQWdCLEVBQUUsUUFBUTtJQUMxQixpQkFBaUIsRUFBRSxRQUFRO0lBQzNCLFdBQVcsRUFBRSxRQUFRO0lBQ3JCLGdCQUFnQixFQUFFLFFBQVE7SUFDMUIsUUFBUSxFQUFFLGVBQWU7SUFDekIsWUFBWSxFQUFFLDRDQUE0QztJQUMxRCxZQUFZLEVBQUUsU0FBUztJQUN2QixVQUFVLEVBQUUsU0FBUztJQUNyQixTQUFTLEVBQUUsUUFBUTtJQUNuQixNQUFNLEVBQUUsZUFBZTtJQUN2QixRQUFRLEVBQUUsdUJBQXVCO0lBQ2pDLFVBQVUsRUFBRSwwQkFBMEI7SUFDdEMsS0FBSyxFQUFFLGlCQUFpQjtJQUN4QixjQUFjLEVBQUUsUUFBUTtJQUN4QixvQkFBb0IsRUFBRSxTQUFTO0lBQy9CLGdCQUFnQixFQUFFLHdCQUF3QjtJQUMxQyxhQUFhLEVBQUUsU0FBUztJQUN4QixhQUFhLEVBQUUsUUFBUTtJQUN2QixjQUFjLEVBQUUsUUFBUTtJ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RCxRQUFRLEtBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBLENBQUEsQ0FBQzs7Ozs7SUFFcEQsa0JBQWtCO1FBQ3ZCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFBO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDeEIsQ0FBQzs7O1lBZEosU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLE1BQU0sRUFBRSxzQkFBc0IsQ0FBQyxVQUFVO2dCQUN6QyxPQUFPLEVBQUUsc0JBQXNCLENBQUMsVUFBVTtnQkFDMUMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsMEJBQTBCLENBQUMsRUFBQyxDQUFDO2dCQUN2RixRQUFRLEVBQUUsc0NBQXNDO2FBQ2pEOzs7O1lBM1RDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi9iYXNlJztcbmV4cG9ydCBjbGFzcyBib3JkZXJzcGxpdHRlck1ldGFEYXRhIHtcbiAgcHVibGljIHN0YXRpYyBYVFlQRTogc3RyaW5nID0gJ2JvcmRlcnNwbGl0dGVyJztcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTT0JKRUNUOiBhbnkgPSB7XG4gICAgXCJhY3RpdmVDb3VudGVyXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJhbGlnbk9uU2Nyb2xsXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiYWxpZ25UYXJnZXRcIjogXCJTdHJpbmdcIixcbiAgICBcImFsd2F5c09uVG9wXCI6IFwiQm9vbGVhbi9OdW1iZXJcIixcbiAgICBcImFuY2hvclwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYW5pbWF0ZVNoYWRvd1wiOiBcIkJvb2xlYW5cIixcbiAgICBcImFyaWFBdHRyaWJ1dGVzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJhcmlhRGVzY3JpYmVkQnlcIjogXCJTdHJpbmdcIixcbiAgICBcImFyaWFMYWJlbFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXJpYUxhYmVsbGVkQnlcIjogXCJTdHJpbmdcIixcbiAgICBcImF1dG9FbFwiOiBcIlN0cmluZy9PYmplY3RcIixcbiAgICBcImF1dG9SZW5kZXJcIjogXCJCb29sZWFuL1N0cmluZy9IVE1MRWxlbWVudC9FeHQuZG9tLkVsZW1lbnRcIixcbiAgICBcImF1dG9TY3JvbGxcIjogXCJCb29sZWFuXCIsXG4gICAgXCJhdXRvU2hvd1wiOiBcIkJvb2xlYW5cIixcbiAgICBcImJhc2VDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImJpbmRcIjogXCJPYmplY3QvU3RyaW5nXCIsXG4gICAgXCJib3JkZXJcIjogXCJOdW1iZXIvU3RyaW5nL0Jvb2xlYW5cIixcbiAgICBcImNoaWxkRWxzXCI6IFwiT2JqZWN0L1N0cmluZ1tdL09iamVjdFtdXCIsXG4gICAgXCJjbHNcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcImNvbGxhcHNlZENsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiY29sbGFwc2VPbkRibENsaWNrXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY29sbGFwc2VUYXJnZXRcIjogXCJTdHJpbmcvRXh0LnBhbmVsLlBhbmVsXCIsXG4gICAgXCJjb2xsYXBzaWJsZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNvbHVtbldpZHRoXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJjb21wb25lbnRDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImNvbXBvbmVudExheW91dFwiOiBcIlN0cmluZy9PYmplY3RcIixcbiAgICBcImNvbnN0cmFpblwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNvbnN0cmFpbnRJbnNldHNcIjogXCJPYmplY3QvU3RyaW5nXCIsXG4gICAgXCJjb25zdHJhaW5Ub1wiOiBcIkV4dC51dGlsLlJlZ2lvbi9FeHQuZG9tLkVsZW1lbnRcIixcbiAgICBcImNvbnRlbnRFbFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiY29udHJvbGxlclwiOiBcIlN0cmluZy9PYmplY3QvRXh0LmFwcC5WaWV3Q29udHJvbGxlclwiLFxuICAgIFwiZGF0YVwiOiBcIk9iamVjdFwiLFxuICAgIFwiZGVmYXVsdEFsaWduXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJkZWZhdWx0TGlzdGVuZXJTY29wZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcImRlZmF1bHRTcGxpdE1heFwiOiBcIk51bWJlclwiLFxuICAgIFwiZGVmYXVsdFNwbGl0TWluXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJkaXNhYmxlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImRpc2FibGVkQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJkb2NrXCI6IFwiJ3RvcCcvJ2JvdHRvbScvJ2xlZnQnLydyaWdodCdcIixcbiAgICBcImRyYWdnYWJsZVwiOiBcIkJvb2xlYW4vT2JqZWN0XCIsXG4gICAgXCJmaXhlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImZsZXhcIjogXCJOdW1iZXJcIixcbiAgICBcImZsb2F0aW5nXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZm9jdXNDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImZvY3VzT25Ub0Zyb250XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZm9ybUJpbmRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJmcmFtZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcImhlaWdodFwiOiBcIk51bWJlcnxTdHJpbmdcIixcbiAgICBcImhpZGRlblwiOiBcIkJvb2xlYW5cIixcbiAgICBcImhpZGVNb2RlXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJodG1sXCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwiaWRcIjogXCJTdHJpbmdcIixcbiAgICBcIml0ZW1JZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwia2V5TWFwXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJrZXlNYXBFbmFibGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwia2V5TWFwVGFyZ2V0XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJsaXF1aWRMYXlvdXRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJsaXN0ZW5lcnNcIjogXCJPYmplY3RcIixcbiAgICBcImxpdmVEcmFnXCI6IFwiQm9vbGVhblwiLFxuICAgIFwibG9hZGVyXCI6IFwiRXh0LkNvbXBvbmVudExvYWRlci9PYmplY3RcIixcbiAgICBcIm1hcmdpblwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcIm1hc2tEZWZhdWx0c1wiOiBcIk9iamVjdFwiLFxuICAgIFwibWFza0VsZW1lbnRcIjogXCJTdHJpbmdcIixcbiAgICBcIm1heEhlaWdodFwiOiBcIk51bWJlclwiLFxuICAgIFwibWF4V2lkdGhcIjogXCJOdW1iZXJcIixcbiAgICBcIm1pbkhlaWdodFwiOiBcIk51bWJlclwiLFxuICAgIFwibWluV2lkdGhcIjogXCJOdW1iZXJcIixcbiAgICBcIm1vZGFsXCI6IFwiQm9vbGVhblwiLFxuICAgIFwibW9kZWxWYWxpZGF0aW9uXCI6IFwiQm9vbGVhblwiLFxuICAgIFwibmFtZWFibGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJvdmVyQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJvdmVyZmxvd1hcIjogXCJTdHJpbmdcIixcbiAgICBcIm92ZXJmbG93WVwiOiBcIlN0cmluZ1wiLFxuICAgIFwicGFkZGluZ1wiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcInBlcmZvcm1Db2xsYXBzZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInBsdWdpbnNcIjogXCJBcnJheS9FeHQuZW51bXMuUGx1Z2luL09iamVjdC9FeHQucGx1Z2luLkFic3RyYWN0XCIsXG4gICAgXCJwdWJsaXNoZXNcIjogXCJTdHJpbmcvU3RyaW5nW10vT2JqZWN0XCIsXG4gICAgXCJyZWZlcmVuY2VcIjogXCJTdHJpbmdcIixcbiAgICBcInJlZ2lvblwiOiBcIidub3J0aCcvJ3NvdXRoJy8nZWFzdCcvJ3dlc3QnLydjZW50ZXInXCIsXG4gICAgXCJyZW5kZXJDb25maWdcIjogXCJPYmplY3RcIixcbiAgICBcInJlbmRlckRhdGFcIjogXCJPYmplY3RcIixcbiAgICBcInJlbmRlclNlbGVjdG9yc1wiOiBcIk9iamVjdFwiLFxuICAgIFwicmVuZGVyVG9cIjogXCJTdHJpbmcvSFRNTEVsZW1lbnQvRXh0LmRvbS5FbGVtZW50XCIsXG4gICAgXCJyZW5kZXJUcGxcIjogXCJFeHQuWFRlbXBsYXRlL1N0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwicmVzaXphYmxlXCI6IFwiQm9vbGVhbi9PYmplY3RcIixcbiAgICBcInJlc2l6ZUhhbmRsZXNcIjogXCJTdHJpbmdcIixcbiAgICBcInNhdmVEZWxheVwiOiBcIk51bWJlclwiLFxuICAgIFwic2Nyb2xsYWJsZVwiOiBcIkJvb2xlYW4vU3RyaW5nL09iamVjdFwiLFxuICAgIFwic2Vzc2lvblwiOiBcIkJvb2xlYW4vT2JqZWN0L0V4dC5kYXRhLlNlc3Npb25cIixcbiAgICBcInNoYWRvd1wiOiBcIlN0cmluZy9Cb29sZWFuXCIsXG4gICAgXCJzaGFkb3dPZmZzZXRcIjogXCJOdW1iZXJcIixcbiAgICBcInNoYXJlYWJsZU5hbWVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJzaGltXCI6IFwiQm9vbGVhblwiLFxuICAgIFwic2hyaW5rV3JhcFwiOiBcIkJvb2xlYW4vTnVtYmVyXCIsXG4gICAgXCJzaXplXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJzdGF0ZUV2ZW50c1wiOiBcIlN0cmluZ1tdXCIsXG4gICAgXCJzdGF0ZWZ1bFwiOiBcIkJvb2xlYW4vT2JqZWN0XCIsXG4gICAgXCJzdGF0ZUlkXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJzdHlsZVwiOiBcIlN0cmluZy9PYmplY3RcIixcbiAgICBcInRhYkluZGV4XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJ0b0Zyb250T25TaG93XCI6IFwiQm9vbGVhblwiLFxuICAgIFwidG91Y2hBY3Rpb25cIjogXCJPYmplY3RcIixcbiAgICBcInRwbFwiOiBcIkV4dC5YVGVtcGxhdGUvRXh0LlRlbXBsYXRlL1N0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwidHBsV3JpdGVNb2RlXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJ0cmFja2VyXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJ0d29XYXlCaW5kYWJsZVwiOiBcIlN0cmluZy9TdHJpbmdbXS9PYmplY3RcIixcbiAgICBcInVpXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJ1aUNsc1wiOiBcIlN0cmluZ1tdXCIsXG4gICAgXCJ1c2VyQ2xzXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJ2aWV3TW9kZWxcIjogXCJTdHJpbmcvT2JqZWN0L0V4dC5hcHAuVmlld01vZGVsXCIsXG4gICAgXCJ3ZWlnaHRcIjogXCJOdW1iZXJcIixcbiAgICBcIndpZHRoXCI6IFwiTnVtYmVyfFN0cmluZ1wiLFxuICAgIFwieHR5cGVcIjogXCJFeHQuZW51bXMuV2lkZ2V0XCIsXG4gICAgXCJwbGF0Zm9ybUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwicmVzcG9uc2l2ZUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZml0VG9QYXJlbnRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjb25maWdcIjogXCJPYmplY3RcIixcbn07XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4gICAgJ2FjdGl2ZUNvdW50ZXInLFxuICAgICdhbGlnbk9uU2Nyb2xsJyxcbiAgICAnYWxpZ25UYXJnZXQnLFxuICAgICdhbHdheXNPblRvcCcsXG4gICAgJ2FuY2hvcicsXG4gICAgJ2FuaW1hdGVTaGFkb3cnLFxuICAgICdhcmlhQXR0cmlidXRlcycsXG4gICAgJ2FyaWFEZXNjcmliZWRCeScsXG4gICAgJ2FyaWFMYWJlbCcsXG4gICAgJ2FyaWFMYWJlbGxlZEJ5JyxcbiAgICAnYXV0b0VsJyxcbiAgICAnYXV0b1JlbmRlcicsXG4gICAgJ2F1dG9TY3JvbGwnLFxuICAgICdhdXRvU2hvdycsXG4gICAgJ2Jhc2VDbHMnLFxuICAgICdiaW5kJyxcbiAgICAnYm9yZGVyJyxcbiAgICAnY2hpbGRFbHMnLFxuICAgICdjbHMnLFxuICAgICdjb2xsYXBzZWRDbHMnLFxuICAgICdjb2xsYXBzZU9uRGJsQ2xpY2snLFxuICAgICdjb2xsYXBzZVRhcmdldCcsXG4gICAgJ2NvbGxhcHNpYmxlJyxcbiAgICAnY29sdW1uV2lkdGgnLFxuICAgICdjb21wb25lbnRDbHMnLFxuICAgICdjb21wb25lbnRMYXlvdXQnLFxuICAgICdjb25zdHJhaW4nLFxuICAgICdjb25zdHJhaW50SW5zZXRzJyxcbiAgICAnY29uc3RyYWluVG8nLFxuICAgICdjb250ZW50RWwnLFxuICAgICdjb250cm9sbGVyJyxcbiAgICAnZGF0YScsXG4gICAgJ2RlZmF1bHRBbGlnbicsXG4gICAgJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJyxcbiAgICAnZGVmYXVsdFNwbGl0TWF4JyxcbiAgICAnZGVmYXVsdFNwbGl0TWluJyxcbiAgICAnZGlzYWJsZWQnLFxuICAgICdkaXNhYmxlZENscycsXG4gICAgJ2RvY2snLFxuICAgICdkcmFnZ2FibGUnLFxuICAgICdmaXhlZCcsXG4gICAgJ2ZsZXgnLFxuICAgICdmbG9hdGluZycsXG4gICAgJ2ZvY3VzQ2xzJyxcbiAgICAnZm9jdXNPblRvRnJvbnQnLFxuICAgICdmb3JtQmluZCcsXG4gICAgJ2ZyYW1lJyxcbiAgICAnaGVpZ2h0JyxcbiAgICAnaGlkZGVuJyxcbiAgICAnaGlkZU1vZGUnLFxuICAgICdodG1sJyxcbiAgICAnaWQnLFxuICAgICdpdGVtSWQnLFxuICAgICdrZXlNYXAnLFxuICAgICdrZXlNYXBFbmFibGVkJyxcbiAgICAna2V5TWFwVGFyZ2V0JyxcbiAgICAnbGlxdWlkTGF5b3V0JyxcbiAgICAnbGlzdGVuZXJzJyxcbiAgICAnbGl2ZURyYWcnLFxuICAgICdsb2FkZXInLFxuICAgICdtYXJnaW4nLFxuICAgICdtYXNrRGVmYXVsdHMnLFxuICAgICdtYXNrRWxlbWVudCcsXG4gICAgJ21heEhlaWdodCcsXG4gICAgJ21heFdpZHRoJyxcbiAgICAnbWluSGVpZ2h0JyxcbiAgICAnbWluV2lkdGgnLFxuICAgICdtb2RhbCcsXG4gICAgJ21vZGVsVmFsaWRhdGlvbicsXG4gICAgJ25hbWVhYmxlJyxcbiAgICAnb3ZlckNscycsXG4gICAgJ292ZXJmbG93WCcsXG4gICAgJ292ZXJmbG93WScsXG4gICAgJ3BhZGRpbmcnLFxuICAgICdwZXJmb3JtQ29sbGFwc2UnLFxuICAgICdwbHVnaW5zJyxcbiAgICAncHVibGlzaGVzJyxcbiAgICAncmVmZXJlbmNlJyxcbiAgICAncmVnaW9uJyxcbiAgICAncmVuZGVyQ29uZmlnJyxcbiAgICAncmVuZGVyRGF0YScsXG4gICAgJ3JlbmRlclNlbGVjdG9ycycsXG4gICAgJ3JlbmRlclRvJyxcbiAgICAncmVuZGVyVHBsJyxcbiAgICAncmVzaXphYmxlJyxcbiAgICAncmVzaXplSGFuZGxlcycsXG4gICAgJ3NhdmVEZWxheScsXG4gICAgJ3Njcm9sbGFibGUnLFxuICAgICdzZXNzaW9uJyxcbiAgICAnc2hhZG93JyxcbiAgICAnc2hhZG93T2Zmc2V0JyxcbiAgICAnc2hhcmVhYmxlTmFtZScsXG4gICAgJ3NoaW0nLFxuICAgICdzaHJpbmtXcmFwJyxcbiAgICAnc2l6ZScsXG4gICAgJ3N0YXRlRXZlbnRzJyxcbiAgICAnc3RhdGVmdWwnLFxuICAgICdzdGF0ZUlkJyxcbiAgICAnc3R5bGUnLFxuICAgICd0YWJJbmRleCcsXG4gICAgJ3RvRnJvbnRPblNob3cnLFxuICAgICd0b3VjaEFjdGlvbicsXG4gICAgJ3RwbCcsXG4gICAgJ3RwbFdyaXRlTW9kZScsXG4gICAgJ3RyYWNrZXInLFxuICAgICd0d29XYXlCaW5kYWJsZScsXG4gICAgJ3VpJyxcbiAgICAndWlDbHMnLFxuICAgICd1c2VyQ2xzJyxcbiAgICAndmlld01vZGVsJyxcbiAgICAnd2VpZ2h0JyxcbiAgICAnd2lkdGgnLFxuICAgICd4dHlwZScsXG4gICAgJ3BsYXRmb3JtQ29uZmlnJyxcbiAgICAncmVzcG9uc2l2ZUNvbmZpZycsXG4gICAgJ2ZpdFRvUGFyZW50JyxcbiAgICAnY29uZmlnJ1xuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xuXHRcdHtuYW1lOidhY3RpdmF0ZScscGFyYW1ldGVyczonYm9yZGVyc3BsaXR0ZXInfSxcblx0XHR7bmFtZTonYWRkZWQnLHBhcmFtZXRlcnM6J2JvcmRlcnNwbGl0dGVyLGNvbnRhaW5lcixwb3MnfSxcblx0XHR7bmFtZTonYWZ0ZXJsYXlvdXRhbmltYXRpb24nLHBhcmFtZXRlcnM6J2JvcmRlcnNwbGl0dGVyJ30sXG5cdFx0e25hbWU6J2FmdGVycmVuZGVyJyxwYXJhbWV0ZXJzOidib3JkZXJzcGxpdHRlcid9LFxuXHRcdHtuYW1lOidiZWZvcmVhY3RpdmF0ZScscGFyYW1ldGVyczonYm9yZGVyc3BsaXR0ZXInfSxcblx0XHR7bmFtZTonYmVmb3JlZGVhY3RpdmF0ZScscGFyYW1ldGVyczonYm9yZGVyc3BsaXR0ZXInfSxcblx0XHR7bmFtZTonYmVmb3JlZGVzdHJveScscGFyYW1ldGVyczonYm9yZGVyc3BsaXR0ZXInfSxcblx0XHR7bmFtZTonYmVmb3JlaGlkZScscGFyYW1ldGVyczonYm9yZGVyc3BsaXR0ZXInfSxcblx0XHR7bmFtZTonYmVmb3JlcmVuZGVyJyxwYXJhbWV0ZXJzOidib3JkZXJzcGxpdHRlcid9LFxuXHRcdHtuYW1lOidiZWZvcmVzaG93JyxwYXJhbWV0ZXJzOidib3JkZXJzcGxpdHRlcid9LFxuXHRcdHtuYW1lOidiZWZvcmVzdGF0ZXJlc3RvcmUnLHBhcmFtZXRlcnM6J2JvcmRlcnNwbGl0dGVyLHN0YXRlJ30sXG5cdFx0e25hbWU6J2JlZm9yZXN0YXRlc2F2ZScscGFyYW1ldGVyczonYm9yZGVyc3BsaXR0ZXIsc3RhdGUnfSxcblx0XHR7bmFtZTonYmx1cicscGFyYW1ldGVyczonYm9yZGVyc3BsaXR0ZXIsZXZlbnQnfSxcblx0XHR7bmFtZTonYm94cmVhZHknLHBhcmFtZXRlcnM6J2JvcmRlcnNwbGl0dGVyLHdpZHRoLGhlaWdodCd9LFxuXHRcdHtuYW1lOidkZWFjdGl2YXRlJyxwYXJhbWV0ZXJzOidib3JkZXJzcGxpdHRlcid9LFxuXHRcdHtuYW1lOidkZXN0cm95JyxwYXJhbWV0ZXJzOidib3JkZXJzcGxpdHRlcid9LFxuXHRcdHtuYW1lOidkaXNhYmxlJyxwYXJhbWV0ZXJzOidib3JkZXJzcGxpdHRlcid9LFxuXHRcdHtuYW1lOidlbmFibGUnLHBhcmFtZXRlcnM6J2JvcmRlcnNwbGl0dGVyJ30sXG5cdFx0e25hbWU6J2ZvY3VzJyxwYXJhbWV0ZXJzOidib3JkZXJzcGxpdHRlcixldmVudCd9LFxuXHRcdHtuYW1lOidmb2N1c2VudGVyJyxwYXJhbWV0ZXJzOidib3JkZXJzcGxpdHRlcixldmVudCd9LFxuXHRcdHtuYW1lOidmb2N1c2xlYXZlJyxwYXJhbWV0ZXJzOidib3JkZXJzcGxpdHRlcixldmVudCd9LFxuXHRcdHtuYW1lOidoaWRlJyxwYXJhbWV0ZXJzOidib3JkZXJzcGxpdHRlcid9LFxuXHRcdHtuYW1lOidtb3ZlJyxwYXJhbWV0ZXJzOidib3JkZXJzcGxpdHRlcix4LHknfSxcblx0XHR7bmFtZToncmVtb3ZlZCcscGFyYW1ldGVyczonYm9yZGVyc3BsaXR0ZXIsb3duZXJDdCd9LFxuXHRcdHtuYW1lOidyZW5kZXInLHBhcmFtZXRlcnM6J2JvcmRlcnNwbGl0dGVyJ30sXG5cdFx0e25hbWU6J3Jlc2l6ZScscGFyYW1ldGVyczonYm9yZGVyc3BsaXR0ZXIsd2lkdGgsaGVpZ2h0LG9sZFdpZHRoLG9sZEhlaWdodCd9LFxuXHRcdHtuYW1lOidzaG93JyxwYXJhbWV0ZXJzOidib3JkZXJzcGxpdHRlcid9LFxuXHRcdHtuYW1lOidzdGF0ZXJlc3RvcmUnLHBhcmFtZXRlcnM6J2JvcmRlcnNwbGl0dGVyLHN0YXRlJ30sXG5cdFx0e25hbWU6J3N0YXRlc2F2ZScscGFyYW1ldGVyczonYm9yZGVyc3BsaXR0ZXIsc3RhdGUnfSxcblx0XHR7bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuXHRcdCdhY3RpdmF0ZScsXG5cdFx0J2FkZGVkJyxcblx0XHQnYWZ0ZXJsYXlvdXRhbmltYXRpb24nLFxuXHRcdCdhZnRlcnJlbmRlcicsXG5cdFx0J2JlZm9yZWFjdGl2YXRlJyxcblx0XHQnYmVmb3JlZGVhY3RpdmF0ZScsXG5cdFx0J2JlZm9yZWRlc3Ryb3knLFxuXHRcdCdiZWZvcmVoaWRlJyxcblx0XHQnYmVmb3JlcmVuZGVyJyxcblx0XHQnYmVmb3Jlc2hvdycsXG5cdFx0J2JlZm9yZXN0YXRlcmVzdG9yZScsXG5cdFx0J2JlZm9yZXN0YXRlc2F2ZScsXG5cdFx0J2JsdXInLFxuXHRcdCdib3hyZWFkeScsXG5cdFx0J2RlYWN0aXZhdGUnLFxuXHRcdCdkZXN0cm95Jyxcblx0XHQnZGlzYWJsZScsXG5cdFx0J2VuYWJsZScsXG5cdFx0J2ZvY3VzJyxcblx0XHQnZm9jdXNlbnRlcicsXG5cdFx0J2ZvY3VzbGVhdmUnLFxuXHRcdCdoaWRlJyxcblx0XHQnbW92ZScsXG5cdFx0J3JlbW92ZWQnLFxuXHRcdCdyZW5kZXInLFxuXHRcdCdyZXNpemUnLFxuXHRcdCdzaG93Jyxcblx0XHQnc3RhdGVyZXN0b3JlJyxcblx0XHQnc3RhdGVzYXZlJyxcblx0XHQncmVhZHknXG5dO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYm9yZGVyc3BsaXR0ZXInLCBcbiAgaW5wdXRzOiBib3JkZXJzcGxpdHRlck1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IGJvcmRlcnNwbGl0dGVyTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IGJhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dEJvcmRlcnNwbGl0dGVyQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZSAjZHluYW1pYz48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0Qm9yZGVyc3BsaXR0ZXJDb21wb25lbnQgZXh0ZW5kcyBiYXNlIGltcGxlbWVudHMgT25Jbml0LEFmdGVyQ29udGVudEluaXQsT25DaGFuZ2VzIHtcbiAgY29uc3RydWN0b3IoZVJlZjpFbGVtZW50UmVmKSB7c3VwZXIoZVJlZixib3JkZXJzcGxpdHRlck1ldGFEYXRhKX1cbiAgcHVibGljIG5nT25Jbml0KCkge3RoaXMuYmFzZU9uSW5pdChib3JkZXJzcGxpdHRlck1ldGFEYXRhKX1cbiAgLy9wdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgICB0aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgICB9XG59Il19