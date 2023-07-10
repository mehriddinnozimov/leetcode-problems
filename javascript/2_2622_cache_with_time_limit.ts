class TimeLimitedCache {
    private data = new Map<number, { value: number, expiresIn: number }>()
    constructor() {

    }

    set(key: number, value: number, duration: number): boolean {
        const isKeyExist = this.data.has(key)
        const expiresIn = Date.now() + duration

        this.data.set(key, { value, expiresIn })

        return isKeyExist
    }

    get(key: number): number {
        const item = this.data.get(key)
        if (!item) return -1

        if (item.expiresIn < Date.now()) {
            this.data.delete(key)
            return -1
        }

        return item.value
    }

    clean() {
        for (const key of this.data.keys()) {
            const item = this.data.get(key)
            if (item && item.expiresIn < Date.now()) {
                this.data.delete(key)
            }
        }
    }

    count(): number {
        this.clean()
        return this.data.size
    }
}


export default {}

// https://leetcode.com/problems/cache-with-time-limit/