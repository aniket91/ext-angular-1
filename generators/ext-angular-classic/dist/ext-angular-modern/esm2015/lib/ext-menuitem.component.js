/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
export class menuitemMetaData {
}
menuitemMetaData.XTYPE = 'menuitem';
menuitemMetaData.PROPERTIESOBJECT = {
    "activeCls": "String",
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
    "canActivate": "Boolean",
    "childEls": "Object/String[]/Object[]",
    "clickHideDelay": "Number",
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
    "defaultListenerScope": "Boolean",
    "destroyMenu": "Boolean",
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
    "glyph": "Number/String",
    "handler": "Function/String",
    "height": "Number|String",
    "hidden": "Boolean",
    "hideMode": "String",
    "hideOnClick": "Boolean",
    "href": "String",
    "hrefTarget": "String",
    "html": "String/Object",
    "icon": "String",
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
    "menu": "Ext.menu.Menu/Object",
    "menuAlign": "String",
    "menuExpandDelay": "Number",
    "menuHideDelay": "Number",
    "minHeight": "Number",
    "minWidth": "Number",
    "modal": "Boolean",
    "modelValidation": "Boolean",
    "nameable": "Boolean",
    "overCls": "String",
    "overflowX": "String",
    "overflowY": "String",
    "padding": "Number/String",
    "plain": "Boolean",
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
    "stateEvents": "String[]",
    "stateful": "Boolean/Object",
    "stateId": "String",
    "style": "String/Object",
    "tabIndex": "Number",
    "text": "String",
    "toFrontOnShow": "Boolean",
    "tooltip": "String/Object",
    "tooltipType": "String",
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
    "fitToParent": "Boolean",
    "config": "Object",
};
menuitemMetaData.PROPERTIES = [
    'activeCls',
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
    'canActivate',
    'childEls',
    'clickHideDelay',
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
    'fixed',
    'flex',
    'floating',
    'focusCls',
    'focusOnToFront',
    'formBind',
    'frame',
    'glyph',
    'handler',
    'height',
    'hidden',
    'hideMode',
    'hideOnClick',
    'href',
    'hrefTarget',
    'html',
    'icon',
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
    'menuExpandDelay',
    'menuHideDelay',
    'minHeight',
    'minWidth',
    'modal',
    'modelValidation',
    'nameable',
    'overCls',
    'overflowX',
    'overflowY',
    'padding',
    'plain',
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
    'stateEvents',
    'stateful',
    'stateId',
    'style',
    'tabIndex',
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
    'userCls',
    'viewModel',
    'weight',
    'width',
    'xtype',
    'platformConfig',
    'fitToParent',
    'config'
];
menuitemMetaData.EVENTS = [
    { name: 'activate', parameters: 'item' },
    { name: 'added', parameters: 'menuitem,container,pos' },
    { name: 'afterlayoutanimation', parameters: 'menuitem' },
    { name: 'afterrender', parameters: 'menuitem' },
    { name: 'beforeactivate', parameters: 'menuitem' },
    { name: 'beforedeactivate', parameters: 'menuitem' },
    { name: 'beforedestroy', parameters: 'menuitem' },
    { name: 'beforehide', parameters: 'menuitem' },
    { name: 'beforerender', parameters: 'menuitem' },
    { name: 'beforeshow', parameters: 'menuitem' },
    { name: 'beforestaterestore', parameters: 'menuitem,state' },
    { name: 'beforestatesave', parameters: 'menuitem,state' },
    { name: 'blur', parameters: 'menuitem,event' },
    { name: 'boxready', parameters: 'menuitem,width,height' },
    { name: 'click', parameters: 'item,e' },
    { name: 'deactivate', parameters: 'item' },
    { name: 'destroy', parameters: 'menuitem' },
    { name: 'disable', parameters: 'menuitem' },
    { name: 'enable', parameters: 'menuitem' },
    { name: 'focus', parameters: 'menuitem,event' },
    { name: 'focusenter', parameters: 'menuitem,event' },
    { name: 'focusleave', parameters: 'menuitem,event' },
    { name: 'hide', parameters: 'menuitem' },
    { name: 'iconchange', parameters: 'menuitem,oldIcon,newIcon' },
    { name: 'move', parameters: 'menuitem,x,y' },
    { name: 'removed', parameters: 'menuitem,ownerCt' },
    { name: 'render', parameters: 'menuitem' },
    { name: 'resize', parameters: 'menuitem,width,height,oldWidth,oldHeight' },
    { name: 'show', parameters: 'menuitem' },
    { name: 'staterestore', parameters: 'menuitem,state' },
    { name: 'statesave', parameters: 'menuitem,state' },
    { name: 'textchange', parameters: 'menuitem,oldText,newText' },
    { name: 'ready', parameters: '' }
];
menuitemMetaData.EVENTNAMES = [
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
    'click',
    'deactivate',
    'destroy',
    'disable',
    'enable',
    'focus',
    'focusenter',
    'focusleave',
    'hide',
    'iconchange',
    'move',
    'removed',
    'render',
    'resize',
    'show',
    'staterestore',
    'statesave',
    'textchange',
    'ready'
];
if (false) {
    /** @type {?} */
    menuitemMetaData.XTYPE;
    /** @type {?} */
    menuitemMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    menuitemMetaData.PROPERTIES;
    /** @type {?} */
    menuitemMetaData.EVENTS;
    /** @type {?} */
    menuitemMetaData.EVENTNAMES;
}
export class ExtMenuitemComponent extends base {
    /**
     * @param {?} eRef
     */
    constructor(eRef) { super(eRef, menuitemMetaData); }
    /**
     * @return {?}
     */
    ngOnInit() { this.baseOnInit(menuitemMetaData); }
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    }
}
ExtMenuitemComponent.decorators = [
    { type: Component, args: [{
                selector: 'menuitem',
                inputs: menuitemMetaData.PROPERTIES,
                outputs: menuitemMetaData.EVENTNAMES,
                providers: [{ provide: base, useExisting: forwardRef(() => ExtMenuitemComponent) }],
                template: '<ng-template #dynamic></ng-template>'
            }] }
];
/** @nocollapse */
ExtMenuitemComponent.ctorParameters = () => [
    { type: ElementRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LW1lbnVpdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItbW9kZXJuLyIsInNvdXJjZXMiOlsibGliL2V4dC1tZW51aXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFLTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzlCLE1BQU0sT0FBTyxnQkFBZ0I7O0FBQ2Isc0JBQUssR0FBVyxVQUFVLENBQUM7QUFDM0IsaUNBQWdCLEdBQVE7SUFDcEMsV0FBVyxFQUFFLFFBQVE7SUFDckIsZUFBZSxFQUFFLFFBQVE7SUFDekIsZUFBZSxFQUFFLFNBQVM7SUFDMUIsYUFBYSxFQUFFLFFBQVE7SUFDdkIsYUFBYSxFQUFFLGdCQUFnQjtJQUMvQixRQUFRLEVBQUUsUUFBUTtJQUNsQixlQUFlLEVBQUUsU0FBUztJQUMxQixnQkFBZ0IsRUFBRSxRQUFRO0lBQzFCLGlCQUFpQixFQUFFLFFBQVE7SUFDM0IsV0FBVyxFQUFFLFFBQVE7SUFDckIsZ0JBQWdCLEVBQUUsUUFBUTtJQUMxQixRQUFRLEVBQUUsZUFBZTtJQUN6QixZQUFZLEVBQUUsNENBQTRDO0lBQzFELFlBQVksRUFBRSxTQUFTO0lBQ3ZCLFVBQVUsRUFBRSxTQUFTO0lBQ3JCLFNBQVMsRUFBRSxRQUFRO0lBQ25CLE1BQU0sRUFBRSxlQUFlO0lBQ3ZCLFFBQVEsRUFBRSx1QkFBdUI7SUFDakMsYUFBYSxFQUFFLFNBQVM7SUFDeEIsVUFBVSxFQUFFLDBCQUEwQjtJQUN0QyxnQkFBZ0IsRUFBRSxRQUFRO0lBQzFCLEtBQUssRUFBRSxpQkFBaUI7SUFDeEIsYUFBYSxFQUFFLFFBQVE7SUFDdkIsY0FBYyxFQUFFLFFBQVE7SUFDeEIsaUJBQWlCLEVBQUUsZUFBZTtJQUNsQyxXQUFXLEVBQUUsU0FB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Q2pCLE1BQU07SUFDTixVQUFVO0lBQ1YsT0FBTztJQUNQLFlBQVk7SUFDWixTQUFTO0lBQ1QsU0FBUztJQUNULFFBQVE7SUFDUixPQUFPO0lBQ1AsWUFBWTtJQUNaLFlBQVk7SUFDWixNQUFNO0lBQ04sWUFBWTtJQUNaLE1BQU07SUFDTixTQUFTO0lBQ1QsUUFBUTtJQUNSLFFBQVE7SUFDUixNQUFNO0lBQ04sY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osT0FBTztDQUNSLENBQUM7OztJQXRVQSx1QkFBeUM7O0lBQ3pDLGtDQStIQTs7SUFDQSw0QkErSEE7O0lBQ0Esd0JBa0NBOztJQUNBLDRCQWtDQTs7QUFTRixNQUFNLE9BQU8sb0JBQXFCLFNBQVEsSUFBSTs7OztJQUM1QyxZQUFZLElBQWUsSUFBRyxLQUFLLENBQUMsSUFBSSxFQUFDLGdCQUFnQixDQUFDLENBQUEsQ0FBQSxDQUFDOzs7O0lBQ3BELFFBQVEsS0FBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUEsQ0FBQSxDQUFDOzs7OztJQUU5QyxrQkFBa0I7UUFDdkIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUE7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN4QixDQUFDOzs7WUFkSixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxVQUFVO2dCQUNuQyxPQUFPLEVBQUUsZ0JBQWdCLENBQUMsVUFBVTtnQkFDcEMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsb0JBQW9CLENBQUMsRUFBQyxDQUFDO2dCQUNqRixRQUFRLEVBQUUsc0NBQXNDO2FBQ2pEOzs7O1lBblZDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi9iYXNlJztcbmV4cG9ydCBjbGFzcyBtZW51aXRlbU1ldGFEYXRhIHtcbiAgcHVibGljIHN0YXRpYyBYVFlQRTogc3RyaW5nID0gJ21lbnVpdGVtJztcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTT0JKRUNUOiBhbnkgPSB7XG4gICAgXCJhY3RpdmVDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImFjdGl2ZUNvdW50ZXJcIjogXCJOdW1iZXJcIixcbiAgICBcImFsaWduT25TY3JvbGxcIjogXCJCb29sZWFuXCIsXG4gICAgXCJhbGlnblRhcmdldFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYWx3YXlzT25Ub3BcIjogXCJCb29sZWFuL051bWJlclwiLFxuICAgIFwiYW5jaG9yXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhbmltYXRlU2hhZG93XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiYXJpYUF0dHJpYnV0ZXNcIjogXCJPYmplY3RcIixcbiAgICBcImFyaWFEZXNjcmliZWRCeVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXJpYUxhYmVsXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhcmlhTGFiZWxsZWRCeVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXV0b0VsXCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwiYXV0b1JlbmRlclwiOiBcIkJvb2xlYW4vU3RyaW5nL0hUTUxFbGVtZW50L0V4dC5kb20uRWxlbWVudFwiLFxuICAgIFwiYXV0b1Njcm9sbFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImF1dG9TaG93XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiYmFzZUNsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiYmluZFwiOiBcIk9iamVjdC9TdHJpbmdcIixcbiAgICBcImJvcmRlclwiOiBcIk51bWJlci9TdHJpbmcvQm9vbGVhblwiLFxuICAgIFwiY2FuQWN0aXZhdGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjaGlsZEVsc1wiOiBcIk9iamVjdC9TdHJpbmdbXS9PYmplY3RbXVwiLFxuICAgIFwiY2xpY2tIaWRlRGVsYXlcIjogXCJOdW1iZXJcIixcbiAgICBcImNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwiY29sdW1uV2lkdGhcIjogXCJOdW1iZXJcIixcbiAgICBcImNvbXBvbmVudENsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiY29tcG9uZW50TGF5b3V0XCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwiY29uc3RyYWluXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY29uc3RyYWludEluc2V0c1wiOiBcIk9iamVjdC9TdHJpbmdcIixcbiAgICBcImNvbnN0cmFpblRvXCI6IFwiRXh0LnV0aWwuUmVnaW9uL0V4dC5kb20uRWxlbWVudFwiLFxuICAgIFwiY29udGVudEVsXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJjb250cm9sbGVyXCI6IFwiU3RyaW5nL09iamVjdC9FeHQuYXBwLlZpZXdDb250cm9sbGVyXCIsXG4gICAgXCJkYXRhXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJkZWZhdWx0QWxpZ25cIjogXCJTdHJpbmdcIixcbiAgICBcImRlZmF1bHRMaXN0ZW5lclNjb3BlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZGVzdHJveU1lbnVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkaXNhYmxlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImRpc2FibGVkQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJkb2NrXCI6IFwiJ3RvcCcvJ2JvdHRvbScvJ2xlZnQnLydyaWdodCdcIixcbiAgICBcImRyYWdnYWJsZVwiOiBcIkJvb2xlYW4vT2JqZWN0XCIsXG4gICAgXCJmaXhlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImZsZXhcIjogXCJOdW1iZXJcIixcbiAgICBcImZsb2F0aW5nXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZm9jdXNDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImZvY3VzT25Ub0Zyb250XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZm9ybUJpbmRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJmcmFtZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcImdseXBoXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwiaGFuZGxlclwiOiBcIkZ1bmN0aW9uL1N0cmluZ1wiLFxuICAgIFwiaGVpZ2h0XCI6IFwiTnVtYmVyfFN0cmluZ1wiLFxuICAgIFwiaGlkZGVuXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiaGlkZU1vZGVcIjogXCJTdHJpbmdcIixcbiAgICBcImhpZGVPbkNsaWNrXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiaHJlZlwiOiBcIlN0cmluZ1wiLFxuICAgIFwiaHJlZlRhcmdldFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiaHRtbFwiOiBcIlN0cmluZy9PYmplY3RcIixcbiAgICBcImljb25cIjogXCJTdHJpbmdcIixcbiAgICBcImljb25DbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImlkXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJpdGVtSWRcIjogXCJTdHJpbmdcIixcbiAgICBcImtleU1hcFwiOiBcIk9iamVjdFwiLFxuICAgIFwia2V5TWFwRW5hYmxlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImtleU1hcFRhcmdldFwiOiBcIlN0cmluZ1wiLFxuICAgIFwibGlxdWlkTGF5b3V0XCI6IFwiQm9vbGVhblwiLFxuICAgIFwibGlzdGVuZXJzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJsaXZlRHJhZ1wiOiBcIkJvb2xlYW5cIixcbiAgICBcImxvYWRlclwiOiBcIkV4dC5Db21wb25lbnRMb2FkZXIvT2JqZWN0XCIsXG4gICAgXCJtYXJnaW5cIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJtYXNrRGVmYXVsdHNcIjogXCJPYmplY3RcIixcbiAgICBcIm1hc2tFbGVtZW50XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJtYXhIZWlnaHRcIjogXCJOdW1iZXJcIixcbiAgICBcIm1heFdpZHRoXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtZW51XCI6IFwiRXh0Lm1lbnUuTWVudS9PYmplY3RcIixcbiAgICBcIm1lbnVBbGlnblwiOiBcIlN0cmluZ1wiLFxuICAgIFwibWVudUV4cGFuZERlbGF5XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtZW51SGlkZURlbGF5XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtaW5IZWlnaHRcIjogXCJOdW1iZXJcIixcbiAgICBcIm1pbldpZHRoXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtb2RhbFwiOiBcIkJvb2xlYW5cIixcbiAgICBcIm1vZGVsVmFsaWRhdGlvblwiOiBcIkJvb2xlYW5cIixcbiAgICBcIm5hbWVhYmxlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwib3ZlckNsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwib3ZlcmZsb3dYXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJvdmVyZmxvd1lcIjogXCJTdHJpbmdcIixcbiAgICBcInBhZGRpbmdcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJwbGFpblwiOiBcIkJvb2xlYW5cIixcbiAgICBcInBsdWdpbnNcIjogXCJBcnJheS9FeHQuZW51bXMuUGx1Z2luL09iamVjdC9FeHQucGx1Z2luLkFic3RyYWN0XCIsXG4gICAgXCJwdWJsaXNoZXNcIjogXCJTdHJpbmcvU3RyaW5nW10vT2JqZWN0XCIsXG4gICAgXCJyZWZlcmVuY2VcIjogXCJTdHJpbmdcIixcbiAgICBcInJlZ2lvblwiOiBcIidub3J0aCcvJ3NvdXRoJy8nZWFzdCcvJ3dlc3QnLydjZW50ZXInXCIsXG4gICAgXCJyZW5kZXJDb25maWdcIjogXCJPYmplY3RcIixcbiAgICBcInJlbmRlckRhdGFcIjogXCJPYmplY3RcIixcbiAgICBcInJlbmRlclNlbGVjdG9yc1wiOiBcIk9iamVjdFwiLFxuICAgIFwicmVuZGVyVG9cIjogXCJTdHJpbmcvSFRNTEVsZW1lbnQvRXh0LmRvbS5FbGVtZW50XCIsXG4gICAgXCJyZW5kZXJUcGxcIjogXCJFeHQuWFRlbXBsYXRlL1N0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwicmVzaXphYmxlXCI6IFwiQm9vbGVhbi9PYmplY3RcIixcbiAgICBcInJlc2l6ZUhhbmRsZXNcIjogXCJTdHJpbmdcIixcbiAgICBcInNhdmVEZWxheVwiOiBcIk51bWJlclwiLFxuICAgIFwic2Nyb2xsYWJsZVwiOiBcIkJvb2xlYW4vU3RyaW5nL09iamVjdFwiLFxuICAgIFwic2Vzc2lvblwiOiBcIkJvb2xlYW4vT2JqZWN0L0V4dC5kYXRhLlNlc3Npb25cIixcbiAgICBcInNoYWRvd1wiOiBcIlN0cmluZy9Cb29sZWFuXCIsXG4gICAgXCJzaGFkb3dPZmZzZXRcIjogXCJOdW1iZXJcIixcbiAgICBcInNoYXJlYWJsZU5hbWVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJzaGltXCI6IFwiQm9vbGVhblwiLFxuICAgIFwic2hyaW5rV3JhcFwiOiBcIkJvb2xlYW4vTnVtYmVyXCIsXG4gICAgXCJzdGF0ZUV2ZW50c1wiOiBcIlN0cmluZ1tdXCIsXG4gICAgXCJzdGF0ZWZ1bFwiOiBcIkJvb2xlYW4vT2JqZWN0XCIsXG4gICAgXCJzdGF0ZUlkXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJzdHlsZVwiOiBcIlN0cmluZy9PYmplY3RcIixcbiAgICBcInRhYkluZGV4XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJ0ZXh0XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJ0b0Zyb250T25TaG93XCI6IFwiQm9vbGVhblwiLFxuICAgIFwidG9vbHRpcFwiOiBcIlN0cmluZy9PYmplY3RcIixcbiAgICBcInRvb2x0aXBUeXBlXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJ0b3VjaEFjdGlvblwiOiBcIk9iamVjdFwiLFxuICAgIFwidHBsXCI6IFwiRXh0LlhUZW1wbGF0ZS9FeHQuVGVtcGxhdGUvU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJ0cGxXcml0ZU1vZGVcIjogXCJTdHJpbmdcIixcbiAgICBcInR3b1dheUJpbmRhYmxlXCI6IFwiU3RyaW5nL1N0cmluZ1tdL09iamVjdFwiLFxuICAgIFwidWlcIjogXCJTdHJpbmdcIixcbiAgICBcInVpQ2xzXCI6IFwiU3RyaW5nW11cIixcbiAgICBcInVzZXJDbHNcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcInZpZXdNb2RlbFwiOiBcIlN0cmluZy9PYmplY3QvRXh0LmFwcC5WaWV3TW9kZWxcIixcbiAgICBcIndlaWdodFwiOiBcIk51bWJlclwiLFxuICAgIFwid2lkdGhcIjogXCJOdW1iZXJ8U3RyaW5nXCIsXG4gICAgXCJ4dHlwZVwiOiBcIkV4dC5lbnVtcy5XaWRnZXRcIixcbiAgICBcInBsYXRmb3JtQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJmaXRUb1BhcmVudFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNvbmZpZ1wiOiBcIk9iamVjdFwiLFxufTtcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbiAgICAnYWN0aXZlQ2xzJyxcbiAgICAnYWN0aXZlQ291bnRlcicsXG4gICAgJ2FsaWduT25TY3JvbGwnLFxuICAgICdhbGlnblRhcmdldCcsXG4gICAgJ2Fsd2F5c09uVG9wJyxcbiAgICAnYW5jaG9yJyxcbiAgICAnYW5pbWF0ZVNoYWRvdycsXG4gICAgJ2FyaWFBdHRyaWJ1dGVzJyxcbiAgICAnYXJpYURlc2NyaWJlZEJ5JyxcbiAgICAnYXJpYUxhYmVsJyxcbiAgICAnYXJpYUxhYmVsbGVkQnknLFxuICAgICdhdXRvRWwnLFxuICAgICdhdXRvUmVuZGVyJyxcbiAgICAnYXV0b1Njcm9sbCcsXG4gICAgJ2F1dG9TaG93JyxcbiAgICAnYmFzZUNscycsXG4gICAgJ2JpbmQnLFxuICAgICdib3JkZXInLFxuICAgICdjYW5BY3RpdmF0ZScsXG4gICAgJ2NoaWxkRWxzJyxcbiAgICAnY2xpY2tIaWRlRGVsYXknLFxuICAgICdjbHMnLFxuICAgICdjb2x1bW5XaWR0aCcsXG4gICAgJ2NvbXBvbmVudENscycsXG4gICAgJ2NvbXBvbmVudExheW91dCcsXG4gICAgJ2NvbnN0cmFpbicsXG4gICAgJ2NvbnN0cmFpbnRJbnNldHMnLFxuICAgICdjb25zdHJhaW5UbycsXG4gICAgJ2NvbnRlbnRFbCcsXG4gICAgJ2NvbnRyb2xsZXInLFxuICAgICdkYXRhJyxcbiAgICAnZGVmYXVsdEFsaWduJyxcbiAgICAnZGVmYXVsdExpc3RlbmVyU2NvcGUnLFxuICAgICdkZXN0cm95TWVudScsXG4gICAgJ2Rpc2FibGVkJyxcbiAgICAnZGlzYWJsZWRDbHMnLFxuICAgICdkb2NrJyxcbiAgICAnZHJhZ2dhYmxlJyxcbiAgICAnZml4ZWQnLFxuICAgICdmbGV4JyxcbiAgICAnZmxvYXRpbmcnLFxuICAgICdmb2N1c0NscycsXG4gICAgJ2ZvY3VzT25Ub0Zyb250JyxcbiAgICAnZm9ybUJpbmQnLFxuICAgICdmcmFtZScsXG4gICAgJ2dseXBoJyxcbiAgICAnaGFuZGxlcicsXG4gICAgJ2hlaWdodCcsXG4gICAgJ2hpZGRlbicsXG4gICAgJ2hpZGVNb2RlJyxcbiAgICAnaGlkZU9uQ2xpY2snLFxuICAgICdocmVmJyxcbiAgICAnaHJlZlRhcmdldCcsXG4gICAgJ2h0bWwnLFxuICAgICdpY29uJyxcbiAgICAnaWNvbkNscycsXG4gICAgJ2lkJyxcbiAgICAnaXRlbUlkJyxcbiAgICAna2V5TWFwJyxcbiAgICAna2V5TWFwRW5hYmxlZCcsXG4gICAgJ2tleU1hcFRhcmdldCcsXG4gICAgJ2xpcXVpZExheW91dCcsXG4gICAgJ2xpc3RlbmVycycsXG4gICAgJ2xpdmVEcmFnJyxcbiAgICAnbG9hZGVyJyxcbiAgICAnbWFyZ2luJyxcbiAgICAnbWFza0RlZmF1bHRzJyxcbiAgICAnbWFza0VsZW1lbnQnLFxuICAgICdtYXhIZWlnaHQnLFxuICAgICdtYXhXaWR0aCcsXG4gICAgJ21lbnUnLFxuICAgICdtZW51QWxpZ24nLFxuICAgICdtZW51RXhwYW5kRGVsYXknLFxuICAgICdtZW51SGlkZURlbGF5JyxcbiAgICAnbWluSGVpZ2h0JyxcbiAgICAnbWluV2lkdGgnLFxuICAgICdtb2RhbCcsXG4gICAgJ21vZGVsVmFsaWRhdGlvbicsXG4gICAgJ25hbWVhYmxlJyxcbiAgICAnb3ZlckNscycsXG4gICAgJ292ZXJmbG93WCcsXG4gICAgJ292ZXJmbG93WScsXG4gICAgJ3BhZGRpbmcnLFxuICAgICdwbGFpbicsXG4gICAgJ3BsdWdpbnMnLFxuICAgICdwdWJsaXNoZXMnLFxuICAgICdyZWZlcmVuY2UnLFxuICAgICdyZWdpb24nLFxuICAgICdyZW5kZXJDb25maWcnLFxuICAgICdyZW5kZXJEYXRhJyxcbiAgICAncmVuZGVyU2VsZWN0b3JzJyxcbiAgICAncmVuZGVyVG8nLFxuICAgICdyZW5kZXJUcGwnLFxuICAgICdyZXNpemFibGUnLFxuICAgICdyZXNpemVIYW5kbGVzJyxcbiAgICAnc2F2ZURlbGF5JyxcbiAgICAnc2Nyb2xsYWJsZScsXG4gICAgJ3Nlc3Npb24nLFxuICAgICdzaGFkb3cnLFxuICAgICdzaGFkb3dPZmZzZXQnLFxuICAgICdzaGFyZWFibGVOYW1lJyxcbiAgICAnc2hpbScsXG4gICAgJ3Nocmlua1dyYXAnLFxuICAgICdzdGF0ZUV2ZW50cycsXG4gICAgJ3N0YXRlZnVsJyxcbiAgICAnc3RhdGVJZCcsXG4gICAgJ3N0eWxlJyxcbiAgICAndGFiSW5kZXgnLFxuICAgICd0ZXh0JyxcbiAgICAndG9Gcm9udE9uU2hvdycsXG4gICAgJ3Rvb2x0aXAnLFxuICAgICd0b29sdGlwVHlwZScsXG4gICAgJ3RvdWNoQWN0aW9uJyxcbiAgICAndHBsJyxcbiAgICAndHBsV3JpdGVNb2RlJyxcbiAgICAndHdvV2F5QmluZGFibGUnLFxuICAgICd1aScsXG4gICAgJ3VpQ2xzJyxcbiAgICAndXNlckNscycsXG4gICAgJ3ZpZXdNb2RlbCcsXG4gICAgJ3dlaWdodCcsXG4gICAgJ3dpZHRoJyxcbiAgICAneHR5cGUnLFxuICAgICdwbGF0Zm9ybUNvbmZpZycsXG4gICAgJ2ZpdFRvUGFyZW50JyxcbiAgICAnY29uZmlnJ1xuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xuXHRcdHtuYW1lOidhY3RpdmF0ZScscGFyYW1ldGVyczonaXRlbSd9LFxuXHRcdHtuYW1lOidhZGRlZCcscGFyYW1ldGVyczonbWVudWl0ZW0sY29udGFpbmVyLHBvcyd9LFxuXHRcdHtuYW1lOidhZnRlcmxheW91dGFuaW1hdGlvbicscGFyYW1ldGVyczonbWVudWl0ZW0nfSxcblx0XHR7bmFtZTonYWZ0ZXJyZW5kZXInLHBhcmFtZXRlcnM6J21lbnVpdGVtJ30sXG5cdFx0e25hbWU6J2JlZm9yZWFjdGl2YXRlJyxwYXJhbWV0ZXJzOidtZW51aXRlbSd9LFxuXHRcdHtuYW1lOidiZWZvcmVkZWFjdGl2YXRlJyxwYXJhbWV0ZXJzOidtZW51aXRlbSd9LFxuXHRcdHtuYW1lOidiZWZvcmVkZXN0cm95JyxwYXJhbWV0ZXJzOidtZW51aXRlbSd9LFxuXHRcdHtuYW1lOidiZWZvcmVoaWRlJyxwYXJhbWV0ZXJzOidtZW51aXRlbSd9LFxuXHRcdHtuYW1lOidiZWZvcmVyZW5kZXInLHBhcmFtZXRlcnM6J21lbnVpdGVtJ30sXG5cdFx0e25hbWU6J2JlZm9yZXNob3cnLHBhcmFtZXRlcnM6J21lbnVpdGVtJ30sXG5cdFx0e25hbWU6J2JlZm9yZXN0YXRlcmVzdG9yZScscGFyYW1ldGVyczonbWVudWl0ZW0sc3RhdGUnfSxcblx0XHR7bmFtZTonYmVmb3Jlc3RhdGVzYXZlJyxwYXJhbWV0ZXJzOidtZW51aXRlbSxzdGF0ZSd9LFxuXHRcdHtuYW1lOidibHVyJyxwYXJhbWV0ZXJzOidtZW51aXRlbSxldmVudCd9LFxuXHRcdHtuYW1lOidib3hyZWFkeScscGFyYW1ldGVyczonbWVudWl0ZW0sd2lkdGgsaGVpZ2h0J30sXG5cdFx0e25hbWU6J2NsaWNrJyxwYXJhbWV0ZXJzOidpdGVtLGUnfSxcblx0XHR7bmFtZTonZGVhY3RpdmF0ZScscGFyYW1ldGVyczonaXRlbSd9LFxuXHRcdHtuYW1lOidkZXN0cm95JyxwYXJhbWV0ZXJzOidtZW51aXRlbSd9LFxuXHRcdHtuYW1lOidkaXNhYmxlJyxwYXJhbWV0ZXJzOidtZW51aXRlbSd9LFxuXHRcdHtuYW1lOidlbmFibGUnLHBhcmFtZXRlcnM6J21lbnVpdGVtJ30sXG5cdFx0e25hbWU6J2ZvY3VzJyxwYXJhbWV0ZXJzOidtZW51aXRlbSxldmVudCd9LFxuXHRcdHtuYW1lOidmb2N1c2VudGVyJyxwYXJhbWV0ZXJzOidtZW51aXRlbSxldmVudCd9LFxuXHRcdHtuYW1lOidmb2N1c2xlYXZlJyxwYXJhbWV0ZXJzOidtZW51aXRlbSxldmVudCd9LFxuXHRcdHtuYW1lOidoaWRlJyxwYXJhbWV0ZXJzOidtZW51aXRlbSd9LFxuXHRcdHtuYW1lOidpY29uY2hhbmdlJyxwYXJhbWV0ZXJzOidtZW51aXRlbSxvbGRJY29uLG5ld0ljb24nfSxcblx0XHR7bmFtZTonbW92ZScscGFyYW1ldGVyczonbWVudWl0ZW0seCx5J30sXG5cdFx0e25hbWU6J3JlbW92ZWQnLHBhcmFtZXRlcnM6J21lbnVpdGVtLG93bmVyQ3QnfSxcblx0XHR7bmFtZToncmVuZGVyJyxwYXJhbWV0ZXJzOidtZW51aXRlbSd9LFxuXHRcdHtuYW1lOidyZXNpemUnLHBhcmFtZXRlcnM6J21lbnVpdGVtLHdpZHRoLGhlaWdodCxvbGRXaWR0aCxvbGRIZWlnaHQnfSxcblx0XHR7bmFtZTonc2hvdycscGFyYW1ldGVyczonbWVudWl0ZW0nfSxcblx0XHR7bmFtZTonc3RhdGVyZXN0b3JlJyxwYXJhbWV0ZXJzOidtZW51aXRlbSxzdGF0ZSd9LFxuXHRcdHtuYW1lOidzdGF0ZXNhdmUnLHBhcmFtZXRlcnM6J21lbnVpdGVtLHN0YXRlJ30sXG5cdFx0e25hbWU6J3RleHRjaGFuZ2UnLHBhcmFtZXRlcnM6J21lbnVpdGVtLG9sZFRleHQsbmV3VGV4dCd9LFxuXHRcdHtuYW1lOidyZWFkeScscGFyYW1ldGVyczonJ31cbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXG5cdFx0J2FjdGl2YXRlJyxcblx0XHQnYWRkZWQnLFxuXHRcdCdhZnRlcmxheW91dGFuaW1hdGlvbicsXG5cdFx0J2FmdGVycmVuZGVyJyxcblx0XHQnYmVmb3JlYWN0aXZhdGUnLFxuXHRcdCdiZWZvcmVkZWFjdGl2YXRlJyxcblx0XHQnYmVmb3JlZGVzdHJveScsXG5cdFx0J2JlZm9yZWhpZGUnLFxuXHRcdCdiZWZvcmVyZW5kZXInLFxuXHRcdCdiZWZvcmVzaG93Jyxcblx0XHQnYmVmb3Jlc3RhdGVyZXN0b3JlJyxcblx0XHQnYmVmb3Jlc3RhdGVzYXZlJyxcblx0XHQnYmx1cicsXG5cdFx0J2JveHJlYWR5Jyxcblx0XHQnY2xpY2snLFxuXHRcdCdkZWFjdGl2YXRlJyxcblx0XHQnZGVzdHJveScsXG5cdFx0J2Rpc2FibGUnLFxuXHRcdCdlbmFibGUnLFxuXHRcdCdmb2N1cycsXG5cdFx0J2ZvY3VzZW50ZXInLFxuXHRcdCdmb2N1c2xlYXZlJyxcblx0XHQnaGlkZScsXG5cdFx0J2ljb25jaGFuZ2UnLFxuXHRcdCdtb3ZlJyxcblx0XHQncmVtb3ZlZCcsXG5cdFx0J3JlbmRlcicsXG5cdFx0J3Jlc2l6ZScsXG5cdFx0J3Nob3cnLFxuXHRcdCdzdGF0ZXJlc3RvcmUnLFxuXHRcdCdzdGF0ZXNhdmUnLFxuXHRcdCd0ZXh0Y2hhbmdlJyxcblx0XHQncmVhZHknXG5dO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWVudWl0ZW0nLCBcbiAgaW5wdXRzOiBtZW51aXRlbU1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IG1lbnVpdGVtTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IGJhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dE1lbnVpdGVtQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZSAjZHluYW1pYz48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0TWVudWl0ZW1Db21wb25lbnQgZXh0ZW5kcyBiYXNlIGltcGxlbWVudHMgT25Jbml0LEFmdGVyQ29udGVudEluaXQsT25DaGFuZ2VzIHtcbiAgY29uc3RydWN0b3IoZVJlZjpFbGVtZW50UmVmKSB7c3VwZXIoZVJlZixtZW51aXRlbU1ldGFEYXRhKX1cbiAgcHVibGljIG5nT25Jbml0KCkge3RoaXMuYmFzZU9uSW5pdChtZW51aXRlbU1ldGFEYXRhKX1cbiAgLy9wdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgICB0aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgICB9XG59Il19