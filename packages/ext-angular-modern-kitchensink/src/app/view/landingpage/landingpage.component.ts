import { Component, OnInit, ChangeDetectorRef, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef, ComponentFactory } from '@angular/core';
import { navTreeRoot } from '../../../examples/index';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { ButtonComponent } from '../../../examples/Button/Button';
import { VERSION } from '@angular/core';
import { Subject } from "rxjs";

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

  layout = "fit";
  node: any;
  node$: any = new Subject();
  files: Array<String> = [];
  breadcrumb: Array<any>;

  filterRegex;
  filterVal;
  showTreeFlag = true;


  treeStore = Ext.create('Ext.data.TreeStore', {
    rootVisible: true,
    root: navTreeRoot
  });

  constructor(location: Location, private router: Router, changeDetectorRef: ChangeDetectorRef, private resolver: ComponentFactoryResolver) {
    this.node$.subscribe(({
      next: (v) => {
        this.node = v;
        this.breadcrumb = generateBreadcrumb(v);
        console.log(`BREADCRUMB: ${JSON.stringify(this.breadcrumb.map(b => b.text))}`);
      },
    }));

    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        console.log(`location.path(true): ${location.path(true)}`);
        console.log(`val: ${val}`);
        console.log(`nodeId: ${val.url}`);
        this.node$.next(this.treeStore.getNodeById(val.url));

        if (!this.node) {
          console.log("node not found.")
          return;
        }

        if (!this.node.get('layout')) {
          return;
        }

        this.layout = this.node.get('layout');
        console.log("this.layout : " + this.layout);

        //this.files = this.code[this.nodeText.replace(/\s/g, '')];
        //console.log("this.files : " + this.files);
      }
    })
  }

  ngOnInit() {
    this.node$.next(this.treeStore.getNodeById(location.pathname));
    // this.files = Object.keys(_code[nodeText.replace(/\s/g, '')]);
    // debugger;
  }

  navigate(location) {
    console.log(`location: ${location}`);
    this.router.navigateByUrl(location);
  }

  toggleTree = function () {
    console.log("toggleTree. Before showTreeFlag : " + this.showTreeFlag);
    this.showTreeFlag = !this.showTreeFlag;
    console.log("toggleTree. After showTreeFlag : " + this.showTreeFlag);
  }

  filterNav = function (event) {
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
    if (record && record.data && record.data.id) {
      var componentSelectedId = record.data.id;
      console.log("ID: " + componentSelectedId)
      this.router.navigate([componentSelectedId]);
    }

  }
}
