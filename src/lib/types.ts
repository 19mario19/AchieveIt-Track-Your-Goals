enum Status {
  Win = "Win",
  Lose = "Lose",
}

enum Difficulty {
  Easy = "Easy",
  Medium = "Medium",
  Hard = "Hard",
}

type ID = number | string

type Occurrence = {
  id: ID
  note?: string
  status: Status
}

type Event = {
  id?: ID
  name: string
  difficulty: Difficulty
  streak?: number
  occurrence?: Occurrence[]
}

export type { Event, ID, Occurrence }
export { Status, Difficulty }
