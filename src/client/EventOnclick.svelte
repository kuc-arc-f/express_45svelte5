<script>
  let count = $state(0);

  function incrementCount() {
    count++;
  }
</script>

<main>
  <div>
    <h1 class="text-4xl font-bold">EventOnclick</h1>
    <hr />
    <p>Counter: {count}</p>
    <button onclick={incrementCount}>+1</button>
  </div>
</main>

<style>
</style>
