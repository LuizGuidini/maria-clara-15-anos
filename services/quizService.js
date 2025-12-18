// services/quizService.js
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export async function salvarResultadoQuiz(nome, score, totalPerguntas) {
  await addDoc(collection(db, "resultadosQuiz"), {
    nome,
    score,
    totalPerguntas,
    data: new Date().toISOString(),
  });
}