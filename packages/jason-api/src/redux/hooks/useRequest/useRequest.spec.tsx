// External dependencies
import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

// Testing dependencies
import { defaultStore, sleepTest } from '__tests__/tools';
import DiscriminatedContainer from './__mocks__/DiscriminatedContainer';

describe('useRequest()', () => {
    it('supports discriminated unions', async () => {
        const { getByText } = render(
            <Provider store={defaultStore}>
                <DiscriminatedContainer />
            </Provider>
        );

        // Wait a short period of time to allow fake network response to return.
        await sleepTest(25);

        const title = getByText('JSON API paints my bikeshed!');
        expect(title).toBeTruthy();
    });
});
