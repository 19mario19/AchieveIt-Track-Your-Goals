import { writable } from "svelte/store"
import {
  Status,
  type Difficulty,
  type ID,
  type Occurrence,
  type Event,
  EventType,
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
  private type: EventType
  /**
   * Creates an instance of CEvent.
   * @param {string} name - The name of the event.
   * @param {Difficulty} difficulty - The difficulty of the event.
   */
  constructor(name: string, difficulty: Difficulty, type: EventType) {
    this.name = name
    this.difficulty = difficulty
    this.id = length
    this.type = type

    // initial state of the object
    events.update((v) => [
      ...v,
      { ...this, id: length, occurrence: [], streak: 0 },
    ])
  }

  /**
   * Getter for the ID of the event.
   * @returns {ID | undefined} The ID of the event.
   */
  get getId() {
    return this.id
  }

  /**
   * Static method to add a new occurrence to an existing event.
   * @param {ID} id - The ID of the event.
   * @param {Status} status - The status of the occurrence (Win or Lose).
   * @param {string} [note] - Optional note for the occurrence.
   */
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
    // updates the data
    CEvent.count(id)
  }

  /**
   * Private static method to count wins, loses, and streak for an event.
   * @param {ID} id - The ID of the event.
   * @returns {[number, number, number, number]} An array containing wins, loses, length, and streak.
   */
  private static count(id: ID) {
    let wins = 0
    let loses = 0
    let length = 0
    let streak = 0

    events.subscribe((v) => {
      v.forEach((el) => {
        if (el.id === id) {
          if (el.occurrence) {
            el.occurrence.map((element) => {
              if (
                element.status === Status.Win ||
                element.status === Status.Lose
              ) {
                length++
              }
              if (element.status === Status.Win) {
                streak++
              } else {
                streak = 0
              }
              return element.status === Status.Win ? wins++ : loses++
            })
          }
        }
      })
    })

    events.update((v) => v.map((el) => (el.id === id ? { ...el, streak } : el)))
    return [wins, loses, length, streak]
  }
}

export { CEvent, events }
