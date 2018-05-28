# Paqmind/Ramda

Paqmind extensions to [Ramda](http://ramdajs.com/) mostly concerned about Lenses.

**wip**

#### Install

```
$ npm install @paqmind/ramda
```

```js
import * as R from "@paqmind/ramda"
```

Hints: use IDE shortcuts for most common imports, check Webpack's `ProvidePlugin`.

## Extra API

The API reexports all functions from [Ramda](http://ramdajs.com/docs/) adding the following.

#### Logic

* `isNotEmpty`
* `notNil`
* `firstOk`
* `id | I` – alias `identity`
* `K` – alias `always`
* `S` – S combinator

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

* `map2` – `R.addIndex(R.map)`
* `filter2` – ...
* `chain2` – ...
* `reduce2` – ...

#### Functions

* `withName, fn` – name your anonymous functions

#### Arrays

* `appendFlipped`
* `prependFlipped`
* `concatFlipped`
* `takeUntil` – a companion of `takeWhile`

#### Objects

* `mergeDeep` – alias `mergeDeepRight`
* `mergeFlipped`
* `mergeDeepFlipped`
* `isPlainObj`
* `flattenObj`

## LICENSE

MIT
