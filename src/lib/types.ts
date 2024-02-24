enum Status {
  Win = "Win",
  Lose = "Lose",
}

enum Difficulty {
  Simple = "Simple",
  Moderate = "Moderate",
  Challenging = "Challenging",
}

type ID = number | string

type Occurrence = {
  id: ID
  note?: string
  status: Status
}

enum EventType {
  Improve = "Improve",
  Reduce = "Reduce",
}

type Event = {
  id?: ID
  type: EventType
  name: string
  difficulty: Difficulty
  streak?: number
  occurrence?: Occurrence[]
}

export type { Event, ID, Occurrence }
export { Status, Difficulty, EventType }
