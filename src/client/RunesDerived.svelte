<script>
  let count = $state(10);
  const doubleCount = $derived(count * 2);
</script>

<!-- -->
<main>
  <div>
    <h1 class="text-4xl font-bold">RunesDerived.svelte!</h1>
    <hr />
    <div>doubleCount= {doubleCount}</div>
  </div>
</main>

<style>
</style>
