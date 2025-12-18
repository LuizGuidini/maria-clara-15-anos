import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Galeria() {
  // Aqui você pode colocar as fotos da Maria Clara dentro da pasta /public
  const fotos = [
    { src: "/f1.jpg", alt: "Maria Clara Formanda" },
    { src: "/f2.jpg", alt: "Maria Clara sorrindo" },
    { src: "/f3.jpg", alt: "Maria Clara retiro Jovem" },
    { src: "/f4.jpg", alt: "Maria Clara nos bastidores" },
    { src: "/f5.jpg", alt: "Maria Clara concentrada" },
    { src: "/f6.jpg", alt: "Maria Clara, Mamãe e Papai" },
    { src: "/f7.jpg", alt: "Maria Clara dando Show" },
    { src: "/f8.jpg", alt: "Maria Clara onde Ama" },
    { src: "/f9.jpg", alt: "Maria Clara em festa" },
    { src: "/f10.jpg", alt: "Maria Clara comemorando" },
    { src: "/f11.jpg", alt: "Maria Clara Olimpiadas da Escola" },
    { src: "/f12.jpg", alt: "Maria Clara UAUUUUU" },
    { src: "/f13.jpg", alt: "Maria Clara divertida" },
    { src: "/f14.jpg", alt: "Maria Clara espontânea" },
    { src: "/f15.jpg", alt: "Maria Clara radiante" },
    { src: "/f16.jpg", alt: "Maria Clara praiana" },
    { src: "/f17.jpg", alt: "Maria Clara encantadora" },
    { src: "/f18.jpg", alt: "Maria Clara em Familia" },

  ];

  return (
    <div>
      <Navbar />
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Galeria de Fotos</h2>
        <div className="galeria-grid">
          {fotos.map((foto, i) => (
            <div key={i} className="galeria-item">
              <Image src={foto.src} alt={foto.alt} width={300} height={200} />
              <p>{foto.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
