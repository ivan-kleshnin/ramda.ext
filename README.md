# Paqmind/Ramda

Paqmind extensions to [Ramda](http://ramdajs.com/) mostly concerned about Lenses.

**wip**

## Extra API

The API reexports all functions from [Ramda](http://ramdajs.com/docs/) adding the following.

#### Aliases

* `mergeDeep` (alias `mergeDeepRight`)
* `id, I` (alias `identity`)
* `K` (alias `always`)

Useful shortcuts.

#### Logic

* `isNotEmpty`
* `notNil`
* `firstOk`
* `S` – S combinator

More useful stuff.

#### Lensing

* `lensify`
* `over2`
* `set2`
* `unset2`
* `view2`

Use strings and arrays in place of lenses.

#### Indexed versions

* `map2`
* `filter2`
* `chain2`
* `reduce2`

Offset-aware versions of the classic FP tetrada.

#### Functions

* `withName, fn`

Modify function objects.

#### Flipped versions

* `appendFlipped`
* `prependFlipped`
* `concatFlipped`
* `mergeFlipped`
* `mergeDeepFlipped` (see **Aliases** above)

Simplify state transformations.

#### Arrays

* `takeUntil` – a companion of `takeWhile`

#### Objects

* `isPlainObj`
* `flattenObj`

Useful functions to work with objects.

## LICENSE

MIT
