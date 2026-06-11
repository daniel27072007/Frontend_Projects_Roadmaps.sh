import React, {useContext} from 'react'
import { CardContext } from '../Context/CardContext';
import { AtualCardContext } from '../Context/AtualCard';

const Card = () => {
    const Perguntas = [
        'O que é o escopo de uma variável em JavaScript?',
        'Qual a diferença entre let e var?',
        'O que significa Hoisting em JavaScript?',
        'O que é uma Closure (fechamento)?',
        'Qual a diferença entre == e ===?',
        'O que é o Event Loop?',
        'O que é uma Promise?',
        'Para que servem as palavras-chave async e await?',
        'O que é o encapsulamento em Programação Orientada a Objetos no JS?',
        'O que faz o método Array.prototype.map()?',
        'Qual a diferença entre map() e forEach()?',
        'O que faz o método Array.prototype.reduce()?',
        'O que é o "Strict Mode" ("use strict")?',
        'O que é Arrow Function e qual sua principal diferença para uma função comum?',
        'O que significa o termo "Imutabilidade"?',
        'O que é Destructuring (desestruturação)?',
        'Para que serve o Operador Spread (...)?',
        'O que é o DOM (Document Object Model)?',
        'O que é Event Bubbling (propagação de evento)?',
        'Qual a diferença entre null e undefined?',
        'Voce fez todos os FlashCards!!!'
    ];
    const Respostas = [
  'É a região do código onde a variável é acessível (Global, Função ou Bloco).',
  'let tem escopo de bloco; var tem escopo de função e sofre hoisting.',
  'É o comportamento onde declarações de variáveis e funções são movidas para o topo do seu escopo antes da execução.',
  'É uma função que se "lembra" do seu escopo léxico, mesmo quando executada fora dele.',
  '== compara apenas o valor (faz coerção de tipo); === compara o valor e o tipo.',
  'Mecanismo que gerencia a execução de código assíncrono, enviando callbacks da fila para a pilha de execução (Call Stack).',
  'Um objeto que representa o sucesso ou a falha eventual de uma operação assíncrona.',
  'Servem para trabalhar com código assíncrono de forma baseada em Promises, mas com sintaxe que parece síncrona.',
  'É a ocultação de dados internos de um objeto, expondo apenas métodos públicos (usando # para propriedades privadas).',
  'Cria um novo array com os resultados da aplicação de uma função em cada elemento do array original.',
  'map retorna um novo array; forEach apenas executa uma função para cada elemento e retorna undefined.',
  'Executa uma função redutora em cada elemento, resultando em um único valor de retorno.',
  'Um modo que torna o JS mais rigoroso, transformando erros silenciosos em erros explícitos.',
  'É uma sintaxe curta de função que não possui seu próprio this (ela herda o this do escopo exterior).',
  'É o princípio de não modificar um dado existente, mas sim criar uma nova cópia com as alterações necessárias.',
  'Uma sintaxe que permite extrair dados de arrays ou objetos em variáveis distintas de forma rápida.',
  'Serve para expandir elementos de um iterável (como array ou objeto) em locais onde múltiplos elementos são esperados.',
  'Uma interface de programação que representa o documento HTML como uma estrutura de árvore, permitindo que o JS modifique a página.',
  'É o processo onde um evento disparado em um elemento flutua (propaga) para cima na árvore do DOM através de seus ancestrais.',
  'null indica a ausência intencional de um valor; undefined indica que uma variável foi declarada, mas nenhum valor foi atribuído.'
    ];
    const {EsconderResposta} = useContext(CardContext);
    const {AtualCard} = useContext(AtualCardContext);

    return (
        <div className='card'>
            {EsconderResposta ? (<p className="pergunta"><b>{Perguntas[AtualCard]}</b></p>) : (<p className="resposta"><b>{Respostas[AtualCard]}</b></p>)}   
        </div>
    )
}

export default Card