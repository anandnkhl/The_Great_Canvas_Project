const canvas = document.getElementById('mouseMoveCanvas');
canvas.width = innerWidth;
canvas.height = innerHeight;
const ctx = canvas.getContext('2d');

ctx.shadowBlur = 20;
ctx.lineCap = 'round';

const predefinedPoints = [{"x":312,"y":178},{"x":312,"y":178},{"x":312,"y":178},{"x":312,"y":178},{"x":312,"y":178},{"x":312,"y":178},{"x":312,"y":178},{"x":311,"y":178},{"x":311,"y":178},{"x":311,"y":178},{"x":310,"y":178},{"x":310,"y":179},{"x":310,"y":180},{"x":309,"y":181},{"x":309,"y":181},{"x":309,"y":182},{"x":309,"y":182},{"x":309,"y":183},{"x":309,"y":183},{"x":309,"y":183},{"x":309,"y":183},{"x":309,"y":183},{"x":309,"y":183},{"x":309,"y":183},{"x":309,"y":183},{"x":309,"y":183},{"x":309,"y":183},{"x":310,"y":183},{"x":310,"y":183},{"x":310,"y":183},{"x":310,"y":183},{"x":311,"y":183},{"x":311,"y":183},{"x":311,"y":183},{"x":311,"y":183},{"x":312,"y":183},{"x":312,"y":183},{"x":312,"y":183},{"x":312,"y":183},{"x":312,"y":183},{"x":312,"y":183},{"x":312,"y":183},{"x":312,"y":183},{"x":312,"y":183},{"x":312,"y":183},{"x":312,"y":183},{"x":312,"y":183},{"x":312,"y":183},{"x":312,"y":183},{"x":312,"y":183},{"x":312,"y":183},{"x":312,"y":183},{"x":312,"y":182},{"x":312,"y":182},{"x":312,"y":182},{"x":312,"y":182},{"x":312,"y":182},{"x":312,"y":182},{"x":312,"y":182},{"x":312,"y":182},{"x":312,"y":181},{"x":312,"y":181},{"x":312,"y":181},{"x":312,"y":181},{"x":312,"y":181},{"x":312,"y":181},{"x":312,"y":181},{"x":312,"y":181},{"x":312,"y":181},{"x":312,"y":181},{"x":312,"y":181},{"x":312,"y":181},{"x":312,"y":181},{"x":312,"y":181},{"x":312,"y":181},{"x":312,"y":181},{"x":312,"y":181},{"x":312,"y":181},{"x":312,"y":181},{"x":312,"y":181},{"x":312,"y":181},{"x":312,"y":181},{"x":312,"y":181},{"x":312,"y":181},{"x":312,"y":181},{"x":312,"y":181},{"x":312,"y":181},{"x":312,"y":181},{"x":311,"y":181},{"x":311,"y":181},{"x":311,"y":181},{"x":310,"y":181},{"x":310,"y":181},{"x":310,"y":181},{"x":309,"y":181},{"x":309,"y":182},{"x":309,"y":183},{"x":309,"y":183},{"x":308,"y":184},{"x":308,"y":184},{"x":308,"y":185},{"x":308,"y":185},{"x":308,"y":186},{"x":308,"y":186},{"x":308,"y":188},{"x":308,"y":188},{"x":308,"y":189},{"x":309,"y":189},{"x":309,"y":190},{"x":310,"y":190},{"x":311,"y":190},{"x":311,"y":190},{"x":312,"y":190},{"x":312,"y":190},{"x":313,"y":190},{"x":314,"y":190},{"x":315,"y":190},{"x":316,"y":190},{"x":316,"y":189},{"x":317,"y":189},{"x":317,"y":189},{"x":318,"y":189},{"x":319,"y":188},{"x":319,"y":188},{"x":319,"y":187},{"x":320,"y":187},{"x":320,"y":186},{"x":320,"y":186},{"x":320,"y":186},{"x":320,"y":185},{"x":320,"y":185},{"x":320,"y":185},{"x":320,"y":185},{"x":320,"y":184},{"x":320,"y":184},{"x":320,"y":184},{"x":320,"y":184},{"x":320,"y":184},{"x":319,"y":183},{"x":319,"y":183},{"x":319,"y":183},{"x":319,"y":183},{"x":319,"y":183},{"x":319,"y":183},{"x":319,"y":183},{"x":319,"y":183},{"x":319,"y":183},{"x":319,"y":182},{"x":319,"y":182},{"x":319,"y":182},{"x":318,"y":182},{"x":318,"y":182},{"x":318,"y":182},{"x":318,"y":182},{"x":318,"y":182},{"x":318,"y":182},{"x":318,"y":182},{"x":318,"y":182},{"x":318,"y":182},{"x":318,"y":182},{"x":317,"y":182},{"x":317,"y":182},{"x":317,"y":182},{"x":317,"y":182},{"x":316,"y":181},{"x":316,"y":181},{"x":315,"y":181},{"x":315,"y":181},{"x":314,"y":181}]

const MAX_TTL = 50

const random = (min, max) => Math.random() * (max - min) + min
const getDistance = (pointA, pointB) => Math.sqrt(Math.pow(pointA.x - pointB.x, 2) + Math.pow(pointA.y - pointB.y, 2))

let autoPlay = true
let mouseX, mouseY
canvas.addEventListener('mousemove', (e) => {
    autoPlay = false
    mouseX = e.clientX
    mouseY = e.clientY
})

const points = []

const redraw = () => {
    requestAnimationFrame(redraw)

    if (!autoPlay) {
        if (points.length === 0) {
            points.push({x: mouseX, y: mouseY, ttl: MAX_TTL, distance: 10, previousX: mouseX, previousY: mouseY})
            return
        }

        const previousPoint = points[points.length - 1]
        const newPoint = {x: mouseX, y: mouseY, ttl: MAX_TTL, previousX: previousPoint.x, previousY: previousPoint.y}
        newPoint.distance = getDistance(previousPoint, newPoint)
        points.push(newPoint)

    } else {
        const predefinedPoint = predefinedPoints.shift()
        if (points.length === 0) {
            points.push({...predefinedPoint, ttl: MAX_TTL, distance: 10, previousX: predefinedPoint.x, previousY: predefinedPoint.y })
        } else {
            const previousPredefinedPoint = points[points.length - 1]
            const distance = getDistance(previousPredefinedPoint, predefinedPoint)
            points.push({...predefinedPoint, ttl: MAX_TTL, distance, previousX: previousPredefinedPoint.x, previousY: previousPredefinedPoint.y })
        }
        predefinedPoints.push(predefinedPoint)
    }

    ctx.clearRect(0, 0, innerWidth, innerHeight)
    points.forEach((p, i) => {
        p.ttl--
        if (p.ttl <= 0) {
            points.splice(i, 1)
        } else {
            ctx.beginPath();

            ctx.strokeStyle = `rgba(173, 216, 230, 1)`
            ctx.shadowColor = `rgba(173, 216, 230, ${p.ttl / MAX_TTL})`

            ctx.lineWidth = Math.min(Math.max(p.distance / 20, 2), 5);
            const glitchX = Math.min(Math.max(p.distance / 20, 1), 2) * random(-1, 1)
            const glitchY = Math.min(Math.max(p.distance / 20, 1), 2) * random(-1, 1)
            ctx.moveTo(p.previousX, p.previousY);
            ctx.lineTo(glitchX + (p.x + p.previousX) / 2, glitchY + (p.y + p.previousY) / 2);
            ctx.lineTo(p.x, p.y);
            ctx.stroke();
        }
    })
}

requestAnimationFrame(redraw)



