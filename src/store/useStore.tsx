import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AppState {
  code: string | null
  popupOpen: boolean
  setCode: (code: string | null) => void
  closePopup: () => void
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      code: null,
      popupOpen: true,
      setCode: (newCode) => set({ code: newCode }),
      closePopup: () => set({ popupOpen: false }),
    }),
    { name: 'company-code' }
  )
)