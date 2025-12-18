import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { salvarRecado, listarRecados } from "../services/recadoService";

export default function Recados() {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [recados, setRecados] = useState([]);

  // Carregar recados ao abrir a página
  useEffect(() => {
    async function carregar() {
      const dados = await listarRecados();
      setRecados(dados);
    }
    carregar();
  }, []);

  async function adicionarRecado() {
    if (!nome || !mensagem) return;
    try {
      await salvarRecado(nome, mensagem);
      const dados = await listarRecados(); // recarrega lista do Firestore
      setRecados(dados);
      setNome("");
      setMensagem("");
    } catch (error) {
      alert("Erro ao salvar recado. Veja o console.");
      console.error(error);
    }
  }

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <Navbar />
      <h2 style={{ color: "#5D4037" }}>Deixe seu recado para Maria Clara</h2>

      {/* Formulário */}
      <div style={{ margin: "20px auto", maxWidth: "500px" }}>
        <input
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "6px" }}
        />
        <textarea
          placeholder="Escreva sua mensagem..."
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "6px", minHeight: "80px" }}
        />
        <button onClick={adicionarRecado}>Enviar Recado</button>
      </div>

      {/* Lista de recados */}
      <div style={{ marginTop: "30px", maxWidth: "600px", marginInline: "auto" }}>
        {recados.length === 0 ? (
          <p style={{ color: "#5D4037" }}>Nenhum recado ainda. Seja o primeiro!</p>
        ) : (
          recados.map((r) => (
            <div
              key={r.id}
              style={{
                backgroundColor: "#c2b696",
                padding: "15px",
                borderRadius: "8px",
                marginBottom: "15px",
                boxShadow: "2px 2px 6px rgba(0,0,0,0.2)",
                textAlign: "left"
              }}
            >
              <strong>{r.nome}</strong>{" "}
              <span style={{ fontSize: "12px", color: "#333" }}>
                ({new Date(r.data).toLocaleString("pt-BR")})
              </span>
              <p style={{ marginTop: "8px" }}>{r.mensagem}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
