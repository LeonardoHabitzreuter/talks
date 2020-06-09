type User = { age: string }

const user = null
const legalAge = null

const isLegalAge = (user?: User | null) => {
  if (user === undefined || user === null) {
    return null
  }

  if (legalAge === undefined || legalAge === null) {
    return null
  }

  return user.age >= legalAge
}

const getAgeMessage = (isLegalAge?: boolean | null) => {
  if (isLegalAge === undefined || isLegalAge === null) {
    return 'Não sabemos sua idade!'
  }

  return isLegalAge
    ? 'Você é maior de idade!'
    : 'Você é menor de idade!'
}

const userIsLegalAge = isLegalAge(user)

const ageMessage = getAgeMessage(userIsLegalAge)

const appEl = document.querySelector('.app')

if (appEl !== null) {
  appEl.textContent = ageMessage
}

export default 'ok'
