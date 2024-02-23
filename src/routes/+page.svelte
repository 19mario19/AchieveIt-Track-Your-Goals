<script lang="ts">
  import { Status, Difficulty } from "$lib/types"
  import type { Event, ID } from "$lib/types"

  import { CEvent, events } from "$lib/classes/event"

  const a = new CEvent("Eating fast food", Difficulty.Easy)
  const b = new CEvent("Running", Difficulty.Hard)
  const c = new CEvent("Eating", Difficulty.Easy)
  const d = new CEvent("Jumping", Difficulty.Hard)

  CEvent.newOccurrence(Number(a.getId), Status.Win, "Craved unhealthy food")
  CEvent.newOccurrence(Number(a.getId), Status.Win, "Craved unhealthy food")
  CEvent.newOccurrence(Number(a.getId), Status.Lose, "Stopped due to pain")
  CEvent.newOccurrence(Number(a.getId), Status.Win, "Craved unhealthy food")

  CEvent.newOccurrence(Number(b.getId), Status.Lose, "Tired quickly")
  CEvent.newOccurrence(Number(b.getId), Status.Lose, "Stumbled on an obstacle")
  CEvent.newOccurrence(Number(b.getId), Status.Lose, "Tripped and fell")
  CEvent.newOccurrence(Number(b.getId), Status.Lose, "Got a cramp")
  CEvent.newOccurrence(Number(b.getId), Status.Lose, "Out of breath")
  CEvent.newOccurrence(Number(b.getId), Status.Win, "Finished the race")
  CEvent.newOccurrence(Number(b.getId), Status.Win, "Felt exhausted")
  CEvent.newOccurrence(Number(b.getId), Status.Win, "Stopped due to pain")
  CEvent.newOccurrence(Number(b.getId), Status.Win, "Stopped due to pain")
  CEvent.newOccurrence(Number(b.getId), Status.Win, "Stopped due to pain")
  CEvent.newOccurrence(Number(b.getId), Status.Win, "Stopped due to pain")
  CEvent.newOccurrence(Number(b.getId), Status.Win, "Stopped due to pain")
  CEvent.newOccurrence(Number(b.getId), Status.Win, "Stopped due to pain")

  CEvent.newOccurrence(Number(c.getId), Status.Win, "Healthy meal choice")
  CEvent.newOccurrence(Number(c.getId), Status.Win, "Overate")

  CEvent.newOccurrence(Number(d.getId), Status.Lose, "Failed to clear the")
  CEvent.newOccurrence(Number(d.getId), Status.Lose, "Landed awkwardly")
  CEvent.newOccurrence(Number(d.getId), Status.Win, "Failed to clear the")
  CEvent.newOccurrence(Number(d.getId), Status.Win, "Landed awkwardly")

  let list: [{ name: string; streak: number }] = []
  $: {
    $events.forEach((el) => {
      const data = { name: el.name, streak: el.streak }
      list.push(data)
    })
    console.table(list)
  }
</script>

<div class="app">
  {#each $events as event}
    <div class="card">
      <h3>{event.name} - {event.difficulty}- {event.streak}</h3>
      <div class="occurrences">
        {#if event.occurrence}
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
