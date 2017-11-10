// @flow
const trimBaseUri = (id: string): string => (/\/(\w+)$/).exec(id)[1]

export {trimBaseUri}
