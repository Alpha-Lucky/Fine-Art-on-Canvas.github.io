let leavesInterval
let leavesActive = true
let maxLeaves
let currentLeavesCount = 0

function setMaxLeaves() {
    if (window.innerWidth < 850) {
        maxLeaves = 3 
    } else {
        maxLeaves = 6.9
    }
}

function createLeaf() {
    if (currentLeavesCount < maxLeaves) {
        const leaf = document.createElement("img")
        leaf.src = "dist/leaf.png"
        leaf.className = "leaf"
        leaf.style.left = Math.random() * 100 + "vw"
        leaf.style.top = "-50px"
        leaf.style.animationDuration = Math.random() * 3 + 2 + "s"
        document.body.appendChild(leaf)
        currentLeavesCount++

        leaf.addEventListener("animationend", () => {
            leaf.remove()
            currentLeavesCount--
        })
    }
}

setMaxLeaves()
leavesInterval = setInterval(createLeaf, 3690)

window.addEventListener("resize", setMaxLeaves)
