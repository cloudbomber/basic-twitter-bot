function sayHello(req, res){
    var name = req.body.name;
    res.send('whats good ' + name + '!')
}

module.exports.sayhello = sayHello;