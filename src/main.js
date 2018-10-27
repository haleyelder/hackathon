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



// sorting function! 

function request() {
    var data = null;
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://www.potterapi.com/v1/sortingHat");
    xhr.send(data);
    
    
            xhr.addEventListener("readystatechange", function () {
          if (this.readyState === 4) {
                $('#house').text(this.responseText)
            }
    });
    }
    
