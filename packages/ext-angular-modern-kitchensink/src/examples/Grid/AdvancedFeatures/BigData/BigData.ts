import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import {model} from './GridModel'
import {BigDataService} from './BigData.service';

declare var Ext: any;

Ext.require([
    'Ext.grid.plugin.*',
    'Ext.tip.ToolTip',
    'Ext.data.summary.Sum',
    'Ext.exporter.*'
]);


@Component({
  selector: 'bigdata-component',
  templateUrl: './BigData.html',
  styles: [``]
})
export class BigDataComponent implements OnInit {

  constructor(bigDataService : BigDataService) { }


  showExportSheet: boolean =  false;

  store = Ext.create('Ext.data.Store', {
    model,
    autoLoad: true,
    pageSize: 0,
    groupField: 'department',
    proxy: {
      type: 'ajax',
      url: '/KitchenSink/BigData'
    }
  });



  ngOnInit() {
  }

  grid:any;

  gridReady = (event) => {
    console.log("gridReady");
    this.grid = event.ext;
  }

  rowBodyTpl = data => `
    <div>
      <img src={data.avatar} height="100px" style="{float:'left', margin:'0 10px 5px 0'}"><img>
      <p>{formatDate(data.dob)}</p>
    </div>
  `;

  nameSorter = (rec1, rec2) => {
    // Sort prioritizing surname over forename as would be expected.
    var rec1Name = rec1.get('surname') + rec1.get('forename'),
        rec2Name = rec2.get('surname') + rec2.get('forename');

    if (rec1Name > rec2Name) {
      return 1;
    }
    if (rec1Name < rec2Name) {
      return -1;
    }
    return 0;
  }

  onExportClick = () => {
    this.showExportSheet = true;
  }

  onCancelExport = () => {
    this.showExportSheet = false;
  }

  exportToXlsx = () => {
    this.doExport({
      type: 'excel07',
      title: 'Grid Export Demo',
      fileName: 'GridExport.xlsx',
      includeGroups: true,
      includeSummary: true
    });
  }

  exportToXml = () => {
    this.doExport({
      type: 'excel03',
      title: 'Grid Export Demo',
      fileName: 'GridExport.xml',
      includeGroups: true,
      includeSummary: true
    });
  }

  exportToCSV = () => {
    this.doExport({
      type: 'csv',
      title: 'Grid Export Demo',
      fileName: 'GridExport.csv'
    });
  }

  exportToTSV = () => {
      this.doExport({
        type: 'tsv',
        title: 'Grid Export Demo',
        fileName: 'GridExport.tsv'
    });
  }

  exportToHtml = () => {
      this.doExport({
        type: 'html',
        title: 'Grid Export Demo',
        fileName: 'GridExport.html'
    });
  }

  onVerify = (button) => {
    let cell = button.up('widgetcell'),
        record = cell.getRecord();
    record.set('verified', !record.get('verified'));
  }

  onVerifyAll = (cell) => {
    let row = cell.up('gridrow'),
        group = row.getGroup(),
        grid = cell.up('grid'),
        store = this.store,
        count;

    if (group) {
      count = group.length;
    } else {
      count = store.getCount();
    }
    
    Ext.Msg.confirm('Verify All',
      'Are you sure you want to verify all ' + count + ' items?',
      answer => {
        if (answer === 'yes') {
            // Don't want to grid to update on each change:
            store.suspendEvent('update');

            (group || store).each(function (rec) {
              rec.set('verified', true);
            });

            store.resumeEvent('update');

            // Now update all the things
            grid.refresh();
        }
      }
    );
  }

  salarySummaryRenderer = (value) => {
    return Ext.util.Format.usMoney(value);
  }

  doExport(config) {
    this.showExportSheet = false;
    this.grid.saveDocumentAs(config);
  }

  renderRating = (value, record) => {
    const age = record.get('averageRating');
    let group = "over6";

    if (age < 4) {
        group = "under4";
    } else if (age < 5) {
        group = "under5";
    } else if (age < 6) {
        group = "under6";
    }

    return `<div className=${group}>${value.toFixed(2)}</div>`
  }

  renderRatingThisYear = (value) => {
    //value && <Rating value={value} tip='Set to {tracking:plural("Star")}'/>
    return value; 
  }

  renderSparkline = (rating) => {
      return 
    `<sparkline 
      height={16} 
      values={rating} 
      tipTpl='Price: {y:number("0.00")}'
    ></sparkline>`
  }

  renderVerify = (value, record) => {
      return `
    <Container>
      <Button
        text={value ? 'Verified' : 'Verify'}
        ui="action"
        handler={this.onVerify.bind(this, record)}
      />
    </Container>`
  }

  renderVerifyAll = (value, record, dataIndex, cell) => {
      return `
    <Container>
      <Button 
        ui="action"
        text="All"
        handler={this.onVerifyAll.bind(this, cell)}
      />
    </Container>`
  }

  onBeforeDocumentSave = view => {
    view.mask({
      xtype: 'loadmask',
      message: 'Document is prepared for export. Please wait ...'
    })
  }

  onDocumentSave = view => view.unmask();


  ratingsColumn = [
    {
      text: 'Avg',
      xtype: 'numbercolumn',
      dataIndex: 'averageRating',
      renderer : this.renderRating,
      summary: 'average',
      width: 75,
      cell: {
        cls: 'big-data-ratings-cell'
      },
      exportStyle: {
        format: 'Standard',
        alignment: {
          horizontal: 'Right'
        }
      }
  }, 
  {
    text: 'All',
    dataIndex: 'rating',
    ignoreExport: true,
    cell: {
      xtype: 'widgetcell',
      forceWidth: true,
      widget: {
        xtype: 'sparklineline',
        tipTpl:'Price: {y:number("0.00")}'
      }
    }
  }
];

absensesColumn = [
    {
    text: 'Illness',
    xtype: 'textcolumn',
    dataIndex: "sickDays",
    align: 'center',
    summary: 'sum'
}, 
{
    text:"Holidays",
    xtype: 'textcolumn',
    dataIndex:"holidayDays",
    align:'center',
    summary:'sum'
},
{
    text:"Holiday Allowance",
    xtype: 'textcolumn',
    dataIndex:"holidayAllowance",
    align:'center',
    summary:'sum',
    summaryFormatter:'number("0.00")',
    formatter:'number("0.00")'
}
];

summaryCell = {
    xtype: 'widgetcell',
    widget: {
      xtype: 'button',
      ui: 'action',
      text: 'All',
      handler: this.onVerifyAll
    }
};

ratingsCell =  {
    xtype: 'widgetcell',
    widget: {
    xtype: 'rating',
    tip: 'Set to {tracking:plural("Star")}'
    }
  };

  widgetCellBind = {tooltip : 'Verify {record.fullName}'};

  gridTitleBar = {
    shadow: false,
    items: [{
      align: 'right',
      xtype: 'button',
      text: `Export to${Ext.os.is.Phone ? '...' : ''}`,
      menu: Ext.os.is.Desktop && {
        indented: false,
        items: [
          { text: 'Excel xlsx', handler: this.exportToXlsx },
          { text: 'Excel xml', handler: this.exportToXml },
          { text: 'CSV', handler: this.exportToCSV },
          { text: 'TSV', handler: this.exportToTSV },
          { text: 'HTML', handler: this.exportToHtml },
        ]
      },
      handler: !Ext.os.is.Desktop && this.onExportClick
    }]
  };

  usMoneyRendered = Ext.util.Format.usMoney;

}

function formatDate(date) {
    return Ext.util.Format.date(date, "d/m/Y")
  };
  