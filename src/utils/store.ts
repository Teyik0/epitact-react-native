import { atom } from 'jotai'

export const userStepAtom = atom<number>(0);
export const isButtonPressedAtom = atom<boolean>(false); //état des boutons start, retour et stop

type answerToQuestionsType = {
    q1: number;
    q2: number;
    q3: number;
    q4: number;
} 
//0 signifie qu'aucune réponse n'a été choisi ou répondu
export const answerAtom = atom<answerToQuestionsType>({
    q1: 0,
    q2: 0,
    q3: 0,
    q4: 0,
}) 