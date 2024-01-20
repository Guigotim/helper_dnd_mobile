export interface Spell {
    name: string
    circle: number
    resume: string
    description: string[]
    castWithUpperCircleDetail: string
    effect: string
    duration: string
    range: string
    savingThrow: string
    spellResistance: string
    target: string
    castingTime: string
    level: number
    school: string
    components: string
    area: string
    classes: string[]
    source: string
    page: number
    edition: string
    shortDescription: string
    type: string
}

export const fireballSpellMock: Spell = {
    name: 'Bola de Fogo',
    circle: 3,
    resume: 'Uma bola de fogo é criada e arremessada contra o alvo.',
    description: ['Um rastro brilhante lampeja do seu dedo apontado para um local à sua escolha e ao alcance da magia, onde desabrocha com um estrondo grave em uma explosão de chamas. Cada criatura em uma esfera com raio de 6 metros, centrada naquele ponto, deve fazer uma salvaguarda de Destreza. Se falhar, sofre 8d6 pontos de dano ígneo, ou metade do dano em caso de sucesso.', 'O fogo se alastra, contornando cantos. Ele incendeia objetos inflamáveis na área que não estão sendo usados ou carregados.'],
    castWithUpperCircleDetail: 'Ao conjurar esta magia usando um espaço de magia de 4º círculo ou superior, o dano aumenta em 1d6 para cada círculo de espaço acima do 3º.',
    effect: '1d6 de dano por nível de conjurador (máximo 10d6).',
    duration: 'Instantânea',
    range: '45 metros',
    savingThrow: 'Reflexos, metade',
    spellResistance: 'Sim',
    target: 'Uma criatura ou objeto',
    castingTime: '1 ação',
    level: 5,
    school: 'Evocação',
    components: 'V, S, M (uma pequena bola de guano de morcego e enxofre)',
    area: 'Explosão de 6 m de raio',
    classes: ['Mago', 'Feiticeiro'],
    source: 'Livro do Jogador',
    page: 241,
    edition: '5e',
    shortDescription: 'Causa 8d6 de dano de fogo em uma área de 6 m de raio.',
    type: 'Conjuração',
}

export const iceStormSpellMock: Spell = {
    name: 'Tempestade de Gelo',
    circle: 4,
    resume: 'Você cria uma tempestade de gelo que cai em um ponto à sua escolha.',
    description: ['Você cria uma tempestade de gelo que cai em um cilindro de 6 metros de raio, com 12 metros de altura, centrado em um ponto à sua escolha, dentro do alcance. A área é preenchida com granizo, e se torna terreno difícil. Cada criatura na área deve fazer um teste de resistência de Destreza. Uma criatura sofre 2d8 de dano de concussão e 4d6 de dano de gelo no fracasso, ou metade do dano em caso de sucesso.', 'O granizo causa dano em objetos na área e é considerado como se fosse um objeto de tamanho Grande para determinar o quanto ele pode danificar.'],
    castWithUpperCircleDetail: 'Ao conjurar esta magia usando um espaço de magia de 5º círculo ou superior, o dano de concussão aumenta em 1d8 para cada círculo de espaço acima do 4º.',
    effect: '2d8 de dano de concussão e 4d6 de dano de gelo.',
    duration: 'Instantânea',
    range: '90 metros',
    savingThrow: 'Reflexos, metade',
    spellResistance: 'Sim',
    target: 'Uma criatura ou objeto',
    castingTime: '1 ação',
    level: 9,
    school: 'Evocação',
    components: 'V, S, M (uma pequena bolsa de pó de diamante no valor de 50 po)',
    area: 'Cilindro de 6 m de raio, 12 m de altura',
    classes: ['Mago', 'Druida'],
    source: 'Livro do Jogador',
    page: 252,
    edition: '5e',
    shortDescription: 'Causa 2d8 de dano de concussão e 4d6 de dano de gelo.',
    type: 'Conjuração',
}

export const magicMissileSpellMock: Spell = {
    name: 'Dardo Místico',
    circle: 1,
    resume: 'Dardos de força mágica atingem seu alvo.',
    description: ['Você cria três dardos de força mágica. Cada dardo atinge uma criatura à sua escolha, que você possa ver, dentro do alcance. Um dardo causa 1d4 + 1 pontos de dano de força a seu alvo. Os dardos atingem simultaneamente, e você pode direcioná-los para atingir um alvo único ou vários.'],
    castWithUpperCircleDetail: 'Ao conjurar esta magia usando um espaço de magia de 2º círculo ou superior, um dardo adicional é criado para cada círculo de espaço acima do 1º.',
    effect: '1d4 + 1 de dano de força.',
    duration: 'Instantânea',
    range: '36 metros',
    savingThrow: 'Nenhum',
    spellResistance: 'Sim',
    target: 'Uma criatura ou objeto',
    castingTime: '1 ação',
    level: 1,
    school: 'Evocação',
    components: 'V, S',
    area: 'Dardos simultâneos',
    classes: ['Mago', 'Feiticeiro'],
    source: 'Livro do Jogador',
    page: 257,
    edition: '5e',
    shortDescription: 'Cria três dardos mágicos que causam 1d4 + 1 de dano de força cada.',
    type: 'Conjuração',
}

export const spellListMock: Spell[] = [fireballSpellMock, iceStormSpellMock, magicMissileSpellMock]
