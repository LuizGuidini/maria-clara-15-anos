// pages/index.js
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const Countdown = dynamic(() => import("../components/Countdown"), { ssr: false });

export default function Home() {
  return (
    <div>
      <Navbar />
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1 style={{ fontFamily: "'Great Vibes', cursive", fontSize: "3rem" }}>
          15 anos da Maria Clara
        </h1>
        <h3>Você é nosso convidado!</h3>

        <Countdown />

        {/* Botão de confirmação de presença */}
        <div style={{ marginTop: "25px" }}>
          <Link
            href={process.env.NEXT_PUBLIC_CONFIRM_URL || "https://confirmarpresenca.com/e/jqw75jkd"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              style={{
                backgroundColor: "var(--amarelo-terra)",
                color: "var(--preto)",
                border: "none",
                padding: "14px 22px",
                borderRadius: "8px",
                fontWeight: "bold",
                fontSize: "18px",
                cursor: "pointer",
                boxShadow: "2px 2px 6px rgba(0,0,0,0.2)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              Ainda não Confirmou Presença ...  Confirme aqui 🎉
            </button>
          </Link>
        </div>
      </div>

      <div style={{ maxWidth: "800px", margin: "20px auto", textAlign: "center" }}>
        <Image
          src="/FotoPrincipal.jpeg"
          alt="Festa de 15 anos"
          width={400}
          height={480}
          style={{ borderRadius: "12px", objectFit: "cover" }}
          priority
        />
      </div>
    </div>
  );
}
