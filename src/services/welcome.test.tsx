import {welcome} from './welcome'

describe('welcome', () => {
    it('deve exibir um alert dizendo "Bem vindo"', () => {
        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {})
        welcome()
        expect(alertMock).toHaveBeenCalledWith("Bem vindo")
    })
})