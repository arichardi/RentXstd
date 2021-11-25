import React from 'react'
import {
    Container,
} from './BulletStyle'

interface BulletProps {
    active?: boolean
}

export default function SignUpFirstScreen({active = false}: BulletProps){

    return (
        <Container active={active} />
    )
}