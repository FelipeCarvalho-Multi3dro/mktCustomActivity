var connection = new Postmonger.Session();

connection.trigger('ready');

connection.on('initActivity', function(data){
    document.querySelector('#configJson').value = JSON.stringify(data, null, 2);
});

connection.on('clickedNext', function(){
    var config = JSON.parse(document.querySelector('#').value);
    console.log('Payload Salvamento: ' + config);
    connection.trigger('updateActivity', config);
});