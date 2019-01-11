class Identicon {
  // make use of the md5.array method, which is in scope because we required it in our index.html
  constructor(str) {
    this.str = str
    this.hash = md5.array(str)
  }
}
