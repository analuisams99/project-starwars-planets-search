
# Boas vindas ao repositório do projeto Starwars Planets Search em context api e hooks!

---

## Habilidades

Nesse projeto utilizei:

* A _Context API_ do **React** para gerenciar estado.
* O _React Hook useState_;
* O _React Hook useContext_;
* O _React Hook useEffect_;
* Criei _React Hooks_ customizados.

---

## O que foi desenvolvido

Desenvolvi uma lista com filtros de planetas do universo de Star Wars usando **Context API e Hooks** para controlar os estados globais.

---

## Instruções para instalação/utilização do projeto localmente:

1. Abra o terminal e crie um diretório no local de sua preferência com o comando mkdir:
    * `mkdir projetos-analuisa`
  
2. Entre no diretório que acabou de criar e depois clone o projeto:
    * `cd projetos-analuisa`
    * `git clone git@github.com:analuisams99/project-starwars-planets-search.git`

3. Acesse o diretório do projeto e depois utilize o comando npm install para instalar todas as dependências necessárias:
    * `cd project-starwars-planets-search`
    * `npm install`
  * Inicialize o projeto:
    * `npm start` (uma nova página deve abrir no seu navegador)
    * (Caso uma nova não abra, acesse o projeto via browser, no caminho http://localhost:3000 )

---

## Requisitos realizados neste projeto

### 1 - Faça uma requisição para o endpoint `/planets` da API de Star Wars e preencha uma tabela com os dados retornados, com exceção dos da coluna `residents`

Os dados recebidos da API devem ser salvos num campo chamado `data` do contexto e é daí que a tabela deve lê-los.

A API a ser consultada está [nesse link](https://swapi-trybe.herokuapp.com/api/planets/). 

```
- Realiza uma requisição para a API
- Preenche a tabela com os dados retornados
```

### 2 - Filtre a tabela através de um texto, inserido num *campo de texto*, exibindo somente os planetas cujos nomes incluam o texto digitado

Ele deve atualizar a tabela com os planetas que se encaixam no filtro à medida que o nome é digitado, sem ter que apertar um botão para efetuar a filtragem. Por exemplo, se digitar "Tatoo", o planeta "Tatooine" deve ser exibido. 

```
- Renderiza o campo de texto para o filtro de nomes
- Realiza vários filtros em sequência
```

### 3 - Crie um filtro para valores numéricos

Ele funcionará com três seletores:

  - O primeiro deve abrir um dropdown que permita a quem usa selecionar uma das seguintes colunas: `population`, `orbital_period`, `diameter`, `rotation_period` e `surface_water`. 
  - O segundo deve determinar se a faixa de valor será `maior que`, `menor que` ou `igual a` o numero que virá a seguir.
  - O terceiro deve ser uma caixa de texto que só aceita números.
  - Deve haver um botão para acionar o filtro

A combinação desses três seletores deve filtrar os dados da tabela de acordo com a coluna correspondente e com os valores escolhidos. Por exemplo:
  - A seleção `population | maior que | 100000` - Seleciona somente planetas com mais de 100000 habitantes.
  - A seleção `diameter | menor que | 8000` - Seleciona somente planetas com diâmetro menor que 8000.


```
- Renderiza o filtro de coluna
- Renderiza o filtro de comparação
- Renderiza o campo para o valor do filtro
- Renderiza o botão para executar a filtragem
```

### 4 - Não utilize filtros repetidos

Caso um filtro seja totalmente preenchido, um novo filtro de valores numéricos deve ser carregado. Este novo filtro não deve incluir quaisquer colunas que já tenham sido selecionadas em filtros de valores numéricos anteriores. Caso todas as colunas já tenham sido inclusas em filtros anteriores, não deve ser carregado um novo filtro.

Por exemplo: O primeiro filtro tem as seguintes seleções: `population | maior que | 100000`. Um segundo filtro deve aparecer após essas seleções serem todas feitas e, no primeiro dropdown deste segundo filtro, a opção `population` deve estar ausente. 

---

Projeto da Trybe realizado por Ana Luisa ( Eu :D ).
