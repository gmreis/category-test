# category-test
This project is one of the possible solutions to a common problem that we have in the company.

## INPUT
```js
[
    {
        "id": "nivel_1",
        "parent": null
    },
    {
        "id": "nivel_1_1",
        "parent": "nivel_1"
    },
    {
        "id": "nivel_1_2",
        "parent": "nivel_1"
    },
    {
        "id": "nivel_1_2_1",
        "parent": "nivel_1_2"
    }
]
```
## OUTPUT
```js
{
    "nivel_1": {
        "nivel_1_1": {},
        "nivel_1_2": {
            "nivel_1_2_1": {}
        }
    }
}
```
