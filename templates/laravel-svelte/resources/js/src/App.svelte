<script>
  import Home from './routes/Home.svelte';
  import Layout from './lib/components/layout/Layout.svelte';

  import { Router, Route } from 'svelte-navigator';
</script>

<Router>
  <Layout>
    <Route path="/" component={Home} />
  </Layout>
</Router>
