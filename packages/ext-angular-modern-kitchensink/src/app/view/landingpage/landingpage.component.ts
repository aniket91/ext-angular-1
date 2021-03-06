
import { Component, OnInit, ChangeDetectorRef, ViewChild, ViewEncapsulation, ViewContainerRef,ElementRef, ComponentFactoryResolver, ComponentRef, ComponentFactory } from '@angular/core';
import {navTreeRoot} from '../../../examples';

import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

import { VERSION } from '@angular/core';
import { Subject } from "rxjs";
import { getFiles } from "./code_preview_helper";
import hljs, { highlightBlock } from 'highlightjs';

// JSX syntax highlighting
import H_js from './H_js';
hljs.registerLanguage('js', H_js);

declare var Ext: any;

declare var _code: any;
 const generateBreadcrumb = (node) => {
  const path = [];

  do {
    path.unshift({
      isLeaf: !node.childNodes.length,
      text: node.get("text"),
      path: node.get("id"),
      divider: '&nbsp;>&nbsp;'
    });

  } while (node = node.parentNode)

  path[path.length-1].divider = ''
  return path
};

@Component({
  selector: 'app-root',
  templateUrl: 'landingpage.component.html',
  styles: [`

  /*

  Atom One Dark by Daniel Gamage
  Original One Dark Syntax theme from https://github.com/atom/one-dark-syntax

  base:    #282c34
  mono-1:  #abb2bf
  mono-2:  #818896
  mono-3:  #5c6370
  hue-1:   #56b6c2
  hue-2:   #61aeee
  hue-3:   #c678dd
  hue-4:   #98c379
  hue-5:   #e06c75
  hue-5-2: #be5046
  hue-6:   #d19a66
  hue-6-2: #e6c07b

  */

  .hljs {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    color: #abb2bf;
    background: #282c34;
  }

  .hljs-comment,
  .hljs-quote {
    color: #5c6370;
    font-style: italic;
  }

  .hljs-doctag,
  .hljs-keyword,
  .hljs-formula {
    color: #c678dd;
  }

  .hljs-section,
  .hljs-name,
  .hljs-selector-tag,
  .hljs-deletion,
  .hljs-subst {
    color: #e06c75;
  }

  .hljs-literal {
    color: #56b6c2;
  }

  .hljs-string,
  .hljs-regexp,
  .hljs-addition,
  .hljs-attribute,
  .hljs-meta-string {
    color: #98c379;
  }

  .hljs-built_in,
  .hljs-class .hljs-title {
    color: #e6c07b;
  }

  .hljs-attr,
  .hljs-variable,
  .hljs-template-variable,
  .hljs-type,
  .hljs-selector-class,
  .hljs-selector-attr,
  .hljs-selector-pseudo,
  .hljs-number {
    color: #d19a66;
  }

  .hljs-symbol,
  .hljs-bullet,
  .hljs-link,
  .hljs-meta,
  .hljs-selector-id,
  .hljs-title {
    color: #61aeee;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: bold;
  }

  .hljs-link {
    text-decoration: underline;
  }

  `],
  // https://angular.io/api/core/ViewEncapsulation#None
  encapsulation: ViewEncapsulation.None,
})
export class LandingpageComponent implements OnInit {
  showCode: boolean = false;
  files: Array<any> = [];
  menuhidden: any
  routerhidden: any
  ANGULAR_VERSION: any = VERSION.full
  node: any
  node$: any = new Subject()
  breadcrumb: Array<any>
  isDesktop: boolean = Ext.os.is.Desktop;

  filterRegex: any
  filterVal: any
  showTreeFlag: any = false


  blockstyle: any = {'background':'top','display':'block','text-align':'center'}

  treeStore: any = Ext.create('Ext.data.TreeStore', {
    rootVisible: true,
    root: navTreeRoot
  })

  theDataview: any
  tpl: any = `
  <div class="app-thumbnail">
    <div class="app-thumbnail-icon-wrap">
      <div class="app-thumbnail-icon {navIcon}"></div>
    </div>
    <div className="app-thumbnail-text" >{text}</div>
  </div>`

  toggleCode = () => {
    this.showCode = !this.showCode;
  }

  dataviewReady = (event) => {
    //console.log("dataviewReady");
    this.theDataview = event.ext;
  }

