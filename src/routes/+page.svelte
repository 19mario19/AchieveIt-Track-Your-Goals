<script lang="ts">
  import { Status, Difficulty } from "$lib/types"
  import type { Event, ID } from "$lib/types"

  import { CEvent, events } from "$lib/classes/event"

  
  const a = new CEvent("Eating fast food", Difficulty.Easy);
  const b = new CEvent("Running", Difficulty.Hard);
  const c = new CEvent("Eating", Difficulty.Easy);
  const d = new CEvent("Jumping", Difficulty.Hard);

  CEvent.newOccurrence(Number(a.getId), Status.Lose, "Didn't resist temptation");
  CEvent.newOccurrence(Number(a.getId), Status.Lose, "Too hungry");
  CEvent.newOccurrence(Number(a.getId), Status.Lose, "Ate too quickly");
  CEvent.newOccurrence(Number(a.getId), Status.Lose, "Craved unhealthy food");

  CEvent.newOccurrence(Number(b.getId), Status.Lose, "Tired quickly");
  CEvent.newOccurrence(Number(b.getId), Status.Lose, "Stumbled on an obstacle");
  CEvent.newOccurrence(Number(b.getId), Status.Lose, "Tripped and fell");
  CEvent.newOccurrence(Number(b.getId), Status.Lose, "Got a cramp");
  CEvent.newOccurrence(Number(b.getId), Status.Lose, "Out of breath");
  CEvent.newOccurrence(Number(b.getId), Status.Win, "Finished the race");
  CEvent.newOccurrence(Number(b.getId), Status.Lose, "Felt exhausted");
  CEvent.newOccurrence(Number(b.getId), Status.Lose, "Stopped due to pain");

  CEvent.newOccurrence(Number(c.getId), Status.Win, "Healthy meal choice");
  CEvent.newOccurrence(Number(c.getId), Status.Lose, "Overate");
  CEvent.newOccurrence(Number(d.getId), Status.Lose, "Failed to clear the obstacle");
  CEvent.newOccurrence(Number(d.getId), Status.Lose, "Landed awkwardly");
  const [wins, loses, length] = b.count
  const data = { wins, loses, length }
  console.table(data)

  console.log("ID: ", a.getId, b.getId)

  $: {
    $events.forEach((el) => {
      console.log(el.name, el.occurrence)
    })
  }
</script>

<div class="app">
  {#each $events as event}
    <div class="card">
      <h3>{event.name} - {event.difficulty}- {event.streak}</h3>
      <div class="occurrences">
        {#if event.occurrence}
          <!-- content here -->
          {#each event.occurrence as item}
            <p>{item.note} - {item.status}</p>
          {/each}
        {/if}
      </div>
    </div>
  {/each}
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
  }
</style>
