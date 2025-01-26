let leavesInterval
let leavesActive = true

function createLeaf() {
    const leaf = document.createElement("img")
    leaf.src = "dist/leaf.png"
    leaf.className = "leaf"
    leaf.style.left = Math.random() * 100 + "vw"
    leaf.style.top = "-50px"
    leaf.style.animationDuration = Math.random() * 3 + 2 + "s"
    document.body.appendChild(leaf)

    leaf.addEventListener("animationend", () => {
        leaf.remove()
    })
}

function startLeaves() {
    leavesInterval = setInterval(createLeaf, 1690)
}

function stopLeaves() {
    clearInterval(leavesInterval)
    leavesActive = false
}

startLeaves()
