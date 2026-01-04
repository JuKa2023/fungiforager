export type EdibilityStatus = 'edible' | 'poisonous' | 'unknown'

export interface Mushroom {
  name: string
  latinName: string
  description: string
  size: string
  location: string
  season: string
  edibility: string
  edibilityStatus: EdibilityStatus
  confusionRisk: string[]
  tip: string | null
  modelPath: string | null
  updated: string
}
