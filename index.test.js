"use strict";
// Copyright ©2000-2025 Quinn A Michaels; All rights reserved. 
// Legal Signature Required For Lawful Use.
// Distributed under VLA:61140973888383649320 LICENSE.md
// Tuesday, November 25, 2025 - 6:06:00 PM

// Owner Deva

const {expect} = require('chai')
const OwnerDeva = require('./index.js');

describe(OwnerDeva.me.name, () => {
  beforeEach(() => {
    return OwnerDeva.init()
  });
  it('Check the DEVA Object', () => {
    expect(OwnerDeva).to.be.an('object');
    expect(OwnerDeva).to.have.property('agent');
    expect(OwnerDeva).to.have.property('vars');
    expect(OwnerDeva).to.have.property('listeners');
    expect(OwnerDeva).to.have.property('methods');
    expect(OwnerDeva).to.have.property('modules');
  });
})
