import { atom } from 'jotai'
import { Tab } from '~/app/const/tab'

export const tabAtom = atom<Tab>(Tab.SEARCH)
