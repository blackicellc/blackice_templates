<script>
  import Header from '../Header.svelte';
  import Footer from '../Footer.svelte';
</script>

<main style="height: 100vh;">
  <Header />
  <slot />
  <Footer />
</main>
