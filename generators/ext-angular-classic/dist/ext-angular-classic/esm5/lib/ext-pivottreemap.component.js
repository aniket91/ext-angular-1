/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
var pivottreemapMetaData = /** @class */ (function () {
    function pivottreemapMetaData() {
    }
    pivottreemapMetaData.XTYPE = 'pivottreemap';
    pivottreemapMetaData.PROPERTIESOBJECT = {
        "ariaAttributes": "Object",
        "ariaDescribedBy": "String",
        "ariaLabel": "String",
        "ariaLabelledBy": "String",
        "autoExpand": "Boolean",
        "bind": "Object/String",
        "border": "Boolean",
        "busyLayoutText": "String",
        "clipScene": "Boolean",
        "cls": "String/String[]",
        "colorAxis": "Ext.d3.axis.Color",
        "componentCls": "String",
        "controller": "String/Object/Ext.app.ViewController",
        "defaultListenerScope": "Boolean",
        "disabled": "Boolean",
        "eventHandlers": "Object",
        "expandEventName": "String/String[]",
        "focusCls": "String",
        "height": "Number/String",
        "hidden": "Boolean",
        "hideMode": "'clip'/'display'/'offsets'/'opacity'/'visibility'",
        "hierarchyCls": "String",
        "instanceCls": "String/String[]",
        "interactions": "any",
        "keyMap": "Object",
        "keyMapEnabled": "Boolean",
        "keyMapTarget": "String",
        "layout": "Function",
        "leafTile": "Object",
        "linkKey": "Function",
        "listeners": "Object",
        "matrix": "Ext.pivot.matrix.Base",
        "name": "String",
        "nameable": "Boolean",
        "nodeChildren": "Function",
        "nodeClass": "Function",
        "nodeKey": "Function",
        "nodeText": "Function/String/String[]",
        "nodeTransform": "Function",
        "nodeValue": "Function/String/Number",
        "noParentValue": "Boolean",
        "noSizeLayout": "Boolean",
        "padding": "Object/String/Number",
        "parentTile": "Object",
        "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
        "publishes": "String/String[]/Object",
        "reference": "String",
        "renderLinks": "Boolean",
        "renderTo": "Ext.Element",
        "ripple": "Boolean/Object/String",
        "rootVisible": "Boolean",
        "scaleLabels": "Boolean",
        "selectEventName": "String/String[]",
        "selection": "Ext.data.TreeModel",
        "session": "Boolean/Object/Ext.data.Session",
        "shareableName": "Boolean",
        "size": "Object",
        "sorter": "Function",
        "store": "Ext.data.Store",
        "style": "String/Object",
        "tiling": "Function",
        "tooltip": "Ext.tip.ToolTip",
        "touchAction": "Object",
        "transitions": "any",
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
    pivottreemapMetaData.PROPERTIES = [
        'ariaAttributes',
        'ariaDescribedBy',
        'ariaLabel',
        'ariaLabelledBy',
        'autoExpand',
        'bind',
        'border',
        'busyLayoutText',
        'clipScene',
        'cls',
        'colorAxis',
        'componentCls',
        'controller',
        'defaultListenerScope',
        'disabled',
        'eventHandlers',
        'expandEventName',
        'focusCls',
        'height',
        'hidden',
        'hideMode',
        'hierarchyCls',
        'instanceCls',
        'interactions',
        'keyMap',
        'keyMapEnabled',
        'keyMapTarget',
        'layout',
        'leafTile',
        'linkKey',
        'listeners',
        'matrix',
        'name',
        'nameable',
        'nodeChildren',
        'nodeClass',
        'nodeKey',
        'nodeText',
        'nodeTransform',
        'nodeValue',
        'noParentValue',
        'noSizeLayout',
        'padding',
        'parentTile',
        'plugins',
        'publishes',
        'reference',
        'renderLinks',
        'renderTo',
        'ripple',
        'rootVisible',
        'scaleLabels',
        'selectEventName',
        'selection',
        'session',
        'shareableName',
        'size',
        'sorter',
        'store',
        'style',
        'tiling',
        'tooltip',
        'touchAction',
        'transitions',
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
    pivottreemapMetaData.EVENTS = [
        { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'blur', parameters: 'pivottreemap,event' },
        { name: 'disabledchange', parameters: 'sender,value,oldValue' },
        { name: 'focus', parameters: 'pivottreemap,event' },
        { name: 'focusenter', parameters: 'pivottreemap,event' },
        { name: 'focusleave', parameters: 'pivottreemap,event' },
        { name: 'heightchange', parameters: 'sender,value,oldValue' },
        { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
        { name: 'layout', parameters: 'component' },
        { name: 'sceneresize', parameters: 'component,scene,size' },
        { name: 'scenesetup', parameters: 'component,scene' },
        { name: 'widthchange', parameters: 'sender,value,oldValue' },
        { name: 'ready', parameters: '' }
    ];
    pivottreemapMetaData.EVENTNAMES = [
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
        'layout',
        'sceneresize',
        'scenesetup',
        'widthchange',
        'ready'
    ];
    return pivottreemapMetaData;
}());
export { pivottreemapMetaData };
if (false) {
    /** @type {?} */
    pivottreemapMetaData.XTYPE;
    /** @type {?} */
    pivottreemapMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    pivottreemapMetaData.PROPERTIES;
    /** @type {?} */
    pivottreemapMetaData.EVENTS;
    /** @type {?} */
    pivottreemapMetaData.EVENTNAMES;
}
var ExtPivottreemapComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtPivottreemapComponent, _super);
    function ExtPivottreemapComponent(eRef) {
        return _super.call(this, eRef, pivottreemapMetaData) || this;
    }
    /**
     * @return {?}
     */
    ExtPivottreemapComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { this.baseOnInit(pivottreemapMetaData); };
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ExtPivottreemapComponent.prototype.ngAfterContentInit = 
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    function () {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    };
    ExtPivottreemapComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pivottreemap',
                    inputs: pivottreemapMetaData.PROPERTIES,
                    outputs: pivottreemapMetaData.EVENTNAMES,
                    providers: [{ provide: base, useExisting: forwardRef(function () { return ExtPivottreemapComponent; }) }],
                    template: '<ng-template #dynamic></ng-template>'
                }] }
    ];
    /** @nocollapse */
    ExtPivottreemapComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return ExtPivottreemapComponent;
}(base));
export { ExtPivottreemapComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXBpdm90dHJlZW1hcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLWNsYXNzaWMvIiwic291cmNlcyI6WyJsaWIvZXh0LXBpdm90dHJlZW1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBS0wsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM5QjtJQUFBO0lBNExBLENBQUM7SUEzTGUsMEJBQUssR0FBVyxjQUFjLENBQUM7SUFDL0IscUNBQWdCLEdBQVE7UUFDcEMsZ0JBQWdCLEVBQUUsUUFBUTtRQUMxQixpQkFBaUIsRUFBRSxRQUFRO1FBQzNCLFdBQVcsRUFBRSxRQUFRO1FBQ3JCLGdCQUFnQixFQUFFLFFBQVE7UUFDMUIsWUFBWSxFQUFFLFNBQVM7UUFDdkIsTUFBTSxFQUFFLGVBQWU7UUFDdkIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsZ0JBQWdCLEVBQUUsUUFBUTtRQUMxQixXQUFXLEVBQUUsU0FBUztRQUN0QixLQUFLLEVBQUUsaUJBQWlCO1FBQ3hCLFdBQVcsRUFBRSxtQkFBbUI7UUFDaEMsY0FBYyxFQUFFLFFBQVE7UUFDeEIsWUFBWSxFQUFFLHNDQUFzQztRQUNwRCxzQkFBc0IsRUFBRSxTQUFTO1FBQ2pDLFVBQVUsRUFBRSxTQUFTO1FBQ3JCLGVBQWUsRUFBRSxRQUFRO1FBQ3pCLGlCQUFpQixFQUFFLGlCQUFpQjtRQUNwQyxVQUFVLEVBQUUsUUFBUTtRQUNwQixRQUFRLEVBQUUsZUFBZTtRQUN6QixRQUFRLEVBQUUsU0FBUztRQUNuQixVQUFVLEVBQUUsbURBQW1EO1FBQy9ELGNBQWMsRUFBRSxRQUFRO1FBQ3hCLGFBQWEsRUFBRSxpQkFBaUI7UUFDaEMsY0FBYyxFQUFFLEtBQUs7UUFDckIsUUFBUSxFQUFFLFFBQVE7UUFDbEIs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Q0FBQSxBQWZELENBTzhDLElBQUksR0FRakQ7U0FSWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi9iYXNlJztcbmV4cG9ydCBjbGFzcyBwaXZvdHRyZWVtYXBNZXRhRGF0YSB7XG4gIHB1YmxpYyBzdGF0aWMgWFRZUEU6IHN0cmluZyA9ICdwaXZvdHRyZWVtYXAnO1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVNPQkpFQ1Q6IGFueSA9IHtcbiAgICBcImFyaWFBdHRyaWJ1dGVzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJhcmlhRGVzY3JpYmVkQnlcIjogXCJTdHJpbmdcIixcbiAgICBcImFyaWFMYWJlbFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXJpYUxhYmVsbGVkQnlcIjogXCJTdHJpbmdcIixcbiAgICBcImF1dG9FeHBhbmRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJiaW5kXCI6IFwiT2JqZWN0L1N0cmluZ1wiLFxuICAgIFwiYm9yZGVyXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiYnVzeUxheW91dFRleHRcIjogXCJTdHJpbmdcIixcbiAgICBcImNsaXBTY2VuZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwiY29sb3JBeGlzXCI6IFwiRXh0LmQzLmF4aXMuQ29sb3JcIixcbiAgICBcImNvbXBvbmVudENsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiY29udHJvbGxlclwiOiBcIlN0cmluZy9PYmplY3QvRXh0LmFwcC5WaWV3Q29udHJvbGxlclwiLFxuICAgIFwiZGVmYXVsdExpc3RlbmVyU2NvcGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkaXNhYmxlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImV2ZW50SGFuZGxlcnNcIjogXCJPYmplY3RcIixcbiAgICBcImV4cGFuZEV2ZW50TmFtZVwiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwiZm9jdXNDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImhlaWdodFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcImhpZGRlblwiOiBcIkJvb2xlYW5cIixcbiAgICBcImhpZGVNb2RlXCI6IFwiJ2NsaXAnLydkaXNwbGF5Jy8nb2Zmc2V0cycvJ29wYWNpdHknLyd2aXNpYmlsaXR5J1wiLFxuICAgIFwiaGllcmFyY2h5Q2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJpbnN0YW5jZUNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwiaW50ZXJhY3Rpb25zXCI6IFwiYW55XCIsXG4gICAgXCJrZXlNYXBcIjogXCJPYmplY3RcIixcbiAgICBcImtleU1hcEVuYWJsZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJrZXlNYXBUYXJnZXRcIjogXCJTdHJpbmdcIixcbiAgICBcImxheW91dFwiOiBcIkZ1bmN0aW9uXCIsXG4gICAgXCJsZWFmVGlsZVwiOiBcIk9iamVjdFwiLFxuICAgIFwibGlua0tleVwiOiBcIkZ1bmN0aW9uXCIsXG4gICAgXCJsaXN0ZW5lcnNcIjogXCJPYmplY3RcIixcbiAgICBcIm1hdHJpeFwiOiBcIkV4dC5waXZvdC5tYXRyaXguQmFzZVwiLFxuICAgIFwibmFtZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwibmFtZWFibGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJub2RlQ2hpbGRyZW5cIjogXCJGdW5jdGlvblwiLFxuICAgIFwibm9kZUNsYXNzXCI6IFwiRnVuY3Rpb25cIixcbiAgICBcIm5vZGVLZXlcIjogXCJGdW5jdGlvblwiLFxuICAgIFwibm9kZVRleHRcIjogXCJGdW5jdGlvbi9TdHJpbmcvU3RyaW5nW11cIixcbiAgICBcIm5vZGVUcmFuc2Zvcm1cIjogXCJGdW5jdGlvblwiLFxuICAgIFwibm9kZVZhbHVlXCI6IFwiRnVuY3Rpb24vU3RyaW5nL051bWJlclwiLFxuICAgIFwibm9QYXJlbnRWYWx1ZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcIm5vU2l6ZUxheW91dFwiOiBcIkJvb2xlYW5cIixcbiAgICBcInBhZGRpbmdcIjogXCJPYmplY3QvU3RyaW5nL051bWJlclwiLFxuICAgIFwicGFyZW50VGlsZVwiOiBcIk9iamVjdFwiLFxuICAgIFwicGx1Z2luc1wiOiBcIkFycmF5L0V4dC5lbnVtcy5QbHVnaW4vT2JqZWN0L0V4dC5wbHVnaW4uQWJzdHJhY3RcIixcbiAgICBcInB1Ymxpc2hlc1wiOiBcIlN0cmluZy9TdHJpbmdbXS9PYmplY3RcIixcbiAgICBcInJlZmVyZW5jZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwicmVuZGVyTGlua3NcIjogXCJCb29sZWFuXCIsXG4gICAgXCJyZW5kZXJUb1wiOiBcIkV4dC5FbGVtZW50XCIsXG4gICAgXCJyaXBwbGVcIjogXCJCb29sZWFuL09iamVjdC9TdHJpbmdcIixcbiAgICBcInJvb3RWaXNpYmxlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwic2NhbGVMYWJlbHNcIjogXCJCb29sZWFuXCIsXG4gICAgXCJzZWxlY3RFdmVudE5hbWVcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcInNlbGVjdGlvblwiOiBcIkV4dC5kYXRhLlRyZWVNb2RlbFwiLFxuICAgIFwic2Vzc2lvblwiOiBcIkJvb2xlYW4vT2JqZWN0L0V4dC5kYXRhLlNlc3Npb25cIixcbiAgICBcInNoYXJlYWJsZU5hbWVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJzaXplXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJzb3J0ZXJcIjogXCJGdW5jdGlvblwiLFxuICAgIFwic3RvcmVcIjogXCJFeHQuZGF0YS5TdG9yZVwiLFxuICAgIFwic3R5bGVcIjogXCJTdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJ0aWxpbmdcIjogXCJGdW5jdGlvblwiLFxuICAgIFwidG9vbHRpcFwiOiBcIkV4dC50aXAuVG9vbFRpcFwiLFxuICAgIFwidG91Y2hBY3Rpb25cIjogXCJPYmplY3RcIixcbiAgICBcInRyYW5zaXRpb25zXCI6IFwiYW55XCIsXG4gICAgXCJ0d29XYXlCaW5kYWJsZVwiOiBcIlN0cmluZy9TdHJpbmdbXS9PYmplY3RcIixcbiAgICBcInVpXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJ1c2VyQ2xzXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJ2aWV3TW9kZWxcIjogXCJTdHJpbmcvT2JqZWN0L0V4dC5hcHAuVmlld01vZGVsXCIsXG4gICAgXCJ3aWR0aFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcInBsYXRmb3JtQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJyZXNwb25zaXZlQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJmaXRUb1BhcmVudFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNvbmZpZ1wiOiBcIk9iamVjdFwiLFxufTtcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbiAgICAnYXJpYUF0dHJpYnV0ZXMnLFxuICAgICdhcmlhRGVzY3JpYmVkQnknLFxuICAgICdhcmlhTGFiZWwnLFxuICAgICdhcmlhTGFiZWxsZWRCeScsXG4gICAgJ2F1dG9FeHBhbmQnLFxuICAgICdiaW5kJyxcbiAgICAnYm9yZGVyJyxcbiAgICAnYnVzeUxheW91dFRleHQnLFxuICAgICdjbGlwU2NlbmUnLFxuICAgICdjbHMnLFxuICAgICdjb2xvckF4aXMnLFxuICAgICdjb21wb25lbnRDbHMnLFxuICAgICdjb250cm9sbGVyJyxcbiAgICAnZGVmYXVsdExpc3RlbmVyU2NvcGUnLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ2V2ZW50SGFuZGxlcnMnLFxuICAgICdleHBhbmRFdmVudE5hbWUnLFxuICAgICdmb2N1c0NscycsXG4gICAgJ2hlaWdodCcsXG4gICAgJ2hpZGRlbicsXG4gICAgJ2hpZGVNb2RlJyxcbiAgICAnaGllcmFyY2h5Q2xzJyxcbiAgICAnaW5zdGFuY2VDbHMnLFxuICAgICdpbnRlcmFjdGlvbnMnLFxuICAgICdrZXlNYXAnLFxuICAgICdrZXlNYXBFbmFibGVkJyxcbiAgICAna2V5TWFwVGFyZ2V0JyxcbiAgICAnbGF5b3V0JyxcbiAgICAnbGVhZlRpbGUnLFxuICAgICdsaW5rS2V5JyxcbiAgICAnbGlzdGVuZXJzJyxcbiAgICAnbWF0cml4JyxcbiAgICAnbmFtZScsXG4gICAgJ25hbWVhYmxlJyxcbiAgICAnbm9kZUNoaWxkcmVuJyxcbiAgICAnbm9kZUNsYXNzJyxcbiAgICAnbm9kZUtleScsXG4gICAgJ25vZGVUZXh0JyxcbiAgICAnbm9kZVRyYW5zZm9ybScsXG4gICAgJ25vZGVWYWx1ZScsXG4gICAgJ25vUGFyZW50VmFsdWUnLFxuICAgICdub1NpemVMYXlvdXQnLFxuICAgICdwYWRkaW5nJyxcbiAgICAncGFyZW50VGlsZScsXG4gICAgJ3BsdWdpbnMnLFxuICAgICdwdWJsaXNoZXMnLFxuICAgICdyZWZlcmVuY2UnLFxuICAgICdyZW5kZXJMaW5rcycsXG4gICAgJ3JlbmRlclRvJyxcbiAgICAncmlwcGxlJyxcbiAgICAncm9vdFZpc2libGUnLFxuICAgICdzY2FsZUxhYmVscycsXG4gICAgJ3NlbGVjdEV2ZW50TmFtZScsXG4gICAgJ3NlbGVjdGlvbicsXG4gICAgJ3Nlc3Npb24nLFxuICAgICdzaGFyZWFibGVOYW1lJyxcbiAgICAnc2l6ZScsXG4gICAgJ3NvcnRlcicsXG4gICAgJ3N0b3JlJyxcbiAgICAnc3R5bGUnLFxuICAgICd0aWxpbmcnLFxuICAgICd0b29sdGlwJyxcbiAgICAndG91Y2hBY3Rpb24nLFxuICAgICd0cmFuc2l0aW9ucycsXG4gICAgJ3R3b1dheUJpbmRhYmxlJyxcbiAgICAndWknLFxuICAgICd1c2VyQ2xzJyxcbiAgICAndmlld01vZGVsJyxcbiAgICAnd2lkdGgnLFxuICAgICdwbGF0Zm9ybUNvbmZpZycsXG4gICAgJ3Jlc3BvbnNpdmVDb25maWcnLFxuICAgICdmaXRUb1BhcmVudCcsXG4gICAgJ2NvbmZpZydcbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcblx0XHR7bmFtZTonYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWhpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmV3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidibHVyJyxwYXJhbWV0ZXJzOidwaXZvdHRyZWVtYXAsZXZlbnQnfSxcblx0XHR7bmFtZTonZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidmb2N1cycscGFyYW1ldGVyczoncGl2b3R0cmVlbWFwLGV2ZW50J30sXG5cdFx0e25hbWU6J2ZvY3VzZW50ZXInLHBhcmFtZXRlcnM6J3Bpdm90dHJlZW1hcCxldmVudCd9LFxuXHRcdHtuYW1lOidmb2N1c2xlYXZlJyxwYXJhbWV0ZXJzOidwaXZvdHRyZWVtYXAsZXZlbnQnfSxcblx0XHR7bmFtZTonaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonaGlkZGVuY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonbGF5b3V0JyxwYXJhbWV0ZXJzOidjb21wb25lbnQnfSxcblx0XHR7bmFtZTonc2NlbmVyZXNpemUnLHBhcmFtZXRlcnM6J2NvbXBvbmVudCxzY2VuZSxzaXplJ30sXG5cdFx0e25hbWU6J3NjZW5lc2V0dXAnLHBhcmFtZXRlcnM6J2NvbXBvbmVudCxzY2VuZSd9LFxuXHRcdHtuYW1lOid3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtcblx0XHQnYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVoZWlnaHRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVoaWRkZW5jaGFuZ2UnLFxuXHRcdCdiZWZvcmV3aWR0aGNoYW5nZScsXG5cdFx0J2JsdXInLFxuXHRcdCdkaXNhYmxlZGNoYW5nZScsXG5cdFx0J2ZvY3VzJyxcblx0XHQnZm9jdXNlbnRlcicsXG5cdFx0J2ZvY3VzbGVhdmUnLFxuXHRcdCdoZWlnaHRjaGFuZ2UnLFxuXHRcdCdoaWRkZW5jaGFuZ2UnLFxuXHRcdCdsYXlvdXQnLFxuXHRcdCdzY2VuZXJlc2l6ZScsXG5cdFx0J3NjZW5lc2V0dXAnLFxuXHRcdCd3aWR0aGNoYW5nZScsXG5cdFx0J3JlYWR5J1xuXTtcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Bpdm90dHJlZW1hcCcsIFxuICBpbnB1dHM6IHBpdm90dHJlZW1hcE1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IHBpdm90dHJlZW1hcE1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBiYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRQaXZvdHRyZWVtYXBDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlICNkeW5hbWljPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRQaXZvdHRyZWVtYXBDb21wb25lbnQgZXh0ZW5kcyBiYXNlIGltcGxlbWVudHMgT25Jbml0LEFmdGVyQ29udGVudEluaXQsT25DaGFuZ2VzIHtcbiAgY29uc3RydWN0b3IoZVJlZjpFbGVtZW50UmVmKSB7c3VwZXIoZVJlZixwaXZvdHRyZWVtYXBNZXRhRGF0YSl9XG4gIHB1YmxpYyBuZ09uSW5pdCgpIHt0aGlzLmJhc2VPbkluaXQocGl2b3R0cmVlbWFwTWV0YURhdGEpfVxuICAvL3B1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7dGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpfVxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuYmFzZUFmdGVyQ29udGVudEluaXQoKVxuICAgIHRoaXNbJ3JlYWR5J10uZW1pdCh0aGlzKVxuICAgIH1cbn0iXX0=