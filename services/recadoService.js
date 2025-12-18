// services/recadoService.js
import { collection, addDoc, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebaseConfig";

// Salvar recado
export async function salvarRecado(nome, mensagem) {
  const ref = await addDoc(collection(db, "recados"), {
    nome,
    mensagem,
    data: new Date().toISOString(),
  });
  return ref.id;
}

// Listar recados
export async function listarRecados() {
  const q = query(collection(db, "recados"), orderBy("data", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}
