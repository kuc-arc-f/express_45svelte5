<script>
  import UserProfile from "./ComponentProps/UserProfile.svelte";
</script>

<main>
  <div>
    <h1 class="text-4xl font-bold">ComponentProps</h1>
    <hr />
    <UserProfile
    name="John"
    age={20}
    favouriteColors={["green", "blue", "red"]}
    isAvailable
    />
  </div>
</main>

<style>
</style>
