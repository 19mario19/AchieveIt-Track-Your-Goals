<script lang="ts">
  import { Status, Difficulty, EventType } from "$lib/types"
  import type { Event, ID } from "$lib/types"

  import { CEvent, events } from "$lib/classes/event"

  const a = new CEvent("Fast food", Difficulty.Simple, EventType.Reduce)
  const b = new CEvent("Running", Difficulty.Challenging, EventType.Improve)
  const c = new CEvent("Eating", Difficulty.Simple, EventType.Improve)
  const d = new CEvent("Jumping", Difficulty.Moderate, EventType.Improve)

  const e = new CEvent("Drinking Water", Difficulty.Simple, EventType.Improve)
  const f = new CEvent("Reading", Difficulty.Challenging, EventType.Improve)
  const g = new CEvent("Meditating", Difficulty.Simple, EventType.Improve)
  const h = new CEvent("Coding", Difficulty.Moderate, EventType.Improve)
  const i = new CEvent("Exercising", Difficulty.Challenging, EventType.Improve)

  const j = new CEvent(
    "Reducing Screen Time",
    Difficulty.Challenging,
    EventType.Reduce,
  )
  const k = new CEvent(
    "Limiting Junk Food",
    Difficulty.Moderate,
    EventType.Reduce,
  )
  const l = new CEvent(
    "Improving Time Management",
    Difficulty.Moderate,
    EventType.Improve,
  )
  const m = new CEvent(
    "Reducing Procrastination",
    Difficulty.Challenging,
    EventType.Reduce,
  )
  const n = new CEvent(
    "Improving Sleep Quality",
    Difficulty.Moderate,
    EventType.Improve,
  )

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

  CEvent.newOccurrence(
    Number(j.getId),
    Status.Win,
    "Spent less time on social media",
  )
  CEvent.newOccurrence(
    Number(j.getId),
    Status.Win,
    "Reduced screen time before bedtime",
  )
  CEvent.newOccurrence(
    Number(j.getId),
    Status.Win,
    "Engaged in outdoor activities instead of screen time",
  )
  CEvent.newOccurrence(
    Number(j.getId),
    Status.Win,
    "Implemented screen time limits using apps",
  )
  CEvent.newOccurrence(
    Number(j.getId),
    Status.Lose,
    "Ended up binge-watching TV shows",
  )

  CEvent.newOccurrence(
    Number(k.getId),
    Status.Win,
    "Opted for healthier snack options",
  )
  CEvent.newOccurrence(
    Number(k.getId),
    Status.Win,
    "Avoided fast food restaurants",
  )
  CEvent.newOccurrence(
    Number(k.getId),
    Status.Win,
    "Prepared nutritious meals at home",
  )
  CEvent.newOccurrence(
    Number(k.getId),
    Status.Win,
    "Reduced intake of sugary drinks",
  )
  CEvent.newOccurrence(
    Number(k.getId),
    Status.Lose,
    "Indulged in unhealthy snacks",
  )

  CEvent.newOccurrence(
    Number(l.getId),
    Status.Win,
    "Created a daily schedule and stuck to it",
  )
  CEvent.newOccurrence(
    Number(l.getId),
    Status.Win,
    "Prioritized tasks effectively",
  )
  CEvent.newOccurrence(
    Number(l.getId),
    Status.Win,
    "Avoided multitasking and stayed focused",
  )
  CEvent.newOccurrence(
    Number(l.getId),
    Status.Win,
    "Utilized time management tools and techniques",
  )
  CEvent.newOccurrence(
    Number(l.getId),
    Status.Lose,
    "Got distracted by non-essential tasks",
  )

  CEvent.newOccurrence(
    Number(m.getId),
    Status.Win,
    "Used productivity techniques to overcome procrastination",
  )
  CEvent.newOccurrence(
    Number(m.getId),
    Status.Win,
    "Broke tasks into smaller, manageable chunks",
  )
  CEvent.newOccurrence(
    Number(m.getId),
    Status.Win,
    "Set deadlines and held myself accountable",
  )
  CEvent.newOccurrence(
    Number(m.getId),
    Status.Win,
    "Eliminated distractions during work/study time",
  )
  CEvent.newOccurrence(
    Number(m.getId),
    Status.Lose,
    "Delayed important tasks until the last minute",
  )

  CEvent.newOccurrence(
    Number(n.getId),
    Status.Win,
    "Established a consistent bedtime routine",
  )
  CEvent.newOccurrence(
    Number(n.getId),
    Status.Win,
    "Created a relaxing sleep environment",
  )
  CEvent.newOccurrence(
    Number(n.getId),
    Status.Win,
    "Avoided caffeine and heavy meals before bedtime",
  )
  CEvent.newOccurrence(
    Number(n.getId),
    Status.Win,
    "Engaged in relaxation techniques before sleep",
  )
  CEvent.newOccurrence(
    Number(n.getId),
    Status.Lose,
    "Stayed up late using electronic devices",
  )

  CEvent.newOccurrence(
    Number(e.getId),
    Status.Win,
    "Reached daily water intake goal",
  )
  CEvent.newOccurrence(
    Number(e.getId),
    Status.Win,
    "Stayed hydrated throughout the day",
  )
  CEvent.newOccurrence(Number(e.getId), Status.Win, "Avoided sugary drinks")
  CEvent.newOccurrence(
    Number(e.getId),
    Status.Win,
    "Felt more energetic after drinking water",
  )
  CEvent.newOccurrence(
    Number(e.getId),
    Status.Lose,
    "Forgot to drink water during busy hours",
  )

  CEvent.newOccurrence(Number(f.getId), Status.Win, "Completed a chapter")
  CEvent.newOccurrence(Number(f.getId), Status.Win, "Expanded knowledge")
  CEvent.newOccurrence(
    Number(f.getId),
    Status.Win,
    "Felt more focused after reading",
  )
  CEvent.newOccurrence(
    Number(f.getId),
    Status.Win,
    "Discovered new perspectives",
  )
  CEvent.newOccurrence(
    Number(f.getId),
    Status.Lose,
    "Got distracted while reading",
  )

  CEvent.newOccurrence(Number(g.getId), Status.Win, "Felt relaxed and calm")
  CEvent.newOccurrence(Number(g.getId), Status.Win, "Improved mindfulness")
  CEvent.newOccurrence(Number(g.getId), Status.Win, "Reduced stress levels")
  CEvent.newOccurrence(Number(g.getId), Status.Win, "Enhanced mental clarity")
  CEvent.newOccurrence(
    Number(g.getId),
    Status.Lose,
    "Found it difficult to focus during meditation",
  )

  CEvent.newOccurrence(
    Number(h.getId),
    Status.Win,
    "Completed a coding project",
  )
  CEvent.newOccurrence(Number(h.getId), Status.Win, "Solved a challenging bug")
  CEvent.newOccurrence(
    Number(h.getId),
    Status.Win,
    "Learned a new programming concept",
  )
  CEvent.newOccurrence(Number(h.getId), Status.Win, "Improved coding skills")
  CEvent.newOccurrence(
    Number(h.getId),
    Status.Lose,
    "Encountered syntax errors while coding",
  )

  CEvent.newOccurrence(
    Number(i.getId),
    Status.Win,
    "Increased physical fitness",
  )
  CEvent.newOccurrence(
    Number(i.getId),
    Status.Win,
    "Boosted mood after exercising",
  )
  CEvent.newOccurrence(Number(i.getId), Status.Win, "Enhanced overall health")
  CEvent.newOccurrence(
    Number(i.getId),
    Status.Win,
    "Built endurance through exercise",
  )
  CEvent.newOccurrence(
    Number(i.getId),
    Status.Lose,
    "Skipped exercise session due to fatigue",
  )
