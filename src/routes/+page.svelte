<script lang="ts">
  import { Status, Difficulty, EventType } from "$lib/types"
  import type { Event, ID } from "$lib/types"
  import Form from "$lib/components/Form.svelte"
  import { CEvent, events } from "$lib/classes/event"
</script>

<div class="container">
  <div class="wrapper">
    <h1>Current fights</h1>
    <h3>Temptations and habits.</h3>
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
    <Form />
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
