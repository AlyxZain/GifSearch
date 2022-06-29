import { fireEvent, render, screen, form } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en <AddCategory />', () => { 
    
    test('Debe cambiar el valor de la caja de texto', () => {

        render(<AddCategory onNewCategory={ () => {} }/>);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: 'Goku' } });

        expect(input.value).toBe('Goku');
    })

    test('Debe llamar al onNewCategory si el input tiene un valor', () => {

        const inputvalue    = 'Goku';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory }/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputvalue } });
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputvalue);
    })

    test('No debe llamar al onNewCategory si el input esta vacio', () => {

        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={ onNewCategory }/>);

        const form = screen.getByRole('form');
        fireEvent.submit(form);
                
        expect(onNewCategory).not.toHaveBeenCalled();
    })


 })