</script>

<div class="container">
  <div class="wrapper">
    <h1>Current fights</h1>
    <h2>Things you want to improve on</h2>
    <div class="app">
      {#each $events as event}
        <div
          class="card"
          class:improve={event.type === EventType.Improve}
          class:reduce={event.type === EventType.Reduce}
        >
          <div class="top">
            <h3 class="name">{event.name}</h3>
          </div>
          <div class="occurrences">
            {#if event.occurrence}
              <div class="occurrences-list">
                {#each event.occurrence.slice(-5) as item}
                  {#if item.status === Status.Win}
                    <div class="win"></div>
                  {:else}
                    <div class="lose"></div>
                  {/if}
                {/each}
              </div>
            {/if}
          </div>
          <div class="bottom">
            <h3>{event.streak}</h3>
            <h4 class="difficulty">{event.difficulty}</h4>
          </div>
        </div>
      {/each}
    </div>
    <button>ADD NEW EVENT</button>
  </div>
</div>

<style>
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .app {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    padding: 3rem;
    margin-top: 4rem;
    justify-content: space-between;
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 170px;
    gap: 1rem;
    cursor: pointer;
    border: 1px solid transparent;
    padding: 1rem;
    border-radius: 5px;
    box-shadow:
      rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
      rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    border: 2px solid transparent;
  }

  .top {
    display: flex;
    justify-content: center;
  }

  h3.name {
    font-size: 23px;
    line-height: 40px;
    text-align: center;
    border-bottom: 1px solid var(--primary);
  }

  .occurrences {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .occurrences-list {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .win,
  .lose {
    height: 10px;
    aspect-ratio: 1;
    border-radius: 50%;
  }

  .win {
    background-color: var(--primary);
  }

  .lose {
    background-color: var(--danger);
  }

  .win:first-child,
  .lose:first-child {
    height: 6px;
    border: 1px solid white;
  }

  .win:first-child {
    outline: 2px solid var(--primary);
  }

  .lose:first-child {
    outline: 2px solid var(--danger);
  }

  .win:last-child,
  .lose:last-child {
    height: 15px;
    border: 1px solid white;
  }

  .win:last-child {
    outline: 2px solid var(--primary);
  }

  .lose:last-child {
    outline: 2px solid var(--danger);
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .bottom h3 {
    font-size: 30px;
  }

  /* type of card */
  .reduce {
    background: var(--reduce);
    border-color: var(--secondary);
  }

  .improve {
    background: var(--improve);
    border-color: var(--primary);
  }

  @media screen and (max-width: 1000px) {
    .app {
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }
    .card {
      width: 100%;
    }
  }

  @media screen and (max-width: 717px) {
    .app {
      grid-template-columns: 1fr;
      gap: 1.4rem;
      padding: 0.5rem 1rem;
    }
  }
</style>
