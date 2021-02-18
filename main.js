function submit_para_1() {
    var inputs = [];
  for(var i = 1 ; i <=6 ; i++) { 
    inputs.push(document.getElementById("para_1_input_" + i).value); } 
  document.getElementById("showParagraph1").innerHTML = inputs.join(". ");
    }
    function submit_para_2() {
        var inputs = [];
        for(var i = 1 ; i <=6 ; i++) { 
          inputs.push(document.getElementById("para_2_input_" + i).value); } 
        document.getElementById("showParagraph2").innerHTML = inputs.join(". ");
          }
    