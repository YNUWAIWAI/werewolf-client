const trimBaseUri = id => (/\/(\w+)$/).exec(id)[1]

export {trimBaseUri}
