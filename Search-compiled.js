"use strict";

var host = "http://localhost:9200/products/product";
var sk = new Searchkit.SearchkitManager(host, {});
var SearchkitProvider = Searchkit.SearchkitProvider;

var Layout = Searchkit.Layout;
var TopBar = Searchkit.TopBar;
var LayoutBody = Searchkit.LayoutBody;
var SearchBox = Searchkit.SearchBox;
var SideBar = Searchkit.SideBar;
var HierarchicalMenuFilter = Searchkit.HierarchicalMenuFilter;
var RefinementListFilter = Searchkit.RefinementListFilter;
var LayoutResults = Searchkit.LayoutResults;
var MenuFilter = Searchkit.MenuFilter;
var ActionBar = Searchkit.ActionBar;
var ActionBarRow = Searchkit.ActionBarRow;
var HitsStats = Searchkit.HitsStats;
var SelectedFilters = Searchkit.SelectedFilters;
var ResetFilters = Searchkit.ResetFilters;
var Hits = Searchkit.Hits;
var NoHits = Searchkit.NoHits;

function RowItem(props) {
    return React.createElement(
        "tr",
        null,
        React.createElement(
            "td",
            null,
            props.row._source.ean
        ),
        React.createElement(
            "td",
            null,
            props.row._source.article_status
        ),
        React.createElement(
            "td",
            null,
            props.row._source.fulldesc
        ),
        React.createElement(
            "td",
            null,
            props.row._source.ukvatcat
        ),
        React.createElement(
            "td",
            null,
            props.row._source.uom
        ),
        React.createElement(
            "td",
            null,
            props.row._source.articlenumber
        )
    );
};

function TableBody(props) {

    return React.createElement(
        "tbody",
        null,
        React.createElement(RowItem, { row: props.hits[0] }),
        props.hits.map(function (row, i) {
            return React.createElement(RowItem, { row: row });
        })
    );
}
var HitItem = function HitItem(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "table",
            { className: "table table-striped" },
            React.createElement(TableBody, { hits: props.hits })
        )
    );
};

var App = function App() {
    return React.createElement(
        SearchkitProvider,
        { searchkit: sk },
        React.createElement(
            Layout,
            null,
            React.createElement(
                TopBar,
                null,
                React.createElement(SearchBox, {
                    autofocus: true,
                    searchOnChange: false
                })
            ),
            React.createElement(
                LayoutBody,
                null,
                React.createElement(
                    SideBar,
                    null,
                    React.createElement(RefinementListFilter, {
                        field: "article_status",
                        title: "Article Status",
                        id: "STATUS" }),
                    React.createElement(RefinementListFilter, {
                        field: "articletype",
                        title: "Article Type",
                        id: "ARTTYPE" }),
                    React.createElement(RefinementListFilter, {
                        field: "uom",
                        title: "UOM",
                        id: "UOM" }),
                    React.createElement(RefinementListFilter, {
                        field: "agerestriction",
                        title: "Age Restriction",
                        id: "AGE" }),
                    React.createElement(RefinementListFilter, {
                        field: "wmflag",
                        title: "W&M Flag",
                        id: "WMFlag" }),
                    React.createElement(RefinementListFilter, {
                        field: "priceprompt",
                        title: "Price Prompt Indicator",
                        id: "PRICEPROMPT" }),
                    React.createElement(RefinementListFilter, {
                        field: "ukvatcat",
                        title: "Vat Category UK",
                        id: "VATCAT" })
                ),
                React.createElement(
                    LayoutResults,
                    null,
                    React.createElement(
                        ActionBar,
                        null,
                        React.createElement(
                            ActionBarRow,
                            null,
                            React.createElement(HitsStats, null)
                        ),
                        React.createElement(
                            ActionBarRow,
                            null,
                            React.createElement(SelectedFilters, null),
                            React.createElement(ResetFilters, null)
                        )
                    ),
                    React.createElement(Hits, { hitsPerPage: 10, listComponent: HitItem }),
                    React.createElement(NoHits, null)
                )
            )
        )
    );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

//# sourceMappingURL=Search-compiled.js.map