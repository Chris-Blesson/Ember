import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | shopping', function(hooks) {
    setupApplicationTest(hooks);

    test('it should be able to add item in shopping cart', async function(assert) {
        await visit('/');

        assert.equal(currentURL(), '/');
        await this.pauseTest();
    });
});