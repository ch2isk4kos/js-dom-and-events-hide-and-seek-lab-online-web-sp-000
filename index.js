function getFirstSelector(selector) {
    return document.querySelector(selector);
}

function nestedTarget() {
    return document.querySelector('#nested .target');
}

function deepestChild() {
    // search && store the #grand-node element
    let node = document.getElementById('grand-node')

    // counter for while loop
    let nextNode = node.children[0]

    while (nextNode) {
        node = nextNode
        nextNode = node.children[0]
    }

    return node
}

function increaseRankBy(n) {

    // searches && stores a list of all elements of .ranked-list
    const rankedLists = document.querySelectorAll('.ranked-list')

    // stores the number of elements inside of [rankedList]
    const listCount = rankedLists.length

    //
    for (let i = 0; i < listCount; i++) {

        let children = rankedLists[i].children

        for (let j = 0, k = children.length; j < k; j++) {
            children[j].innerHTML = parseInt(children[j].innerHTML) + n
        }
    }

}
