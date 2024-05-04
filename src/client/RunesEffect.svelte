<script>
	let count = $state(0);
	let doubled = $derived(count * 2);

	$effect(() => {
		console.log({ count, doubled });
	});
</script>

<!-- -->
<main>
  <div>
    <h1 class="text-4xl font-bold">RunesEffect.svelte</h1>
    <hr />
    <button on:click={() => count++}>
      {doubled}
    </button>
    
    <p>{count} doubled is {doubled}</p>
  </div>
</main>

<style>
</style>
