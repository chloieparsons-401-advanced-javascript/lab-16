'use strict';

jest.mock('fs');

const upper = require('../src/toUpper');

const eventLog = require('../src/events/event');
require('../src/events/logger');

describe('Upper', () => {
  it('should throw an error when no parameter provided', () => {

  });

  it('should ')

});

describe('Events', () => {
  it('logs on success', () => {
    //Arrange
    let spy = jest.spyOn(console, 'log');

    //Act
    eventLog.emit('log');

    //Assert
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  it('logs error on failure', () => {
    let spy = jest.spyOn(console, 'error');
    eventLog.emit('error');

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});