const Band = require("./band");

class Bands
{
    constructor()
    {
        this.bands = [];
    }

    addBand(band = new Band())
    {
        
        this.bands.push(band);
        console.log ("INICIO, push");
        console.log (this.band);
        console.log ("fin, push");
    }

    getBands()
    {
        console.log ("dentro del getBands ini");
        console.log (this.bands);
        console.log ("dentro del getBands fin....");
        return this.bands;

    }

    deleteBand(id = '')
    {
        this.bands = this.bands.filter (band => band.id !== id);
        return this.bands;
    }

    voteBand (id)
    {
        this.bands = this.bands.map(band => 
            {
                if (band.id == id)
                {
                    band.votes ++;
                    return band;
                }
                else
                {
                    return band;
                }
            });
    }
}

module.exports = Bands;