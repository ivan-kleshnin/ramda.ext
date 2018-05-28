import * as R from "ramda"
export * from "ramda"

// Logic
export let isNotEmpty = R.complement(R.isEmpty)
export let notNil = R.complement(R.isNil)
export let firstOk = R.find(notNil)
export let id = R.identity
export let I = R.identity
export let K = R.always
export let S = (x, y, z) => x(z, y(z))

// Lenses
export let lensify = (lens) => {
  if (R.is(Array, lens)) {
    return R.reduce(
      (z, s) => R.compose(z, R.is(Number, s) ? R.lensIndex(s) : R.lensProp(s)),
      id,
      lens
    )
  } else if (R.is(String, lens)) {
    return R.lensProp(lens)
  } else if (R.is(Number, lens)) {
    return R.lensIndex(lens)
  } else if (R.is(Function, lens)) {
    return lens
  } else {
    throw Error(`invalid lens ${lens}`)
  }
}

export let over2 = R.curry((lens, fn, obj) => R.over(lensify(lens), fn, obj))
export let set2 = R.curry((lens, val, obj) => R.set(lensify(lens), val, obj))
export let unset2 = R.curry((lens, obj) => R.is(Array, lens) ? R.dissocPath(lens, obj) : R.dissocPath([lens], obj))
export let view2 = R.curry((lens, obj) => R.view(lensify(lens), obj))

// Functions
export function withName(name, fn) {
  return Object.defineProperty(fn, "name", {
    value: name,
  })
}
export let fn = withName

// Flipped versions
export let appendFlipped = R.flip(R.append)
export let prependFlipped = R.flip(R.prepend)
export let concatFlipped = R.flip(R.concat)
export let mergeFlipped = R.flip(R.merge)
export let mergeDeep = R.mergeDeepRight
export let mergeDeepFlipped = R.flip(R.mergeDeepRight)

// Indexed version
export let map2 = R.addIndex(R.map)
export let filter2 = R.addIndex(R.filter)
export let chain2 = R.addIndex(R.chain)
export let reduce2 = R.addIndex(R.reduce)

// Arrays
export let takeUntil = R.curry((fn, xs) => R.takeWhile(R.complement(fn), xs))

// Objects
export let isPlainObj = (o) =>
  Boolean(o && o.constructor && o.constructor.prototype && o.constructor.prototype.hasOwnProperty("isPrototypeOf"))

export let flattenObj = (obj, keys=[]) => {
  return R.reduce((acc, key) => {
    return R.merge(acc, isPlainObj(obj[key])
      ? flattenObj(obj[key], R.append(key, keys))
      : {[R.join(".", R.append(key, keys))]: obj[key]}
    )
  }, {}, R.keys(obj))
}
