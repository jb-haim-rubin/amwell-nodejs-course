type Point = {
    x: number
    y: number
}

function isEqual(p1: Point, p2: Point) {
    return p1.x === p2.x && p1.y === p2.y
}
