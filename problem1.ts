const bubble: number[] = [80, 65, 90, 75, 85, 70, 70, 95, 60]

const bubbleShort = (bubble: number[]): void => {
    for (let i: number = 0; i < bubble.length; i++) {
        for (let j: number = i + 1; j < bubble.length; j++) {
            if (bubble[i] > bubble[j]) {
                let temp: number = bubble[i]
                bubble[i] = bubble[j]
                bubble[j] = temp
            }
        }
    }
    console.log(bubble)
}

bubbleShort(bubble)