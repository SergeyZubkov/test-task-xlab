import { createContext, useContext, useReducer } from "react";

type Action = { type: 'toggle'}
type Dispatch = (action: Action) => void
type State = boolean



const SidebarContext = createContext<{isOpen: State, dispatch: Dispatch} | undefined>(undefined)


const SidebarProvider = ({children} : {children: React.ReactNode}) => {
    const [isOpen, dispatch] = useReducer((isOpen: State, action: Action) => !isOpen, false)
    return <SidebarContext.Provider value={{isOpen, dispatch}}>{children}</SidebarContext.Provider>
}

const useSidebarContext = () => {
    const ctx = useContext(SidebarContext)

    if (ctx === undefined) {
        throw new Error('useSidebarContext must be used within a SidebarProvider')
    }

    return ctx
}

export { SidebarProvider, useSidebarContext }