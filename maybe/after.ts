import Maybe, { none } from './Maybe'

// This function has side effects, use with caution!
const applyText = (el: Element) => (text: string) => {
  el.textContent = text
}

type User = { age: number }

const user = none<User>()
const legalAge = none<number>()

const isLegalAge = (user: Maybe<User>) => {
  return user.chain((user: User) => (
    legalAge.map(value => user.age >= value)
  ))
}

const getAgeMessage = (isLegalAge: Maybe<boolean>) => (
  isLegalAge
    .map<string>(value => value ? 'Você é maior de idade!' : 'Você é menor de idade!')
    .orElse('Não sabemos sua idade!')
)

const userIsLegalAge = isLegalAge(user)

const ageMessage = getAgeMessage(userIsLegalAge)

const appEl = new Maybe(document.querySelector('.app'))

appEl.map(applyText).ap(ageMessage)

export default 'ok'
