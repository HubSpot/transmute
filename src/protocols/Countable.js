// @flow
import protocol from '../protocol';

export const Countable = protocol('Countable');

/**
 * Returns the number of values in `subject`.
 * 
 * @param {TYPE} subject
 * @return {number}
 */
export const count = Countable.defineMethod({
  args: [
    protocol.TYPE, // subject
  ],
  name: 'count',
});
