declare var Ext: any;
import {
  Output,
  ElementRef,
  EventEmitter,
  ContentChildren,
  QueryList,
  SimpleChanges
} from '@angular/core';

export class base {
  public ext: any
  private _nativeElement: any

  constructor(el: ElementRef, private metaData: any) {
    //console.log('constructor');console.log(el.nativeElement)
    this._nativeElement = el.nativeElement
    metaData.EVENTS.forEach( (event: any, n: any) => {
      if (event.name != 'fullscreen') {
        (<any>this)[event.name] = new EventEmitter()
      }
      else {
        (<any>this)[event.name + 'event'] = new EventEmitter()
      }
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    //console.log(`ngOnChanges`)
    //console.log(changes)
    let changesMsgs: string[] = []
    for (let propName in changes) {
      let verb = ''
      if (changes[propName].firstChange == true) {
        verb = 'initialized'
      }
      else {
        verb = 'changed'
      }
      let val = changes[propName].currentValue
      if (this.ext != undefined) {
        var capPropName = propName.charAt(0).toUpperCase() + propName.slice(1)
        this.ext['set'+capPropName](val)
      }
      else {
        if (verb == 'changed') {
          console.log('change needed and ext not defined')
        }
      }
      changesMsgs.push(`${propName} ${verb} to "${val}"`)
    }
    //console.log(`OnChanges: ${changesMsgs.join('; ')}`)
  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  //ngDoCheck() {console.log(`DoCheck`)}
  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  //ngAfterContentChecked() { console.log(`AfterContentChecked`) }
  //ngAfterViewInit() { console.log(`AfterViewInit`) }
  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  //ngAfterViewChecked() { console.log(`AfterViewChecked`) }
  //ngOnDestroy() { console.log(`OnDestroy`) }

  baseOnInit(metaData: any) {
    //console.log(`ngOnInit: ${metaData.XTYPE}`)
    let me: any = this
    let o: any = {}
    o.xtype = metaData.XTYPE
    for (var i = 0; i < me.metaData.PROPERTIES.length; i++) { 
      var prop = me.metaData.PROPERTIES[i];
      if (prop == 'handler') {
        if (me[prop] != undefined) {
          o[prop] = me[prop]
        }
      }
      //need to handle listeners coming in here
      if ((o.xtype === 'cartesian' || o.xtype === 'polar') && prop === 'layout') {
      }
      else {
        if (me[prop] != undefined && 
            prop != 'listeners' && 
            prop != 'config' && 
            prop != 'handler' && 
            prop != 'fitToParent') { 
          o[prop] = me[prop]; 
        }
      }
    }
    if (true === me.fitToParent) {
      o.top=0, 
      o.left=0, 
      o.width='100%', 
      o.height='100%'
    }
    if (me.config !== {} ) {
      Ext.apply(o, me.config);
    }
    o.listeners = {}
    var EVENTS = metaData.EVENTS
    EVENTS.forEach(function (event: any, index: any, array: any) {
      let eventname: any = event.name
      let eventparameters: any = event.parameters
      o.listeners[eventname] = function() {
        let parameters: any = eventparameters
        let parms = parameters.split(',')
        let args = Array.prototype.slice.call(arguments)
        let emitparms: any = {}
        for (let i = 0, j = parms.length; i < j; i++ ) {
          emitparms[parms[i]] = args[i];
        }
        me[eventname].emit(emitparms)
      }
    })
    if (this._nativeElement.parentElement != null) {
      o.renderTo = this._nativeElement
    }
    this.ext = Ext.create(o)
  }

  @ContentChildren('item') items: QueryList<any>
  @ContentChildren('item', { read: ElementRef }) items2: QueryList<ElementRef>
  baseAfterContentInit() {
    //console.log('\nbaseAfterContentInit')

    if (this.items.length < 2) {
      //console.log('1 item')
      return
    }
    //console.log(this.items.length + ' items')

    var anyItems = []
    var elRefItems = []
    this.items.forEach(item => {
      anyItems.push(item)
    })
    this.items2.forEach(item => {
      elRefItems.push(item)
    })

    for (var i in anyItems) {
      var item = anyItems[i]
      var elRefItem = elRefItems[i]
      if (item != this) {
        if (item.ext != undefined) {
          //console.log('parent: ' + this.ext.xtype + ', child: ' + item.ext.xtype)
          var parentxtype = this['ext'].xtype
          var childxtype = item['ext'].xtype
          var parentCmp = this['ext']
          var childCmp = item['ext']

          if (parentxtype === 'grid') {
            if (childxtype === 'column' || childxtype === 'treecolumn' || childxtype === 'textcolumn' || childxtype === 'checkcolumn' || childxtype === 'datecolumn' || childxtype === 'rownumberer' || childxtype === 'numbercolumn') {
              parentCmp.addColumn(childCmp)
            }
          } else if (childxtype === 'tooltip') {
            parentCmp.setTooltip(childCmp)
          } else if (childxtype === 'plugin') {
            parentCmp.setPlugin(childCmp)
          } else if (parentxtype === 'button') {
            if (childxtype === 'menu') {
              parentCmp.setMenu(childCmp)
            } else {
              console.log('child not added')
            }
          } else if (childxtype === 'toolbar' && Ext.isClassic === true) {
            parentCmp.addDockedItems(childCmp)
          } else if ((childxtype === 'toolbar' || childxtype === 'titlebar') && parentCmp.getHideHeaders != undefined) {
            if (parentCmp.getHideHeaders() === false) {
              var j: any = parentCmp.items.items.length
              parentCmp.insert(j - 1, childCmp)
            } else {
              parentCmp.add(childCmp)
            }
          } else if (parentCmp.add != undefined) {
            parentCmp.add(childCmp)
          } else {
            console.log('child not added')
          }
        }
        else if (item.nativeElement != undefined) {
          //console.log('native')
          this.ext.add({xtype: 'container',html: item.nativeElement})
        }
        else {
          //console.log('component')
          //console.log(elRefItem)
          this.ext.add({xtype: 'container',html: elRefItem.nativeElement})
        }
      }
      // else {
      //   console.log('same item')
      // }
    }
    //this['ready'].emit(parentCmp)
    this['ready'].emit(this)
  }



  @ContentChildren('item', { read: ElementRef }) itemsa: QueryList<ElementRef>
  baseAfterContentInit2() {
    if (this.itemsa.length < 2) {
      return
    }
    this.itemsa.forEach(item => {
      if (item.nativeElement == this._nativeElement) {
        return
      }
      if (item.nativeElement != undefined) {
        //console.log('parent: ' + this.ext.xtype + ', child: ' + 'container')
        this.ext.add({xtype: 'container',html: item.nativeElement})
      }
      else {
        if (item['ext'] != undefined) {
          //console.log('parent: ' + this.ext.xtype + ', child: ' + item.ext.xtype)
          var parentxtype = this.ext.xtype
          var childxtype = item['ext'].xtype
          var parentCmp = this.ext
          var childCmp = item['ext']

          if (parentxtype === 'grid') {
            if (childxtype === 'column' || childxtype === 'treecolumn' || childxtype === 'textcolumn' || childxtype === 'checkcolumn' || childxtype === 'datecolumn' || childxtype === 'rownumberer' || childxtype === 'numbercolumn') {
              parentCmp.addColumn(childCmp)
            }
            else if (parentCmp.add != undefined) {
              parentCmp.add(childCmp);
            }
          } else if (childxtype === 'tooltip') {
            parentCmp.setTooltip(childCmp)
          } else if (childxtype === 'plugin') {
            parentCmp.setPlugin(childCmp)
          } else if (parentxtype === 'button') {
            if (childxtype === 'menu') {
              parentCmp.setMenu(childCmp)
            } else {
              console.log('child not added')
            }
          } else if (childxtype === 'toolbar' && Ext.isClassic === true) {
            parentCmp.addDockedItems(childCmp)
          } else if ((childxtype === 'toolbar' || childxtype === 'titlebar') && parentCmp.getHideHeaders != undefined) {
            if (parentCmp.getHideHeaders() === false) {
              var j: any = parentCmp.items.items.length
              parentCmp.insert(j - 1, childCmp)
            } else {
              parentCmp.add(childCmp)
            }
          } else if (parentCmp.add != undefined) {
            parentCmp.add(childCmp)
          } else {
            console.log('child not added')
          }
        }
        else {
          console.log('child not handled')
        }
      }
    })
    //this['ready'].emit(parentCmp)
    this['ready'].emit(this)
  }

}