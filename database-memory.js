import { randomUUID } from "node:crypto"

export class DatabaseMemory {
    #videos = new Map()

    list(search) {                       /* tras o id */
        return Array.from(this.#videos.entries())
        .map((videoArrey) => {
            const id = videoArrey[0]
            const data = videoArrey[1]

            return{
                id,
                ...data,
            }
        })
        .filter(video => {
            if (search) {
                return video.title.includes(search)
            }

            return true
        })
    }

    create(video) {
        const videoId = randomUUID()

        this.#videos.set(videoId, video)
    }

    update(id, video) {
        this.#videos.set(id, video)
    }

    delete(id) {
        this.#videos.delete(id)
    }
}

