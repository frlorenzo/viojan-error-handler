import { expect } from 'chai';
import {error} from '../index.js';

describe('unit: error', () => {

  it('should error', (done) => {
    expect(error(new Error('foo'), 'bar')).to.be.ok;
    done();
  });
});


//- end
