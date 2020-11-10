import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Entry from './journal.js';

$(document).ready(function() {
  $('#entries').submit(function(event) {
    event.preventDefault();
    const newTitle = $('#title').val();
    const newEntry = $('#entry').val();

    const userEntry = new Entry(newTitle, newEntry);
    console.log(userEntry);
    userEntry.countWords();
    console.log(userEntry);
    $('#totalNumberWords').text(userEntry.wordCount);

  });
});