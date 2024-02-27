<script lang="ts">
  import { CEvent } from "$lib/classes/event"
  import { EventType, Difficulty, type ID } from "$lib/types"

  let formData: {
    id?: ID
    name: string
    type: EventType
    difficulty: Difficulty
  } = {
    name: "",
    type: EventType.Improve,
    difficulty: Difficulty.Simple,
  }

  function submit() {
    let newEvent = new CEvent(formData.name, formData.difficulty, formData.type)
    formData.id = newEvent.getId

    formData = {
      name: "",
      difficulty: Difficulty.Simple,
      type: EventType.Improve,
    }
  }
</script>

<div class="form">
  <form on:submit|preventDefault={submit}>
    <div class="input">
      <label>
        <p>Name</p>
        <input type="text" bind:value={formData.name} />
      </label>
    </div>
    <div class="input">
      <label>
        <p>Difficulty</p>
        <select name="difficulty" bind:value={formData.difficulty}>
          {#each Array.from(Object.values(Difficulty)) as item}
            <option value={item}>{item}</option>
          {/each}
        </select>
      </label>
    </div>
    <div class="input">
      <p>Type</p>
      <label>
        <select name="type" bind:value={formData.type}>
          {#each Array.from(Object.values(EventType)) as item}
            <option value={item}>{item}</option>
          {/each}
        </select>
      </label>
    </div>
    <button class="submit">Submit</button>
  </form>
</div>

<style>
  .form {
    display: flex;
  }
</style>
