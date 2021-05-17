import { ref, onMounted } from "vue";
import { findTopics } from '../services/topics';

export const useTopics = (query) => {
  const topics = ref([]);

  onMounted(async () => {
    topics.value = await findTopics(query);
  });

  return topics;
};
