var GtfsRealtimeBindings = require("gtfs-realtime-bindings");
var request = require("request");

var requestSettings = {
  method: "GET",
  url: `http://datamine.mta.info/mta_esi.php?key=${MTAKEY}&feed_id=21`,
  encoding: null
};
request(requestSettings, function(error, response, body) {
  if (!error && response.statusCode == 200) {
    var feed = GtfsRealtimeBindings.FeedMessage.decode(body);
    feed.entity.forEach(function(entity) {
      if (entity.trip_update) {
        console.log(entity.trip_update);
      }
    });
  }
});
