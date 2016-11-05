
const host = "http://localhost:9200/products/product";
const sk = new Searchkit.SearchkitManager(host, {

});
const SearchkitProvider = Searchkit.SearchkitProvider;

const Layout = Searchkit.Layout;
const TopBar = Searchkit.TopBar;
const LayoutBody = Searchkit.LayoutBody;
const SearchBox = Searchkit.SearchBox;
const SideBar = Searchkit.SideBar;
const HierarchicalMenuFilter = Searchkit.HierarchicalMenuFilter;
const RefinementListFilter = Searchkit.RefinementListFilter;
const LayoutResults = Searchkit.LayoutResults;
const MenuFilter = Searchkit.MenuFilter;
const ActionBar = Searchkit.ActionBar;
const ActionBarRow = Searchkit.ActionBarRow;
const HitsStats = Searchkit.HitsStats;
const SelectedFilters = Searchkit.SelectedFilters;
const ResetFilters = Searchkit.ResetFilters;
const Hits = Searchkit.Hits;
const NoHits = Searchkit.NoHits;

function RowItem(props) {
    return (
        <tr>
            <td>{props.row._source.ean}</td>
            <td>{props.row._source.article_status}</td>
            <td>{props.row._source.fulldesc}</td>
            <td>{props.row._source.ukvatcat}</td>
            <td>{props.row._source.uom}</td>
            <td>{props.row._source.articlenumber}</td>
    </tr>);
};

function TableBody(props) {

    return (
        <tbody>
            <RowItem row={props.hits[0]}/>
            {props.hits.map(function(row, i){
                return(
                    <RowItem row={row}/>
                )
            })}
        </tbody>
    );

}
const HitItem = (props)=>(
    <div>
        <table className="table table-striped">
            <TableBody hits={props.hits}/>
        </table>
    </div>
);


const App = ()=> (
    <SearchkitProvider searchkit={sk}>
        <Layout>
            <TopBar>
                <SearchBox
                    autofocus={true}
                    searchOnChange={false}
                    />
            </TopBar>
            <LayoutBody>
                <SideBar>
                    <RefinementListFilter
                        field="article_status"
                        title="Article Status"
                        id="STATUS"/>
                    <RefinementListFilter
                        field="articletype"
                        title="Article Type"
                        id="ARTTYPE"/>
                    <RefinementListFilter
                        field="uom"
                        title="UOM"
                        id="UOM"/>
                    <RefinementListFilter
                        field="agerestriction"
                        title="Age Restriction"
                        id="AGE"/>
                    <RefinementListFilter
                        field="wmflag"
                        title="W&M Flag"
                        id="WMFlag"/>
                    <RefinementListFilter
                        field="priceprompt"
                        title="Price Prompt Indicator"
                        id="PRICEPROMPT"/>
                    <RefinementListFilter
                        field="ukvatcat"
                        title="Vat Category UK"
                        id="VATCAT"/>
                </SideBar>
                <LayoutResults>
                    <ActionBar>

                        <ActionBarRow>
                            <HitsStats/>
                        </ActionBarRow>
                        <ActionBarRow>
                            <SelectedFilters/>
                            <ResetFilters/>
                        </ActionBarRow>

                    </ActionBar>
                    <Hits hitsPerPage={10} listComponent={HitItem}/>
                    <NoHits/>
                </LayoutResults>
            </LayoutBody>
        </Layout>
    </SearchkitProvider>
);




ReactDOM.render(<App/>, document.getElementById('app'));