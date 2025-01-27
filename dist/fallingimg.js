let leavesInterval
let leavesActive = true
let maxLeaves
let currentLeavesCount = 0
let snowflakeCont = 50
function setMaxLeaves() {
    if (window.innerWidth < 850) {
        maxLeaves = 3 
        snowflakeCont = 50
    } else {
        maxLeaves = 6.9
        snowflakeCont = 100
    }
}

for (let i = 0; i < snowflakeCont; i++) {
    const snowflake = document.createElement('div')
    snowflake.className = 'snowflake'
    snowflake.style.left = Math.random() * snowflakeCont + 'vw'
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'
    snowflake.style.opacity = Math.random()
    snowflake.style.animationDelay = Math.random() * 5 + 's'
    document.body.appendChild(snowflake)
}


function createFallingImg() {
    if (currentLeavesCount < maxLeaves) {
        const falling = document.createElement("img")
        falling.src = "dist/snowflake.svg"
        falling.className = "falling"
        falling.style.left = Math.random() * 100 + "vw"
        falling.style.top = "-50px"
        falling.style.animationDuration = Math.random() * 3 + 2 + "s"
        document.body.appendChild(falling)
        currentLeavesCount++

        falling.addEventListener("animationend", () => {
            falling.remove()
            currentLeavesCount--
        })
    }
}

setMaxLeaves()
leavesInterval = setInterval(createFallingImg, 3690)

window.addEventListener("resize", setMaxLeaves)
