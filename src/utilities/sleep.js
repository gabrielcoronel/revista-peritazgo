export default (seconds) => {
  const promise = new Promise((resolve) => setTimeout(resolve, seconds * 1000))

  return promise
}