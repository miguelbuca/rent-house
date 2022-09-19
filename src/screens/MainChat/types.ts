export type ChatType = {
    own: 'from' | 'to'
    from: UserType,
    to: UserType,
    readAll: boolean
}