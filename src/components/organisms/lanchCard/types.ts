export type DescriptionType = {
  energy: boolean
  water: boolean
  'air-conditioning'?: boolean
  others: string
}

export interface LanchCardProps {
  image?: string
  kind:
    | 'Suite'
    | 'T1'
    | 'T2'
    | 'T3'
    | 'T4'
    | 'T5'
    | 'V1'
    | 'V2'
    | 'V3'
    | 'V4'
    | 'V5'
    | 'Duplex'
  description: DescriptionType
  price: string
  model: 'per-month' | 'simestrer' | 'qarter'
  ower: UserType
}
