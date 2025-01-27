let leavesInterval
let leavesActive = true
const maxLeaves = 6.9
let currentLeavesCount = 0

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

leavesInterval = setInterval(createLeaf, 3690)