  doClick = (event) => {
    //if( window.console ) console.log('dataView.click(%o,%o,%o,%o)',view,index,node,event);
    //console.log("doClick. ID: " + event.location.record.data.id);
    var id = event.location.record.data.id
    this.navigate(id)
  }

  theDataviewToolbar: any

  tplToolbar: any = `
  <div class="app-toolbar">
    {text} <span>{divider}</span>
  </div>`

  dataviewToolbarReady = (event) => {
    //console.log("dataviewToolbarReady");
    this.theDataviewToolbar = event.ext
  }

  doClickToolbar = (event) => {
    //console.log('click')
    //console.log(event.location.record.data)
    var id = event.location.record.data.path
    this.navigate(id)
  }

  constructor(private router: Router) {

    this.node$.subscribe(({
      next: (v) => {
        this.node = v;
        this.files = getFiles(v, _code);
        //console.log("files length : " + this.files.length);
        this.highlightCode();
        //console.log("Generating breadcrumb for ID: " + v.id);
        this.breadcrumb = generateBreadcrumb(v);
        //console.log(`BREADCRUMB: ${JSON.stringify(this.breadcrumb.map(b => b.text))}`);
        if(this.node.childNodes.length == 0) {
          this.menuhidden = true
          this.routerhidden = false
          this.blockstyle = {'background':'top','display':'none','text-align':'center'}
          if (this.theDataview != undefined) {
            this.theDataview.setData(null)
            this.theDataview.setData(null)
          }
        }
        else {
          this.menuhidden = false
          this.routerhidden = true
          this.blockstyle = {'background':'top','display':'block','text-align':'center'}
          if (this.theDataview != undefined) {
            this.theDataview.setData(this.node.childNodes)
          }
        }
        if (this.theDataviewToolbar != undefined) {
          this.theDataviewToolbar.setData(this.breadcrumb)
        }
      },
    }));
    
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        //console.log(`location.path(true): ${location.path(true)}`);
        //console.log(`val: ${val}`);
        //console.log(`nodeId: ${val.url}`);
        var localNode = this.treeStore.getNodeById(val.url);
        //console.log("Node changed: " + this.node.id);
        //console.log("Children el length : " + this.node.childNodes.length);

        if (localNode) {
          this.files = getFiles(localNode, _code);
          this.node$.next(localNode);
        } else {
          console.log("Not a valid node. Probably looking at resources");
        }
      }
    });
  }

  navigate(location) {
    //console.log('navigate')
    this.router.navigateByUrl(location);
  }

  highlightCode() {
    document.querySelectorAll(".code").forEach((el) => {
      highlightBlock(el);
    });
  }

  ngOnInit() {
    var localNode = this.treeStore.getNodeById(location.pathname);
    if(localNode) {
      this.node = localNode;
      this.node$.next(this.treeStore.getNodeById(location.pathname));
    }
    else {
      console.log("Not a valid node. Probably looking at resources");
    }
  } 

  selectionChanged(event) {
    console.log('selectionChanged')
    var record = event.record;
    if(record && record.data && record.data.id) {
      var componentSelectedId = record.data.id;
      console.log("selectionChanged ID: " + componentSelectedId);
      this.router.navigate([componentSelectedId]);
    }
  }

  toggleTree = function(){
    this.showTreeFlag = !this.showTreeFlag;
  }

  filterNav = function(event) {
    var oldValue = event.oldValue;
    var newValue = event.newValue;
    this.filterVal = newValue;
    console.log("In filterNav.oldValue : " + oldValue + " newValue: " + newValue);
    const store = this.treeStore;
    var escapeRegex = Ext.String.escapeRegex(newValue);
    console.log(escapeRegex);
    this.filterRegex = new RegExp(escapeRegex, 'i');
    store.filterBy(record => this.containsMatches(record));
  }

  containsMatches(node) {
    const found = node.data.name.match(this.filterRegex) || node.childNodes.some(child => this.containsMatches(child));
    if (found) node.expand();
    node.data.text = node.data.name.replace(this.filterRegex, '<span style="color:#2196F3;font-weight:bold">' + this.filterVal + '</span>')
    return found;
  }
}

@Component({
  selector: 'dummy-component',
  template: ``,
  styles: [``]
})
export class DummyComponent implements OnInit {
  ngOnInit() {
  }
}
