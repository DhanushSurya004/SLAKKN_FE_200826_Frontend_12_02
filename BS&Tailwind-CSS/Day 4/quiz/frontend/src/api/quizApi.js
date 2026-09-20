import axios from 'axios';
const api = axios.create({ baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080/api' });
export const getTopics = () => api.get('/topics').then(r => r.data);
export const getQuizQuestions = topicId => api.get(`/quiz/questions/${topicId}`).then(r => r.data);
export const submitQuiz = data => api.post('/quiz/submit', data).then(r => r.data);
export const getLeaderboard = () => api.get('/leaderboard').then(r => r.data);
export const getTopicLeaderboard = topicId => api.get(`/leaderboard/topic/${topicId}`).then(r => r.data);
