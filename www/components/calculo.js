function fun(e) {

  var y = document.getElementById('valor').value;

  if(y <= 0 || y == ""){
    navigator.notification.alert('n vai funcionar assim bro', null, '!!Aviso!!', 'OKAY');
  }
  else{
    document.getElementById('creator').innerHTML = '';
    for(var x = 0; x <= y; x++){
      document.getElementById('creator').innerHTML += x + ' X ' + y + ' = ' + (x * y) + '<br>';
    }
  }
}
