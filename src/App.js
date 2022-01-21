// Styles
import { CssBaseline, Grid } from '@material-ui/core';

// Components
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
          <Grid item xs={12} md={4}>
            <List />
          </Grid>
          {/* Medium or larger devices --> 8 */}
          <Grid item xs={12} md={8}>
            <Map />
          </Grid>
      </Grid>
    </>
  );
}

export default App;
