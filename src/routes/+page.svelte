<script lang="ts">
  import { Status, Difficulty } from "$lib/types"
  import type { Event, ID } from "$lib/types"

  import { CEvent, events } from "$lib/classes/event"

 const a = new CEvent("Reading before bed", Difficulty.Easy);
const b = new CEvent("Daily meditation", Difficulty.Medium);
const c = new CEvent("Regular exercise routine", Difficulty.Hard);
const d = new CEvent("Limiting screen time", Difficulty.Medium);
const e = new CEvent("Healthy meal preparation", Difficulty.Easy);

CEvent.newOccurrence(Number(a.getId), Status.Win, "Felt relaxed and ready for sleep");
CEvent.newOccurrence(Number(a.getId), Status.Win, "Enjoyed a good book");
CEvent.newOccurrence(Number(a.getId), Status.Lose, "Stayed up late scrolling on phone");
CEvent.newOccurrence(Number(a.getId), Status.Win, "Had pleasant dreams");
CEvent.newOccurrence(Number(a.getId), Status.Win, "Woke up feeling refreshed");

CEvent.newOccurrence(Number(b.getId), Status.Win, "Cleared the mind and reduced stress");
CEvent.newOccurrence(Number(b.getId), Status.Win, "Felt more focused throughout the day");
CEvent.newOccurrence(Number(b.getId), Status.Lose, "Skipped meditation session due to time constraints");
CEvent.newOccurrence(Number(b.getId), Status.Win, "Increased mindfulness in daily activities");
CEvent.newOccurrence(Number(b.getId), Status.Win, "Experienced improved emotional well-being");

CEvent.newOccurrence(Number(c.getId), Status.Win, "Completed full workout routine");
CEvent.newOccurrence(Number(c.getId), Status.Win, "Boosted energy levels");
CEvent.newOccurrence(Number(c.getId), Status.Lose, "Skipped exercise due to lack of motivation");
CEvent.newOccurrence(Number(c.getId), Status.Win, "Noticed improvements in strength and endurance");
CEvent.newOccurrence(Number(c.getId), Status.Win, "Felt proud of physical accomplishments");

CEvent.newOccurrence(Number(d.getId), Status.Win, "Reduced eye strain and headaches");
CEvent.newOccurrence(Number(d.getId), Status.Win, "Engaged in more meaningful activities");
CEvent.newOccurrence(Number(d.getId), Status.Lose, "Got caught in social media browsing");
CEvent.newOccurrence(Number(d.getId), Status.Win, "Spent quality time with loved ones");
CEvent.newOccurrence(Number(d.getId), Status.Win, "Improved sleep quality");

CEvent.newOccurrence(Number(e.getId), Status.Win, "Prepared nutritious and satisfying meals");
CEvent.newOccurrence(Number(e.getId), Status.Win, "Enjoyed delicious homemade dishes");
CEvent.newOccurrence(Number(e.getId), Status.Lose, "Ordered fast food out of convenience");
CEvent.newOccurrence(Number(e.getId), Status.Win, "Felt energized after eating well");
CEvent.newOccurrence(Number(e.getId), Status.Win, "Noticed positive changes in health and well-being");


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
      <h3>{event.name}</h3>
      <p>Difficulty: {event.difficulty}</p>
      <p>Streak: {event.streak}</p>
      <div class="occurrences">
        {#if event.occurrence}
          {#each event.occurrence as item}
            <div class="occurrence">
              <span>{item.note}</span>
              <span class="{item.status.toLowerCase()}">{item.status}</span>
            </div>
          {/each}
        {/if}
      </div>
    </div>
  {/each}
</div>

<style>
  .app {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    padding: 20px;
  }

  .card {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 300px;
    text-align: center;
  }

  h3 {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 24px;
    color: #333;
  }

  p {
    margin: 5px 0;
    color: #666;
  }

  .occurrences {
    margin-top: 15px;
  }

  .occurrence {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }

  .occurrence span {
    padding: 8px 12px;
    border-radius: 20px;
    font-size: 14px;
  }

  .win {
    background-color: #4caf50;
    color: #fff;
  }

  .lose {
    background-color: #f44336;
    color: #fff;
  }
</style>
