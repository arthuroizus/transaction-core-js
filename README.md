# Motor de Processamento de Dados - Fintech VIP 🚀

Este projeto é um motor de processamento de dados construído em JavaScript puro para consumir, filtrar e transformar informações aninhadas de uma API financeira simulada.

## 🎯 O Desafio
Consumir uma API de transações, isolar apenas os clientes do plano "premium" com status "concluída", e reestruturar os dados originais de forma imutável, extraindo variáveis internas e injetando novas flags de alerta para consumo em interfaces de front-end.

## 🗄️ Base de Dados (Mock)
Os dados simulados da API que alimentam a lógica deste motor podem ser consultados no arquivo `transacoes.json`. A lista inclui diferentes cenários de clientes, planos e status de pagamento para validar a eficácia do filtro.

## 🛠️ Conceitos e Tecnologias Aplicadas
- **Assincronicidade:** Controle de fluxo com `async/await`, consumo de APIs com `fetch` e tratamento de erros com `try/catch`.
- **Manipulação de Arrays:** Lógica de negócios aplicada com `.filter()` e `.map()`.
- **JavaScript Moderno (ES6+):** Arrow functions, Desestruturação de Objetos e Operador Spread (`...`) para garantir a imutabilidade dos dados originais.

## 💻 Como executar
Basta clonar o repositório e rodar o arquivo principal no terminal utilizando o Node.js:
```bash
node aprendizagem.js
