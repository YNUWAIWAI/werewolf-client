import uuidv4 from 'uuid/v4'
import uuidv5 from 'uuid/v5'

export const idGenerator = (isTest?: boolean) => {
  if (typeof isTest === 'boolean' && isTest) {
    return () => uuidv5('for test', uuidv5.DNS)
  }

  return () => uuidv4()
}
