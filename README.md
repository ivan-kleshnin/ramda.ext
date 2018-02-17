# Paqmind/Ramda

Paqmind extensions to [Ramda](http://ramdajs.com/) mostly concerned about Lenses.

**wip**

#### Install

```
$ npm install @paqmind/ramda
```

```js
import * as R from "@paqmind/ramda" // Hint: use IDE shortcuts for most common imports
```

## Extra API

The API reexports all functions from [Ramda](http://ramdajs.com/docs/) adding the following.

#### Logic

* `isNotEmpty`
* `notNil`
* `firstOk`
* `id | I` (alias `identity`)
* `K` (alias `always`)
* `S`

Useful shortcuts.

#### Lensing

* `lensify`
* `over2`
* `set2`
* `unset2`
* `view2`

Allow to use strings and arrays in place of lenses. 
For weird reasons, Ramda doesn't support convenient shortcuts for objects and arrays. 
We follow [Partial.Lenses](https://github.com/calmm-js/partial.lenses) design and use them.

```js
R.set2("foo", "FOO", {})          // can be used instead of R.assoc
R.set2(["foo", "bar"], "BAR", {}) // can be used instead of R.assocPath
```

Note: names are under consideration. We may decide to override `R.set, R.over, R.view` instead of adding `xxx2` versions
in the future.

#### Indexed versions

* `map2`
* `filter2`
* `chain2`

Offset-aware versions of three classic functions.

#### Functions

* `withName | fn :: Function -> Function`

Helpers to name your anonymous functions.

#### Flipped versions

* `appendFlipped`
* `prependFlipped`
* `concatFlipped`
* `mergeFlipped`
* `mergeDeep` (alias `mergeDeepRight`)
* `mergeDeepFlipped`

Simplify state transformations (state is second argument).

#### Objects

* `isPlainObj :: Object * -> Boolean`
* `flattenObj :: Object (Object *) -> Object *`

Useful functions to work with objects.

## LICENSE

MIT
