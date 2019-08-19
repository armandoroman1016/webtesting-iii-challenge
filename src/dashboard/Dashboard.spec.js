// Test away
import React from 'react'
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react'

import Dashboard from './Dashboard'

describe ('<Dashboard />', () =>{
    it('matches snapshot', () => {
        const tree = renderer.create(<Dashboard />)
        expect(tree.toJSON()).toMatchSnapshot()
    })
    it('shows controls and display', () => {
        const { getByTestId } = render(<Dashboard />)
        const display = getByTestId(/display/i)
        const controls = getByTestId(/controls/i)
        expect(display).toBeTruthy();
        expect(controls).toBeTruthy();
    })
})