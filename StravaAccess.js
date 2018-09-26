StravaAccess.prototype.api;
function StravaAccess(){
        this.api = new require('./node_modules/strava')({
        client_id: process.env.STRAVA_CLIENT_ID,	
        client_secret: process.env.STRAVA_CLIENT_SECRET,
        redirect_uri: process.env.STRAVA_REDIRECT_URI,
        access_token: process.env.STRAVA_ACCESS_TOKEN
    });

}
//let stravaInstance = getStravaInstance();


StravaAccess.prototype.getAthlete = function getAthlete(req, res){
    this.api.athlete.get(function(err, response) {
        res.json(response);      
    });
};

StravaAccess.prototype.getActivities = function getActivities(req, res){    
    this.api.athlete.activities.get(function(err, response){
        res.json(response);
    });
};
module.exports = StravaAccess;

