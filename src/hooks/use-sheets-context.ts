import { useContext } from 'react'
import { SheetsContext } from '../contexts/sheets-context'

export const useSheetsContext = () => useContext(SheetsContext)
