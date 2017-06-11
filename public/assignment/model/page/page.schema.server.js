/**
 * Created by DylanWight on 6/11/17.
 */
const mongoose = require("mongoose");

var WebsiteSchema = require("../website/website.schema.server.js")();
var WidgetSchema = require("../widget/widget.schema.server.js")();

const PageSchema = mongoose.Schema({
    _website: WebsiteSchema,
    name: String,
    title: String,
    description: String,
    pages: [WidgetSchema],
    dateCreated: {type: Date, default: Date.now}
});

module.exports = PageSchema;