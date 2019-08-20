// Test away!
import React from 'react'
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react'

import Controls from './Controls'
import Dashboard from '../dashboard/Dashboard'

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
    it('updates open/close text', () => {
        let locked = false ;
        let closed = false ;
        const { getByTestId, getByText } = render(<Dashboard closed = {closed} locked = {locked}/>)
        const openCloseBtn = getByTestId('control-open-close')
        expect(getByText(new RegExp(`Close Gate`))).toBeTruthy();
        fireEvent.click(openCloseBtn)
        expect(getByText(new RegExp(`Open Gate`))).toBeTruthy();
    })
    it('updates lock/unlock text', () => {
        let locked = false ;
        let closed = false ;
        const { getByTestId, getByText } = render(<Dashboard closed = {closed} locked = {locked}/>)
        const openCloseBtn = getByTestId('control-open-close')
        const lockUnlockBtn = getByTestId('control-lock-unlock')
        expect(getByText(new RegExp(`Lock Gate`))).toBeTruthy();
        fireEvent.click(openCloseBtn)
        fireEvent.click(lockUnlockBtn)
        expect(getByText(new RegExp(`Unlock Gate`))).toBeTruthy();
    })
    it('doesnt toggle open when locked', () => {
        const clicked = jest.fn()
        const { getByTestId, getByText } = render(<Controls locked = {true} toggleClosed = {clicked}/>)
        const openCloseBtn = getByTestId('control-open-close')
        fireEvent.click(openCloseBtn)
        expect(clicked).not.toHaveBeenCalled();
    })
    it('doesnt toggle locked when opened', () => {
        const clicked = jest.fn()
        const { getByTestId, getByText } = render(<Controls closed = {false} toggleLocked = {clicked}/>)
        const lockBtn = getByTestId('control-lock-unlock')
        fireEvent.click(lockBtn)
        expect(clicked).not.toHaveBeenCalled();
    })
})


  //
  // const toggleLocked = jest.fn(() => locked = !locked)
//   const toggleClosed = jest.fn(() => closed = !closed)
//   const { getByTestId, getByText, queryByText } = render(<Controls
//   closed = {closed}
//   toggleClosed = {toggleClosed}/>)
//   
  // const lockUnlockBtn = getByTestId('control-lock-unlock')
  // expect(getByText(new RegExp(`Lock Gate`))).toBeTruthy();
//   fireEvent.click(openCloseBtn);
//   expect(toggleClosed).toHaveBeenCalled();
  // fireEvent.click(lockUnlockBtn);
  // expect(toggleLocked).toHaveBeenCalled();
  // expect(toggleClosed).toHaveBeenCalledTimes(1);
  // expect(openCloseBtn.queryByText(new RegExp(`Open Gate`))).toBeTruthy();