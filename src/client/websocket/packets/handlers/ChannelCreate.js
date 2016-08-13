const AbstractHandler = require('./AbstractHandler');

const Constants = require('../../../../util/Constants');

class ChannelCreateHandler extends AbstractHandler {

  handle(packet) {
    const data = packet.d;
    const client = this.packetManager.client;

    const response = client.actions.ChannelCreate.handle(data);

    if (response.channel) {
      client.emit(Constants.Events.CHANNEL_CREATE, response.channel);
    }
  }

}

module.exports = ChannelCreateHandler;
