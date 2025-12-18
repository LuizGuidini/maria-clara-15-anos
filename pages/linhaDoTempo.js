import Navbar from "../components/Navbar";
import styles from "../styles/LinhaDoTempo.module.css";
import Image from "next/image";

export default function LinhaDoTempo() {
  const eventos = [
  { 
    ano: "Janeiro de 2011", 
    titulo: "Nascimento", 
    descricao: "Maria Clara nasceu trazendo alegria para toda a família.", 
    foto: "/f26.jpg" // primeira foto
  },
  { ano: "Dezembro de 2011", titulo: "Primeiros Passos", descricao: "Começou a andar e explorar o mundo ao seu redor." },
  { ano: "Fevereiro de 2012", titulo: "Primeira Escola", descricao: "Ingressou na escola e fez seus primeiros amigos." },
  { ano: "Julho de 2014", titulo: "Descobertas", descricao: "Mostrou interesse por música, dança e artes." },
  { ano: "Dezembro de 2015", titulo: "Novas Aventuras", descricao: "Participou de sua primeira apresentação." },
  { ano: "2017", titulo: "Crescimento", descricao: "Desenvolveu habilidades em esportes e atividades extracurriculares." },
  { ano: "2018", titulo: "Amizades", descricao: "Fez amizades duradouras e participou de várias atividades escolares." },
  { ano: "2020", titulo: "Novos Sonhos", descricao: "Estava em casa mas os sonhos continuavam." },
  { ano: "2021", titulo: "Perdas e Adaptação", descricao: "O coração sofreu, mas ganhou dois novos santos para interceder por ela." },
  { ano: "2021", titulo: "Retorno às Aulas", descricao: "Voltou às aulas presenciais e reencontrou os amigos." },    
  { ano: "2022", titulo: "Preparação para o Futuro", descricao: "Começou a pensar sobre o futuro e suas aspirações, nova escola." },
  { ano: "2024", titulo: "Crescimento Pessoal", descricao: "Desenvolveu mais independência e autoconfiança." },
  { ano: "2025", titulo: "Preparativos", descricao: "A família e amigos se reuniram para organizar a grande celebração." },
  { 
    ano: "2026", 
    titulo: "15 anos", 
    descricao: "Chegou o tão esperado dia da festa de 15 anos 🎉.", 
    foto: "/f9.jpg" // última foto
  },
];


  return (
    <div className={styles.container}>
      <Navbar />
      <h2 className={styles.titulo}>Linha do Tempo da Maria Clara</h2>
      <div className={styles.timeline}>
        {eventos.map((evento, i) => (
          <div key={i} className={styles.evento}>
            <div className={styles.bolinha}></div>
            <div className={styles.conteudo}>
              <h3>{evento.ano} - {evento.titulo}</h3>
              <p>{evento.descricao}</p>
              {evento.foto && (
              <div style={{ textAlign: "center" }}>
                <Image
                  src={evento.foto}
                  alt={evento.titulo}
                  width={150}
                  height={200}
                  className={styles.foto}
                />
              </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
