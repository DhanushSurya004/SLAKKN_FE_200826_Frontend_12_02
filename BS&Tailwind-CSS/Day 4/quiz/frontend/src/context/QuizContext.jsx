import { createContext, useContext, useState } from 'react';
const QuizContext = createContext();
export function QuizProvider({ children }) {
  const [playerName, setPlayerName] = useState(''); const [result, setResult] = useState(null);
  return <QuizContext.Provider value={{ playerName, setPlayerName, result, setResult }}>{children}</QuizContext.Provider>;
}
export const useQuiz = () => useContext(QuizContext);
