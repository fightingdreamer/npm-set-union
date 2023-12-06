# set-union

## Description

Missing union operation for Set.

Second implementation can do union opration between any number of iterables.

## Install

```bash
bun add @fightingdreamer/set-union
```

## Usage

```js
import {union} from '@fightingdreamer/set-union'

const a = new Set([1,2,3])
const b = [3,4,5][Symbol.iterator]()
const result = union(a, b)
const expect = [1,2,3,4,5]
for (const value of expect) {
  console.assert(result.has(value))
}
```

```js
import {unionMany} from '@fightingdreamer/set-union'

const sets = [
  [1,2,3][Symbol.iterator](),
  [3,4,5][Symbol.iterator](),
  [5,6,7][Symbol.iterator]()
][Symbol.iterator]()
const result = unionMany(sets)
const expect = [1,2,3,4,5,6,7]
for (const value of expect) {
  console.assert(result.has(value))
}
```

## Usage (node / commonjs)

```js
const {union} = require('@fightingdreamer/set-union')

const a = new Set([1,2,3])
const b = [3,4,5][Symbol.iterator]()
const result = union(a, b)
const expect = [1,2,3,4,5]
for (const value of expect) {
  assert(result.has(value))
}
```

```js
const {unionMany} = require('@fightingdreamer/set-union')

const sets = [
  [1,2,3][Symbol.iterator](),
  [3,4,5][Symbol.iterator](),
  [5,6,7][Symbol.iterator]()
][Symbol.iterator]()
const result = unionMany(sets)
const expect = [1,2,3,4,5,6,7]
for (const value of expect) {
  assert(result.has(value))
}
```

## Functions

```js
function union<T>(a: Set<T>, b: Iterable<T>): Set<T>
```

Will apply union operation between Set and Iterable.

```js
function unionMany<T>(sets: Iterable<Iterable<T>>): Set<T>
```

Will apply union operation between any number of Iterables.
