//get Data model
var Data = require('./models/data');

//loadash
var _ = require('lodash');

	// server routes
module.exports = function(app) {
	// GET ROUTES
	app.get('/api/datas', function(req, res) {
		// use mongoose to get all datas in the database
		Data.find(function(err, datas) {
			// if error, send the error
			if (err) {
        res.send(err);
      }

      // return all datas in JSON format
			res.json(datas);
		});
	});

	// POST ROUTES
	app.post('/api/datas', function (req, res) {
		Data.create(req.body, function (err, data) {
			if (err) {
				return res.status(500).send(err);
			}
			return res.status(201).json(data);
		});
	});

	// DELETE ROUTES
	app.delete('/api/datas', function (req, res) {
		if (!req.query.id) {
			return res.status(400).send('No id in query parameters');
		}
		Data.findById(req.query.id, function (err, data) {
			if (err) {
				return res.status(500).send(err);
			}
			if (!data) {
				return res.status(404).send('Data not found');
			}
			data.remove(function (err) {
				if (err) {
					return res.status(500).send(err);
				}
				return res.status(204).send('No content');
			});
		});
	});

  // PUT ROUTES
	app.put('/api/datas', function (req, res) {
		if(req.body._id) { delete req.body._id; }
	  Data.findById(req.params.id, function (err, data) {
	    if (err) { return handleError(res, err); }
	    if(!data) { return res.status(404).send('Not Found'); }
	    var updated = _.merge(data, req.body);
	    updated.save(function (err) {
	      if (err) { return handleError(res, err); }
	      return res.status(200).json(data);
	    });
	  });
	});

	// frontend routes
	app.get('*', function(req, res) {
		res.sendfile('./public/views/index.html'); // load our public/index.html file
	});

};
