// Test away!
import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent } from '@testing-library/react'

import Display from './Display'

describe('<Display />', () => {
    it('Matches snapshot', () => {
        const tree = renderer.create(<Display />)
        expect(tree.toJSON()).toMatchSnapshot()
    })
    it('displays if gate is open', () => {
        const { getByText } = render(<Display closed= {false}/>)
        expect(getByText(/open/i)).toBeTruthy() && expect(getByText(/closed/i)).toBeFalsy()
    })
    it('displays if gate is closed', () => {
        const { getByText } = render(<Display closed= {true}/>)
        expect(getByText(/closed/i)).toBeTruthy() && expect(getByText(/open/i)).toBeFalsy()
    })
    it('displays if gate is locked', () => {
        const { getByText } = render(<Display locked= {false}/>)
        expect(getByText(/locked/i)).toBeTruthy() && expect(getByText(/unlocked/i)).toBeFalsy()
    })
    it('displays if gate is unlocked', () => {
        const { getByText } = render(<Display locked= {false}/>)
        expect(getByText(/unlocked/i)).toBeTruthy() && expect(getByText(/locked/i)).toBeFalsy()
    })
    it('uses red-led class when locked and opened', () => {
        const { getByTestId } = render(<Display locked = {true} closed = {true}/>)
        const locked = getByTestId('lockedStatus')
        const opened = getByTestId('openStatus')
        expect(locked.classList.contains('red-led')).toBe(true)
        expect(opened.classList.contains('red-led')).toBe(true)
    })
    it('uses green-led class when locked', () => {
        const { getByTestId } = render(<Display locked = {false} closed = {false}/>)
        const locked = getByTestId('lockedStatus')
        const opened = getByTestId('openStatus')
        expect(locked.classList.contains('green-led')).toBe(true)
        expect(locked.classList.contains('green-led')).toBe(true)
    })

})