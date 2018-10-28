import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
    $("#nameForm").submit(function() {
    event.preventDefault();
    const name = $('input[type="text"]').val();
    $(".envelope").show();
    $("#nameForm").hide();
    $(".envelope").click(function() {
      $('#student-name').text(name);
      $('.invitation').show();
      $('.envelope').hide();
    })
  })



});



