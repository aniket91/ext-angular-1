            // @example packages=[angular]
            import { Component } from '@angular/core'
            declare var Ext: any;

            @Component({
                selector: 'app-root-1',
                styles: [`
                        `],
                template: `
                    <colorselector #item
                        (change)="this.onChange($event)"
                        format="hex6" 
                        value="00f"
                    ></colorselector>
                `
            })
            export class AppComponent {
                onChange = (param) => {
                    Ext.Msg.alert('Color', param.color);
                }
            }