import {
  Component,
  OnInit,
  AfterContentInit,
  ElementRef,
  Renderer,
  ViewChild,
  SimpleChanges
} from '@angular/core'
  
declare var Ext: any;
  
@Component({
  selector: 'draw-component',
  templateUrl: "./Draw.html",
  styles: [``]
})

export class DrawComponent implements OnInit, AfterContentInit  {
  
  isPhone = Ext.os.is.Phone;
  supportsTouch = Ext.supports.Touch;

  constructor() {}
  
  clear = () => {
    console.log('....In clear function ....');
  }

  onMouseDown = ($event) => {
    console.log('....in onMouseDown..........');
  }

  ngOnInit() {}
  ngAfterContentInit() {}
}

function smoothList(points) {
  if (points.length < 3) {
      return ['M', points[0], points[1]];
  }

  var dx = [], dy = [], result = ['M'], i, ln = points.length;

  for (i = 0; i < ln; i += 2) {
    dx.push(points[i]);
    dy.push(points[i + 1]);
  }

  dx = Ext.draw.Draw.spline(dx);
  dy = Ext.draw.Draw.spline(dy);
  result.push(dx[0], dy[0], 'C');

  for (i = 1, ln = dx.length; i < ln; i++) {
    result.push(dx[i], dy[i]);
  }

  return result;
}
