/**
 * @class Ext.grid.Grid
 * @extend Ext.dataview.List
 * @xtype grid
 *
 * Grids are an excellent way of showing large amounts of tabular data on the client side.
 * Essentially a supercharged `<table>`, Grid makes it easy to fetch, sort and filter large
 * amounts of data.
 *
 * Grids are composed of two main pieces - a {@link Ext.data.Store Store} full of data and
 * a set of columns to render.
 *
 * ## A Basic Grid
 *
 *            @example packages=[angular]
 *            import { Component } from '@angular/core'
 *            declare var Ext: any;
 *
 *            @Component({
 *                selector: 'app-root-1',
 *                styles: [`
 *                        `],
 *                template: `
 *                 <container #item layout="fit">
 *                    <grid #item [store]="store" [height]="600">
 *                        <column #item text="Name" dataIndex="name" flex="1"></column>
 *                        <column #item text="Email" dataIndex="email" flex="1"></column>
 *                        <column #item text="Phone" dataIndex="phone" flex="1"></column>
 *                     </grid>
 *                 </container>
 *                `
 *            })
 *            export class AppComponent {
 *                store = new Ext.data.Store({
 *                    data: [
 *                        { "name": "Lisa", "email": "lisa@simpsons.com", "phone": "555-111-1224" },
 *                        { "name": "Bart", "email": "bart@simpsons.com", "phone": "555-222-1234" },
 *                        { "name": "Homer", "email": "home@simpsons.com", "phone": "555-222-1244" },
 *                        { "name": "Marge", "email": "marge@simpsons.com", "phone": "555-222-1254" }
 *                    ]
 *                });
 *            }
 *
 *
 * The code above produces a simple grid with three columns. We specified a Store which will
 * load JSON data inline.
 *
 * ## Columns
 *
 * By default, each {@link Ext.grid.column.Column column} is sortable and toggles between
 * ascending and descending sorting when you click on its header. There are several basic
 * configs that can be applied to columns to change these behaviors. For example,
 * we can make the Email column hidden by default (it can be shown again by using the
 * {@link Ext.grid.plugin.ViewOptions ViewOptions} plugin). See the
 * {@link Ext.grid.column.Column column class} for more details.
 *
 * A top-level column definition may contain a `columns` configuration. This means that the
 * resulting header will be a group header, and will contain the child columns.
 *
 *
 *            @example packages=[angular]
 *            import { Component } from '@angular/core'
 *            declare var Ext: any;
 *
 *            @Component({
 *                selector: 'app-root-1',
 *                styles: [`
 *                        `],
 *                template: `
 *                <container #item layout="fit">
 *                    <grid #item [store]="store" [height]="600">
 *                        <column #item text="Name" dataIndex="name" flex="1"></column>
 *                        <column #item text="Email" dataIndex="email" flex="1" hidden="true"></column>
 *                        <column #item text="Phone" dataIndex="phone" flex="1"></column>
 *                    </grid>
 *                </container>
 *                `
 *            })
 *            export class AppComponent {
 *                store = new Ext.data.Store({
 *                    data: [
 *                        { "name": "Lisa", "email": "lisa@simpsons.com", "phone": "555-111-1224" },
 *                        { "name": "Bart", "email": "bart@simpsons.com", "phone": "555-222-1234" },
 *                        { "name": "Homer", "email": "home@simpsons.com", "phone": "555-222-1244" },
 *                        { "name": "Marge", "email": "marge@simpsons.com", "phone": "555-222-1254" }
 *                    ]
 *                });
 *            }
 * 
 * 
 * 
 *
 * ## Rows and Cells
 *
 * Grid extends the `{@link Ext.dataview.List List}` component and connects records in the
 * store to `{@link Ext.grid.Row row components}` for the list's items. The Row component
 * utilizes the configs of the grid's {@link Ext.grid.column.Column columns} to create the
 * appropriate type of {@link Ext.grid.cell.Base cells}. Essentially, a Row is a container
 * for {@link Ext.Widget Cell widgets}.
 *
 * For the most part, configuring a grid is about configuring the columns and their cells.
 * There are several built-in column types to display specific types of data:
 *
 *  - {@link Ext.grid.column.Boolean} for true/false values.
 *  - {@link Ext.grid.column.Date} for date/time values.
 *  - {@link Ext.grid.column.Number} for numeric values.
 *
 * These columns specify (via their {@link Ext.grid.column.Column#cell cell config}) one
 * of these basic cell widget types:
 *
 *  - {@link Ext.grid.cell.Boolean}
 *  - {@link Ext.grid.cell.Date}
 *  - {@link Ext.grid.cell.Number}
 *
 * In addition to the above basic cell types, there are two other useful cell types to
 * know about:
 *
 *  - {@link Ext.grid.cell.Text} is the base class for the boolean, date and number cell
 *    classes. It is useful when a cell contains only text.
 *  - {@link Ext.grid.cell.Widget} is a cell class that manages a single child item (either
 *    a {@link Ext.Component component} or a {@link Ext.Widget widget}). The child item is
 *    configured using the `{@link Ext.grid.cell.Widget#widget widget config}`. The most
 *    important part of this config is the `xtype` of the child item to create.
 *
 * ## Renderers and Templates
 *
 * Columns provide two other mechanisms to format their cell content:
 *
 *  - {@link Ext.grid.column.Column#renderer}
 *  - {@link Ext.grid.column.Column#tpl}
 *
 * These column configs are processed by the {@link Ext.grid.column.Cell default cell type}
 * for a column. These configs have some downsides compared to data binding but are provided
 * for compatibility with previous releases.
 *
 *  - Renderers and templates must update the cell content when _any_ field changes. They
 *    cannot assume that only changes to the dataIndex will affect the rendering. Using
 *    data binding, only the configs affected by the changed data will be updated.
 *  - Constructing HTML blocks in code (even in a template) is a common cause of security
 *    problems such as XSS attacks.
 *
 * ## Sorting & Filtering
 *
 * Every grid is attached to a {@link Ext.data.Store Store}, which provides multi-sort and
 * filtering capabilities. It's easy to set up a grid to be sorted from the start:
 *
 *     store: {
 *         fields: ['name', 'email', 'phone'],
 *         sorters: ['name', 'phone']
 *     },
 *
 * Sorting at run time is easily accomplished by simply clicking each column header. If you
 * need to perform sorting on more than one field at run time it's easy to do so by adding
 * new sorters to the store:
 *
 *     myGrid.store.sort([
 *         { property: 'name',  direction: 'ASC' },
 *         { property: 'email', direction: 'DESC' }
 *     ]);
 *
 * See {@link Ext.data.Store} for examples of filtering.
 *
 * ## Plugins
 *
 * Grid supports addition of extra functionality through plugins:
 *
 * - {@link Ext.grid.plugin.ViewOptions ViewOptions} - adds the ability to show/hide
 *  columns and reorder them.
 *
 * - {@link Ext.grid.plugin.ColumnResizing ColumnResizing} - allows for the ability to
 *  resize columns.
 *
 * - {@link Ext.grid.plugin.Editable Editable} - editing grid contents one row at a time.
 *
 * - {@link Ext.grid.plugin.MultiSelection MultiSelection} - selecting and deleting several
 *   rows at a time.
 *
 * - {@link Ext.grid.plugin.PagingToolbar PagingToolbar} - adds a toolbar at the bottom of
 *   the grid that allows you to quickly navigate to another page of data.
 *
 * - {@link Ext.grid.plugin.SummaryRow SummaryRow} - adds and pins an additional row to the
 *   top of the grid that enables you to display summary data.
 */

