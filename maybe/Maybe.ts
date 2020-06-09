export const none = <T>() => new Maybe<T>(null)
export const some = <T>(value: T) => new Maybe<T>(value)

class Maybe<T> {
  constructor(val?: T | null) {
    this.__value = val
  }

  private __value?: T | null

  private isNothing() {
    return (this.__value === null || this.__value === undefined)
  }

  private join<Y>(mm: Maybe<Maybe<Y>>) {
    return new Maybe<Y>(mm.__value?.__value)
  }

  map<Y>(f: (m: T) => Y) {
    if (this.isNothing()) {
      return none<Y>()
    }

    return some(f(this.__value as T))
  }

  ap<Y>(someOtherMaybe: Maybe<Y>) {
    if (typeof this.__value === 'function') {
      return someOtherMaybe.map(this.__value as unknown as (m: Y) => Y)
    }
    return none<Y>()
  }

  chain<Y>(mf: (m: T) => Maybe<Y>): Maybe<Y> {
    return this.join(this.map(mf))
  }

  orElse(def: T) {
    if (this.isNothing()) {
      return some(def)
    }

    return this
  }
}

export default Maybe
