const Aluno = require('./models/Aluno');
const TurmaPresencial = require('./models/TurmaPresencial');

const aluno = new Aluno('João Pedro', 'joao_pedro123', '2313600');

const turmaPresencial = new TurmaPresencial('AS64B', 5, 85);

console.log(`Aluno: ${aluno.nome}, RA: ${aluno.ra}`);
console.log(`Turma: ${turmaPresencial.codigo}, Nota: ${turmaPresencial.nota}, Frequência: ${turmaPresencial.frequencia}`);
console.log(`Aprovado: ${turmaPresencial.aprovado() ? 'Sim' : 'Não'}`);
