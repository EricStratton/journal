export default function Entry (title, body) {
  this.title = title;
  this.body = body;
  this.wordCount = 0;
  this.vowelCount = 0;
  this.consCount = 0;
}

Entry.prototype.countWords = function() {
  this.wordCount += this.body.split(" ").length + this.title.split(" ").length;
};