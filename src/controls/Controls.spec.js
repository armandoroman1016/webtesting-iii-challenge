// Test away!
import React from 'react'
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react'

import Controls from './Controls'

describe('Controls', () => {
    it('matches snapshot', () => {
        const tree = renderer.create(<Controls />)
        expect(tree.toJSON()).toMatchSnapshot()
    })
    it('provides buttons for toggling', () => {
        const { getByTestId } = render(<Controls />)
        const openCloseBtn = getByTestId('control-open-close')
        const lockUnlockBtn = getByTestId('control-lock-unlock')
        expect(openCloseBtn).toBeTruthy()
        expect(lockUnlockBtn).toBeTruthy()
    })
    it('updates button text', () =>{
        // let locked = false ;
        let closed = false ;
        // const toggleLocked = jest.fn(() => locked = !locked)
        const toggleClosed = jest.fn(() => closed = !closed)
        const { getByTestId, getByText, queryByText } = render(<Controls
            closed = {closed}
            toggleClosed = {toggleClosed}/>)
        const openCloseBtn = getByTestId('control-open-close')
        // const lockUnlockBtn = getByTestId('control-lock-unlock')
        // expect(getByText(new RegExp(`Lock Gate`))).toBeTruthy();
        fireEvent.click(openCloseBtn);
        expect(toggleClosed).toHaveBeenCalled();
        // expect(getByText(new RegExp(`Open Gate`))).toBeTruthy();
        // fireEvent.click(lockUnlockBtn);
        // expect(toggleLocked).toHaveBeenCalled();
        // expect(toggleClosed).toHaveBeenCalledTimes(1);
        // expect(openCloseBtn.queryByText(new RegExp(`Open Gate`))).toBeTruthy();
    })
})
