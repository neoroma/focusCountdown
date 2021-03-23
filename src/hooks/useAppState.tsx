import React, { createContext, useContext, useReducer } from 'react'

export interface AppState {
  focusing: boolean
  resting: boolean
  focusDuration: number
  restDuration: number
  paused: boolean
  pauseType: 'whileFocusing' | 'whileResting' | 'beforeResting' | 'beforeFocusing' | null
}

export const defaultAppState: AppState = {
  focusing: false,
  resting: false,
  pauseType: null,
  paused: false,
  focusDuration: 1500,
  restDuration: 300,
}

export interface StartFocusAction {
  type: 'start focusing'
}

export interface StartRestingAction {
  type: 'start resting'
}

export interface PauseFocusing {
  type: 'pause focusing'
}

export interface PauseResting {
  type: 'pause resting'
}

export interface ResetAll {
  type: 'reset'
}

export interface ChangeType {
  type: 'switch'
}

export type AppAction = StartFocusAction | StartRestingAction | PauseFocusing | PauseResting | ResetAll | ChangeType

export interface AppStateContextProps {
  state: AppState
  dispatch: React.Dispatch<AppAction>
}

const neverError = (message: string, token: never): void => {
  throw new Error(`${message} : ${token} should not exist`)
}

const appStateReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'reset': {
      return defaultAppState
    }
    case 'start focusing': {
      return { ...state, focusing: true, paused: false, pauseType: null }
    }
    case 'pause focusing': {
      return { ...state, focusing: false, pauseType: 'whileFocusing', paused: true }
    }
    case 'start resting': {
      return { ...state, focusing: false, resting: true, paused: false, pauseType: null }
    }
    case 'pause resting': {
      return { ...state, resting: false, pauseType: 'whileResting', paused: true }
    }
    case 'switch': {
      return {
        ...state,
        resting: false,
        paused: false,
        focusing: false,
        pauseType: state.focusing ? 'beforeResting' : 'beforeFocusing',
      }
    }
    default:
      neverError('Irrelevant type', action)
  }
}

export const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)

// eslint-disable-next-line @typescript-eslint/ban-types
export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>): JSX.Element => {
  const [state, dispatch] = useReducer(appStateReducer, defaultAppState)

  return <AppStateContext.Provider value={{ state, dispatch }}>{children}</AppStateContext.Provider>
}

export const useAppState = (): AppStateContextProps => {
  return useContext(AppStateContext)
}
