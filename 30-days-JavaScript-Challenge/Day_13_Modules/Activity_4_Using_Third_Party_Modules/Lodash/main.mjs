// Task 6: Install Third party module (e.g., lodash) using npm. Import and use a function from this module in a script


import _ from 'lodash';

const myArry = [1,2,3,4,5,6,7];

console.log(_.first(myArry));


/*

console.log(_);

// Output is below you can check the methods available in the lodash 

<ref *1> [Function: lodash] {
  templateSettings: {
    escape: /<%-([\s\S]+?)%>/g,
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: /<%=([\s\S]+?)%>/g,
    variable: '',
    imports: { _: [Circular *1] }
  },
  after: [Function: after],
  ary: [Function: ary],
  assign: [Function (anonymous)],
  assignIn: [Function (anonymous)],
  assignInWith: [Function (anonymous)],
  assignWith: [Function (anonymous)],
  at: [Function (anonymous)],
  before: [Function: before],
  bind: [Function (anonymous)] { placeholder: [Circular *1] },
  bindAll: [Function (anonymous)],
  bindKey: [Function (anonymous)] { placeholder: [Circular *1] },
  castArray: [Function: castArray],
  chain: [Function: chain],
  chunk: [Function: chunk],
  compact: [Function: compact],
  concat: [Function: concat],
  cond: [Function: cond],
  conforms: [Function: conforms],
  constant: [Function: constant],
  countBy: [Function (anonymous)],
  create: [Function: create],
  curry: [Function: curry] { placeholder: [Circular *1] },
  curryRight: [Function: curryRight] { placeholder: [Circular *1] },
  debounce: [Function: debounce],
  defaults: [Function (anonymous)],
  defaultsDeep: [Function (anonymous)],
  defer: [Function (anonymous)],
  delay: [Function (anonymous)],
  difference: [Function (anonymous)],
  differenceBy: [Function (anonymous)],
  differenceWith: [Function (anonymous)],
  drop: [Function: drop],
  dropRight: [Function: dropRight],
  dropRightWhile: [Function: dropRightWhile],
  dropWhile: [Function: dropWhile],
  fill: [Function: fill],
  filter: [Function: filter],
  flatMap: [Function: flatMap],
  flatMapDeep: [Function: flatMapDeep],
  flatMapDepth: [Function: flatMapDepth],
  flatten: [Function: flatten],
  flattenDeep: [Function: flattenDeep],
  flattenDepth: [Function: flattenDepth],
  flip: [Function: flip],
  flow: [Function (anonymous)],
  flowRight: [Function (anonymous)],
  fromPairs: [Function: fromPairs],
  functions: [Function: functions],
  functionsIn: [Function: functionsIn],
  groupBy: [Function (anonymous)],
  initial: [Function: initial],
  intersection: [Function (anonymous)],
  intersectionBy: [Function (anonymous)],
  intersectionWith: [Function (anonymous)],
  invert: [Function (anonymous)],
  invertBy: [Function (anonymous)],
  invokeMap: [Function (anonymous)],
  iteratee: [Function: iteratee],
  keyBy: [Function (anonymous)],
  keys: [Function: keys],
  keysIn: [Function: keysIn],
  map: [Function: map],
  mapKeys: [Function: mapKeys],
  mapValues: [Function: mapValues],
  matches: [Function: matches],
  matchesProperty: [Function: matchesProperty],
  memoize: [Function: memoize] { Cache: [Function: MapCache] },
  merge: [Function (anonymous)],
  mergeWith: [Function (anonymous)],
  method: [Function (anonymous)],
  methodOf: [Function (anonymous)],
  mixin: [Function: mixin],
  negate: [Function: negate],
  nthArg: [Function: nthArg],
  omit: [Function (anonymous)],
  omitBy: [Function: omitBy],
  once: [Function: once],
  orderBy: [Function: orderBy],
  over: [Function (anonymous)],
  overArgs: [Function (anonymous)],
  overEvery: [Function (anonymous)],
  overSome: [Function (anonymous)],
  partial: [Function (anonymous)] { placeholder: [Circular *1] },
  partialRight: [Function (anonymous)] { placeholder: [Circular *1] },
  partition: [Function (anonymous)],
  pick: [Function (anonymous)],
  pickBy: [Function: pickBy],
  property: [Function: property],
  propertyOf: [Function: propertyOf],
  pull: [Function (anonymous)],
  pullAll: [Function: pullAll],
  pullAllBy: [Function: pullAllBy],
  pullAllWith: [Function: pullAllWith],
  pullAt: [Function (anonymous)],
  range: [Function (anonymous)],
  rangeRight: [Function (anonymous)],
  rearg: [Function (anonymous)],
  reject: [Function: reject],
  remove: [Function: remove],
  rest: [Function: rest],
  reverse: [Function: reverse],
  sampleSize: [Function: sampleSize],
  set: [Function: set],
  setWith: [Function: setWith],
  shuffle: [Function: shuffle],
  slice: [Function: slice],
  sortBy: [Function (anonymous)],
  sortedUniq: [Function: sortedUniq],
  sortedUniqBy: [Function: sortedUniqBy],
  split: [Function: split],
  spread: [Function: spread],
  tail: [Function: tail],
  take: [Function: take],
  takeRight: [Function: takeRight],
  takeRightWhile: [Function: takeRightWhile],
  takeWhile: [Function: takeWhile],
  tap: [Function: tap],
  throttle: [Function: throttle],
  thru: [Function: thru],
  toArray: [Function: toArray],
  toPairs: [Function (anonymous)],
  toPairsIn: [Function (anonymous)],
  toPath: [Function: toPath],
  toPlainObject: [Function: toPlainObject],
  transform: [Function: transform],
  unary: [Function: unary],
  union: [Function (anonymous)],
  unionBy: [Function (anonymous)],
  unionWith: [Function (anonymous)],
  uniq: [Function: uniq],
  uniqBy: [Function: uniqBy],
  uniqWith: [Function: uniqWith],
  unset: [Function: unset],
  unzip: [Function: unzip],
  unzipWith: [Function: unzipWith],
  update: [Function: update],
  updateWith: [Function: updateWith],
  values: [Function: values],
  valuesIn: [Function: valuesIn],
  without: [Function (anonymous)],
  words: [Function: words],
  wrap: [Function: wrap],
  xor: [Function (anonymous)],
  xorBy: [Function (anonymous)],
  xorWith: [Function (anonymous)],
  zip: [Function (anonymous)],
  zipObject: [Function: zipObject],
  zipObjectDeep: [Function: zipObjectDeep],
  zipWith: [Function (anonymous)],
  entries: [Function (anonymous)],
  entriesIn: [Function (anonymous)],
  extend: [Function (anonymous)],
  extendWith: [Function (anonymous)],
  add: [Function (anonymous)],
  attempt: [Function (anonymous)],
  camelCase: [Function (anonymous)],
  capitalize: [Function: capitalize],
  ceil: [Function (anonymous)],
  clamp: [Function: clamp],
  clone: [Function: clone],
  cloneDeep: [Function: cloneDeep],
  cloneDeepWith: [Function: cloneDeepWith],
  cloneWith: [Function: cloneWith],
  conformsTo: [Function: conformsTo],
  deburr: [Function: deburr],
  defaultTo: [Function: defaultTo],
  divide: [Function (anonymous)],
  endsWith: [Function: endsWith],
  eq: [Function: eq],
  escape: [Function: escape],
  escapeRegExp: [Function: escapeRegExp],
  every: [Function: every],
  find: [Function (anonymous)],
  findIndex: [Function: findIndex],
  findKey: [Function: findKey],
  findLast: [Function (anonymous)],
  findLastIndex: [Function: findLastIndex],
  findLastKey: [Function: findLastKey],
  floor: [Function (anonymous)],
  forEach: [Function: forEach],
  forEachRight: [Function: forEachRight],
  forIn: [Function: forIn],
  forInRight: [Function: forInRight],
  forOwn: [Function: forOwn],
  forOwnRight: [Function: forOwnRight],
  get: [Function: get],
  gt: [Function (anonymous)],
  gte: [Function (anonymous)],
  has: [Function: has],
  hasIn: [Function: hasIn],
  head: [Function: head],
  identity: [Function: identity],
  includes: [Function: includes],
  indexOf: [Function: indexOf],
  inRange: [Function: inRange],
  invoke: [Function (anonymous)],
  isArguments: [Function: baseIsArguments],
  isArray: [Function: isArray],
  isArrayBuffer: [Function (anonymous)],
  isArrayLike: [Function: isArrayLike],
  isArrayLikeObject: [Function: isArrayLikeObject],
  isBoolean: [Function: isBoolean],
  isBuffer: [Function: isBuffer],
  isDate: [Function (anonymous)],
  isElement: [Function: isElement],
  isEmpty: [Function: isEmpty],
  isEqual: [Function: isEqual],
  isEqualWith: [Function: isEqualWith],
  isError: [Function: isError],
  isFinite: [Function: isFinite],
  isFunction: [Function: isFunction],
  isInteger: [Function: isInteger],
  isLength: [Function: isLength],
  isMap: [Function (anonymous)],
  isMatch: [Function: isMatch],
  isMatchWith: [Function: isMatchWith],
  isNaN: [Function: isNaN],
  isNative: [Function: isNative],
  isNil: [Function: isNil],
  isNull: [Function: isNull],
  isNumber: [Function: isNumber],
  isObject: [Function: isObject],
  isObjectLike: [Function: isObjectLike],
  isPlainObject: [Function: isPlainObject],
  isRegExp: [Function (anonymous)],
  isSafeInteger: [Function: isSafeInteger],
  isSet: [Function (anonymous)],
  isString: [Function: isString],
  isSymbol: [Function: isSymbol],
  isTypedArray: [Function (anonymous)],
  isUndefined: [Function: isUndefined],
  isWeakMap: [Function: isWeakMap],
  isWeakSet: [Function: isWeakSet],
  join: [Function: join],
  kebabCase: [Function (anonymous)],
  last: [Function: last],
  lastIndexOf: [Function: lastIndexOf],
  lowerCase: [Function (anonymous)],
  lowerFirst: [Function (anonymous)],
  lt: [Function (anonymous)],
  lte: [Function (anonymous)],
  max: [Function: max],
  maxBy: [Function: maxBy],
  mean: [Function: mean],
  meanBy: [Function: meanBy],
  min: [Function: min],
  minBy: [Function: minBy],
  stubArray: [Function: stubArray],
  stubFalse: [Function: stubFalse],
  stubObject: [Function: stubObject],
  stubString: [Function: stubString],
  stubTrue: [Function: stubTrue],
  multiply: [Function (anonymous)],
  nth: [Function: nth],
  noConflict: [Function: noConflict],
  noop: [Function: noop],
  now: [Function (anonymous)],
  pad: [Function: pad],
  padEnd: [Function: padEnd],
  padStart: [Function: padStart],
  parseInt: [Function: parseInt],
  random: [Function: random],
  reduce: [Function: reduce],
  reduceRight: [Function: reduceRight],
  repeat: [Function: repeat],
  replace: [Function: replace],
  result: [Function: result],
  round: [Function (anonymous)],
  runInContext: [Function: runInContext],
  sample: [Function: sample],
  size: [Function: size],
  snakeCase: [Function (anonymous)],
  some: [Function: some],
  sortedIndex: [Function: sortedIndex],
  sortedIndexBy: [Function: sortedIndexBy],
  sortedIndexOf: [Function: sortedIndexOf],
  sortedLastIndex: [Function: sortedLastIndex],
  sortedLastIndexBy: [Function: sortedLastIndexBy],
  sortedLastIndexOf: [Function: sortedLastIndexOf],
  startCase: [Function (anonymous)],
  startsWith: [Function: startsWith],
  subtract: [Function (anonymous)],
  sum: [Function: sum],
  sumBy: [Function: sumBy],
  template: [Function: template],
  times: [Function: times],
  toFinite: [Function: toFinite],
  toInteger: [Function: toInteger],
  toLength: [Function: toLength],
  toLower: [Function: toLower],
  toNumber: [Function: toNumber],
  toSafeInteger: [Function: toSafeInteger],
  toString: [Function: toString],
  toUpper: [Function: toUpper],

*/