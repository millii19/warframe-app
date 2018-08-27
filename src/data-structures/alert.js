
const generateAlert = (data) => {
  const alert = {
    from: new Date(Number(data.activation)),
    to: new Date(Number(data.expiry)),
    mission: data.mission,
    expired: data.expired,
    remaining: data.eta,
    id: data.id
  }

  Object.freeze(alert)
  return alert
}

export { generateAlert }
