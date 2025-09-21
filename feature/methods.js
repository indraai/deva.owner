"use strict";
// Copyright ©2025 Quinn A Michaels; All rights reserved. 
// Legal Signature Required For Lawful Use.
// Distributed under VLA:58166151176728161003 LICENSE.md

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
