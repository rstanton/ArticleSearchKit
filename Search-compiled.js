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

var HitItem = function HitItem(props) {
    return React.createElement(
        "div",
        null,
        JSON.stringify(props.result._source.EAN),
        React.createElement("br", null)
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
                        title: "STATUS",
                        id: "STATUS" }),
                    React.createElement(RefinementListFilter, {
                        field: "uom",
                        title: "UOM",
                        id: "UOM" }),
                    React.createElement(RefinementListFilter, {
                        field: "agerestrictions",
                        title: "AGE",
                        id: "AGE" }),
                    React.createElement(RefinementListFilter, {
                        field: "wmflag",
                        title: "WMFlag",
                        id: "WMFlag" }),
                    React.createElement(RefinementListFilter, {
                        field: "priceprompt",
                        title: "PRICEPROMPT",
                        id: "PRICEPROMPT" }),
                    React.createElement(RefinementListFilter, {
                        field: "ukvatcat",
                        title: "VAT Cat (UK)",
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
                    React.createElement(Hits, { mod: "sk-hits-grid", hitsPerPage: 50, itemComponent: HitItem }),
                    React.createElement(NoHits, null)
                )
            )
        )
    );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

//# sourceMappingURL=Search-compiled.js.map