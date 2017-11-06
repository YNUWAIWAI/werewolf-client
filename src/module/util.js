// @flow
function trimBaseUri(id: string): string {
  return (/\/(\w+)$/).exec(id)[1]
}

export {trimBaseUri}
