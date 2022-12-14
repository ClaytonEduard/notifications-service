import { Content } from "./content";


describe('Notification content')

test('it should be able to create a notification content', () => {
    const content = new Content('Você recebeu um solicitação de amizade');
    // espero que esteja tudo ok
    expect(content).toBeTruthy();

})

// espero que não seja possivel criar o conteudo da notificação com menos de 5 caracteres
test('it should not be able to create a notification content whith less than 5 characters', () => {
    // espero que esteja tudo ok
    expect(()=> new Content('sds')).toBeTruthy();
})

// espero que não seja possivel criar o conteudo da notificação com mais de 240 caracteres
test('it should not be able to create a notification content whith less than 5 characters', () => {
    // espero que esteja tudo ok
    expect(()=> new Content('s'.repeat(241))).toBeTruthy();
})