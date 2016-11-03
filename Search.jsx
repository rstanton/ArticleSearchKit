
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

const HitItem = (props) => (
    <div>{JSON.stringify(props.result._source.EAN)}<br/></div>
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
                        field="ARTICLE_STATUS"
                        title="STATUS"
                        id="STATUS"/>
                    <RefinementListFilter
                        field="UOM"
                        title="UOM"
                        id="UOM"/>
                    <RefinementListFilter
                        field="AGERESTRICTION"
                        title="AGE"
                        id="AGE"/>
                    <RefinementListFilter
                        field="WMFLAG"
                        title="WMFlag"
                        id="WMFlag"/>
                    <RefinementListFilter
                        field="PRICEPROMPT"
                        title="PRICEPROMPT"
                        id="PRICEPROMPT"/>
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
                    <Hits mod="sk-hits-grid" hitsPerPage={50} itemComponent={HitItem}/>
                    <NoHits/>
                </LayoutResults>
            </LayoutBody>
        </Layout>
    </SearchkitProvider>
)




ReactDOM.render(<App/>, document.getElementById('app'))