import { Iterable } from 'immutable';
import { concat } from './TransmuteCollection';

const checkSubject = subject => {
  if (subject === null || subject === undefined) {
    throw new Error('Cannot call concat on `null` or `undefined`');
  }
};

// When the update is a plain JS array
concat.implement(Array, (update, subject) => {
  checkSubject(subject);
  return subject.concat(update);
});

// When the update received is `Iterable`
concat.implementInherited(Iterable, (update, subject) => {
  checkSubject(subject);
  switch (true) {
    case Iterable.isIterable(subject):
      return subject.concat(update);
    case Array.isArray(subject):
      return subject.concat(update.toJS());
    case typeof subject === 'object':
    default:
      return Object.assign({}, subject, update.toJS());
  }
});

// When the update received is a plain JS object
concat.implement(Object, (update, subject) => {
  checkSubject(subject);
  if (Iterable.isIterable(subject)) {
    return subject.concat(update);
  }
  return Object.assign({}, subject, update);
});

// When the update received is a String
concat.implement(String, (update, subject) => {
  checkSubject(subject);
  return subject.concat(update);
});

export default concat;
