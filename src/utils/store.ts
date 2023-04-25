import { atom } from 'jotai'

// Create your atoms and derivatives
const numAtom = atom<number>(0)
const arrAtom = atom<string[]>([])