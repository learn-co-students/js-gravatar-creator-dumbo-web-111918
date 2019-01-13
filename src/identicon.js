class Identicon {
  // make use of the md5.array method, which is in scope because we required it in our index.html
  constructor(string) {
    this.string = string
    this.hashed = md5.array(string)
    this.color = `rgb(${this.hashed[0]},${this.hashed[5]},${this.hashed[15]})`
  }
}
