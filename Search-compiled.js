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
                        field: "ARTICLE_STATUS",
                        title: "STATUS",
                        id: "STATUS" }),
                    React.createElement(RefinementListFilter, {
                        field: "UOM",
                        title: "UOM",
                        id: "UOM" }),
                    React.createElement(RefinementListFilter, {
                        field: "AGERESTRICTION",
                        title: "AGE",
                        id: "AGE" }),
                    React.createElement(RefinementListFilter, {
                        field: "WMFLAG",
                        title: "WMFlag",
                        id: "WMFlag" }),
                    React.createElement(RefinementListFilter, {
                        field: "PRICEPROMPT",
                        title: "PRICEPROMPT",
                        id: "PRICEPROMPT" })
                ),
                React.createElement(LayoutResults, null)
            )
        )
    );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

//# sourceMappingURL=Search-compiled.js.map