function changeTextColor() {
      var textElement = document.getElementById("colorChangeText");
      if (textElement) {
        textElement.style.color == "red" ? textElement.style.color = 'blue' : textElement.style.color = 'red';
      }
    }
