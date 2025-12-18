import Navbar from "../components/Navbar";
import { useState, useRef } from "react";

export default function Curiosidades() {
  const lista = [
    { texto: "Ama dançar Balé", icone: "🩰" },
    { texto: "Adora comer chocolate", icone: "🍫" },
    { texto: "Fã de música brasileira e internacional", icone: "🎶" },
    { texto: "Sonha em viajar para Paris", icone: "✈️" },
    { texto: "Curte moda e adora montar looks", icone: "👗" },
    { texto: "No meu fone sempre toca", icone: "🎤", musica: "/musica.mp3" }, // música
    { texto: "Gosta de desenhar e pintar", icone: "🎨" },
    { texto: "Adora séries", icone: "📺" },
    { texto: "Adora festas e comemorações", icone: "🎉" },
  ];

  const dicasPresente = {
    "Tamanho Blusa": "P / PP",
    "Tamanho Calça": "36 / 38",
    "Tamanho Sapato": "38 BR",
    "Cores Preferidas": "Preto, Branco, Azul, Off-White, Vinho",
    "Estilos Preferidos": "Streetwear, Esportivo, Casual",
    "Perfumes": "Egeo Choc (Boticario), Obsessed (Wepink) , Liberte (Wepink), Victoria's Secret, perfumes doces e suaves",
    "Acessórios": "Bolsas, fones sem fio, Brincos delicados, colares minimalistas, aneis [15] (prata)",
  };

  const [modalAberto, setModalAberto] = useState(false);
  const audioRef = useRef(null);

  function playMusica(musica) {
    if (audioRef.current) {
      audioRef.current.src = musica;
      audioRef.current.play();
    }
  }

  function pauseMusica() {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  }

  return (
    <div>
      <Navbar />
      <div style={{ padding: "30px", textAlign: "center" }}>
        <h2 style={{ color: "var(--marrom)", marginBottom: "20px" }}>
          🌟 Curiosidades sobre Maria Clara 🌟
        </h2>

        {/* Grid de curiosidades com ícones */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {lista.map((item, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#fff8e7",
                color: "#333",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "2px 2px 8px rgba(0,0,0,0.15)",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "10px" }}>
                {item.icone}
              </div>
              <p style={{ margin: 0, fontWeight: "bold" }}>{item.texto}</p>

              {/* Se tiver música, mostra botões */}
              {item.musica && (
                <div style={{ marginTop: "10px" }}>
                  <button
                    onClick={() => playMusica(item.musica)}
                    style={{
                      marginRight: "10px",
                      padding: "6px 12px",
                      borderRadius: "6px",
                      backgroundColor: "var(--amarelo-terra)",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    ▶ Play
                  </button>
                  <button
                    onClick={pauseMusica}
                    style={{
                      padding: "6px 12px",
                      borderRadius: "6px",
                      backgroundColor: "#ccc",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    ⏸ Pause
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Player invisível */}
        <audio ref={audioRef} />

        {/* Avatar que abre modal */}
        <div style={{ marginTop: "40px" }}>
          <img
            src="/avatar.png"
            alt="Avatar Maria Clara"
            onClick={() => setModalAberto(true)}
            style={{
              width: "180px",
              height: "300px",
              cursor: "pointer",
              borderRadius: "12px",
            }}
          />
          <p style={{ marginTop: "10px", color: "var(--marrom)" }}>
            Clique no avatar para ver dicas de presente 🎁
          </p>
        </div>

        {/* Modal com dicas */}
        {modalAberto && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
            onClick={() => setModalAberto(false)}
          >
            <div
              style={{
                backgroundColor: "#fff",
                padding: "25px",
                borderRadius: "12px",
                maxWidth: "400px",
                textAlign: "left",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 style={{ color: "var(--marrom)" }}>🎁 Dicas de Presente</h3>
              <ul style={{ paddingLeft: "20px" }}>
                {Object.entries(dicasPresente).map(([chave, valor], i) => (
                  <li key={i}>
                    <strong>{chave}:</strong> {valor}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setModalAberto(false)}
                style={{
                  marginTop: "15px",
                  padding: "10px 15px",
                  borderRadius: "8px",
                  backgroundColor: "var(--amarelo-terra)",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Fechar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
