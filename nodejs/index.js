const categories = require('../category_list.json')

const findParent = (parent, tree) => {
    if (tree.hasOwnProperty(parent)) {
        return tree[parent]
    }

    let parentTree

    for (const key in tree) {
        parentTree = findParent(parent, tree[key])
        if (parentTree) {
            return parentTree;
        }
    }
}

const result = categories.reduce((tree, category) => {
    let parentTree

    if (category.parent === null) {
        tree[category.id] = Object.assign({}, tree[category.id])
    } else {
        const newNode = { [category.id]: {}}
        parentTree = findParent(category.parent, tree);

        if (Boolean(parentTree) === false) {
            tree[category.parent] = Object.assign({}, tree[category.parent])
            parentTree = tree[category.parent]
        }

        if (tree[category.id]) {
            Object.assign(newNode[category.id], tree[category.id])
            delete tree[category.id]
        }

        parentTree[category.id] = Object.assign(newNode[category.id], parentTree[category.id])
    }

    return tree
}, {});

console.log(JSON.stringify(result, null, 4));
