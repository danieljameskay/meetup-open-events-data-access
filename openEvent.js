const mongoose = require('mongoose');

const openEventSchema = mongoose.Schema({
    utc_offset: String,
    venue : {
        name: String,
        country: String,
        state: String,
        city: String,
        address_1: String,
    },
    rsvp_limit : Number,
    venue_visibility: String,
    visibility: String,
    maybe_rsvp_count: String,
    description: String,
    mtime: Number,
    duration: Number,
    event_url: String,
    yes_rsvp_count: Number,
    payment_required: String,
    name: String,
    id: String,
    time: Number,
    group: {
        join_mode: String,
        country: String,
        city: String,
        name: String,
        group_lon: Number,
        id: Number,
        state: String,
        urlname: String,
        category: {
          name: String,
          id: Number,
          shortname: String
        },
        group_lat: Number
      },
      status: String
});

const openEvent = mongoose.model("openEvent", openEventSchema);

module.exports = openEvent;