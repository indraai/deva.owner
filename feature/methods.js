export default {
  /**************
  method: owner
  params: packet
  describe: The global wall feature that installs with every agent
  ***************/
  async owner(packet) {
    const owner = await this.methods.sign('owner', 'default', packet);
    return owner;
  },
};
