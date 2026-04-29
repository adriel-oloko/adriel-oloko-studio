import { create } from 'zustand'

// Define the shape of your state to include both section and row
interface TicketState {
    location: string
    setLocation: (location: string) => void

    selectedSection: string | null
    selectedRow: string | null
    // Actions to update the strings
    setSelectedSection: (section: string | null) => void
    setSelectedRow: (row: string | null) => void
    // Action to clear the selection
    clearSelection: () => void
}

export const useTicketStore = create<TicketState>((set) => ({
    location: 'Allegiant Stadium, Las Vegas, NV',
    setLocation: (loc) => set({ location: loc }),

    // Initial state based on the provided screenshot
    selectedSection: '434',
    selectedRow: '4',

    setSelectedSection: (section) => set({ selectedSection: section }),

    setSelectedRow: (row) => set({ selectedRow: row }),

    clearSelection: () =>
        set({
            selectedSection: null,
            selectedRow: null,
        }),
}))

interface TicketCount {
    count: number
    maxTickets: number
    increment: () => void
    decrement: () => void
    reset: () => void
    setCount: (qty: number) => void
}

export const useTicketCount = create<TicketCount>((set) => ({
    count: 2,
    maxTickets: 6, // Example limit

    increment: () =>
        set((state) => ({
            count: state.count < state.maxTickets ? state.count + 1 : state.count,
        })),

    decrement: () =>
        set((state) => ({
            count: state.count > 0 ? state.count - 1 : 0,
        })),

    reset: () => set({ count: 0 }),

    setCount: (qty: number) => set({ count: qty }),
}))

interface PaymentState {
    selectedCoin: string
    setSelectedCoin: (id: string) => void
}

export const usePaymentStore = create<PaymentState>((set) => ({
    selectedCoin: 'BTC', // Default selection
    setSelectedCoin: (id) => set({ selectedCoin: id }),
}))

export const formatSimpleCurrency = (value: number): string => {
    return `${value.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })}`
}

export const COMPLETE_SHOWS = [
    {
        location: 'Saban Field at Bryant-Denny Stadium',
        state: 'Tuscaloosa, AL',
        date: 'APR 18, 2026',
        stars: 'Ella Langley, Vincent Mason, Zach John King',
        image: 'mw-1.jpg',
    },
    {
        location: 'Allegiant Stadium',
        state: 'Las Vegas, NV',
        date: 'MAY 1-2, 2026',
        stars: 'Brooks & Dunn, Thomas Rhett, Gavin Adcock, Vincent Mason',
        image: 'mw-2.jpg',
    },
    {
        location: 'Lucas Oil Stadium',
        state: 'Indianapolis, IN',
        date: 'MAY 8-9, 2026',
        stars: 'Brooks & Dunn, Ella Langley, Flatland Cavalry, Hudson Westbrook, Zach John King',
        image: 'mw-4.jpg',
    },
    {
        location: 'Ben Hill Griffin Stadium',
        state: 'Gainesville, FL',
        date: 'MAY 15-16, 2026',
        stars: 'Thomas Rhett, Ella Langley, Gavin Adcock, Zach John King',
        image: 'mw-6.jpg',
    },
    {
        location: 'Empower Field at Mile High',
        state: 'Denver, CO',
        date: 'MAY 29-30, 2026',
        stars: 'Brooks & Dunn, Ella Langley, Gavin Adcock, Vincent Mason',
        image: 'mw-8.jpg',
    },
    {
        location: 'Acrisure Stadium',
        state: 'Pittsburgh, PA',
        date: 'JUN 5-6, 2026',
        stars: 'Brooks & Dunn, Ella Langley, Gavin Adcock, Zach John King',
        image: 'mw-10.jpg',
    },
    {
        location: 'Soldier Field',
        state: 'Chicago, IL',
        date: 'JUN 19-20, 2026',
        stars: 'Brooks & Dunn, Ella Langley, Gavin Adcock, Zach John King',
        image: 'mw-12.jpg',
    },
    {
        location: 'Clemson Memorial Stadium',
        state: 'Clemson, SC',
        date: 'JUN 26-27, 2026',
        stars: 'Brooks & Dunn, Ella Langley, Gavin Adcock, Jason Scott & The High Heat',
        image: 'mw-14.jpg',
    },
    {
        location: 'M&T Bank Stadium',
        state: 'Baltimore, MD',
        date: 'JUL 17-18, 2026',
        stars: 'Brooks & Dunn, Ella Langley, Gavin Adcock, Jason Scott & The High Heat',
        image: 'mw-16.jpg',
    },
    {
        location: 'Michigan Stadium',
        state: 'Ann Arbor, MI',
        date: 'JUL 24-25, 2026',
        stars: 'Thomas Rhett, HARDY, Hudson Westbrook, Blake Whiten',
        image: 'mw-18.jpg',
    },
    {
        location: 'Lincoln Financial Field',
        state: 'Philadelphia, PA',
        date: 'JUL 31 - AUG 1, 2026',
        stars: 'Brooks & Dunn, Ella Langley, Hudson Westbrook, Blake Whiten',
        image: 'mw-20.jpg',
    },
]