/**
 * @cfg {Object} [selectable]
 * A configuration object which allows passing of configuration options to create or
 * reconfigure a {@link Ext.dataview.selection.Model selection model}.
 *
 * May contain the following options:
 *
 *     - mode `'single'`, `'multi'` Allow selection of only a single or multiple *records*.
 *     This is only valid when selecting {@link #cfg!rows}.
 *     - deselectable Configure as false to disallow deselecting down to zero selected *records*.
 *     This is only valid when selecting {@link #cfg!rows}.
 *     - drag `true` or `false` to allow drag gestures to swipt a rage of cells or rows.
 *     - columns `true` to enable column selection by clicking on headers. Defaults to `false`
 *     - cells `true` to enable cell selection by clicking or dragging on cells. Defaults to `false`
 *     - rows Set to `false` to disable selecting rows. Defaults to `true`
 *     - checkbox `true` to add a checkbox column to display selected state. `'only'` to indicate
 *     that only clicks on the checkbox affect row selected state.
 *     - extensible `true` to enable the selection to be extended either in the `X` or `Y` axis
 *     or `'x'` or `'y'` to configure
 */

/**
 * @cfg {Boolean} [reserveScrollbar=false]
 * *only meaningful on platforms which has space-consuming scroll bars*
 *
 * Configure as `true` to leave space for a scrollbar to appear even if the content does not
 * overflow.
 *
 * This is useful for trees which may expand and collapse causing visual flickering
 * when scrollbars appear of disappear.
 */

/**
 * @cfg {Boolean} [infinite=true]
 * This List configuration should always be set to true on a Grid.
 * @hide
 */

/**
 * @cfg {Ext.grid.column.Column} [columns=null]
 * One or more {@link Ext.grid.column.Column Columns} providing the header text for the
 * column, a column menu, optional column header tools, and a definition of where the
 * data for that column comes from.
 *
 * Example snippet:
 *
 *     <Grid title="Stock Prices" store={this.store} shadow grouped>
 *         <Column text="Company" dataIndex="name" width="150"/>
 *         <Column text="Price" width="85" dataIndex="price" formatter='usMoney'/>
 *         <Column text="Change" width="100" dataIndex="priceChange" tpl={this.signTpl.bind(this, 'priceChange', '0.00')} cell={{ encodeHtml: false }}/>
 *         <Column text="% Change" dataIndex="priceChangePct" tpl={this.signTpl.bind(this, 'priceChangePct', '0.00%')} cell={{ encodeHtml: false }}/>
 *         <Column text="Last Updated" width="125" dataIndex="lastChange" formatter='date("m/d/Y")'/>
 *     </Grid>
 *
 * NOTE: The Column component or any column sub-component may be used.  i.e.:
 * {@link Ext.grid.column.Column GridColumn}  
 * 
 * {@link Ext.grid.column.Boolean BooleanColumn}  
 * 
 * {@link Ext.grid.column.Check CheckColumn}  
 * 
 * {@link Ext.grid.column.Date DateColumn}  
 * 
 * {@link Ext.grid.column.Number NumberColumn}  
 * 
 * {@link Ext.grid.column.RowNumberer RowNumberer}  
 * 
 * {@link Ext.grid.column.Text}  
 * 
 * {@link Ext.grid.column.Tree TreeColumn}
 *
 * @accessor
 * @react-child
 */

