import { writable } from "svelte/store"
import {
  Status,
  type Difficulty,
  type ID,
  type Occurrence,
  type Event,
} from "$lib/types"

// Initialize writable store for events
const events = writable<Event[]>([])
let length = 0

// Subscribe to events store to update length variable
events.subscribe((v) => {
  length = v.length
})

class CEvent {
  private id?: ID | undefined
  private name: string
  private difficulty: Difficulty
  private streak?: number | undefined = 0

  // Create event
  constructor(name: string, difficulty: Difficulty) {
    this.name = name
    this.difficulty = difficulty
    this.id = length
    this.streak = 0

    events.update((v) => [...v, { ...this, id: length, occurrence: [] }])
  }

  get getId() {
    return this.id
  }

  // Static method to add new occurrence to existing event
  static newOccurrence(id: ID, status: Status, note?: string) {
    events.update((v) =>
      v.map((el) =>
        el.id === id
          ? {
              ...el,
              occurrence: [
                ...(el.occurrence || []),
                { status, note, id: (el.occurrence || []).length },
              ],
            }
          : el,
      ),
    )
  }

  get count() {
    let wins = 0
    let loses = 0
    let length = 0

    events.subscribe((v) => {
      v.forEach((el) => {
        if (el.id === this.id) {
          if (el.occurrence) {
            el.occurrence.map((element) => {
              if (
                element.status === Status.Win ||
                element.status === Status.Lose
              ) {
                length++
              }
              return element.status === Status.Win ? wins++ : loses++
            })
          }
        }
      })
    })

    return [wins, loses, length]
  }
}

export { CEvent, events }
