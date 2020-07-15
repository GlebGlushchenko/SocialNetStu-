import React  from 'react';
import {create} from 'react-test-renderer'
import ProfileStatus from './ProfileStatus';

describe('PropfileStatusComponent',()=>{
    test('status from props should be in the state',()=>{
        const component =create(<ProfileStatus status="Hello world" />)
        const instance = component.getInstance()
        expect(instance.state.status).toBe('Hello world')

    })
})