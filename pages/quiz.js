import { useState } from "react";
import Navbar from "../components/Navbar";
import { salvarResultadoQuiz } from "../services/quizService"; // importa a função que você criou

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function Quiz() {
  const todasPerguntas = [
    { q: "Qual a cor favorita da Maria Clara?", options: ["Rosa", "Preto", "Verde"], answer: 1 },
    { q: "Qual animal ela mais gosta?", options: ["Cachorro", "Gato", "Coelho"], answer: 2 },
    { q: "Qual comida preferida?", options: ["Pizza", "Hambúrguer", "Sushi"], answer: 2 },
    { q: "Qual cidade ela sonha em visitar?", options: ["Paris", "Nova York", "Roma"], answer: 0 },
    { q: "Qual estilo musical ela mais curte?", options: ["Pop", "Rock", "Sertanejo"], answer: 2 },
    { q: "Qual matéria favorita na escola?", options: ["Matemática", "História", "Artes"], answer: 0 },
    { q: "Qual esporte ela gosta?", options: ["Vôlei", "Futebol", "Natação"], answer: 0 },
    { q: "Qual sobremesa preferida?", options: ["Sorvete", "Bolo de chocolate", "Pudim"], answer: 0 },
    { q: "Qual série ela acompanha?", options: ["Friends", "Stranger Things", "Riverdale"], answer: 1 },
    { q: "Qual cantor(a) favorito(a)?", options: ["Taylor Swift", "Anitta", "Justin Bieber"], answer: 2 },
    { q: "Qual a banda nacional favorita?", options: ["Legião Urbana", "A banda mais bonita da cidade", "Titãs"], answer: 0 },
    { q: "Qual estação do ano ela prefere?", options: ["Verão", "Inverno", "Primavera"], answer: 2 },
    { q: "Qual hobby ela gosta?", options: ["Desenhar", "Ler", "Dançar"], answer: 2 },
    { q: "Qual bebida favorita?", options: ["Suco de laranja", "Refrigerante", "Chá"], answer: 1 },
    { q: "Qual cor ela não gosta?", options: ["Preto", "Verde", "Rosa"], answer: 2 },
    { q: "Qual filme favorito?", options: ["Gente Grande", "Harry Potter", "Lagoa Azul"], answer: 0 },
    { q: "Qual aplicativo ela mais usa?", options: ["Instagram", "TikTok", "WhatsApp"], answer: 1 },
    { q: "Qual animal de estimação ela gostaria de ter?", options: ["Cachorro", "Gato", "Hamster"], answer: 0 },
    { q: "Qual sabor de pizza ela prefere?", options: ["Calabresa", "Mussarela", "Frango com catupiry"], answer: 0 },
    { q: "Qual cor combina com ela?", options: ["Amarelo Terra", "Azul", "Lilás"], answer: 1 },
    { q: "Qual música ela mais canta?", options: ["Baby", "Envolver", "Peaches"], answer: 0 },
    { q: "Qual rede social ela mais usa?", options: ["Facebook", "Instagram", "Twitter"], answer: 1 },
    { q: "Qual doce ela não resiste?", options: ["Brigadeiro", "Beijinho", "Cocada"], answer: 0 },
    { q: "Qual lugar ela mais gosta de ir?", options: ["Praia", "Montanha", "Parque"], answer: 0 },
    { q: "Qual é o maior sonho dela?", options: ["Viajar o mundo", "Ser médica", "Ter uma família feliz"], answer: 0 },
    { q: "Qual é o apelido carinhoso que ela mais gosta?", options: ["Clara", "Mari", "Ia"], answer: 2 },
  ];

  const [nome, setNome] = useState("");
  const [started, setStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [current, setCurrent] = useState(0);
  const [perguntasSelecionadas, setPerguntasSelecionadas] = useState([]);

  function iniciarQuiz() {
    const sorteadas = shuffle(todasPerguntas).slice(0, 10);
    setPerguntasSelecionadas(sorteadas);
    setStarted(true);
    setScore(0);
    setCurrent(0);
  }

  function checkAnswer(i) {
    if (i === perguntasSelecionadas[current].answer) setScore((s) => s + 1);
    setCurrent((c) => c + 1);
  }

  async function salvarResultado() {
    try {
      await salvarResultadoQuiz(nome, score, perguntasSelecionadas.length);
      alert("Resultado salvo com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar resultado:", error);
      alert("Erro ao salvar resultado. Tente novamente.");
    }
  }

  return (
    <div>
      <Navbar />
      <div className="quiz-container" style={{ textAlign: "center", padding: "20px" }}>
        {!started ? (
          <div>
            <h2>Digite seu nome para começar:</h2>
            <input
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              style={{ padding: "8px", margin: "10px", borderRadius: "5px" }}
            />
            <button onClick={iniciarQuiz} disabled={!nome}>Iniciar Quiz</button>
          </div>
        ) : current < perguntasSelecionadas.length ? (
          <div>
            <p>{perguntasSelecionadas[current].q}</p>
            {perguntasSelecionadas[current].options.map((opt, i) => (
              <button key={i} onClick={() => checkAnswer(i)}>{opt}</button>
            ))}
          </div>
        ) : (
          <div>
            <h3>Parabéns {nome}, você fez {score} pontos!</h3>
            <button onClick={salvarResultado}>Salvar Resultado</button>
          </div>
        )}
      </div>
    </div>
  );
}
