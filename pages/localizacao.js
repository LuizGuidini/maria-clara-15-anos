import Navbar from "../components/Navbar";

export default function Localizacao() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <Navbar />
      <h2>Local da Festa</h2>
      <p>Chacara Sanvido (Chacara da Li), MMR-255, Mogi Mirim - SP</p>

      {/* Mapa do Google Maps */}
      <div style={{ marginTop: "20px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.659796136715!2d-46.992727124659346!3d-22.441827079584996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8f79cacfb88e5%3A0x55876cb6c48915b7!2sChacara%20Sanvido%2F%20Chacara%20da%20Li!5e0!3m2!1spt-BR!2sbr!4v1765847098092!5m2!1spt-BR!2sbr"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: "8px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
