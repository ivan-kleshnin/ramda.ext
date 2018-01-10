# Paqmind/Ramda

Paqmind extensions to [Ramda](http://ramdajs.com/) mostly concerned about Lenses.

**wip**

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
