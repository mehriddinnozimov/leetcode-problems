type Callback = (...args: any[]) => any;
type Subscription = {
    unsubscribe: () => void
}

class EventEmitter {
    store: Record<string, Callback[]> = {}
    subscribe(eventName: string, callback: Callback): Subscription {
        this.store[eventName]
        if (!this.store[eventName]) this.store[eventName] = []

        this.store[eventName].push(callback)

        return {
            unsubscribe: () => {
                this.store[eventName] = this.store[eventName].filter(v => v !== callback)
            }
        };
    }

    emit(eventName: string, args: any[] = []): any {
        const events = this.store[eventName]
        if (!events) return []
        const result: any[] = []
        for (const cb of events) {
            result.push(cb(...args))
        }
        return result
    }
}

export default {}

// https://leetcode.com/problems/event-emitter/