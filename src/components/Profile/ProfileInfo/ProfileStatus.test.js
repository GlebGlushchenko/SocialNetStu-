import React  from 'react';
import {create} from 'react-test-renderer'
import ProfileStatus from './ProfileStatus';

describe('PropfileStatusComponent',()=>{
    test('status from props should be in the state',()=>{
        const component =create(<ProfileStatus status="Hello world" />)
        const instance = component.getInstance()
        expect(instance.state.status).toBe('Hello world')

    })
    test('after creation span with status should be displayed with',()=>{
        const component =create(<ProfileStatus status="Hello world" />)
        const root = component.root
        let span = root.findByType('span')
        expect(span).not.toBeNull()
    })
    test('after creation span with status should correct status',()=>{
        const component =create(<ProfileStatus status="Hello world" />)
        const root = component.root
        let span = root.findByType('span')
        expect(span.children[0]).toBe("Hello world")
    })
    test('after creation input with status should be displayed with',()=>{
        const component =create(<ProfileStatus status="Hello world" />)
        const root = component.root
        expect(()=>{
            let input = root.findByType('input')
        }).toThrow()
    })
    test('input should be displayed in editMode instead of span',()=>{
        const component =create(<ProfileStatus status="Hello world" />)
        const root = component.root
        let span = root.findByType('span')
        span.props.onDoubleClick()
        let input = root.findByType('input')
        expect(input).not.toBeNull()
    })
    test('input should be displayed in editMode instead of span of the range and its value should be',()=>{
        const component =create(<ProfileStatus status="Hello world" />)
        const root = component.root
        let span = root.findByType('span')
        span.props.onDoubleClick()
        let input = root.findByType('input')
        expect(input.props.value).toBe('Hello world')
    })
    test('callback should be called',()=>{
        const mockCallback = jest.fn()
        const component =create(<ProfileStatus status="Hello world" updateUserStatus={mockCallback} />)
        const instance = component.getInstance()
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    })
})


