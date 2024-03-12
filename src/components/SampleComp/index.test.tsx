import { test, expect, describe, beforeEach } from "bun:test"
import { cleanup, render, screen } from '@testing-library/react'
import { SampleComp } from "."
import userEvent from '@testing-library/user-event'

beforeEach(() => {
  cleanup()
})

describe('SampleComp', () => {
  test('テストできること', () => {
    const {container} = render(<SampleComp/>)

    expect(container).toBeTruthy()
  })
  test('要素が存在する', () => {
    const {container} = render(<SampleComp/>)

    expect(container).toBeInTheDocument()
  })
  test('要素が存在する2', () => {
    const {container} = render(<SampleComp/>)

    expect(container).toBeInTheDocument()
  })
  test('要素が存在する3', () => {
    const {container} = render(<SampleComp/>)

    expect(container).toBeInTheDocument()
  })
    test('要素が存在する4', () => {
    const {container} = render(<SampleComp/>)

    expect(container).toBeInTheDocument()
  })
})
describe('SampleComp2', () => {
  test('テストできること', () => {
    const {container} = render(<SampleComp/>)

    expect(container).toBeTruthy()
  })
  test('要素が存在する', () => {
    const {container} = render(<SampleComp/>)

    expect(container).toBeInTheDocument()
  })
  test('要素が存在する2', () => {
    const {container} = render(<SampleComp/>)

    expect(container).toBeInTheDocument()
  })
  test('要素が存在する3', () => {
    const {container} = render(<SampleComp/>)

    expect(container).toBeInTheDocument()
  })
    test('要素が存在する4', () => {
    const {container} = render(<SampleComp/>)

    expect(container).toBeInTheDocument()
  })
    test('要素が存在する5', () => {
    render(<SampleComp/>)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })
    test('要素が存在する6', async () => {
    render(<SampleComp/>)

    await userEvent.click(screen.getByRole('button'))

    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
