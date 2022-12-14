type Point = {
    x: number
    y: number
}

function isEqual(p1: Point, p2: Point) {
    return p1.x === p2.x && p1.y === p2.y
}

const p4: Point = { x: 2, y: 3 }

const p3 = { x: p4.x, y: p4.y }

isEqual(p4, { x: 2, y: 3 })