/**
 * @cfg {Object} [columnMenu]
 * This is a config object which is used by columns in this grid to create their
 * header menus.
 *
 * The default column menu contains the following items.
 *
 * - A "Sort Ascending" menu item
 * - A "Sort Descending" menu item
 * - A Columns menu item with each of the columns in a sub-menu of check items
 *   that is used to hide or show each column.
 * - A "Group by this field" menu item to enable grouping.
 * - A "Show in groups" check menu item to enable/disable grouping.
 *
 * These items have {@link #cfg!weight} of `-100`, `-90` and `-80` respectively to
 * place them at the start of the menu.
 *
 * This can be configured as `null` to prevent columns from showing a column menu.
 * @accessor
 */

/**
 * @cfg {Boolean} [hideHeaders=false]
 * `true` to hide the grid column headers.
 *
 * @accessor
 * @since 6.0.1
 */

/**
 * @cfg {Boolean} [striped=true]
 * @inheritdoc
 * @accessor
 */

/**
 * @cfg {String} [title='']
 * The title that will be displayed in the TitleBar at the top of this Grid.
 * @accessor
 */

/**
 * @cfg {Boolean} [sortable=true]
 * Configure as `false` to disable column sorting via clicking the header and via
 * the Sorting menu items.
 * @accessor
 */

/**
 * @cfg {Boolean} [multiColumnSort=false]
 * Configure as `true` to have columns remember their sorted state after other
 * columns have been clicked upon to sort.
 *
 * As subsequent columns are clicked upon, they become the new primary sort key.
 *
 * The maximum number of sorters allowed in a Store is configurable via its
 * underlying data collection. See {@link Ext.util.Collection#multiSortLimit}
 * @accessor
 */

/**
 * @cfg {Boolean} [columnLines=null]
 * Configure as `true` to display lines between grid cells.
 * @accessor
 */

/**
 * @cfg {Object[]} [data=null]
 * An array of records to display. Use in place of {@link #store} when fetching data directly
 * or using static data rather than fetching data with an ExtReact proxy.
 * 
 *      <Grid 
 *          data={[
 *              { name: 'Apple', symbol: 'AAPL' },
 *              { name: 'Microsoft', symbol: 'MSFT' },
 *              { name: 'Oracle', symbol: 'ORCL' }
 *          ]}
 *      >
 *          <Column text="Name" dataIndex="name"/>
 *          <Column text="Symbol" dataIndex="symbol"/>
 *      </Grid>
 */
 
/**
 * @event columnadd
 * Fires whenever a column is added to the Grid.
 * @param {Ext.grid.Grid} this The Grid instance.
 * @param {Ext.grid.column.Column} column The added column.
 * @param {Number} index The index of the added column.
 */

/**
 * @event columnmove
 * Fires whenever a column is moved in the grid.
 * @param {Ext.grid.Grid} this The Grid instance.
 * @param {Ext.grid.column.Column} column The moved column.
 * @param {Number} fromIndex The index the column was moved from.
 * @param {Number} toIndex The index the column was moved to.
 */

/**
 * @event columnremove
 * Fires whenever a column is removed from the Grid.
 * @param {Ext.grid.Grid} this The Grid instance.
 * @param {Ext.grid.column.Column} column The removed column.
 */

/**
 * @event columnshow
 * Fires whenever a column is shown in the Grid.
 * @param {Ext.grid.Grid} this The Grid instance.
 * @param {Ext.grid.column.Column} column The shown column.
 */

/**
 * @event columnhide
 * Fires whenever a column is hidden in the Grid.
 * @param {Ext.grid.Grid} this The Grid instance.
 * @param {Ext.grid.column.Column} column The shown column.
 */

/**
 * @event columnresize
 * Fires whenever a column is resized in the Grid.
 * @param {Ext.grid.Grid} this The Grid instance.
 * @param {Ext.grid.column.Column} column The resized column.
 * @param {Number} width The new column width.
 */

/**
 * @event columnsort
 * Fires whenever a column is sorted in the Grid.
 * @param {Ext.grid.Grid} this The Grid instance.
 * @param {Ext.grid.column.Column} column The sorted column.
 * @param {String} direction The direction of the sort on this Column. Either 'asc' or 'desc'.
 */
