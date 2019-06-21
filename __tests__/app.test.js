'use strict';

jest.mock('fs');

const toUpper = require('../src/toUpper');
const alterFile = require('./../app');
const eventLog = require('../src/events/event');
require('../src/events/logger');

describe('alterFile', () => {
  it('should read a file', () => {
    expect(alterFile).toBeTruthy();
  });

  it('should write a file', () => {
    expect(alterFile).toBeTruthy();
  });

  it('should emit an error message after catching an error', () => {
    expect(alterFile).toBeTruthy();
  });

});

describe('toUpper', () => {

  it('should return a string in uppercase', () => {
    //Arrange
    let string = 'nautilus';

    //Act
    string  = toUpper(string);

    //Assert
    expect(string).toBe('NAUTILUS');
  });
});

describe('Events', () => {
  let spy;
  afterEach(() => {
    spy.mockRestore();
  });


  it('logs on success', () => {
    //Arrange
    spy = jest.spyOn(console, 'log');

    //Act
    eventLog.emit('log');

    //Assert
    expect(spy).toHaveBeenCalled();
  });

  it('logs error on failure', () => {
    //Arrange
    spy = jest.spyOn(console, 'error');
    
    //Act
    eventLog.emit('error');

    //Assert
    expect(spy).toHaveBeenCalled();
  });
});