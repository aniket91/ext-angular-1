            // @example packages=[angular]
            import { Component } from '@angular/core'
            declare var Ext: any;

            @Component({
                selector: 'app-root-1',
                styles: [`
                        `],
                template: `
<<<<<<< 9cce2abdab5ab2700de913eff60d1badbaca49bd
                    <formpanel #item shadow="true" layout="vbox" maxWidth="850">
                        <sliderfield #item label="Value" width="350" (change)="updateGauges($event)" [value]="needleValue">
                        </sliderfield>
                        <container #item
                            [layout]="{type: 'hbox', align: 'stretch'}"
                            [margin]="'10 0 10 0'"
                            flex="1"
                            [width]="'100%'"
                            minHeight="200"
                        >
                             <gauge #item flex="1" [value]="needleValue" 
                                [needle]="{outerRadius: '100%'}"
                                [valueStyle]="{display: 'none'}"
                            ></gauge>
                        </container>
                    </formpanel>
=======
                    <colorselector #item
                        (change)="this.onChange($event)"
                        format="hex6" 
                        value="00f"
                    ></colorselector>
>>>>>>> Added doc for ChipView.Updated colorpicker exmples.
                `
            })
            export class AppComponent {
                onChange = (param) => {
                    Ext.Msg.alert('Color', param.color);
                }
            }