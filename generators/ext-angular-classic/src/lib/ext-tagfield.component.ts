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
export class tagfieldMetaData {
  public static XTYPE: string = 'tagfield';
  public static PROPERTIESOBJECT: any = {
    "activeCounter": "Number",
    "activeError": "String",
    "activeErrorsTpl": "String/String[]/Ext.XTemplate",
    "afterBodyEl": "String/Array/Ext.XTemplate",
    "afterLabelTextTpl": "String/Array/Ext.XTemplate",
    "afterLabelTpl": "String/Array/Ext.XTemplate",
    "afterSubTpl": "String/Array/Ext.XTemplate",
    "alignOnScroll": "Boolean",
    "alignTarget": "String",
    "allowBlank": "Boolean",
    "allowOnlyWhitespace": "any",
    "allQuery": "String",
    "alwaysOnTop": "Boolean/Number",
    "anchor": "String",
    "animateShadow": "Boolean",
    "anyMatch": "Boolean",
    "ariaAttributes": "Object",
    "ariaAvailableListLabel": "String",
    "ariaDescribedBy": "String",
    "ariaDeselectedText": "String",
    "ariaErrorText": "String",
    "ariaHelp": "String",
    "ariaHelpText": "String",
    "ariaHelpTextEditable": "String",
    "ariaLabel": "String",
    "ariaLabelledBy": "String",
    "ariaNoneSelectedText": "String",
    "ariaSelectedListLabel": "String",
    "ariaSelectedText": "String",
    "autoEl": "String/Object",
    "autoFitErrors": "Boolean",
    "autoHideInputMask": "Boolean",
    "autoLoadOnValue": "Boolean",
    "autoRender": "Boolean/String/HTMLElement/Ext.dom.Element",
    "autoScroll": "Boolean",
    "autoSelect": "Boolean",
    "autoSelectLast": "Boolean",
    "autoShow": "Boolean",
    "baseBodyCls": "String",
    "baseCls": "String",
    "beforeBodyEl": "String/Array/Ext.XTemplate",
    "beforeLabelTextTpl": "String/Array/Ext.XTemplate",
    "beforeLabelTpl": "String/Array/Ext.XTemplate",
    "beforeSubTpl": "String/Array/Ext.XTemplate",
    "bind": "Object/String",
    "blankText": "String",
    "border": "Number/String/Boolean",
    "caseSensitive": "Boolean",
    "checkChangeBuffer": "Number",
    "checkChangeEvents": "String[]",
    "childEls": "Object/String[]/Object[]",
    "clearFilterOnBlur": "Boolean",
    "clearOnBackspace": "Boolean",
    "cls": "String/String[]",
    "collapseOnSelect": "Boolean",
    "columnWidth": "Number",
    "componentCls": "String",
    "componentLayout": "String/Object",
    "constrain": "Boolean",
    "constraintInsets": "Object/String",
    "constrainTo": "Ext.util.Region/Ext.dom.Element",
    "contentEl": "String",
    "controller": "String/Object/Ext.app.ViewController",
    "createNewOnBlur": "Boolean",
    "createNewOnEnter": "Boolean",
    "data": "Object",
    "defaultAlign": "String",
    "defaultListConfig": "Object",
    "defaultListenerScope": "Boolean",
    "delimiter": "String",
    "dirtyCls": "String",
    "disabled": "Boolean",
    "disabledCls": "String",
    "disableKeyFilter": "Boolean",
    "displayField": "String",
    "displayTpl": "String/String[]/Ext.XTemplate",
    "dock": "'top'/'bottom'/'left'/'right'",
    "draggable": "Boolean/Object",
    "editable": "Boolean",
    "emptyCls": "String",
    "emptyText": "String",
    "enableKeyEvents": "Boolean",
    "enableRegEx": "Boolean",
    "encodeSubmitValue": "Boolean",
    "enforceMaxLength": "Boolean",
    "errorMsgCls": "String",
    "fieldBodyCls": "String",
    "fieldCls": "String",
    "fieldLabel": "String",
    "fieldStyle": "String",
    "fieldSubTpl": "any",
    "filterPickList": "Boolean",
    "fixed": "Boolean",
    "flex": "Number",
    "floating": "Boolean",
    "focusCls": "String",
    "focusOnToFront": "Boolean",
    "forceSelection": "Boolean",
    "formatText": "String",
    "formBind": "Boolean",
    "formItemCls": "String",
    "frame": "Boolean",
    "grow": "Boolean",
    "growMax": "Number/Boolean",
    "growMin": "Number/Boolean",
    "growToLongestValue": "any",
    "height": "Number|String",
    "hidden": "Boolean",
    "hiddenDataCls": "String",
    "hiddenName": "String",
    "hideEmptyLabel": "Boolean",
    "hideLabel": "Boolean",
    "hideMode": "String",
    "hideTrigger": "Boolean",
    "html": "String/Object",
    "id": "String",
    "inputAttrTpl": "String/Array/Ext.XTemplate",
    "inputId": "String",
    "inputMask": "String/Ext.field.InputMask",
    "inputType": "String",
    "inputWrapCls": "String",
    "invalidCls": "String",
    "invalidText": "String",
    "isTextInput": "Boolean",
    "itemId": "String",
    "keyMap": "Object",
    "keyMapEnabled": "Boolean",
    "keyMapTarget": "String",
    "labelableRenderTpl": "String/String[]/Ext.XTemplate",
    "labelAlign": "String",
    "labelAttrTpl": "String/Array/Ext.XTemplate",
    "labelCls": "String",
    "labelClsExtra": "String",
    "labelPad": "Number",
    "labelSeparator": "String",
    "labelStyle": "String",
    "labelTpl": "String/Ext.XTemplate",
    "labelWidth": "Number",
    "liquidLayout": "Boolean",
    "listConfig": "Object",
    "listeners": "Object",
    "liveDrag": "Boolean",
    "loader": "Ext.ComponentLoader/Object",
    "margin": "Number/String",
    "maskDefaults": "Object",
    "maskElement": "String",
    "maskRe": "RegExp",
    "matchFieldWidth": "Boolean",
    "maxHeight": "Number",
    "maxLength": "Number",
    "maxLengthText": "String",
    "maxWidth": "Number",
    "minChars": "Number",
    "minHeight": "Number",
    "minLength": "Number",
    "minLengthText": "String",
    "minWidth": "Number",
    "modal": "Boolean",
    "modelValidation": "Boolean",
    "msgTarget": "String",
    "multiSelect": "Boolean",
    "name": "String",
    "nameable": "Boolean",
    "openCls": "String",
    "overCls": "String",
    "overflowX": "String",
    "overflowY": "String",
    "padding": "Number/String",
    "pageSize": "Number",
    "pickerAlign": "String",
    "pickerOffset": "Number[]",
    "pinList": "Boolean",
    "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
    "preventMark": "Boolean",
    "publishes": "String/String[]/Object",
    "queryCaching": "Boolean",
    "queryDelay": "Number",
    "queryMode": "String",
    "queryParam": "String",
    "readOnly": "Boolean",
    "readOnlyCls": "String",
    "reference": "String",
    "regex": "RegExp",
    "regexText": "String",
    "region": "'north'/'south'/'east'/'west'/'center'",
    "renderConfig": "Object",
    "renderData": "Object",
    "renderSelectors": "Object",
    "renderTo": "String/HTMLElement/Ext.dom.Element",
    "renderTpl": "Ext.XTemplate/String/String[]",
    "repeatTriggerClick": "Boolean",
    "requiredCls": "String",
    "resizable": "Boolean/Object",
    "resizeHandles": "String",
    "saveDelay": "Number",
    "scrollable": "Boolean/String/Object",
    "selection": "Ext.data.Model",
    "selectOnFocus": "Boolean",
    "selectOnTab": "Boolean",
    "session": "Boolean/Object/Ext.data.Session",
    "shadow": "String/Boolean",
    "shadowOffset": "Number",
    "shareableName": "Boolean",
    "shim": "Boolean",
    "shrinkWrap": "Boolean/Number",
    "simulatePlaceholder": "Boolean",
    "size": "Number",
    "stacked": "Boolean",
    "stateEvents": "String[]",
    "stateful": "Boolean/Object",
    "stateId": "String",
    "store": "Ext.data.Store/String/Array/Object",
    "stripCharsRe": "RegExp",
    "style": "String/Object",
    "submitValue": "Boolean",
    "tabIndex": "Number",
    "tipTpl": "String/Ext.XTemplate",
    "toFrontOnShow": "Boolean",
    "touchAction": "Object",
    "tpl": "Ext.XTemplate/Ext.Template/String/String[]",
    "tplWriteMode": "String",
    "transform": "String/HTMLElement/Ext.dom.Element",
    "transformInPlace": "Boolean",
    "triggerAction": "String",
    "triggerCls": "String",
    "triggerOnClick": "Boolean",
    "triggers": "Object",
    "triggerWrapCls": "String",
    "twoWayBindable": "String/String[]/Object",
    "typeAhead": "Boolean",
    "typeAheadDelay": "Number",
    "ui": "String",
    "uiCls": "String[]",
    "userCls": "String/String[]",
    "validateBlank": "Boolean",
    "validateOnBlur": "Boolean",
    "validateOnChange": "Boolean",
    "validateOnFocusLeave": "Boolean",
    "validation": "Boolean/String",
    "validationField": "Ext.data.Field",
    "validator": "Function",
    "value": "Object",
    "valueField": "String",
    "valueNotFoundText": "String",
    "valueParam": "String",
    "valuePublishEvent": "String[]/String",
    "viewModel": "String/Object/Ext.app.ViewModel",
    "vtype": "String",
    "vtypeText": "String",
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
    'activeError',
    'activeErrorsTpl',
    'afterBodyEl',
    'afterLabelTextTpl',
    'afterLabelTpl',
    'afterSubTpl',
    'alignOnScroll',
    'alignTarget',
    'allowBlank',
    'allowOnlyWhitespace',
    'allQuery',
    'alwaysOnTop',
    'anchor',
    'animateShadow',
    'anyMatch',
    'ariaAttributes',
    'ariaAvailableListLabel',
    'ariaDescribedBy',
    'ariaDeselectedText',
    'ariaErrorText',
    'ariaHelp',
    'ariaHelpText',
    'ariaHelpTextEditable',
    'ariaLabel',
    'ariaLabelledBy',
    'ariaNoneSelectedText',
    'ariaSelectedListLabel',
    'ariaSelectedText',
    'autoEl',
    'autoFitErrors',
    'autoHideInputMask',
    'autoLoadOnValue',
    'autoRender',
    'autoScroll',
    'autoSelect',
    'autoSelectLast',
    'autoShow',
    'baseBodyCls',
    'baseCls',
    'beforeBodyEl',
    'beforeLabelTextTpl',
    'beforeLabelTpl',
    'beforeSubTpl',
    'bind',
    'blankText',
    'border',
    'caseSensitive',
    'checkChangeBuffer',
    'checkChangeEvents',
    'childEls',
    'clearFilterOnBlur',
    'clearOnBackspace',
    'cls',
    'collapseOnSelect',
    'columnWidth',
    'componentCls',
    'componentLayout',
    'constrain',
    'constraintInsets',
    'constrainTo',
    'contentEl',
    'controller',
    'createNewOnBlur',
    'createNewOnEnter',
    'data',
    'defaultAlign',
    'defaultListConfig',
    'defaultListenerScope',
    'delimiter',
    'dirtyCls',
    'disabled',
    'disabledCls',
    'disableKeyFilter',
    'displayField',
    'displayTpl',
    'dock',
    'draggable',
    'editable',
    'emptyCls',
    'emptyText',
    'enableKeyEvents',
    'enableRegEx',
    'encodeSubmitValue',
    'enforceMaxLength',
    'errorMsgCls',
    'fieldBodyCls',
    'fieldCls',
    'fieldLabel',
    'fieldStyle',
    'fieldSubTpl',
    'filterPickList',
    'fixed',
    'flex',
    'floating',
    'focusCls',
    'focusOnToFront',
    'forceSelection',
    'formatText',
    'formBind',
    'formItemCls',
    'frame',
    'grow',
    'growMax',
    'growMin',
    'growToLongestValue',
    'height',
    'hidden',
    'hiddenDataCls',
    'hiddenName',
    'hideEmptyLabel',
    'hideLabel',
    'hideMode',
    'hideTrigger',
    'html',
    'id',
    'inputAttrTpl',
    'inputId',
    'inputMask',
    'inputType',
    'inputWrapCls',
    'invalidCls',
    'invalidText',
    'isTextInput',
    'itemId',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'labelableRenderTpl',
    'labelAlign',
    'labelAttrTpl',
    'labelCls',
    'labelClsExtra',
    'labelPad',
    'labelSeparator',
    'labelStyle',
    'labelTpl',
    'labelWidth',
    'liquidLayout',
    'listConfig',
    'listeners',
    'liveDrag',
    'loader',
    'margin',
    'maskDefaults',
    'maskElement',
    'maskRe',
    'matchFieldWidth',
    'maxHeight',
    'maxLength',
    'maxLengthText',
    'maxWidth',
    'minChars',
    'minHeight',
    'minLength',
    'minLengthText',
    'minWidth',
    'modal',
    'modelValidation',
    'msgTarget',
    'multiSelect',
    'name',
    'nameable',
    'openCls',
    'overCls',
    'overflowX',
    'overflowY',
    'padding',
    'pageSize',
    'pickerAlign',
    'pickerOffset',
    'pinList',
    'plugins',
    'preventMark',
    'publishes',
    'queryCaching',
    'queryDelay',
    'queryMode',
    'queryParam',
    'readOnly',
    'readOnlyCls',
    'reference',
    'regex',
    'regexText',
    'region',
    'renderConfig',
    'renderData',
    'renderSelectors',
    'renderTo',
    'renderTpl',
    'repeatTriggerClick',
    'requiredCls',
    'resizable',
    'resizeHandles',
    'saveDelay',
    'scrollable',
    'selection',
    'selectOnFocus',
    'selectOnTab',
    'session',
    'shadow',
    'shadowOffset',
    'shareableName',
    'shim',
    'shrinkWrap',
    'simulatePlaceholder',
    'size',
    'stacked',
    'stateEvents',
    'stateful',
    'stateId',
    'store',
    'stripCharsRe',
    'style',
    'submitValue',
    'tabIndex',
    'tipTpl',
    'toFrontOnShow',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'transform',
    'transformInPlace',
    'triggerAction',
    'triggerCls',
    'triggerOnClick',
    'triggers',
    'triggerWrapCls',
    'twoWayBindable',
    'typeAhead',
    'typeAheadDelay',
    'ui',
    'uiCls',
    'userCls',
    'validateBlank',
    'validateOnBlur',
    'validateOnChange',
    'validateOnFocusLeave',
    'validation',
    'validationField',
    'validator',
    'value',
    'valueField',
    'valueNotFoundText',
    'valueParam',
    'valuePublishEvent',
    'viewModel',
    'vtype',
    'vtypeText',
    'weight',
    'width',
    'xtype',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
  public static EVENTS: any[] = [
		{name:'activate',parameters:'tagfield'},
		{name:'added',parameters:'tagfield,container,pos'},
		{name:'afterlayoutanimation',parameters:'tagfield'},
		{name:'afterrender',parameters:'tagfield'},
		{name:'autosize',parameters:'tagfield,height'},
		{name:'beforeactivate',parameters:'tagfield'},
		{name:'beforedeactivate',parameters:'tagfield'},
		{name:'beforedeselect',parameters:'combo,record,index'},
		{name:'beforedestroy',parameters:'tagfield'},
		{name:'beforehide',parameters:'tagfield'},
		{name:'beforequery',parameters:'queryPlan'},
		{name:'beforerender',parameters:'tagfield'},
		{name:'beforeselect',parameters:'combo,record,index'},
		{name:'beforeshow',parameters:'tagfield'},
		{name:'beforestaterestore',parameters:'tagfield,state'},
		{name:'beforestatesave',parameters:'tagfield,state'},
		{name:'blur',parameters:'tagfield,event'},
		{name:'boxready',parameters:'tagfield,width,height'},
		{name:'change',parameters:'tagfield,newValue,oldValue'},
		{name:'collapse',parameters:'field'},
		{name:'deactivate',parameters:'tagfield'},
		{name:'destroy',parameters:'tagfield'},
		{name:'dirtychange',parameters:'tagfield,isDirty'},
		{name:'disable',parameters:'tagfield'},
		{name:'enable',parameters:'tagfield'},
		{name:'errorchange',parameters:'tagfield,error'},
		{name:'expand',parameters:'field'},
		{name:'focus',parameters:'tagfield,event'},
		{name:'focusenter',parameters:'tagfield,event'},
		{name:'focusleave',parameters:'tagfield,event'},
		{name:'hide',parameters:'tagfield'},
		{name:'keydown',parameters:'tagfield,e'},
		{name:'keypress',parameters:'tagfield,e'},
		{name:'keyup',parameters:'tagfield,e'},
		{name:'move',parameters:'tagfield,x,y'},
		{name:'paste',parameters:'tagfield,e'},
		{name:'removed',parameters:'tagfield,ownerCt'},
		{name:'render',parameters:'tagfield'},
		{name:'resize',parameters:'tagfield,width,height,oldWidth,oldHeight'},
		{name:'select',parameters:'combo,record'},
		{name:'show',parameters:'tagfield'},
		{name:'specialkey',parameters:'tagfield,e'},
		{name:'staterestore',parameters:'tagfield,state'},
		{name:'statesave',parameters:'tagfield,state'},
		{name:'validitychange',parameters:'tagfield,isValid'},
		{name:'writeablechange',parameters:'tagfield,Read'},
		{name:'ready',parameters:''}
];
  public static EVENTNAMES: string[] = [
		'activate',
		'added',
		'afterlayoutanimation',
		'afterrender',
		'autosize',
		'beforeactivate',
		'beforedeactivate',
		'beforedeselect',
		'beforedestroy',
		'beforehide',
		'beforequery',
		'beforerender',
		'beforeselect',
		'beforeshow',
		'beforestaterestore',
		'beforestatesave',
		'blur',
		'boxready',
		'change',
		'collapse',
		'deactivate',
		'destroy',
		'dirtychange',
		'disable',
		'enable',
		'errorchange',
		'expand',
		'focus',
		'focusenter',
		'focusleave',
		'hide',
		'keydown',
		'keypress',
		'keyup',
		'move',
		'paste',
		'removed',
		'render',
		'resize',
		'select',
		'show',
		'specialkey',
		'staterestore',
		'statesave',
		'validitychange',
		'writeablechange',
		'ready'
];
}
@Component({
  selector: 'tagfield', 
  inputs: tagfieldMetaData.PROPERTIES,
  outputs: tagfieldMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtTagfieldComponent)}],
  template: '<ng-template #dynamic></ng-template>'
})
export class ExtTagfieldComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(eRef:ElementRef) {super(eRef,tagfieldMetaData)}
  public ngOnInit() {this.baseOnInit(tagfieldMetaData)}
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
  public ngAfterContentInit() {
    this.baseAfterContentInit()
    this['ready'].emit(this)
    }
}