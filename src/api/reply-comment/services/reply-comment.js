'use strict';

/**
 * reply-comment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::reply-comment.reply-comment');
