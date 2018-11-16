import { Component, OnInit, ChangeDetectorRef, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef, ComponentFactory } from '@angular/core';
import {navTreeRoot} from '../../../examples/index';

import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

import {ButtonComponent} from '../../../examples/Button/Button';
import { VERSION } from '@angular/core';

declare var Ext: any;
declare var _code: any;

const generateBreadcrumb = (node) => {
  const path = [];
  do {
    path.unshift({
      isLeaf: !node.parentNode,
      text: node.get("text"),
      path: node.get("id"),
    });
  } while (node = node.parentNode)

  return path;
};

@Component({
  selector: 'app-root',
  templateUrl: 'landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  ANGULAR_VERSION = VERSION.full;

  nodeId;
  selectedNavNode;
  component;
  layout = "fit";
  node: any;
  files: Array<String> = [];
  breadcrumb: Array<String> = [];
  nodeItems: Array<String> = [];

  nodeText;

  filterRegex;
  filterVal;
  showTreeFlag = true;

  
  treeStore = Ext.create('Ext.data.TreeStore', {
    rootVisible: true,
    root: navTreeRoot
  });  

  constructor(location: Location,private router: Router, changeDetectorRef: ChangeDetectorRef,
    private resolver: ComponentFactoryResolver) { 
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
        console.log(location.path(true));
        console.log(val);
        var path = location.path(true);
        if(path){
          this.nodeId = path.substring(path.indexOf("#")+1, path.length);
          console.log("nodeId : " + this.nodeId);
          this.selectedNavNode = this.treeStore.getNodeById(this.nodeId);
          console.log(this.selectedNavNode);
          if(this.selectedNavNode != null) {
            this.nodeText = this.selectedNavNode.get('text');
            console.log("this.nodeText : " + this.nodeText);
            this.nodeItems.unshift(
            );
  
            this.component = this.selectedNavNode.get('component');
            console.log("Component: " + this.component);
            if(this.selectedNavNode.get('layout') != null) {
              this.layout = this.selectedNavNode.get('layout');
              console.log("this.layout : " + this.layout);
            }
            //this.files = this.code[this.nodeText.replace(/\s/g, '')];
            //console.log("this.files : " + this.files);
          }
          else {
              console.log("selectedNavNode not found.")
          }

        }

      }

    })

  }

  ngOnInit() {
    this.node = this.treeStore.getNodeById(location.pathname);
    const nodeText = this.node.get("text");

    this.breadcrumb = generateBreadcrumb(this.node)
    this.nodeItems.push(this.node.childNodes);
    // this.files = Object.keys(_code[nodeText.replace(/\s/g, '')]);
    // debugger;
  }
  
  navigateTo(location) {
    this.router.navigate([location]);
    return false;
  }

  toggleTree = function(){
    console.log("toggleTree. Before showTreeFlag : " + this.showTreeFlag);
    this.showTreeFlag = !this.showTreeFlag;
    console.log("toggleTree. After showTreeFlag : " + this.showTreeFlag);
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

  selectionChanged(event) {
    var record = event.record;
    if(record && record.data && record.data.id) {
      var componentSelectedId = record.data.id;
      console.log("ID: " + componentSelectedId)
      this.router.navigate([componentSelectedId]);
    }

  }

  navigate(node) {
    console.log("In naviagte : " + node.getId());
    //debugger;
  }

}
