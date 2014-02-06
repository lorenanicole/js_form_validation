shorthand for $(document).ready();
$(function(){
  $('button').on('click', function(e){
    e.preventDefault();
    var email = $('#email').val();
    var password = $('#password').val();
    validateEmail(email);
    validatePassword(password);
  });

  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if ((email) == '' || !re.test(email)) {
      var error = 'Must be a valid email address';
      $('ul').append('<li>' + error + '</li>');
    }
  };

  function validatePassword(password) {
    var upperCase = /[A-Z]/;
    var numbers = /[0-9]/;
    if (password.length < 8) {
      var length_error = 'Password must be at least 8 characters long (0-9)';
      $('ul').append('<li>' + length_error + '</li>');
    }
    if (password.match(upperCase) === null) {
      var capital_error = "Passwords must have at least one capital letter";
      $('ul').append('<li>' + capital_error + '</li>');
    }
    if (password.match(numbers) === null) {
      var number_error = "Passwords must have at least one capital letter";
      $('ul').append('<li>' + number_error + '</li>');
    }
  }

});

// OOP JS

// $(function(){
//   $('button').on('click', function(e){
//     e.preventDefault();
//     var email = new Email('#email');
//     email.address();
//     console.log(email);
//     email.validate();
//   })

//   function Email(element) {
//     this.$el = element;
//   };

//   Email.prototype.address = function(element) {
//     var text = $(this.$el).val();
//     this.text = text;
//   };

//   Email.prototype.validate = function() {
//     var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if ((this.text) == '' || !re.test(this.text)) {
//       var error = 'Must be a valid email address';
//       return $('ul').append('<li>' + error + '</li>');
//     }
//   };

//   function Password(element) {
//     this.$el = element;
//   };

//   Password.prototype.content = function(element) {
//     var text = $(this.$el).val();
//     this.text = text;
//   };

// });
